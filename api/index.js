const express = require('express');
const helmet = require('helmet');

const posts = require('./routes/posts');
const db = require('./db');

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(posts);

module.exports = {
    path: '/api',
    handler: app
}