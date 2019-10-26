const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  text: String,
  status: String
});

module.exports = mongoose.model('Todo', TodoSchema);