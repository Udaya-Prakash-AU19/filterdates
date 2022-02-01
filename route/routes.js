const express = require('express');
const router = express.Router();
const controllers = require('../controller/controller.js')

router.route('/')
.get(controllers.getProfile)
.post(controllers.createProfile)

module.exports = router