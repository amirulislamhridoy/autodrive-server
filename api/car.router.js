const express = require('express')
const { addCar , getAllCar, getCar} = require('../contollers/car.contoler')
const router = express.Router()

router.post("/add", addCar)
router.get('/getAll', getAllCar)
router.get('/getCar/:id', getCar)

module.exports = router