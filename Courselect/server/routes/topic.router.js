const express  = require('express');
const router = express.Router();
const topicController = require('../controller/topic.controller');

router.get('/add',topicController.add);
router.get('/getById/:id',topicController.getTopicById);
router.get('/getAll',topicController.getAllTopic);
router.post('/update',topicController.update);
router.get('/delete/:id',topicController.delete);

module.exports = router;
