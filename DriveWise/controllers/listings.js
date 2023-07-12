const Listing = require('../models/Listing')
const Maintenance = require('../models/Maintenance')

const GetAllListings = async (req, res) => {
  try {
    const carDetails = await Listing.find({})
    return res.status(201).json(carDetails)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const GetOneListing = async (req, res) => {
  try {
    const carDetail = await Listing.findById(req.params.id).populate("maintenance")
    return res.status(201).json(carDetail)
  } catch (err) {
    return res.status(500).json(err)
  }
}

// For testing purposes: 
const CreateListing = async (req, res) => {
  try {
    const car = await Listing.create({ ...req.body })
    return res.status(201).json(car)
  } catch (err) {
    return res.status(500).json(err)
  }
}

module.exports = {
  GetAllListings,
  GetOneListing,
  CreateListing,
}
