var WALDO = WALDO || {};

WALDO.photoTagModule = ( function() {
  var registerListeners = function() {
    $('#photo').on("click", function(e) {
      var offset = $("#photo").offset();
      var x = e.pageX - offset.left
      var y = e.pageY - offset.top
      console.log(x,y);
    });
  };

  return {
    registerListeners: registerListeners,
  }
})();

$( document ).ready( function() {
  if ( $("#photos-show").length ) {
    WALDO.photoTagModule.registerListeners();
  }
});
