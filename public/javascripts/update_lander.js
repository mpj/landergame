(function() {

  var goals = [
    function () {
      return (CanvasApplication.lander.dy < 0.8);
    },
    
    function () {
      return CanvasApplication.lander.angle > 85 &&
             CanvasApplication.lander.angle < 95
    },

    function () {
      for(var i=1;i<CanvasApplication.surface.length;i++) {
        var previous = CanvasApplication.surface[i-1];
        var current = CanvasApplication.surface[i];
        if (previous.y == current.y) {
          // it's a flat surface, hooray
          if ( CanvasApplication.lander.c.x > previous.x &&
               CanvasApplication.lander.d.x < current.x &&
               CanvasApplication.lander.c.y > previous.y - 0.5)
            return true;
        }
      }
      return false;
    }
  ]

  CanvasApplication.updaters.push(function(modifier) {

    if (!CanvasApplication.lander)
      CanvasApplication.lander = {
        x: CanvasApplication.STAGE_WIDTH / 2 - CanvasApplication.LANDER_WIDTH / 2,
        y: 100,
        angle: 90,
        dx: 0,
        dy: 0
      }
    

    lander = CanvasApplication.lander,
    keysDown = CanvasApplication.keysDown;

    if (!lander.landed) {
      if (37 in keysDown) { //  holding left arrow
        lander.angle = (lander.angle - 100 * modifier + 360) % 360;
      }
      if (39 in keysDown) { //  holding right arrow
        lander.angle = (lander.angle + 100 * modifier + 360) % 360;
      }


      if (38 in keysDown) { //  holding up arrow
        var dx = Math.cos((lander.angle / 180) * Math.PI);
        var dy = Math.sin((lander.angle / 180) * Math.PI);
        var thrust = 1;//(lander.angle / -90);
        
        lander.dx -= dx * 4 * modifier;
        lander.dy -= dy * 4 * modifier;
      } else {
        lander.dx *= 0.99;
        lander.dy += 2 * modifier;
      }
    }


    lander.x += lander.dx;
    lander.y += lander.dy;

    var h = Math.sqrt(Math.pow(CanvasApplication.LANDER_WIDTH / 2,2) + Math.pow(CanvasApplication.LANDER_HEIGHT / 2,2));

    var angleRadians = -(Math.PI / 180) * lander.angle;

    var wtf = .12; // wtf lol

    lander.a = 
      { 
        x: lander.x + h * Math.cos(angleRadians + Math.PI/4+wtf + Math.PI/2),
        y: lander.y - h * Math.sin(angleRadians + Math.PI/4+wtf + Math.PI/2) 
      }
    
    lander.b = 
      { 
        x: lander.x - h * Math.cos(angleRadians + Math.PI/4-wtf),
        y: lander.y + h * Math.sin(angleRadians + Math.PI/4-wtf) 
      }

    lander.c = 
      { 
        x: lander.x + h * Math.cos(angleRadians + Math.PI/4-wtf),
        y: lander.y - h * Math.sin(angleRadians + Math.PI/4-wtf) 
      }

    lander.d = 
      { 
        x: lander.x - h * Math.cos(angleRadians + Math.PI/4+wtf + Math.PI/2),
        y: lander.y + h * Math.sin(angleRadians + Math.PI/4+wtf + Math.PI/2)
      }


    for(var i=0;i<goals.length;i++) {
      CanvasApplication.goalsAchieved[i] = goals[i]();
    }

    if(CanvasApplication.goalsAchieved[0] &&
       CanvasApplication.goalsAchieved[1] &&
       CanvasApplication.goalsAchieved[2]) {
      lander.landed = true;
      lander.angle = 90;
      lander.dx = 0;
      lander.dy = 0;
    }
    


  })

})();

