const express = require('express')
const router = express.Router()
const {addBooking, getAllBooking, myCarBooking} = require('../contollers/booking.contoler')
const { verifyJWT } = require('../middware/verify')

router.get('/getAll', verifyJWT,  getAllBooking)
router.get('/myCar', verifyJWT,  myCarBooking)
router.post('/add', verifyJWT,  addBooking)


module.exports = router