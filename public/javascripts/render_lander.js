(function() {

  var ctx;

  CanvasApplication.renderers.push(function() {

  	if (!CanvasApplication.readyBackground)
  		return;

  	if (!ctx) ctx = CanvasApplication.createCanvasContext();

  	var lander = CanvasApplication.lander;

    // break this out into helper
    ctx.setTransform(1, 0, 0, 1, 0, 0); // must reset transform before clearing.
  	ctx.clearRect(0, 0, CanvasApplication.STAGE_WIDTH, CanvasApplication.STAGE_HEIGHT);

    ctx.fillStyle = "rgb(255, 255, 255)";

    var cx     = lander.x + 0.5 * CanvasApplication.LANDER_WIDTH;
    var cy     = lander.y + 0.5 * CanvasApplication.LANDER_HEIGHT;
    ctx.translate(cx, cy);
    ctx.rotate( (Math.PI / 180) * lander.angle);

	  ctx.fillRect(
      -0.5 * CanvasApplication.LANDER_WIDTH, 
      -0.5 * CanvasApplication.LANDER_HEIGHT, 
		  CanvasApplication.LANDER_WIDTH, CanvasApplication.LANDER_HEIGHT);

    ctx.setTransform(1, 0, 0, 1, 0, 0); 


  })

})();

