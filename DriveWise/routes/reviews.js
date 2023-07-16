// Required Imports
const express = require('express');
const router = express.Router();

// Reviews Controller
const reviewsCtrl = require('../controllers/reviews');

// HTTP Requests
router.post('/listings/:id/user/:userid/reviews', reviewsCtrl.create);

router.delete('/:reviewid', reviewsCtrl.delete);

router.put('/:reviewid', reviewsCtrl.update);

module.exports = router;
