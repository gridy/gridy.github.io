/*****Variables generales******/

var numerocolumnas = 0;
var tipocontenido = 0;
var cantidadelementos = 0;
var newgrid = "";
var text1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a tellus elit. In sodales, mauris vel pellentesque ultricies, enim magna gravida libero, fringilla accumsan lorem enim congue ex. Sed non nunc purus. Nullam varius consectetur nulla id tincidunt. Duis fermentum pretium pharetra. Suspendisse vitae quam molestie, maximus tortor eu, porta sem. Aenean pellentesque, quam ac elementum rutrum, ligula tortor facilisis sem, imperdiet mollis diam nisi a sapien. Curabitur finibus efficitur dui, quis auctor risus gravida id. Phasellus ut nulla et tortor mollis tristique. Pellentesque eros nisl, euismod vel lectus nec, accumsan porta sem. Praesent feugiat neque dui, a tempus lorem vestibulum et. Sed pulvinar felis sit amet molestie interdum. In luctus quis lorem sit amet tincidunt. Nunc aliquet congue lectus vitae posuere. Duis eleifend pulvinar tempus.";
var text2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a tellus elit. In sodales, mauris vel pellentesque ultricies, enim magna gravida libero, fringilla accumsan lorem enim congue ex. Sed non nunc purus. Nullam varius consectetur nulla id tincidunt. Duis fermentum pretium pharetra. Suspendisse vitae quam molestie, maximus tortor eu, porta sem. Aenean pellentesque, quam ac elementum rutrum, ligula tortor facilisis sem, imperdiet mollis diam nisi a sapien";
var text3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a tellus elit. In sodales, mauris vel pellentesque ultricies, enim magna gravida libero, fringilla accumsan lorem enim congue ex. Sed non nunc purus. Nullam varius consectetur nulla id tincidunt. Duis fermentum pretium pharetra. Suspendisse vitae quam molestie, maximus tortor eu, porta sem. Aenean pellentesque, quam ac elementum rutrum, ligula tortor facilisis sem, imperdiet mollis diam nisi a sapien. Curabitur finibus efficitur dui, quis auctor risus gravida id. Phasellus ut nulla et tortor mollis tristique. Pellentesque eros nisl, euismod vel lectus nec, accumsan porta sem. Praesent feugiat neque dui, a tempus lorem vestibulum et. Sed pulvinar felis sit amet molestie interdum. In luctus quis lorem sit amet tincidunt. Nunc aliquet congue lectus vitae posuere. Duis eleifend pulvinar tempus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a tellus elit. In sodales, mauris vel pellentesque ultricies, enim magna gravida libero, fringilla accumsan lorem enim congue ex. Sed non nunc purus. Nullam varius consectetur nulla id tincidunt. Duis fermentum pretium pharetra. Suspendisse vitae quam molestie, maximus tortor eu, porta sem. Aenean pellentesque, quam ac elementum rutrum, ligula tortor facilisis sem, imperdiet mollis diam nisi a sapien. Curabitur finibus efficitur dui, quis auctor risus gravida id. Phasellus ut nulla et tortor mollis tristique. Pellentesque eros nisl, euismod vel lectus nec, accumsan porta sem. Praesent feugiat neque dui, a tempus lorem vestibulum et. Sed pulvinar felis sit amet molestie interdum. In luctus quis lorem sit amet tincidunt. Nunc aliquet congue lectus vitae posuere. Duis eleifend pulvinar tempus.";
var text4 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a tellus elit. In sodales, mauris vel pellentesque ultricies, enim magna gravida libero, fringilla accumsan lorem enim congue ex. Sed non nunc purus. Nullam varius consectetur nulla id tincidunt. Duis fermentum pretium pharetra.";
var text5 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a tellus elit. In sodales, mauris vel pellentesque ultricies, enim magna gravida libero, fringilla accumsan lorem enim congue ex. Sed non nunc purus. Nullam varius consectetur nulla id tincidunt. Duis fermentum pretium pharetra. Suspendisse vitae quam molestie, maximus tortor eu, porta sem. Aenean pellentesque, quam ac elementum rutrum, ligula tortor facilisis sem, imperdiet mollis diam nisi a sapien. Curabitur finibus efficitur dui, quis auctor risus gravida id. Phasellus ut nulla et tortor mollis tristique. Pellentesque eros nisl, euismod vel lectus nec, accumsan porta sem. Praesent feugiat neque dui, a tempus lorem vestibulum et. Sed pulvinar felis sit amet molestie interdum. In luctus quis lorem sit amet tincidunt. Nunc aliquet congue lectus vitae posuere. Duis eleifend pulvinar tempus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a tellus elit. In sodales, mauris vel pellentesque ultricies, enim magna gravida libero, fringilla accumsan lorem enim congue ex. Sed non nunc purus. Nullam varius consectetur nulla id tincidunt. Duis fermentum pretium pharetra..";

var img1 = "img/1.png";
var img2 = "img/2.png";
var img3 = "img/3.png";
var img4 = "img/4.png";
var img5 = "img/5.png";
var img6 = "img/6.png";

var textos = [text1, text2, text3, text4, text5];
var imagenes = [img1, img2, img3, img4, img5, img6];

/*****************************/
var aleatorio;
var newgrid = "";
var gridtohtml = "";

function creategrid() {
	numerocolumnas = document.getElementById("ncol").value;
	tipocontenido = document.getElementById("tcont").value;
	cantidadelementos = document.getElementById("nelement").value;
	newgrid = "<h1 class='titulo text-center'>Your gridy is ready!</h1><p id='contentbut'><b class='butn butn-classic titulo' id='another' onclick='another();'>Another gridy</b><b class='butn butn-classic titulo' id='down' onclick='down();'>Download gridy</b></p><hr class='kol-1 centerkol' id='line'><div class='koltable-" + numerocolumnas + "'>";
	gridtohtml="<div class='koltable-" + numerocolumnas + "'>"
	if (tipocontenido == "text") {
		for (i = 0; i < cantidadelementos; i++) {
			aleatorio = Math.floor((Math.random() * 4) + 1);
			newgrid += "<article class='contable'><div class='koltable-cnt'><p class='texto'>" + textos[aleatorio] + "</p></div></article>";
			gridtohtml += "<article class='contable'><div class='koltable-cnt'><p class='texto'>" + textos[aleatorio] + "</p></div></article>";
		}
	}
	if (tipocontenido == "img") {
		for (i = 0; i < cantidadelementos; i++) {
			aleatorio = Math.floor((Math.random() * 5) + 1);
			newgrid += "<article class='contable'><div class='koltable-cnt'><img src="+imagenes[aleatorio]+" alt='your image here'></div></article>";
			gridtohtml += "<article class='contable'><div class='koltable-cnt'><img src="+imagenes[aleatorio]+" alt='your image here'></div></article>";
		}
	}
	newgrid += "</div>";
	$("#showgrid").html(newgrid);
	setTimeout(function () {
		$("#form").css("opacity", "0")
	}, 300);
	setTimeout(function () {
		$("#form").css("display", "none")
	}, 700);
	setTimeout(function () {
		$("#showgrid").css("display", "block")
	}, 1100);
	setTimeout(function () {
		$("#showgrid").css("opacity", "1")
	}, 1300);
}

function another(){
	window.location="http://gridy.github.io/";
}

function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}

function down(){
	var htmlfinal = "";
	htmlfinal = '<html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1" /><link rel="stylesheet" type="text/css" href="http://robytframework.16mb.com/css/normalize.min.css" media="screen" /><link rel="stylesheet" type="text/css" href="http://robytframework.16mb.com/css/robyt2.0.css" media="screen" /><title>You gridy.</title></head><body>';
	htmlfinal += gridtohtml;
	htmlfinal += '</div></body></html>';
	download('yourgridy.html', htmlfinal);
}
