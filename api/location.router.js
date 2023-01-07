const express = require('express')
const router = express.Router()
const { getAllLocation } = require("../contollers/location.contoler");

router.get('/getAll', getAllLocation)

module.exports = router