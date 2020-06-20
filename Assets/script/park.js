$(document).ready(function(){
    // Required for nav bar mobile functionality
    $('.sidenav').sidenav();
  });
// function for mobile responsive side bar
$(document).ready(function(){
    $('.sidenav').sidenav();
  });


const errorCallBack = (error) => {
    console.error(error);
}


const successCallBack = (position) => {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    var APIkey ="200806826-197a532cac60dc5762dd92c55ef817db";
    var maxDistance = 10;
    var APIurl = 'https://www.hikingproject.com/data/get-trails?lat=' + lat + '&lon=' + lon + '&maxDistance=' + maxDistance +'&key='+ APIkey +'';

    var settings = {
        "url": APIurl ,
        "method": "GET",
    }
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    
    }).catch(function(err){
        console.log(err);
    });
    
}


// get current position of user
navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);
