var WALDO = WALDO || {};

$( document ).ready( function() {
  if ( $("#photos-show").length ) {
    WALDO.listenerModule.registerListeners();
    WALDO.photoTagModule.getCharacters();
    WALDO.GameModule.startGame();
    WALDO.ClockModule.init();
  }
});
