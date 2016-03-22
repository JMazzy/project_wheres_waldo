var WALDO = WALDO || {};

WALDO.photoTagModule = ( function() {
  var remainingChars;
  var foundChars = [];

  var removeCharacter = function( name ) {
    var id;
    for (var i = 0; i < remainingChars.length; i++) {
      if (remainingChars[i].name === name) {
        id = i;
        break;
      }
    }
    foundChars.push( remainingChars.splice( id, 1 )[0] );
    if ( remainingChars.length === 0 ) {
      $(".finish-btn").removeClass("hidden");
    }
  };

  var addCharacter = function( name ) {
    var id;
    for (var i = 0; i < foundChars.length; i++) {
      if (foundChars[i].name === name) {
        id = i;
        break;
      }
    }
    console.log(remainingChars, foundChars)
    remainingChars.push( foundChars.splice( id, 1 )[0] );
  };

  var createTag = function(x,y) {
    // create new elements
    var $newTag = $("<div class='tag tag-temp'></div>");
    var $tagBox = $("<div class='tag-box'></div>")

    var $tagMenu = $("<div class='tag-menu'></div>")
    for ( var i = 0; i < remainingChars.length; i++ ) {
      var $character = $("<p></p>");
      $character.addClass("tag-menu-item");
      $character.text( remainingChars[i].name );
      $character.attr( "data-id", remainingChars[i].id );
      $tagMenu.append($character);
    }

    var $tagLabel = $("<div class='tag-label hidden'></div>")

    //combine new elements under tag
    $newTag.append($tagBox);
    $newTag.append($tagLabel);
    $newTag.append($tagMenu);
    $newTag.append("<p class='delete hidden'>X</p>");

    // put tag in position
    $newTag.css({top: y, left: x});

    // append new tag to the photo holder
    $('.photo-holder').append($newTag[0]);
  };

  var persistTag = function(tag,x,y,charID,game) {
    $.ajax({
      url: "http://localhost:3000/tags",
      type: "POST",
      data: JSON.stringify({ tag: { photo_x: x, photo_y: y, character_id: charID, photo_id: 1, game_id: game }}),
      dataType: "json",
      contentType: "application/json",
      success: function(response) {
        tag.attr("data-id", response.id);
        tag.find(".delete").removeClass("hidden");
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

  var deletePersistedTag = function( tag, tagID ) {
    var urlString = "http://localhost:3000/tags/" + tagID;
    $.ajax({
      url: urlString,
      type: "DELETE",
      data: JSON.stringify( { id: tagID } ),
      dataType: "json",
      contentType: "application/json",
      success: function() {
        var charName = tag.find(".tag-label").text();
        addCharacter( charName );
        tag.remove();
        console.log("SUCCESS");
      },
      error: function( request, status, error ) {
        console.log("ERROR");
        console.log(request, status, error);
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
        remainingChars = response;
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
    removeCharacter: removeCharacter,
    addCharacter: addCharacter,
    deletePersistedTag: deletePersistedTag,
  }
})();
