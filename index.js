'use strict';

const hitWeatherApi = async () => {
    const location = document.getElementById('location-input').value;
    console.log(location);
    const response = await fetch (`http://localhost:8080/weatherData?cityName=${location}`);
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