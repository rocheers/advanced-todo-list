const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());

const PORT = process.env.PORT || 3001;

const todos = [
    { id: 1, name: 'todo1' },
    { id: 2, name: 'todo2' },
    { id: 3, name: 'todo3' },
];

app.get('/api/todos', (req, res) => {
    res.send(todos);
});

app.post('/api/todos', (req, res) => {
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

app.delete('/api/todos/:id', (req, res) => {
    const todo = todos.find( c => c.id === parseInt(req.params.id));
    if (!todo) { return res.status(404).send('todo not found')};

    const index = todos.indexOf(todo);
    todos.splice(index, 1);

    res.send(todo);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));