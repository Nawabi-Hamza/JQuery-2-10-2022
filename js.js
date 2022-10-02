const api = {
    key:"b6a224157e8412807edf00f5bc",
    url:"https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search');
searchbox.addEventListener('keypress',setCity);
function setCity(e){
    if(e.keyCode == 13){
        // console.log(searchbox.value);
        getCityWeather(searchbox.value)
    }
}
function getCityWeather(city_name){
    fetch(`${api.url}weather?q=${city_name}&units=metric&APPID=${api.key}`)
    .then(function(weather){
        return weather.json();
    }).then(showCityWeather);
}

function showCityWeather(weather){
    console.log(weather)
    console.log(weather.name)
    // var city = $('h1')
    // city.html(`${weather.name} , ${weather.sys.country}`)
    // var temp = $('h2')
    // temp.html(`${weather.main.temp}`)

  }
