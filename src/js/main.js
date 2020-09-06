/* Global Variables */

var init = true;
var clickLock = true;
var preEl = null;
var muralData = getMuralData();



function getMuralData(){
	let req = new XMLHttpRequest();
	req.open('GET', 'mural.json');
	req.responseType = 'json';
	req.send();
	req.onload = function(){
		muralData = req.response;
	}
}

function init_assets(){
	let assets = document.getElementById('assets');
	for(let i=1; i<=9; i++){
		let now = 'p' + i;
		let tmp = document.createElement('img');
		tmp.setAttribute('id', now + '_ori');
		tmp.setAttribute('src', 'img/plastic/' + now + '.png');
		assets.appendChild(tmp);
		tmp = document.createElement('img');
		tmp.setAttribute('id', now + '_color');
		tmp.setAttribute('src', 'img/color/' + now + '.png');
		assets.appendChild(tmp);
	}
}

function init_mural(){
	let mural = document.getElementById('mural');
	for(let i=1; i<=9; i++){
		let now = 'p' + i;
		let tmp = document.createElement('a-image');
		tmp.setAttribute('id', now);
		tmp.setAttribute('src', '#' + now + '_ori');
		tmp.setAttribute('width', muralData[now].width);
		tmp.setAttribute('height', muralData[now].height);
		tmp.setAttribute('position', muralData[now].x + " " + muralData[now].y);
		tmp.setAttribute('class', 'clickable');
		tmp.setAttribute('click-handler', '');
		mural.appendChild(tmp);
	}
}

function init_markers(){
}

function alldone(){
	let el = document.getElementById('arjs-loader');
	el.style.display = "none";
}