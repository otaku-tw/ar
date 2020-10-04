/* Global Variables */

var init = false;
var clickLock = true;
var preEl = null;
var muralData = getMuralData();
var firstGen = {"p1":false, "p2":false, "p3":false, "p4":false, "p5":false, "p6":false, "p7":false, "p8":false, "p9":false};
var TextWindow = false;



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

function showText() {
    if(!TextWindow){
        TextWindow = true;
        var Odiv=document.createElement("div");
        Odiv.id="box";
        Odiv.className="ex3";
        Odiv.innerHTML = muralData[preEl.id].story;
        document.body.appendChild(Odiv);
        document.getElementById("show-text").innerHTML="Close Text";
        // alert("Hi there!");
        // var sceneEl = document.querySelector('#redbox');
        // console.log(sceneEl.getAttribute('position'));
        // sceneEl.setAttribute('position', {x: -0.05, y: 0, z: -1});
    }
    else{
        TextWindow = false;
        var del = document.getElementById("box");
        del.parentNode.removeChild(del);
        document.getElementById("show-text").innerHTML="Text";
    }
};

function startbtn(){
    document.getElementById("start-btn").style.visibility = "hidden";
    document.getElementById("buttons_area2").style.visibility = "visible";
}

function closebtn(){
    if(TextWindow){
        TextWindow = false;
        var del = document.getElementById("box");
        del.parentNode.removeChild(del);
        document.getElementById("buttons_area2").style.visibility = "hidden";
        document.getElementById("start-btn").style.visibility = "visible";
    }
    else{
        document.getElementById("buttons_area2").style.visibility = "hidden";
        document.getElementById("start-btn").style.visibility = "visible";
    }
}

window.addEventListener('camera-init', (e) => {
	alldone();
})