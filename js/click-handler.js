'use strict'

AFRAME.registerComponent('click-handler', {
	init: function(){
		let el = this.el;
		el.addEventListener('click', function(e){
			console.log(e.target.id);
			alert("Click Picture " + e.target.id[1]);
		});
	}
});