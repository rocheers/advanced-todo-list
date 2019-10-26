const Todo = require('../models/Todo');

async function createTodo(inputText) {
  const todo = new Todo({
      text: inputText,
      status: 'incompleted'
  });

  const result = await todo.save();
  return result;
}

async function getTodos() {
  const todos = await Todo.find({});
  return todos;
}

async function updateTodo(id) {
  const todo = await Todo.findById(id);
  if (!todo) return;
  todo.status = todo.status === 'incompleted' ? 'completed' : 'incompleted';
  const result = await todo.save();
  return result;
}

async function removeTodo(id) {
  const result = await Todo.deleteOne({_id: id});
}

module.exports = {
  createTodo,
  getTodos,
  removeTodo,
  updateTodo
}