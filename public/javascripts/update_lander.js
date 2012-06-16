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

    if (37 in keysDown) { // PlayerB holding left
      lander.angle -= 100 * modifier;
    }
    if (39 in keysDown) { // PlayerB holding right
      lander.angle += 100 * modifier;
    }


    lander.y += 35 * modifier;


  })

})();

