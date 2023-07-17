// Required Imports
const express = require('express');
const router = express.Router();

// Reviews Controller
const reviewsCtrl = require('../controllers/reviews');

// HTTP Requests
router.post('/listings/:id/reviews', reviewsCtrl.create);

router.delete('/:reviewid/:listingid', reviewsCtrl.delete);

router.put('/:reviewid', reviewsCtrl.update);

module.exports = router;
