const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema ({
  title: { type: String, required: true },
  experience: { type: Object, required: true },
  language: { type: Object, required: true },
  requirements: [
    { type: String }
  ],
  description: { type: String, required: true },
  company: { type: String, required: true },
  salary_min: { type: String, required: true },
  salary_max: { type: String, required: true },
  salary_per: { type: String, required: true },
  email: { type: String, required: true },
  slug: { type: String },
  regulations:  { type: String, required: true },
});

module.exports = mongoose.models.Post || mongoose.model('Post', Post);