const express = require('express');
const db = require('./db')
const posts = require('./routes/posts');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(posts);

module.exports = {
    path: '/api',
    handler: app
}