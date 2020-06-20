// Search by food category and location
var apikey = "eee323892b3fbbbde9d9b268625c3602";
var randomBtn = $(".random-btn");
var lattitude = "33.669445";
var longitutde = "-117.823059";
var resName = $(".restaurant-name");
var resPrice = $(".restaurant-price");
var resAddress = $(".restaurant-address");
var resCuisine = $(".restaurant-cuisine");
var callBtn = $(".call-btn");
var webBtn = $(".web-btn")
var index = 0;

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://developers.zomato.com/api/v2.1/search?lat=" + lattitude + "&lon=" + longitutde + "&sort=cost",
    "method": "GET",
    "headers": {
        "user-key": "eee323892b3fbbbde9d9b268625c3602"
    }
}

callBtn.hide();
webBtn.hide();

randomBtn.click(function(){

    callBtn.show();
    webBtn.show();

    $.getJSON(settings, function(data){
        console.log(data);
        resName.text(data.restaurants[0].restaurant.name);
        resAddress.text("Address: " + data.restaurants[0].restaurant.location.address);
        resPrice.text("Price range: " + data.restaurants[0].restaurant.price_range);
        resCuisine.text("Cuisine: " + data.restaurants[0].restaurant.cuisines);

        webBtn.click(function(){
            webBtn.text(data.restaurants[0].restaurant.url);
        });

        callBtn.click(function(){
            callBtn.text(data.restaurants[0].restaurant.phone_numbers);
        })

    })

})






