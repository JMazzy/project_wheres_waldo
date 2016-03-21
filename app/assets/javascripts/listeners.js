var WALDO = WALDO || {};

WALDO.listenerModule = ( function() {
  var registerListeners = function() {
    $('.photo-holder').on("click", function(e) {
      var offset = $("#photo").offset();
      var x = e.pageX - offset.left
      var y = e.pageY - offset.top

      if ( $(e.target).attr('id') === "photo" ) {
        $(".tag-temp").remove();
        WALDO.photoTagModule.createTag( x, y );
      } else if ( $(e.target).hasClass("tag-menu-item") ) {
        var $menuChoice = $(e.target);
        var choiceString = $menuChoice.text();
        $menuChoice.parent().addClass("hidden");

        $tag = $menuChoice.parent().parent();
        $tag.removeClass("tag-temp");
        $label = $tag.find(".tag-label");
        $label.removeClass("hidden");
        
        $label.text(choiceString);
        WALDO.photoTagModule.removeCharacter( choiceString );

        WALDO.photoTagModule.persistTag( x, y, $menuChoice.data("id"), WALDO.GameModule.getCurrentGame() );
      }
    });

    $(".photo-holder").on("mouseover", function(e) {
      $(".tag").removeClass("hidden");
    });

    $(".photo-holder").on("mouseout", function(e) {
      $(".tag").addClass("hidden");
    });

    $(".tag-menu-item").on("click", function(e) {
      console.log("clicked");

      console.log(menuChoice);
    });
  };

  return {
    registerListeners: registerListeners,
  }
})();
