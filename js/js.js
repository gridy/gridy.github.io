/*****Variables generales******/

var numerocolumnas = 0;
var tipocontenido = 0;
var cantidadelementos = 0;

/*****************************/

function creategrid(){
	numerocolumnas = document.getElementById("ncol").value;
	tipocontenido = document.getElementById("tcont").value;
	cantidadelementos = document.getElementById("nelement").value;
}