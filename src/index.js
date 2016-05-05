const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Todo = require('./todo-model');

mongoose.connect('mongodb://mongo/node');

const app = express();

app.use(bodyParser.json())

app.get('/todo', function (req, res) {
  Todo.find()
    .exec()
    .then(todos => res.send(todos))
    .catch(err => res.send(err));
});

app.post('/todo', function (req, res) {
  const todo = new Todo(req.body);
  todo.save()
    .then(() => res.status(201).end())
    .catch(err => res.status(400).end());
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
