// Required Imports
const express = require('express')
const router = express.Router()

// Controller
const listingCtrl = require('../controllers/listings')

// HTTP Requests
router.get('/', listingCtrl.GetAllListings)
router.get('/:id', listingCtrl.GetOneListing)
router.post('/', listingCtrl.CreateListing)

module.exports = router
