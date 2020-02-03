const express = require('express');
const router = express.Router();
const auth = require('../controller/userAuthenticate.controller');

router.get('/login', auth.authenticate);

module.exports = router;