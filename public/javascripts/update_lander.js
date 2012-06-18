(function() {

  var goals = [
    function () {
      return (CanvasApplication.lander.dy < 0.5);
    },
    
    function () {
      return CanvasApplication.lander.touchdown;
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

    if (!CanvasApplication.lander) {
      CanvasApplication.lander = {
        x: CanvasApplication.STAGE_WIDTH / 2 - CanvasApplication.LANDER_WIDTH / 2,
        y: 100,
        angle: 90,
        dx: 0,
        dy: 0
      }
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
        lander.dx -= Math.cos((lander.angle / 180) * Math.PI) * 4 * modifier;
        lander.dy -= Math.sin((lander.angle / 180) * Math.PI) * 4 * modifier;
      } else {
        lander.dx *= 0.99;
        lander.dy += 2 * modifier;
      }

    }

    lander.x += lander.dx;
    lander.y += lander.dy;
    
    /*
    // debug
    if (CanvasApplication.sec[0] !== Math.floor(new Date().getMilliseconds()/100)) {
      CanvasApplication.sec = [CanvasApplication.sec[1], Math.floor(new Date().getMilliseconds()/100)];
      console.log(Math.floor(lander.dy * 100)/100);
    }
    */

    if(lander.a) {
      var seg0 = new Segment(new Vector(lander.a.x, lander.a.y), new Vector(lander.b.x, lander.b.y));
      var seg1 = new Segment(new Vector(lander.b.x, lander.b.y), new Vector(lander.c.x, lander.c.y));
      var seg2 = new Segment(new Vector(lander.c.x, lander.c.y), new Vector(lander.d.x, lander.d.y));
      var seg3 = new Segment(new Vector(lander.d.x, lander.d.y), new Vector(lander.a.x, lander.a.y));

      for(var i=1;i<CanvasApplication.surface.length;i++) {
        var previous = CanvasApplication.surface[i-1];
        var current = CanvasApplication.surface[i];
        var p0 = new Vector(previous.x, previous.y);
        var p1 = new Vector(current.x, current.y);
        var seg = new Segment(p0, p1);


        if(
          intersect(seg, seg0) ||
          intersect(seg, seg1) ||
          intersect(seg, seg2) ||
          intersect(seg, seg3)
        ) {


          for(var i=1;i<CanvasApplication.surface.length;i++) {
            var p = CanvasApplication.surface[i-1];
            var c = CanvasApplication.surface[i];
            var hyp = Math.sqrt(Math.pow(p.y - c.y, 2) + Math.pow(p.x - c.x, 2));
            var ang = Math.asin((c.y - p.y) / hyp);
            if ( lander.c.x > p.x &&
                 lander.d.x < c.x) {

              //lander.landed = !(intersect(seg, seg2) && 
              lander.touchdown = !(intersect(seg, seg2) &&               
                                   lander.angle - 90 > ((ang / Math.PI) * 180) - 15 &&
                                   lander.angle - 90 < ((ang / Math.PI) * 180) + 15);
            } 
          }
          if (!lander.touchdown) {
            lander.dx = lander.dy = 0;
            lander.landed = true;
          } else {

            lander.dx = lander.dy = 0;
            lander.landed = true;
            lander.crashed = true;
          }

        }
      }
    }

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

