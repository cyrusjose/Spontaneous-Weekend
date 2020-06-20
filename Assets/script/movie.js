var movies = ["The Midnight Man"];
$(document).ready(function () {
  // Required for nav bar mobile functionality
  $(".sidenav").sidenav();
  //Required for carousel
  $(document).ready(function () {
    $(".carousel").carousel();
  });

  var movie = $(this).attr("data-name");
  //  URL for ajax call
  var queryURL = "https://www.omdbapi.com/?t=" + movies + "&apikey=trilogy";
  //   Ajax call
  $.ajax({
    url: queryURL,
    method: "GET",
  }).done(function (response) {
    // ON click the movie will be shown
    $(".generateMovie").on("click", function (event) {
      // Prevent default function
      event.preventDefault();
      //   See object info in console.
      console.log(response);
      //   Create variables.
      var posterImage = response.Poster;
      var title = response.Title;
      var synopsis = response.Plot;
      var rating = response.Rated;
      var runTime = response.Runtime;
      var genre = response.Genre;
      var releaseDate = response.Released;

      // $('.body-container').text(JSON.stringify(response));
      //   Add attribute for poster.
      $(".poster").attr("src", posterImage);
      //   Add class to main div
      $(".main").addClass("body-container");
      //   Display content.
      $(".movieInfo").removeClass("hide");
      //   Show title
      $(".title").text(title);
      //   Show description
      $(".description").text(synopsis);
      //   Show release date
      $(".release").text(releaseDate);
      //   Show TV rating
      $(".rating").text(rating);
      //   Show Run Time
      $(".runTime").text(runTime);
      //   Show Genre
      $(".genre").text(genre);
    });
  });
});
