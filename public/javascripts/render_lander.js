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

    var cx     = lander.x + 0.0 * CanvasApplication.LANDER_WIDTH;
    var cy     = lander.y + 0.0 * CanvasApplication.LANDER_HEIGHT;
    ctx.translate(cx, cy);
    ctx.rotate( (Math.PI / 180) * (lander.angle - 90));

	  ctx.fillRect(
      -0.5 * CanvasApplication.LANDER_WIDTH, 
      -0.5 * CanvasApplication.LANDER_HEIGHT, 
		  CanvasApplication.LANDER_WIDTH, CanvasApplication.LANDER_HEIGHT);

    ctx.setTransform(1, 0, 0, 1, 0, 0); 

    ctx.fillStyle = "rgb(0, 255, 0)"; // green
    ctx.fillRect(lander.a.x-2, lander.a.y-2, 4, 4);
    
    ctx.fillStyle = "rgb(0, 136, 255)"; // blue
    ctx.fillRect(lander.b.x-2, lander.b.y-2, 4, 4);
    
    ctx.fillStyle = "rgb(255, 0, 0)"; // red
    ctx.fillRect(lander.c.x-2, lander.c.y-2, 4, 4);

    ctx.fillStyle = "rgb(255, 255, 0)"; // yellow
    ctx.fillRect(lander.d.x-2, lander.d.y-2, 4, 4);

    if (CanvasApplication.goalsAchieved[0]) {
      ctx.fillStyle = "rgb(255, 255, 0)"; // yellow
      ctx.fillRect(10, 10, 20, 20);
    }

    if (CanvasApplication.goalsAchieved[1]) {
      ctx.fillStyle = "rgb(255, 0, 0)"; // red
      ctx.fillRect(40, 10, 20, 20);
    }

    if (CanvasApplication.goalsAchieved[2]) {
      ctx.fillStyle = "rgb(0, 255, 0)"; // green
      ctx.fillRect(70, 10, 20, 20);
    }

    if (lander && lander.crashed) {
      ctx.fillStyle ="rgb(255, 0, 0)"; // red
      ctx.font = "120px Helvetica";
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      ctx.fillText("CRASHED", 50, 150, 750);
    }

  })

})();

