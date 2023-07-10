const mongoose = require('mongoose');
const Schema = mongoose.Schema 

const reviewSchema = new Schema(
  {
    review: {
      type: String, 
      required: true, 
    },
    datePosted: {
      type: Date
    },
    rating: {
      type: Number, 
      min: 1,
      max: 5, 
      default: 5, 
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true, 
    },
    userName: String,
    userAvatar: String,
  },
  {
    timestamps: true
  }
)