(function() {


  CanvasApplication.updaters.push(function() {

    if (!CanvasApplication.lander)
      CanvasApplication.lander = {
        x: CanvasApplication.STAGE_WIDTH / 2 - CanvasApplication.LANDER_WIDTH / 2,
        y: 100
      }
    

    lander = CanvasApplication.lander;


  })

})();

