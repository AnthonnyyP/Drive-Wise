// Required Imports
const express = require('express');
const router = express.Router();

// Controller


// HTTP Requests
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DriveWise' });
});

module.exports = router;
