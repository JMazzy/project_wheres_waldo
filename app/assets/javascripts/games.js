var WALDO = WALDO || {};

WALDO.GameModule = ( function() {
  var currentGame;

  var startGame = function() {
    $.ajax({
      url: "http://localhost:3000/games",
      type: "POST",
      data: JSON.stringify({}),
      dataType: "json",
      contentType: "application/json",
      success: function(response) {
        console.log("SUCCESS");
        currentGame = response.id;
        console.log("Playing game number: " + currentGame)
      },
      error: function( request, status, error ) {
        console.log("ERROR");
        console.log(request, status, error)
      },
      complete: function() {
        console.log("COMPLETE");
      },
    });
  };

  var finishGame = function() {
    var urlString = "http://localhost:3000/games/" + currentGame;

    $.ajax({
      url: urlString,
      type: "PATCH",
      data: JSON.stringify({ id: currentGame }),
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

    getHighScores();
  };

  var getCurrentGame = function() {
    return currentGame;
  };

  var getHighScores = function() {
    $.ajax({
      url: "http://localhost:3000/games",
      type: "GET",
      data: JSON.stringify({}),
      dataType: "json",
      contentType: "application/json",
      success: function(response) {
        console.log(response);
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
  };

  return {
    startGame: startGame,
    finishGame: finishGame,
    getCurrentGame: getCurrentGame,
    getHighScores: getHighScores,
  };
})();
