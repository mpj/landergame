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
		canvas.id = "moon";
		canvas.style.position="absolute";
		var context = canvas.getContext("2d");
		canvas.width = CanvasApplication.STAGE_WIDTH;
		canvas.height = CanvasApplication.STAGE_HEIGHT;
		document.body.appendChild(canvas);
		return context;
	},

};

(function() {
	var baseline = {x: undefined, y: 550};

	CanvasApplication.surface = [
		{x: 0,   y: baseline.y -12},
    {x: 50,  y: baseline.y -130},
    {x: 100, y: baseline.y -130},
    {x: 150, y: baseline.y -42},
    {x: 200, y: baseline.y -100},
    {x: 250, y: baseline.y +43},
    {x: 300, y: baseline.y +43},
    {x: 350, y: baseline.y +43},
    {x: 400, y: baseline.y -100},
    {x: 450, y: baseline.y -10},
    {x: 500, y: baseline.y -10},
    {x: 550, y: baseline.y -130},
    {x: 600, y: baseline.y -180},
    {x: 650, y: baseline.y -122},
    {x: 700, y: baseline.y -50},
    {x: 750, y: baseline.y -50},    
    {x: 800, y: baseline.y -12}
   ];
})();

addEventListener("keydown", function (e) {
	CanvasApplication.keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete CanvasApplication.keysDown[e.keyCode];
}, false);
