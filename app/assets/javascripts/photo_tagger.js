var WALDO = WALDO || {};

WALDO.photoTagModule = ( function() {
  var createTag = function(x,y) {
    // create new elements
    var $newTag = $("<div class='tag tag-temp'></div>");
    var $tagBox = $("<div class='tag-box'></div>")
    var $tagMenu = $("<div class='tag-menu'></div>")
    var $tagLabel = $("<div class='tag-label hidden'></div>")

    $tagMenu.append($("<p class='tag-menu-item'>Waldo</p>"))
    $tagMenu.append($("<p class='tag-menu-item'>Wenda</p>"))
    $tagMenu.append($("<p class='tag-menu-item'>Wizard Whitebeard</p>"))
    $tagMenu.append($("<p class='tag-menu-item'>Odlaw</p>"))
    $tagMenu.append($("<p class='tag-menu-item'>Woof</p>"))

    //combine new elements under tag
    $newTag.append($tagBox);
    $newTag.append($tagLabel);
    $newTag.append($tagMenu);

    // put tag in position
    $newTag.css({top: y, left: x});

    // append new tag to the photo holder
    $('.photo-holder').append($newTag[0]);
  };

  return {
    createTag: createTag,
  }
})();
