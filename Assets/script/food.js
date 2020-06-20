// Search by food category and location
var apikey = "eee323892b3fbbbde9d9b268625c3602";
var randomBtn = $(".random-btn");
var lattitude = "33.669445";
var longitutde = "-117.823059";
var resName = $(".restaurant-name");
var resPrice = $(".restaurant-price");
var resAddress = $(".restaurant-address");
var callBtn = $(".call-btn");
var webBtn = $(".web-btn")


var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://developers.zomato.com/api/v2.1/search?lat=" + lattitude + "&lon=" + longitutde + "&sort=cost",
    "method": "GET",
    "headers": {
        "user-key": "eee323892b3fbbbde9d9b268625c3602"
    }
}

randomBtn.click(function(){

    $.getJSON(settings, function(data){
        console.log(data);
        resName.text(data.restaurants[0].restaurant.name);
        resAddress.text("Address: " + data.restaurants[0].restaurant.location.address);
        

        webBtn.click(function(){
            webBtn.text(data.restaurants[0].restaurant.events_url);
        });

        callBtn.click(function(){
            callBtn.text(data.restaurants[0].restaurant.phone_numbers);
        })

    })

})






