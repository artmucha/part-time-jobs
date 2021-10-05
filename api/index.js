const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const posts = require('./routes/posts');
const admin = require('./routes/admin');
const db = require('./db');

const app = express();

// app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());
app.use(posts);
app.use(admin);

module.exports = {
    path: '/api',
    handler: app
}