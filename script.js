const apiKey = '68b15e01af2dffe6b3757aa66c0cd14c'; 
const searchBtn = document.getElementById('searchBtn');
const locationInput = document.getElementById('locationInput');
const weatherInfo = document.getElementById('weatherInfo');

searchBtn.addEventListener('click', () => {
  const location = locationInput.value;
  getWeatherData(location);
});

async function getWeatherData(location) {
  try {
    const response = await fetch(`https://crossorigin.me/https://api.openweathermap.org/data/2.5/weather?q=London&appid=68b15e01af2dffe6b3757aa66c0cd14c&units=metric    `);
    const data = await response.json();
    displayWeatherData(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    weatherInfo.innerHTML = '<p>Unable to fetch weather data. Please try again later.</p>';
  }
}

function displayWeatherData(data) {
  const { name, main, weather } = data;
  const temperature = main.temp;
  const description = weather[0].description;
  
  const weatherHTML = `
    <h2>${name}</h2>
    <p>Temperature: ${temperature}°C</p>
    <p>Weather: ${description}</p>
  `;
  
  weatherInfo.innerHTML = weatherHTML;
}
