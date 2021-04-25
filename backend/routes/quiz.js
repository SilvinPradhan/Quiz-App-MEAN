const express = require('express');
const router = express.Router();
const { listAll, listSingle, create, submitSingle, remove } = require('../controllers/quiz');

// controllers
// const {create, list, read} = require('../controllers/quiz')
router.post('/new', create);
router.get('/quizzes', listAll);
router.get('/quiz/:id', listSingle);
router.post('/quiz/id', submitSingle);
router.delete('/quiz/:id', remove);

module.exports = router;
