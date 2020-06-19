var movies = ["Coraline"];
$(document).ready(function () {
  // Required for nav bar mobile functionality
  $(".sidenav").sidenav();
  //Required for carousel
  $(document).ready(function () {
    $(".carousel").carousel();
  });

  var movie = $(this).attr("data-name");
  var queryURL = "https://www.omdbapi.com/?t=" + movies + "&apikey=trilogy";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    // $('.body-container').text(JSON.stringify(response));
  });
});
