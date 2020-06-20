var movies = ["train to busan", "coraline", "moana", "the invisible man", "artemis fowl", "knives out", "the invisible man"];

$(document).ready(function () {
  // Required for nav bar mobile functionality
  $(".sidenav").sidenav();
  //Required for carousel
  $(document).ready(function () {
    $(".carousel").carousel();
  });

  $(".generateMovie").on("click", function (event) {
    // Prevent default function
    event.preventDefault();

    //   Randomize movies
    var movieIndex = Math.floor(Math.random() * movies.length);
    //  URL for ajax call
    var queryURL =
      "https://www.omdbapi.com/?t=" + movies[movieIndex] + "&apikey=trilogy";

    //   Ajax call
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      // ON click the movie will be shown

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
