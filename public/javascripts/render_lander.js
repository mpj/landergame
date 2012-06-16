(function() {

  var ctx;

  CanvasApplication.renderers.push(function() {

  	if (!CanvasApplication.readyBackground)
  		return;

  	if (!ctx) ctx = CanvasApplication.createCanvasContext();

  	var lander = CanvasApplication.lander;


  	ctx.clearRect(0, 0, CanvasApplication.STAGE_WIDTH, CanvasApplication.STAGE_HEIGHT);

    ctx.fillStyle = "rgb(255, 255, 255)";
	ctx.fillRect(lander.x, lander.y, 
		CanvasApplication.LANDER_WIDTH, CanvasApplication.LANDER_HEIGHT);


  })

})();

