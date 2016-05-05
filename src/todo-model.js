const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: false
  },
  createDate: {
    type: Date,
    default: Date.now
  }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
