//Required Imports
const express = require('express');
const router = express.Router();

// Reviews Controller
const reviewsCtrl = require('../controllers/reviews')

// HTTP Requests
router.post('/listings/:id/reviews', reviewsCtrl.createReview)
router.delete('/listings/:id/reviews', reviewsCtrl.delete)

module.exports = router; 