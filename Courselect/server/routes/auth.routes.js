const express = require('express');
const router = express.Router();
const auth = require('../controller/userAuthenticate.controller');

router.post('/login', auth.authenticate);
router.post('/userAuth', auth.userAuth);

module.exports = router;