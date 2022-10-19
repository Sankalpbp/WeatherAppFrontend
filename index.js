'use strict';

const hitWeatherApi = async () => {
    const location = 'Jalandhar';
    const response = await fetch ('http://api.weatherstack.com/current?access_key=1033c76d0c1530af36960575ab2b03a8&query=Jalandhar');
    const weatherData = await response.json();

    document.getElementById('city').innerHTML = 'City: ' + weatherData.location.name;
    document.getElementById('region').innerHTML = 'Region: ' + weatherData.location.region;
    document.getElementById('country').innerHTML = 'Country: ' + weatherData.location.country;
    
    document.getElementById('temperature').innerHTML = 'Temperature right now is: ' + weatherData.current.temperature + ', but feels like: ' + weatherData.current.feelsLike;
    document.getElementById('feels-like').innerHTML = 'Temperature feels like: ' + weatherData.current.feelslike;
    document.getElementById('humidity').innerHTML = 'Humidity right now is: ' + weatherData.current.humidity;
    document.getElementById('visibility').innerHTML = 'Visibility right now is: ' + weatherData.current.visibility;
    document.getElementById('wind-speed').innerHTML = 'Wind Speed right now is: ' + weatherData.current.wind_speed;
    document.getElementById('wind-direction').innerHTML = 'Wind Direction right now is: ' + weatherData.current.wind_dir;
}