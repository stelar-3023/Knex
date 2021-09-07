var express = require("express");
var bodyParser = require("body-parser");
var port = process.env.PORT || 8001;
var cors = require("cors");
var logger = require("morgan");
var knex = require("./db/knex");

var index = require("./routes/indexRoutes");
var todos = require("./routes/todosRoutes");

var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", index);
app.use("/todos", todos);

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// app.get("/todos", function (req, res) {
//   knex.raw("SELECT * FROM todos where id = 1").then(function (todo) {
//     res.send(todo.rows);
//   });
// });

app.listen(port, function () {
  console.log("Server listening on port: ", port);
});
