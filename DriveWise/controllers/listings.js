const Listing = require('../models/Listing')

const GetListing = async (req, res) => {
  try {
    const carDetails = await Listing.find({})
    res.send(carDetails)
  } catch (error) {
    throw error
  }
}

const CreateListing = async (req, res) => {
  try {
    const car = await Listing.create({ ...req.body })
    res.send(car)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetListing,
  CreateListing,
}
