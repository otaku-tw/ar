'use strict'

AFRAME.registerComponent('click-handler', {
	init: function(){
	},

	update: function(){
		this.el.addEventListener('click', function(e){
			// console.log(this.object3D);
			alert("Click Picture " + e.target.id[1]);
		});
	}
});