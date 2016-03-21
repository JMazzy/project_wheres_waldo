var WALDO = WALDO || {};

WALDO.listenerModule = ( function() {
  var registerListeners = function() {
    $('.photo-holder').on("click", "#photo", function(e) {
      var offset = $("#photo").offset();
      var x = e.pageX - offset.left
      var y = e.pageY - offset.top
      WALDO.photoTagModule.createTag(x,y);
    });

    $("#photo").on("mouseover", function(e) {
      $(".tag").removeClass("hidden");
    });

    $("#photo").on("mouseout", function(e) {
      $(".tag").addClass("hidden");
    });

    $(".tag-menu").on("click", function(e) {
      var menuChoice = $(e.target).text();
      console.log(menuChoice);
    });
  };

  return {
    registerListeners: registerListeners,
  }
})();
