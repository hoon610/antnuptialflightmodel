import './style.css';


const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', function() {
    searchWeather();
});


async function searchWeather() {
    let locationInput = document.getElementById('locationInput').value;
    if (!locationInput) {
        locationInput = "London";
    }

    const weatherData = await fetchWeather(locationInput);
    displayWeather(weatherData);
}

async function fetchWeather(location){
    const apiKey = '1cd253fc61af4715bf3191326231808';
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`, { mode: 'cors' });
    const rawWeatherData = await response.json();
    return rawWeatherData;
}


function displayWeather(data){
    const location = data.location;
  const currentWeather = data.current;

  const cityName = location.name;
  const country = location.country;
  const temperatureCelsius = currentWeather.temp_c;
  const temperatureFahrenheit = currentWeather.temp_f;
  const weatherCondition = currentWeather.condition.text;
  const windSpeedMph = currentWeather.wind_mph;
  const windSpeedKph = currentWeather.wind_kph;
  const humidity = currentWeather.humidity;

  console.log(windSpeedKph)
}


console.log("hello")

