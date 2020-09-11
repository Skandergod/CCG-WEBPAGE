var express = require('express');
var router = express.Router();
var roster = require('../roster.json');
var publications = require('../materias/materias.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
	//console.log(publications.publicaciones);
	res.render('materias', {materias: 1, list: publications.publicaciones, act: publications.publicaciones[0], roster: roster.integrantes});
});

router.get('/:id', function(req, res, next) {
	var act = lookForPublication(req.params.id);
	//console.log (act.parrafos);
	//console.log(act);
	res.render('materia', {materia: 1, publication: act, roster: roster.integrantes});
});


 // TODO: Mejorar búsqueda, actualmente O(n)
function lookForPublication(titulo){
	
	for(var i = 0; i < publications.publicaciones.length; i++){
		
		if(publications.publicaciones[i].titulo == titulo){
			return publications.publicaciones[i];
		}
	}

	return false;
}

module.exports = router;