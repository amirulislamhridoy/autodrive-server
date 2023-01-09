const express = require('express')
const { getAllService } = require('../contollers/service.contoler')
const router = express.Router()


router.get('/getAll', getAllService)

module.exports = router