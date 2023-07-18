const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
  res.render('index', { title: 'DriveWise' })
})
router.get('/')
router.get('/:id')

module.exports = router
