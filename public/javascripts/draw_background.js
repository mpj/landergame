
(function() {
	var ctxBackground = CanvasApplication.createCanvasContext();

	var img = new Image(),
		imgWidth = 800,
	    imgHeight = 400; 

	img.src = '/images/background.gif';

	img.onload = function () {
	  CanvasApplication.readyBackground = true;
	  for (var i=0; i < Math.floor(CanvasApplication.STAGE_WIDTH/imgHeight) +1; i++){
	    for (var j=0; j < Math.floor(CanvasApplication.STAGE_WIDTH/imgWidth)+1; j++){
	      ctxBackground.drawImage(img, j*imgWidth, i*imgHeight, imgWidth, imgHeight);
	    }
	  }
	};   

})();