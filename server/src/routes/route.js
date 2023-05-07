const mongoose = require('mongoose')

const blogModel = new mongoose.Schema(
  {
    
    title: {
      type: String,
      required: true,
      unique: true
  },
  description: {
      type: String,
      required: true
  },
  picture: {
      type: String,
      required: false
  },
  username: {
      type: String,
      required: true
  },
  categories: {
      type: Array,
      required: false   
  },
  createdDate: {
      type: Date
  }
}, { timestamps: true })


module.exports = mongoose.model('blog', blogModel)