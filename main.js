// Replace with your OpenWeatherMap API key
const API_KEY = 'ebcef39de9fb55632d6aaf556b7117f3';

const city = 'Udaipur'; // Replace with your desired city

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    const { name, weather, main } = data;
    const { icon, description } = weather[0];
    const { temp } = main;

    document.getElementById('city-name').textContent = name;
    document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    document.getElementById('weather-description').textContent = description;
    document.getElementById('temperature').textContent = `${Math.round(temp - 273.15)}°C`; // Convert Kelvin to Celsius
  })
  .catch(error => console.error(error));
  
  function changeBackground() {
  $.get("https://source.unsplash.com/random", function(data) {
    $("body").css("background-image", "url(" + data + ")");
  });
}
setInterval(changeBackground, 3600000 * 1); // Replace "x" with desired hours

$(document).ready(function() {
  changeBackground();
});

function randomQuote() {
  $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
        $("#random_quote").html("<p id='random_quote' class='lead text-center'>" +
          response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</p>");
        $("#tweet").attr("href", "https://twitter.com/home/?status=" + response.quoteText +
          ' (' + response.quoteAuthor + ')');
      }
  });
}

$(function() {
  randomQuote();
});

$("button").click(function(){
  randomQuote();
});


function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
     // 0 - 59
  
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
 
    
    var time = h + ":" + m  ;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 60000);
    
}

showTime();




