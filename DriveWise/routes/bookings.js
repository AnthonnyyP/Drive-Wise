// Required Imports
const express = require('express');
const router = express.Router();

// Controller
const listingCtrl = require('../controllers/listings')

// HTTP Requests
router.get('/', listingCtrl.getListing)
router.post('/', listingCtrl.createListing)
router.get('/:listing_id')

module.exports = router;