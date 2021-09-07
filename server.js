var express = require("express");
var bodyParser = require("body-parser");
var port = process.env.PORT || 8001;
var cors = require("cors");
var knex = require("./db/knex");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
// Get all todos
app.get("/todos", function (req, res) {
  knex
    .select()
    .from("todos")
    .then(function (todos) {
      res.send(todos);
    });
});

app.get("/todos-of-user/:id", function (req, res) {
  knex
    .from("todos")
    .innerJoin("users", "todos.user_id", "users.id")
    // .where("todos.user_id", req.params.id)
    .where(knex.raw("users.id = ?", [req.params.id]))
    .then(function (data) {
      res.send(data);
    }).catch(function (err) {
      console.log(err);
    })
});

// app.get("/todos", function (req, res) {
//   knex.raw("SELECT * FROM todos where id = 1").then(function (todo) {
//     res.send(todo.rows);
//   });
// });
// Get a single todo
app.get("/todos/:id", function (req, res) {
  knex
    .select()
    .from("todos")
    .where("id", req.params.id)
    .then(function (todos) {
      res.send(todos);
    })
    .catch(function (err) {
      res.send(err);
    });
});

// Insert a todo
app.post("/todos", function (req, res) {
  knex("todos")
    .insert({
      title: req.body.title,
      user_id: req.body.user_id,
    })
    .then(function () {
      knex
        .select()
        .from("todos")
        .then(function (todos) {
          res.send(todos);
        });
    });
});

// Update a todo
app.put("/todos/:id", function (req, res) {
  knex("todos")
    .where("id", req.params.id)
    .update({
      title: req.body.title,
      completed: req.body.completed,
    })
    .then(function () {
      knex
        .select()
        .from("todos")
        .then(function (todos) {
          res.send(todos);
        });
    })
    .catch(function (err) {
      console.log(err);
    });
});

//Delete a todo
app.delete("/todos/:id", function (req, res) {
  knex("todos")
    .where("id", req.params.id)
    .del()
    .then(function () {
      knex
        .select()
        .from("todos")
        .then(function (todos) {
          res.send(todos);
        });
    });
});

app.listen(port, function () {
  console.log("Server listening on port: ", port);
});
