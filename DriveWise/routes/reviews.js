//Required Imports
const express = require('express');
const router = express.Router();

// Reviews Controller
const reviewsCtrl = require('../controllers/reviews')

// HTTP Requests
router.post('/car/:id/reviews', reviewsCtrl.createReview)

router.delete('/cars/:id/reviews', reviewsCtrl.delete)