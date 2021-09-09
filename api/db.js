const mongoose = require('mongoose');

mongoose.connect(`${process.env.DB}:${process.env.DB_PORT}/part-time-jobs`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("MongoDB Connected...");
});

module.exports = db;