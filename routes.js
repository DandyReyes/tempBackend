const express = require('express');
const user = require('./user.controller');

const router = express.Router();

router.get('/all', user.select);

module.exports = router;
