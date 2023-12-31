const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Maintenance = new Schema(
  {
    mileage: {
      type: Number,
      required: true
    },
    oilchange: {
      type: String,
      required: true
    },
    tirerotation: {
      type: String,
      required: true
    },
    brakes: {
      type: String,
      required: true
    },
    alignment: {
      type: String,
      required: true
    },
    battery: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Maintenance', Maintenance)
