const express = require('express')
const router = express.Router()
const {addBooking} = require('../contollers/booking.contoler')
const { verifyJWT } = require('../middware/verify')

router.post('/add', verifyJWT, addBooking)

module.exports = router