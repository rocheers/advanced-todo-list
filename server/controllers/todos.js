const Todo = require('../models/Todo');
const appConst = require('../constants/');

async function createTodo(inputText) {
  const todo = new Todo({
      text: inputText,
      status: appConst.UNCOMPLETED
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
  todo.status = todo.status === appConst.UNCOMPLETED ? appConst.COMPLETED : appConst.UNCOMPLETED;
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