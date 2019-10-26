const express = require('express');
const router = express.Router();
const { createTodo, getTodos, removeTodo } = require('../controllers/todos');

router.get('/', async (req, res) => {
    let todos = await getTodos();
    res.json(todos);
});

router.post('/', (req, res) => {
    if (!req.body.name || req.body.name.length < 3) {
        res.status(400).send('Name is required and should be minimum 3 characters');
        return;
    }
    const todo = {
        id: todos.length + 1,
        name: req.body.name
    };
    todos.push(todo);
    res.send(todo);
});

router.delete('/:id', (req, res) => {
    const todo = todos.find(c => c.id === parseInt(req.params.id));
    if (!todo) { return res.status(404).send('todo not found') };

    const index = todos.indexOf(todo);
    todos.splice(index, 1);

    res.send(todo);
});

module.exports = router;