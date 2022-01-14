$(document).ready(function() {
  $("#surveyInput").submit(function(event) {
    event.preventDefault();
    const hairColor = parseInt($("input#hairColor").val());
    const favoriteColor = parseInt($("input#favoriteColor").val());
    const pizzaTopping = parseInt($("input#pizzaTopping").val());
    const musicGenre = parseInt($("input#musicGenre").val());
    const vacation = parseInt($("input#vacation").val());
    const planet = parseInt($("input#planet").val());

    const options = hairColor + favoriteColor + pizzaTopping + musicGenre + vacation + planet;

    if (options < 10) {
      $("#cSharp").show();
      $("#javaScript").hide();
      $("#ruby").hide();
      $("#whitSpace").hide();
    } else if (options < 16) {
      $("#javaScript").show();
      $("#cSharp").hide();
      $("#ruby").hide();
      $("#whitSpace").hide();
    } else if (options < 24) {
      $("#ruby").show();
      $("#cSharp").hide();
      $("#javaScript").hide();
      $("#whiteSpace").hide();
    } else if (options === 24) {
      $("#whiteSpace").show();
      $("#cSharp").hide();
      $("#javaScript").hide();
      $("#ruby").hide();
    } 
  })
})