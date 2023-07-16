// Required Imports
const express = require('express');
const router = express.Router();

// Controller
const maintenanceCtrl = require('../controllers/maintenance')

// HTTP Requests
router.get('/', maintenanceCtrl.GetAllMaintenanceLog)
router.get('/listings/:id', maintenanceCtrl.GetSingularMaintenanceLog)
router.post('/listings/:id', maintenanceCtrl.CreateMaintenanceLog)

module.exports = router;
