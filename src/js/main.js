/* Global Variables */

var init = false;
var clickLock = true;
var preEl = null;
var muralData = getMuralData();
var firstGen = {"p1":false, "p2":false, "p3":false, "p4":false, "p5":false, "p6":false, "p7":false, "p8":false, "p9":false};



function getMuralData(){
	let req = new XMLHttpRequest();
	req.open('GET', 'mural.json');
	req.responseType = 'json';
	req.send();
	req.onload = function(){
		muralData = req.response;
	}
}

function alldone(){
	init = true;
	let el = document.getElementById('arjs-loader');
	el.style.display = "none";
	console.clear();
	console.log('All Done !')
}

function init_markers(){
	let sceneEl = document.querySelector('a-scene');
	for(let i=1; i<=9; i++){
		let id = 'p' + i;
		let markerEl = document.createElement('a-marker');
		markerEl.setAttribute('id', id);
		markerEl.setAttribute('type', 'pattern');
		markerEl.setAttribute('url', 'marker/patt/' + id + '.patt');
		markerEl.setAttribute('markerhandler', '');
		markerEl.setAttribute('emitevents', 'true');
		sceneEl.appendChild(markerEl);
	}
	console.clear();
}

window.addEventListener('camera-init', (e) => {
	alldone();
})