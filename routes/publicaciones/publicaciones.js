var express = require('express');
var router = express.Router();
var roster = require('../roster.json');
var publications = require('../publicaciones/publicaciones.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log(publications);
	res.render('publicaciones', {publicaciones: 1, publication: publications.publicaciones[0] ,roster: roster.integrantes});
});

router.get('/:id', function(req, res, next) {
	var act = lookForPublication(req.params.id);
	console.log (act.parrafos);
	res.render('publicacion', {publicacion: 1, publication: act ,roster: roster.integrantes});
});


 // TODO: Mejorar búsqueda, actualmente O(n)
function lookForPublication(titulo){
	
	for(var i = 0; i < publications.publicaciones.length; i++){
		
		if(publications.publicaciones[i].titulo.toLowerCase() == titulo){
			return publications.publicaciones[i];
		}
	}

	return false;
}

module.exports = router;