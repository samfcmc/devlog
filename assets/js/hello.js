
var developer = {
	goodEnough: false
};

(function(developer) {

	while(!this.goodEnough) {
		console.log('%cHow to be a ' + '%cKick Ass Developer', 
			'color: white; font-size: 50px; background-color:black;',
			'color: #ce1ac5; font-size: 50px; background-color: black;');
		this.goodEnough = !this.goodEnough;
	}

})(developer);
