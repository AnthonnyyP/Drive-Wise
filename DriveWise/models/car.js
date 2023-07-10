const mongoose = require ('mongoose')

const Schema = mongoose.Schema

const carSchema = 
  new Schema(
    {
      price: {
        type: String,
        required: true
      },
      make: {
        type: String,
        required: true
      },
      model:{
        type: String,
        required: true
      },
      category: {
        type: String,
        required: true,
      }
    }
  )

  module.exports = mongoose.model('Car', carSchema)