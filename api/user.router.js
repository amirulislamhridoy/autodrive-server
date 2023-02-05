const express = require('express')
const { userContoler } = require('../contollers/user.contoler')
const router = express.Router()

router.get('/user', userContoler)

module.exports = router