const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    review: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    }
  },
  {
    timestamp: true
  }
)

module.exports = mongoose.model('Review', reviewSchema)
