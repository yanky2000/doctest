const express = require('express');
const { connectDb } = require('../helpers/db');
const mongoose = require('mongoose')
const app = express();
const { host, port, db } = require('../config')

const postSchema = new mongoose.Schema({
    name: String
});
const Post = mongoose.model('Post', postSchema);

app.get('/', (req, res) => res.send('start here with express'))
app.get('/test', (req, res) => res.send('hello from express'))

const startServer = () => {
    const post = new Post({ name: 'first post ever!' })
    post.save(function (err, savedPost) {
        if (err) return console.error(err);
        console.log('saved post', savedPost);
        
      });
    app.listen(port, () => {
        console.log(`started server on port:${port}`);
        console.log(`started server on host:${host}`);
        console.log(`Database:${db}`);
    })
}

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .on('open', startServer)



