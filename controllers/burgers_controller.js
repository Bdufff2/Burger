
// Requiring dependencies
var express = require('express');
var router = express.Router();

// Requiring the "burger" model
var burger = require("../models/burger.js");

// Creating routes
// =====================================================================

// Setup index display with all burgers
router.get("/", function(req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Devour a burger
router.put("/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function (data) {
    devoured: true
  }, condition, function (data) {
    res.redirect('/');
  });
});

// Create a new burger
router.post("/burgers", function(req, res) {
  burger.insertOne([
    "burger_name"
  ], [
      req.body.burger_name
    ], function (data) {
      res.redirect('/');
    });
});



module.exports = router;