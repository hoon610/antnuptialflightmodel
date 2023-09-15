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
    displayFlightData(weatherData);
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
}

function displayFlightData(data){
  const location = data.location;
  const currentWeather = data.current;
  const lat = location.lat;
  const temperatureCelsius = currentWeather.temp_c;
  const weatherCondition = currentWeather.condition.code;
  const humidity = currentWeather.humidity;

  const lowerTempLimitlite = 15;
  const lowerTempLimit = 20;
  const upperTempLimit = 33;
  const humidityThreshholdlite = 75;
  const humidityThreshhold = 85;
  const favorableWeatherConditions = [1000,1003,1006,1009,1135,1150,1153,1063,1087];
  const rainyConditions = [1180,1183,1186,1189,1192,1195,1240,1243,1246,1273,1276]


  if (temperatureCelsius >= lowerTempLimit &&
      temperatureCelsius <= upperTempLimit &&
      humidity >= humidityThreshhold &&
      favorableWeatherConditions.includes(weatherCondition)) {
    console.log("Very favorable for ant mating flights");
  } else if (temperatureCelsius >= lowerTempLimitlite &&
    temperatureCelsius <= upperTempLimit &&
    humidity >= humidityThreshholdlite &&
    favorableWeatherConditions.includes(weatherCondition)) {
    console.log("Slightly favorable conditions for ant mating flights");
  } else if (temperatureCelsius < lowerTempLimitlite) {
    console.log("It is too cold for most mating flights");
  } else if (temperatureCelsius > upperTempLimit) {
    console.log("It is too hot for most mating flights");
  } else if (humidity < humidityThreshholdlite) {
    console.log("It is too dry for most mating flights");
  } else if (rainyConditions.includes(weatherCondition)) {
    console.log("It is too rainy for ants to be out flying");
  } else {
    console.log("Conditions are not good for mating flights");
  }
}








console.log("hello")

