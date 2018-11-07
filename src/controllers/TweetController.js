const Tweet = require('../models/Tweet');

module.exports = {
    async list(req, res) {
        const tweets = await Tweet.find({}).sort('-createdAt');

        return res.json(tweets);
    },

    async create(req, res) {
        const tweet = await Tweet.create(req.body);

        req.io.emit('tweet', tweet);

        return res.json(tweet)
    },

    async newLike(req, res) {
        const tweet = await Tweet.findById(req.params.id);

        tweet.set({ likes: tweet.likes + 1 });

        await tweet.save();

        req.io.emit('like', tweet);

        return res.json(tweet);
    }
}