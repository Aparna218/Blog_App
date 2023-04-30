const mongoose = require('mongoose')

const blogModel = new mongoose.Schema(
  {
    
    name: {
      type: String,
      require: true,
      trim: true
    },
    description: {
        type: String,
        require: true,
        trim: true
    },
    category: {
      type: String,
      require: true

    },
    information:{
        type:String
    }
}, { timestamps: true })


module.exports = mongoose.model('blog', blogModel)