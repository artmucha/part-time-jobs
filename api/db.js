require('../.env');
const mongoose = require('mongoose');

mongoose.connect(`${DB_USER}:${DB_PASS}@${DB}:${DB_PORT}/${DB_NAME}`, {
    // auth: {
    //   username:`${DB_USER}`,
    //   password: `${DB_PASS}`
    // },
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("MongoDB Connected...");
});

module.exports = db;