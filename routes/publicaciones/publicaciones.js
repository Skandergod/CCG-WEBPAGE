var express = require('express');
var router = express.Router();
var roster = require('../roster.json');
var publications = require('../publicaciones/publicaciones.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log(publications);
	res.render('publicaciones', {publicaciones: 1, publication: publications.publicaciones[0] ,roster: roster.integrantes});
});

module.exports = router;