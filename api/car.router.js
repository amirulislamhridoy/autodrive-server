const express = require('express')
const { addCar , getAllCar, getCar} = require('../contollers/car.contoler')
const { verifyJWT } = require('../middware/verify.js')
const router = express.Router()

router.post("/add", addCar)
router.get('/getAll', getAllCar)
router.get('/getCar/:id', verifyJWT, getCar)

module.exports = router