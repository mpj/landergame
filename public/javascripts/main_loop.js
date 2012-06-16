(function() {
	var failure = false;

	var mainLoop = function () {
		
		if (failure) {
			// Don't execute anything in failing state.
			return;
		}

		try {

			var now = Date.now();
			var timeDelta = now - then;

			var i;
			for(i=0;i<CanvasApplication.updaters.length;i++) {
				CanvasApplication.updaters[i](timeDelta / 1000);
			}

			for(i=0;i<CanvasApplication.renderers.length;i++) {
				CanvasApplication.renderers[i]();	
			}

			then = now;
		
		} catch(error) {
			failure = true;
			throw error;
		}
	};


	var then = Date.now();
	setInterval(mainLoop, 1)

})();