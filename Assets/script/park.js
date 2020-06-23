// function for mobile responsive side bar
$(document).ready(function(){

    $('.sidenav').sidenav();

    $('.genButton').on("click", function(){
        // get current position of user
        navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);
    });

  });

const successCallBack = (position) => {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    var APIkey ="200806826-197a532cac60dc5762dd92c55ef817db";
    var maxDistance = 10;
    var maxResults = 20; 
    var APIurl = 'https://www.hikingproject.com/data/get-trails?lat=' + lat + '&lon=' + lon + '&maxDistance=' + maxDistance +'&key='+ APIkey
     +'&maxResults='+ maxResults + '';

    var settings = {
        "url": APIurl ,
        "method": "GET",
    }
    
    $.ajax(settings).done(function (response) {
        console.log(response);
        // get random trails index
        var rand = Math.floor(Math.random() * response.trails.length);
        // create variable for found random trail
        var foundTrail = response.trails[rand];


        //create variables for trial details
        var trailName = foundTrail.name;
        var trailLoc = foundTrail.location;
        var traildifficulty = foundTrail.difficulty;
        var traildistance = foundTrail.length;
        var trailImage = foundTrail.imgMedium;

        //   Add class to main div
        $(".main").addClass("body-container");

        //   Add attribute for poster.
        $(".trail-img").attr("src", trailImage);
        if (trailImage === ""){
            $(".trail-img").attr( "src", '../style/images/trail1.jpg' );
        }

        //Remove hide classes
        $(".info-area").removeClass("hide");
        $(".title").removeClass("hide");

        $('.title').text(trailName);
        $('.trail-location').text(trailLoc);
        $('.trail-difficulty').text(traildifficulty);
        $('.trail-distance').text(traildistance);

    
    }).catch(function(err){
        console.log(err);
    });
    
}

const errorCallBack = (error) => {
    console.error(error);
}