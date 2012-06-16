(function() {


  CanvasApplication.updaters.push(function(modifier) {

    if (!CanvasApplication.lander)
      CanvasApplication.lander = {
        x: CanvasApplication.STAGE_WIDTH / 2 - CanvasApplication.LANDER_WIDTH / 2,
        y: 100,
        angle: 40
      }
    

    lander = CanvasApplication.lander,
    keysDown = CanvasApplication.keysDown;

    if (37 in keysDown) { //  holding left arrow
      lander.angle -= 100 * modifier;
    }
    if (39 in keysDown) { //  holding right arrow
      lander.angle += 100 * modifier;
    }

    if (38 in keysDown) { //  holding up arrow
      
      var thrust = (lander.angle / -90);
      lander.x -= 100 * thrust * modifier;

      lander.y -= 25 * modifier;
    } else {
      lander.y += 35 * modifier;
    }


  })

})();

