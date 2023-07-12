const mongoose = require('mongoose');

const Schema = mongoose.Schema

const Maintenance = new Schema (
  {
    mileage: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },{
    timestamps: true
  }
)

  module.exports = mongoose.model("Maintenance", Maintenance)