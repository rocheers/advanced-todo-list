const mongoose = require('mongoose');
const appConst = require('../constants');

const TodoSchema = new mongoose.Schema({
  text: { type: String, required: true },
  status: { type: String, default: appConst.INCOMPLETED },
  data: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Todo', TodoSchema);