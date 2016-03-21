var WALDO = WALDO || {};

WALDO.photoTagModule = ( function() {
  var chars;

  var createTag = function(x,y) {

    // create new elements
    var $newTag = $("<div class='tag tag-temp'></div>");
    var $tagBox = $("<div class='tag-box'></div>")
    var $tagMenu = $("<div class='tag-menu'></div>")
    var $tagLabel = $("<div class='tag-label hidden'></div>")

    for ( var i = 0; i < chars.length; i++ ) {
      var $character = $("<p></p>");
      $character.addClass("tag-menu-item");
      $character.text( chars[i].name );
      $character.attr( "data-id", chars[i].id );
      $tagMenu.append($character);
    }

    //combine new elements under tag
    $newTag.append($tagBox);
    $newTag.append($tagLabel);
    $newTag.append($tagMenu);

    // put tag in position
    $newTag.css({top: y, left: x});

    // append new tag to the photo holder
    $('.photo-holder').append($newTag[0]);
  };

  var persistTag = function(x,y,charID) {
    $.ajax({
      url: "http://localhost:3000/tags",
      type: "POST",
      data: JSON.stringify({ tag: { photo_x: x, photo_y: y, character_id: charID, photo_id: 1 }}),
      dataType: "json",
      contentType: "application/json",
      success: function(response) {
        console.log("SUCCESS");
      },
      error: function( request, status, error ) {
        console.log("ERROR");
        console.log(request, status, error)
      },
      complete: function() {
        console.log("COMPLETE");
      },
    });
  }

  var getCharacters = function() {
    $.ajax({
      url: "http://localhost:3000/characters",
      type: "GET",
      data: JSON.stringify({}),
      dataType: "json",
      contentType: "application/json",
      success: function(response) {
        console.log("SUCCESS");
        chars = response;
      },
      error: function( request, status, error ) {
        console.log("ERROR");
        console.log(request, status, error)
      },
      complete: function() {
        console.log("COMPLETE");
      },
    });
  }

  return {
    createTag: createTag,
    persistTag: persistTag,
    getCharacters: getCharacters,
  }
})();
