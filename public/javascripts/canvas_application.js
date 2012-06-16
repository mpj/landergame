CanvasApplication = {
	
	readyBackground: false,

	LANDER_WIDTH: 	30,
	LANDER_HEIGHT: 	30,

	STAGE_WIDTH: 	800,
	STAGE_HEIGHT: 	600,
	

	keysDown: {},
	updaters: [],
	renderers: [],

	createCanvasContext: function() {
		var canvas = document.createElement("canvas");
		canvas.style.position="absolute";
		var context = canvas.getContext("2d");
		canvas.width = CanvasApplication.STAGE_WIDTH;
		canvas.height = CanvasApplication.STAGE_HEIGHT;
		document.body.appendChild(canvas);
		return context;
	},

};

addEventListener("keydown", function (e) {
	CanvasApplication.keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete CanvasApplication.keysDown[e.keyCode];
}, false);
