var movies = ['Coraline']
$(document).ready(function(){

    var movie = $(this).attr("data-name");
    var queryURL = "https://www.omdbapi.com/?t=" + movies + "&apikey=trilogy";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        $('.display').text(JSON.stringify(response));
    })
})