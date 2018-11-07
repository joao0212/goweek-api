const express = require('express');

const router = express.Router();

const TweetController = require('./controllers/TweetController');

router.get('/tweet', TweetController.list);
router.post('/tweet', TweetController.create);
router.put('/tweet/likes/:id', TweetController.newLike);

module.exports = router;