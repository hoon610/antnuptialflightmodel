import './style.css';
import clear from './background/clear.svg'
import cloudy from './background/cloudy.svg'
import rainy from './background/rainy.svg'
import snow from './background/snow.svg'
import thunderstorm from './background/thunderstorm.svg'
import defaultBackground from './background/default.svg'


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
    const weatherConditionCode = currentWeather.condition.code;


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
    
    
    const clearConditions = [1000];
    const cloudyConditions = [1003,1006,1009];
    const rainyConditions = [1063,1072,1150,1153,1168,1171,1180,1183,1186,1189,1192,1195,1198,1201,1240,1243,1246];
    const snowyConditions = [1066,1069,1114,1117,1204,1207,1210,1213,1216,1219,1222,1225,1237,1249,1252,1255,1258,1261,1264];
    const thunderstormConditions = [1087,1273,1276,1279,1282];
    
    const backgroundImages = {
      clear,
      cloudy,
      rainy,
      snow,
      thunderstorm,
      default: defaultBackground,
    };

    const selectedBackground = backgroundImages[getBackgroundKey(weatherConditionCode)];
    document.body.style.backgroundImage = `url(${selectedBackground})`;
    function getBackgroundKey(conditionCode) {
      if (clearConditions.includes(conditionCode)) {
        return 'clear';
      } else if (cloudyConditions.includes(conditionCode)) {
        return 'cloudy';
      } else if (rainyConditions.includes(conditionCode)) {
        return 'rainy';
      } else if (snowyConditions.includes(conditionCode)) {
        return 'snow';
      } else if (thunderstormConditions.includes(conditionCode)) {
        return 'thunderstorm';
      } else {
        return 'default';
      }
    }
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
  const statusElement = document.querySelector('p.status');

  if (temperatureCelsius >= lowerTempLimit &&
      temperatureCelsius <= upperTempLimit &&
      humidity >= humidityThreshhold &&
      favorableWeatherConditions.includes(weatherCondition)) {
    statusElement.textContent = "Very favorable conditions for ant mating flights";
  } else if (temperatureCelsius >= lowerTempLimitlite &&
    temperatureCelsius <= upperTempLimit &&
    humidity >= humidityThreshholdlite &&
    favorableWeatherConditions.includes(weatherCondition)) {
    statusElement.textContent = "Slightly cold, but still possible for ant mating flights";
  } else if (temperatureCelsius < lowerTempLimitlite) {
    statusElement.textContent = "It is too cold for ant mating flights";
  } else if (temperatureCelsius > upperTempLimit) {
    statusElement.textContent = "It is too hot for ant mating flights";
  } else if (humidity < humidityThreshholdlite) {
    statusElement.textContent = "It is too dry for ant mating flights";
  } else if (rainyConditions.includes(weatherCondition)) {
    statusElement.textContent = "It is too rainy for ant mating flights";
  } else {
    statusElement.textContent = "Conditions are not good for ant mating flights";
  }
}

function displayFunFact(){
    const facts = [
        "Due to their small size, ants are extremely prone to dessication",
        "Ants are incredibly strong relative to their size. They can carry objects that are 50 times their body weight. If a human had the same strength, they could lift a car!",
        "Ant colonies are often referred to as superorganisms because the individual ants work together so harmoniously. They have division of labor, communication, and even warfare between different colonies.",
        "Except for Antarctica, you can find ants on every continent on Earth. There are over 12,000 known species of ants.",
        "Ants are among the oldest insects on the planet. They evolved from wasp-like ancestors in the mid-Cretaceous period, about 110 to 130 million years ago.",
        "Ants leave pheromone trails to communicate with other ants. These trails can lead to food sources, signal danger, and help ants find their way back to the nest.",
        "Some species of ants are fungus farmers. They cultivate fungi in their nests by bringing plant material that the fungi can grow on. In return, they eat the fungi.",
        "Ants have demonstrated problem-solving abilities, such as finding the shortest path to a food source, even without prior knowledge of the terrain.",
        "Ants are not just scavengers; they are omnivores. While they primarily feed on nectar, seeds, and other insects, some species are known to hunt larger prey.",
        "Ant queens can live for many years, often outliving the workers in the colony. Some ant queens are known to live for up to 30 years.",
        "Ants go through complete metamorphosis, which means they have four stages in their lifecycle: egg, larva, pupa, and adult.",
        "In many cultures, ants are consumed as food. They are rich in protein and are considered a delicacy in some regions.",
        "Some people (including me!) keep ants as pets in special ant farms or formicariums. They are fascinating to observe and study.",
        "Ants play a crucial role in seed dispersal, soil aeration, and pest control. They are often called ecosystem engineers for their impact on the environment.",
        "Some ant species can float on water and swim when necessary. They can form rafts or bridges to navigate across bodies of water."
    ];
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];
    const factElement = document.querySelector('p.funfact');
    factElement.textContent = randomFact;
}




