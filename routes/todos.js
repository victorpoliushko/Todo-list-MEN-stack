const { Router } = require('express');
const router = Router();
const Todo = require('../models/Todo');

router.get('/', async (req, res) => {
  const todos = Todo.find({});

  res.render('index', {
    title: 'Todos list',
    isIndex: true,
    todos,
  });
});

router.get('/create', (req, res) => {
  res.render('create', {
    title: 'Create todos',
    isCreate: true,
  });
});

module.exports = router;
