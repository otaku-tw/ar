AFRAME.registerComponent('click-handler', {
	init: function(){
		this.handleClick = this.handleClick.bind(this);
		this.el.addEventListener('click', this.handleClick);
	},

	remove: function(){
		this.el.removeEventListener('click', this.handleClick);
	},

	handleClick: function(e){
		if(!clickLock)
		{
			// console.log(preEl);
			if(preEl == this.el)
			{
				preEl.removeAttribute('color');
				preEl = null;
				return;
			}

			this.el.setAttribute('color', '#ff0000');
			if(preEl != null) preEl.removeAttribute('color');
			preEl = this.el;
		}
	},
});