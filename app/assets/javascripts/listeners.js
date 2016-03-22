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

      } else if ( $(e.target).hasClass("delete") ) {

        _deleteButtonClicked($(e.target));

      }
    });

    $('.navbar-fixed-top').on("click", function(e) {
      if ( $(e.target).hasClass("finish-btn") ) {
        _finishButtonClicked();
      }
    });
  };

  var _photoClicked = function( x, y ) {
    $(".tag-temp").remove();

    WALDO.photoTagModule.createTag( x, y );
  }

  var _tagMenuItemClicked = function( x, y, $menuChoice ) {
    var choiceString = $menuChoice.text();
    var choiceID = $menuChoice.data("id");

    $menuChoice.parent().addClass("hidden");

    var $tag = $menuChoice.parent().parent();
    $tag.removeClass("tag-temp");
    var $label = $tag.find(".tag-label");
    $label.removeClass("hidden");
    $label.attr("data-id", choiceID);

    $label.text(choiceString);
    WALDO.photoTagModule.removeCharacter( choiceString );

    WALDO.photoTagModule.persistTag( $tag, x, y, $menuChoice.data("id"), WALDO.GameModule.getCurrentGame() );
  };

  var _deleteButtonClicked = function($button) {
    var $tag = $button.parent();
    var tagID = $tag.data("id");

    var $label = $tag.find(".tag-label")
    var charID = $label.data("id");

    WALDO.photoTagModule.deletePersistedTag( $tag, tagID );
  };

  var _finishButtonClicked = function() {
    WALDO.GameModule.finishGame();
    WALDO.ClockModule.stop();
    $(".finish-btn").addClass("hidden");
    $(".reset-btn").removeClass("hidden");
  }

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
