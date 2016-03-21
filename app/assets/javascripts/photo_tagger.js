var WALDO = WALDO || {};

WALDO.photoTagModule = ( function() {
  var registerListeners = function() {
    $('#photo').on("click", function(e) {
      var offset = $("#photo").offset();
      var x = e.pageX - offset.left
      var y = e.pageY - offset.top
      createTag(x,y);
    });
  };

  var createTag = function(x,y) {
    // create new elements
    var $newTag = $("<div class='tag'></div>");
    var $tagBox = $("<div class='tag-box'></div>")
    var $tagLabel = $("<div class='tag-label'></div>")
    var $tagMenu = $("<div class='tag-menu'></div>")

    //combine new elements under tag
    $newTag.append($tagBox);
    $newTag.append($tagLabel);
    $newTag.append($tagMenu);

    // put tag in position
    $newTag.css({top: y, left: x});

    // append new tag to the photo holder
    $('#photo-holder').append($newTag);
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
