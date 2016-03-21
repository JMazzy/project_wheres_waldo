var WALDO = WALDO || {};

$( document ).ready( function() {
  if ( $("#photos-show").length ) {
    WALDO.listenerModule.registerListeners();
  }
});
