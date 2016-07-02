const express = require('express');
const router = express.Router();
const Todos = require(__dirname + '/../../db/index').db.todos;
const pgp = require(__dirname + '/../../db/index').pgp;

// get todos for couple by coupleID
router.get('/todos/:id', (req, res, next) => {
  const coupleID = parseInt(req.params.id);
  Todos.findById(coupleID)
    .then(data =>
      res.status(200)
        .json(data))
        .catch(err => next(err));
});  

// Add new todo and return newly added todo
router.post('/todos/addTodo', (req, res, next) => {
  const newTodo = req.body;
  Todos.add(newTodo)
    .then(data => 
      res.status(201)
        .json(data))
        .catch(err => next(err));
});

// Delete single todo
router.delete('/todos/deleteTodo/:id', (req, res, next) => {
  const todoID = parseInt(req.params.id);
  Todos.remove(todoID)
    .then(data => 
      res.status(200)
        .json(data))
        .catch(err => next(err));
});

module.exports = router;
