var WALDO = WALDO || {};

WALDO.listenerModule = ( function() {
  var registerListeners = function() {
    _clickListener();
    _mouseoverListener();
  };

  var _clickListener = function() {
    $('.photo-holder').on("click", function(e) {
      var offset = $("#photo").offset();
      var x = e.pageX - offset.left
      var y = e.pageY - offset.top

      if ( $(e.target).attr('id') === "photo" ) {

        _photoClicked( x, y );

      } else if ( $(e.target).hasClass("tag-menu-item") ) {

        _tagMenuItemClicked(x, y, $(e.target));

      }
    });
  };

  var _photoClicked = function( x, y ) {
    $(".tag-temp").remove();

    WALDO.photoTagModule.createTag( x, y );
  }

  var _tagMenuItemClicked = function( x, y, $menuChoice ) {
    var choiceString = $menuChoice.text();
    $menuChoice.parent().addClass("hidden");

    $tag = $menuChoice.parent().parent();
    $tag.removeClass("tag-temp");
    $label = $tag.find(".tag-label");
    $label.removeClass("hidden");

    $label.text(choiceString);
    WALDO.photoTagModule.removeCharacter( choiceString );

    WALDO.photoTagModule.persistTag( x, y, $menuChoice.data("id"), WALDO.GameModule.getCurrentGame() );
  };

  var _mouseoverListener = function() {
    $(".photo-holder").on("mouseover", function(e) {
      $(".tag").removeClass("hidden");
    });

    $(".photo-holder").on("mouseout", function(e) {
      $(".tag").addClass("hidden");
    });
  };

  return {
    registerListeners: registerListeners,
  }
})();
