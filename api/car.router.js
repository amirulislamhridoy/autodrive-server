const express = require('express')
const { addCar , getAllCar} = require('../contollers/car.contoler')
const router = express.Router()

router.post("/add", addCar)
router.get('/getAll', getAllCar)

module.exports = router