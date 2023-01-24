const express = require('express')
const router = express.Router()
const {addBooking} = require('../contollers/booking.contoler')

router.post('/add', addBooking)

module.exports = router