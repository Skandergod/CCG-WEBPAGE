var express = require('express');
var router = express.Router();
var roster = require('./roster.json');


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(roster.integrantes);
  res.render('index', {show: 1, roster: roster.integrantes});
});

module.exports = router;

//https://stackabuse.com/reading-and-writing-json-files-with-node-js/