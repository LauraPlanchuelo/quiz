
/*
 * GET home page.
 */
var express = require ('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

router.get('/question', quizController.question);
router.get('check', quizController.check);

router.get('/', function(req,res){
	res.render('index');
});

app.get("/question", function(req, res){
	res.send('<html><body>'
		+'<h1>Cuestionario Carlos Alonso Aguilar</h1>'
		+'<form method="get" action="/respuestas"><input type="hidden" name="id" value="1">øQuiÈn descubriÛ AmÈrica?<br><input type="text" name="respuesta" /><input type="submit" value="Comprobar" /></form>'
		+'<form method="get" action="/respuestas"><input type="hidden" name="id" value="2">øCapital de Portugal?<br><input type="text" name="respuesta" /><input type="submit" value="Comprobar" /></form>'
		+'</body></html>');
});

//Envio y proceso de datos

app.get("/check", function(req, res){
	
	var comprobacion = "";
	var respuesta = req.query.respuesta.toString();
	var pregunta = "";
	if(req.query.id=="1"){	
	pregunta= "¿Quien descubrió America?";
		if(respuesta=="Colon"){
			comprobacion=" es correcta";
		}
		else{
			comprobacion=" es incorrecta. <br>La respuesta correcta es Colon";
		}
	}
	if(req.query.id=="2"){
		pregunta= "¿Capital de Portugal?";
		if(respuesta=="Lisboa"){
			comprobacion=" es correcta";
		}
		else{
			comprobacion=" es incorrecta. <br>La respuesta correcta es Lisboa";
		}
	}
	res.send("<html><body>" +pregunta +"<br> Su respuesta " +respuesta +comprobacion +"<br><a href='http://localhost:8000/preguntas' >Volver</a></body></html>");
	
});

module.exports = router;
