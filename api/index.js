const express = require('express');
const cors = require('cors');

const posts = require('./routes/posts');
const db = require('./db');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(posts);

module.exports = {
    path: '/api',
    handler: app
}