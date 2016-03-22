var WALDO = WALDO || {};

WALDO.ClockModule = (function() {
  var elapsedTime = 0;
  var lastTime = new Date().getTime();
  var interval;

  var init = function() {
    interval = setInterval( function(){
      var currentTime = new Date().getTime();
      var deltaTime = currentTime - lastTime;
      lastTime = currentTime;
      elapsedTime += deltaTime;

      $("#clock").text(Math.floor(elapsedTime/1000));
    }, 1000 );
  }

  var stop = function() {
    clearInterval(interval);
  }

  return {
    init: init,
    stop: stop
  }

})();
