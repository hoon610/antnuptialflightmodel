import './style.css';

searchWeather("Lowell")
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', function () {
    searchWeather();
});


async function searchWeather() {
    let locationInput = document.getElementById('locationInput').value;
    if (!locationInput) {
        locationInput = "Lowell";
    }

    const weatherData = await fetchWeather(locationInput);
    displayWeather(weatherData);
    displayFlightData(weatherData);
    displayFunFact();
}

async function fetchWeather(location) {
    const apiKey = '1cd253fc61af4715bf3191326231808';
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`, { mode: 'cors' });
    const rawWeatherData = await response.json();
    return rawWeatherData;
}


function displayWeather(data) {
    const location = data.location;
    const currentWeather = data.current;

    const cityName = location.name;
    const country = location.country;
    const localtime = location.localtime;
    const inputDate = new Date(localtime);
    const dateFormatOptions = {
        year: '2-digit',
        month: 'short',
        day: 'numeric',
    };
    const formattedDate = inputDate.toLocaleDateString('en-US', dateFormatOptions);

    const timeFormatOptions = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    };
    const formattedTime = inputDate.toLocaleTimeString('en-US', timeFormatOptions);


    const temperatureCelsius = currentWeather.temp_c;
    const temperatureFahrenheit = currentWeather.temp_f;
    const weatherCondition = currentWeather.condition.text;
    const windSpeedMph = currentWeather.wind_mph;
    const windSpeedKph = currentWeather.wind_kph;
    const humidity = currentWeather.humidity;
    const feelstemperatureCelsius = currentWeather.feelslike_c;
    const feelstemperatureFahrenheit = currentWeather.feelslike_f;
    const uv = currentWeather.uv;


    const conditionElement = document.querySelector('p.condition');
    conditionElement.textContent = weatherCondition;
    const locationElement = document.querySelector('p.location');
    locationElement.textContent = cityName + ', ' + country;
    const dateElement = document.querySelector('p.date');
    dateElement.textContent = formattedDate;
    const timeElement = document.querySelector('p.time');
    timeElement.textContent = formattedTime;
    const temperatureElement = document.querySelector('p.temperature');
    temperatureElement.textContent = `${temperatureCelsius} °C`;
    const feelslikeElement = document.querySelector('p.feelslike');
    feelslikeElement.textContent = `${feelstemperatureCelsius} °C`;
    const humidityElement = document.querySelector('p.humidity');
    humidityElement.textContent = humidity + '%';
    const uvElement = document.querySelector('p.uv');
    uvElement.textContent = uv;

}

function displayFlightData(data) {
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

function displayFunFact(){
    const facts = [
        "Due to their small size, ants are extremely prone to dessication",
        "String 2",
        "String 3",
        "String 4",
        "String 5"
    ];
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];
    const factElement = document.querySelector('p.funfact');
    factElement.textContent = randomFact;
}




