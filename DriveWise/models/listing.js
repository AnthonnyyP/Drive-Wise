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
      catgory: {
        type: String,
        r
      }
      price:{
        type: String,
        required: true
      }, 
      reviews: [{ type: Schema.Types.ObjectId, ref: 'Review'}],
      maintenance: [{ type: Schema.Types.ObjectId, ref: 'Maintenance'}],
    }
  )

  module.exports = mongoose.model("Listing", Listing)