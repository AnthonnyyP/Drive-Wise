const Maintenance = require('../models/Maintenance')
const Listing = require('../models/Listing')

const GetAllMaintenanceLog = async (req, res) => {
  try {
    const maintenanceLog = await Maintenance.find({})
    return res.status(201).json(maintenanceLog)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const GetSingularMaintenanceLog = async (req, res) => {
  try {
    const listingMaintenanceLog = await Listing.findById(req.params.id)
    return res.status(201).json(listingMaintenanceLog)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const CreateMaintenanceLog = async (req, res) => {
  try {
    const currentListing = await Listing.findById(req.params.id)
    const maintenanceLog = await Maintenance.create({ ...req.body })
    await currentListing.maintenance.push(maintenanceLog.id)
    await currentListing.save()
    return res.status(201).json(maintenanceLog)
  } catch (err) {
    return res.status(500).json(err)
  }
}

module.exports = {
  GetAllMaintenanceLog,
  GetSingularMaintenanceLog,
  CreateMaintenanceLog
}
