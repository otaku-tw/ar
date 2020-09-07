AFRAME.registerComponent('click-handler', {
	init: function(){
		this.handleClick = this.handleClick.bind(this);
		this.el.addEventListener('click', this.handleClick);
	},

	remove: function(){
		this.el.removeEventListener('click', this.handleClick);
	},

	handleClick: function(e){
		if(init && !clickLock){
			let nowPath = this.el.getAttribute('src');
			if(preEl == this.el){
				this.el.setAttribute('src', nowPath.replace('color', 'ori'));
				preEl = null;
				return;
			}
			this.el.setAttribute('src', nowPath.replace('ori', 'color'));
			if(preEl != null){
				let oldPath = preEl.getAttribute('src');
				preEl.setAttribute('src', oldPath.replace('color', 'ori'));
			}
			preEl = this.el;
		}
	},
});

AFRAME.registerComponent('markerhandler', {
	init: function() {
		this.el.addEventListener('markerFound', function(e){
			id = this.id;
			if(!firstGen[id]){
				let el = document.getElementById(id);
				let imgEl = document.createElement('a-image');
				imgEl.setAttribute('id', id);
				imgEl.setAttribute('src', '#' + id + '_ori');
				imgEl.setAttribute('width', muralData[id].width);
				imgEl.setAttribute('height', muralData[id].height);
				imgEl.setAttribute('scale', '0.005 0.005');
				imgEl.setAttribute('rotation', '-90');
				imgEl.setAttribute('class', 'clickable');
				imgEl.setAttribute('click-handler', '');
				el.appendChild(imgEl);
				firstGen[id] = true;
			}
		});
	}
});