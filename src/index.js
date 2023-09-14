import './style.css';


const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', function() {
    searchWeather();
});


async function searchWeather() {
    const locationInput = document.getElementById('locationInput').value;
    const weatherData = await fetchWeather(locationInput);
    const processedData = processData(weatherData);
    displayWeather(processedData);
}

async function fetchWeather(location){
    const apiKey = '1cd253fc61af4715bf3191326231808';
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`, { mode: 'cors' });
    const rawWeatherData = await response.json();
    return rawWeatherData;
}

function processData(){
    console.log("hi")
}
function displayWeather(){
    
}


console.log("hello")

