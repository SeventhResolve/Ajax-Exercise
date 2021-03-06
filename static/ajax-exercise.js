"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(results) {

    // TODO: get the fortune and show it in the #fortune-text div

    console.log(results);

    $('#fortune-text').html(results);
}

function getFortune() {
    $.get('/fortune', showFortune);
}

$('#get-fortune-button').on('click', getFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    console.log(evt);

    var url = "/weather?zipcode=" + $("#zipcode-field").val();
    console.log(url);

    // TODO: request weather with that URL and show the forecast in #weather-info
}

// function getWeather() {
//     var url = "/weather?zipcode=" + $("#zipcode-field").val();
//     console.log(url);
//     $.get(url, showWeather); 

// }

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


