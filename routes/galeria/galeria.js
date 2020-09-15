var express = require('express');
var router = express.Router();
var roster = require('../roster.json');
var publications = require('./galeria.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
	//console.log(publications.publicaciones);
	res.render('galeria', {galeria: 1, list: publications.album, roster: roster.integrantes});
});

 // TODO: Mejorar búsqueda, actualmzente O(n)
function lookForPublication(titulo){
	
	for(var i = 0; i < publications.publicaciones.length; i++){
		
		if(publications.publicaciones[i].titulo == titulo){
			return publications.publicaciones[i];
		}
	}

	return false;
}

module.exports = router;