const mongoose = require ('mongoose')

const Schema = mongoose.Schema

const listingSchema = new Schema (
    {
      image: {
        type: String,
        required: true
      },
      title:{
        type: String,
        required: true
      },
      detail: {
        type: String,
        required: true
      },
      category:{
        type: String,
        required: true
      },
      price:{
        type: String,
        required: true
      },
    }
  )

  module.exports = mongoose.model('Listing', listingSchema)