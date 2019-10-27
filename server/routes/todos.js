const express = require('express');
const router = express.Router();
const { createTodo, getTodos, removeTodo, updateTodo} = require('../controllers/todos');

router.get('/', async (req, res) => {
    let todos = await getTodos();
    res.json(todos);
});

router.post('/', async (req, res) => {
    if (!req.body.inputText) {
        res.status(400).json({message: 'inputText is required'});
        return;
    }
    let todo = await createTodo(req.body.inputText);
    res.json(todo);
   
});

router.put('/:id', async (req, res) => {
    await updateTodo(req.params.id);
    let todos = await getTodos();
    res.json(todos);
});

router.delete('/:id', (req, res) => {
    const todo = todos.find(c => c.id === parseInt(req.params.id));
    if (!todo) { return res.status(404).send('todo not found') };

    const index = todos.indexOf(todo);
    todos.splice(index, 1);

    res.send(todo);
});

module.exports = router;