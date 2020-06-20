// global variables
var apikey = "eee323892b3fbbbde9d9b268625c3602";
var randomBtn = $(".random-btn");
var lattitude = "";
var longitutde = "";
var resName = $(".restaurant-name");
var resPrice = $(".restaurant-price");
var resAddress = $(".restaurant-address");
var resCuisine = $(".restaurant-cuisine");
var imgDiv = $(".imgDiv");
var callBtn = $(".call-btn");
var webBtn = $(".web-btn");
var results = $(".results-container");
var webLink = $(".webLink");

// hide buttons and results container
callBtn.hide();
webBtn.hide();
results.hide();


// ask user if we can get their location: Yes-> successCallBack, No -> errorCallBack
const successCallBack = (position) => {
    var lattitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    // put in necessary info in settings 
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://developers.zomato.com/api/v2.1/search?lat=" + lattitude + "&lon=" + longitude + "&sort=cost",
        "method": "GET",
        "headers": {
            "user-key": "eee323892b3fbbbde9d9b268625c3602"
        }
    }


// click restaurant button to randomly generate a restaurant with specific coordinates
randomBtn.click(function(){

    // show buttons and results container
    callBtn.show();
    webBtn.show();
    results.show();

    // grab restaurant info from zomato
    $.getJSON(settings, function(data){
        console.log(data);
        var restaurants = data.restaurants.length

        // randomize restaurant choice
        i = Math.floor(Math.random()*restaurants);
        console.log(i);
        
        // display restaurant info
        resName.text(data.restaurants[i].restaurant.name);
        resAddress.text("Address: " + data.restaurants[i].restaurant.location.address);
        resPrice.text("Price range: " + data.restaurants[i].restaurant.price_range);
        resCuisine.text("Cuisine: " + data.restaurants[i].restaurant.cuisines);

        // append restaurant img
        var imgSrc = data.restaurants[i].restaurant.photos_url;
        console.log(imgSrc);
        var image = $("<img>").attr("src", "https://www.maangchi.com/wp-content/uploads/2019/06/kimchistewtuna.jpg");
        imgDiv.empty().append(image);
       
        console.log(data.restaurants[i].restaurant.thumb);

        // display restaurant web link
        var link = (data.restaurants[i].restaurant.url);
        webLink.attr("href",link);
        webLink.attr("target","_blank");

        // display restaurant phone number
        callBtn.click(function(){
            callBtn.text(data.restaurants[i].restaurant.phone_numbers);
        });

    });

});


}

// if user does not allow browser to access location
const errorCallBack = (error) => {
    console.error(error);
}

// get current position of user
navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);









