const Todo = require('../models/Todo');

async function createTodo() {
  const todo = new Todo({
      text: 'first todo item',
      status: 'incompleted'
  });

  const result = await todo.save();
  return result;
}

async function getTodos() {
  const todos = await Todo.find({});
  return todos;
}

async function removeTodo(id) {
  const result = await Todo.deleteOne({_id: id});
}

module.exports = {
  createTodo,
  getTodos,
  removeTodo
}