const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`API listening on port ${port}!`);
});
let users = [
  { id: 1, name: 'John', email: 'john@gmail.com' },
  { id: 2, name: 'Jane', email: 'jane@gmail.com' },
  { id: 3, name: 'Bob', email: 'bob@gmail.com' }
];
// GET list of users
app.get('/users', (req, res) => {
  res.send(users);
});

// GET single user by ID
app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users.find(u => u.id === parseInt(id));

  if (!user) {
    res.status(404).send(`User with ID ${id} not found.`);
    return;
  }

  res.send(user);
});

// POST new user
app.post('/users', (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };
  users.push(user);
  res.send(user);
});

// PUT update existing user
app.put('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users.find(u => u.id === parseInt(id));

  if (!user) {
    res.status(404).send(`User with ID ${id} not found.`);
    return;
  }

  user.name = req.body.name;
  user.email = req.body.email;
  res.send(user);
});
let tasks = [
  { id: 1, userId: 1, title: 'Task 1 for John', completed: false },
  { id: 2, userId: 1, title: 'Task 2 for John', completed: true },
  { id: 3, userId: 2, title: 'Task 1 for Jane', completed: false },
  { id: 4, userId: 3, title: 'Task 1 for Bob', completed: false }

