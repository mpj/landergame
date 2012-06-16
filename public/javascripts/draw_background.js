
(function() {
	var ctxBackground = CanvasApplication.createCanvasContext();
	var img = new Image(),
		imgWidth = 800,
	  imgHeight = 400; 

	img.src = '/images/background.gif';


	var surface = CanvasApplication.surface;

  ctxBackground.beginPath();
  ctxBackground.moveTo(surface[0].x, surface[0].y);     
  for (var i = 1; i < surface.length; i++) {
      ctxBackground.lineTo(surface[i].x, surface[i].y);
  }
  
	img.onload = function () {
	  CanvasApplication.readyBackground = true;
	  for (var i=0; i < Math.floor(CanvasApplication.STAGE_WIDTH/imgHeight) +1; i++){
	    for (var j=0; j < Math.floor(CanvasApplication.STAGE_WIDTH/imgWidth)+1; j++){
	      ctxBackground.drawImage(img, j*imgWidth, i*imgHeight, imgWidth, imgHeight);

	    }
	  }
    
  	//ctxBackground.strokeStyle = "rgba(121,60,60,1)";  
  	//ctxBackground.lineWidth = 7;  
    //ctxBackground.stroke();

	  ctxBackground.lineTo(CanvasApplication.STAGE_WIDTH, CanvasApplication.STAGE_HEIGHT);
	  ctxBackground.lineTo(0, CanvasApplication.STAGE_HEIGHT);
	        
	  ctxBackground.fillStyle = "rgba(255,64,64,1)";  
		ctxBackground.fill();
	};


})();