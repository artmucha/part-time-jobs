const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema ({
  title: { type: String, required: true },
  experience: { type: String, required: true },
  language: { type: String, required: true },
  requirements: [
    { type: String }
  ],
  description: { type: String, required: true },
  company: { type: String, required: true },
  min_salary: { type: String, required: true },
  max_salary: { type: String, required: true },
  salary_per: { type: String, required: true },
  email: { type: String, required: true },
  slug: { type: String },
  regulations:  { type: String, required: true },
});

module.exports = mongoose.model('Post', Post);