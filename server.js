var express = require("express");
var bodyParser = require("body-parser");
var port = process.env.PORT || 8001;
var knex = require("./db/knex");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.get("/todos", function (req, res) {
//   knex.raw("SELECT * FROM todos").then(function (todos) {
//     res.send(todos.rows);
//   });
// });

// app.get("/todos", function (req, res) {
//   knex.raw("SELECT * FROM todos where id = 1").then(function (todo) {
//     res.send(todo.rows);
//   });
// });

app.get("/todos", function (req, res) {
  knex
    .select()
    .from("todos")
    .where("id", 1)
    .then(function (todo) {
      res.send(todo);
    });
});

app.listen(port, function () {
  console.log("Server listening on port: ", port);
});
