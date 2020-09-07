var express = require('express');
var router = express.Router();
var roster = require('./roster.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('publicaciones', {publicaciones: 1, roster: roster.integrantes});
});

module.exports = router;