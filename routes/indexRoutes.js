var express = require("express");
var app = express();
var knex = require("../db/knex");

/* GET home page. */
app.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;