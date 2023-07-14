// Required Imports
const express = require('express');
const router = express.Router();

// Controller
const listingCtrl = require('../controllers/listings')

// HTTP Requests
router.get('/listings', listingCtrl.GetAllListings)
router.get('/listings/:id', listingCtrl.GetOneListing)
router.post('/listings', listingCtrl.CreateListing)

module.exports = router;
