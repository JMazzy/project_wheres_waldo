$( document ).ready( function() {
  if ( $("#photos-show").length ) {
    $('#photo').on("click", function(e) {
      var offset = $("#photo").offset();
      var x = e.pageX - offset.left
      var y = e.pageY - offset.top
      console.log(x,y);
    });
  }
});
