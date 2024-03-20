const express = require('express');
const router = express.Router();
const controller = require("./controller.js");

router.post('/', controller.bookVehicle);

  module.exports = router;