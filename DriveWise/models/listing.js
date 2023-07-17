const mongoose = require ('mongoose')

const Schema = mongoose.Schema

const Listing = new Schema (
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
      shortdescription:{
        type: String,
        required: true
      },
      longdescription: {
        type: String,
        required: true
      },
      category: {
        type: String,
        required: true,
      },
      price:{
        type: String,
        required: true
      }, 
      reviews: [{ type: Schema.Types.ObjectId, ref: 'Review'}],
      maintenance: [{ type: Schema.Types.ObjectId, ref: 'Maintenance'}],
    }
  )

  module.exports = mongoose.model("Listing", Listing)