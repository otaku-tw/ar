AFRAME.registerComponent('click-handler', {
	init: function(){
		this.handleClick = this.handleClick.bind(this);
		this.el.addEventListener('click', this.handleClick);
	},

	remove: function(){
		this.el.removeEventListener('click', this.handleClick);
	},

	handleClick: function(e){
		if(!clickLock){
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