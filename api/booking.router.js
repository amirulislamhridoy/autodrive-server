const express = require('express')
const router = express.Router()
const {addBooking, getAllBooking} = require('../contollers/booking.contoler')
const { verifyJWT } = require('../middware/verify')

router.get('/getAll', verifyJWT, getAllBooking)
router.post('/add', verifyJWT, addBooking)

module.exports = router