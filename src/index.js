const express = require('express');
const mongoose = require('mongoose');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb://localhost:27017/goweek', { useNewUrlParser: true });

app.use((req, res, next) => {
    req.io = io;

    return next();
})

app.use(express.json());
app.use(require('./routes'));
app.user(cors());

server.listen('3001', () => {
    console.log('Server started on port 3001');
});