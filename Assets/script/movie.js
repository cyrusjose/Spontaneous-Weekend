var movies = ['The Midnight Man'];
$(document).ready(function () {
  // Required for nav bar mobile functionality
  $('.sidenav').sidenav();
  //Required for carousel
  $(document).ready(function () {
    $('.carousel').carousel();
  });

  var movie = $(this).attr('data-name');
  var queryURL = 'https://www.omdbapi.com/?t=' + movies + '&apikey=trilogy';

  $.ajax({
    url: queryURL,
    method: 'GET',
  }).done(function (response) {
    $('.generateMovie').on('click', function (event) {
      event.preventDefault();
      console.log(response);
      var posterImage = response.Poster;
      var title = response.Title;
      var synopsis = response.Plot;
      var rating = response.Rated;
      var runTime = response.Runtime;
      var genre = response.Genre;
      var releaseDate = response.Released;

      // $('.body-container').text(JSON.stringify(response));
      $('.poster').attr('src', posterImage);
      $('.main').addClass('body-container');
      $('.movieInfo').removeClass('hide');
      $('.title').text(title);
      $('.description').text(synopsis);
      $('.release').text(releaseDate);
      $('.rating').text(rating);
      $('.runTime').text(runTime);
      $('.genre').text(genre);
    });
  });
});
