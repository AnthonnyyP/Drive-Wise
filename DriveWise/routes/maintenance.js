// Required Imports
const express = require('express');
const router = express.Router();

// Controller
const maintenanceCtrl = require('../controllers/maintenance')

// HTTP Requests
router.get('/maintenance', maintenanceCtrl.GetAllMaintenanceLog)
router.get('/maintenance/listings/:id', maintenanceCtrl.GetSingularMaintenanceLog)
router.post('/maintenance/listings/:id', maintenanceCtrl.CreateMaintenanceLog)

module.exports = router;
