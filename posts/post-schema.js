const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  picture: { type: String } // Here I keep the name of img, and later by its name will get it from disk
})

module.exports = mongoose.model('Post', postSchema);
