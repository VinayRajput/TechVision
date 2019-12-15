const express = require("express");
const router = express.Router();
const session = require('../controller/session.controller');

router.get('/add',session.add);
router.get('/getByid',session.getSessionById);
router.get('/getAll',session.getAllSession);
router.post('/update',session.update);
router.delete('/delete',session.delete);

module.exports = router;
