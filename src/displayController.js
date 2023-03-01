import { getWeatherData } from './utils/api';
import extractWeatherData from './extractWeatherData';

const city = document.querySelector('#city');
const searchForm = document.querySelector('#search-form');
const searchBar = document.querySelector('#search-bar');
const errorContainer = document.querySelector('#error-container');
const weatherIconContainer = document.querySelector('#weather-icon-container');
const temperatureContainer = document.querySelector('#temperature');
const feelsLikeContainer = document.querySelector('#feels-like');
const sunriseSunsetContainer = document.querySelector(
  '#sunrise-sunset-container'
);
const degreesCheckbox = document.querySelector('#degrees-checkbox');

function displayCity(cityName) {
  let words = cityName.toLowerCase();
  words = words.split(' ');
  for (let i = 0; i < words.length; i += 1) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  // city.textContent = cityName;
  city.textContent = words.join(' ');
}

function displayInfo(weatherDataObject, isMetric = true) {
  displayIcon(weatherDataObject.icon);
  // displayWeatherDescription(weatherDataObject.weatherDescription);
  displayTemperature(weatherDataObject.temperature, isMetric);
  displayFeelsLike(weatherDataObject.feelsLike, isMetric);
  displayHumidity(weatherDataObject.humidityPercent);
  displaySunriseSunset(
    weatherDataObject.sunRise,
    weatherDataObject.sunSet,
    weatherDataObject.timeZone
  );

  // drawCircle(50, 75);
  console.log(weatherDataObject);

  function displayIcon(weatherIcon) {
    weatherIconContainer.style.backgroundImage = `url(http://openweathermap.org/img/wn/${weatherIcon}@2x.png)`;
  }

  function displayWeatherDescription(weatherDescriptionData) {
    weatherIconContainer.textContent = weatherDescriptionData;
  }

  function displayTemperature(temperatureData, metric) {
    if (metric) {
      temperatureContainer.textContent = `${Math.round(temperatureData)} °C`;
    } else {
      temperatureContainer.textContent = `${Math.round(temperatureData)} °F`;
    }
  }

  function displayFeelsLike(feelsLikeData, metric) {
    if (metric) {
      feelsLikeContainer.textContent = `Feels like ${Math.round(
        feelsLikeData
      )} °C`;
    } else {
      feelsLikeContainer.textContent = `Feels like ${Math.round(
        feelsLikeData
      )} °F`;
    }
  }

  function displayHumidity(humidityData) {}

  function displaySunriseSunset(sunriseData, sunsetData, timezoneOffset) {
    const sunriseDate = new Date(sunriseData * 1000);
    const sunsetDate = new Date(sunsetData * 1000);
    const sunriseHours =
      (sunriseDate.getUTCHours() + timezoneOffset / 60 / 60) % 24;
    const sunriseMinutes = sunriseDate.getUTCMinutes();
    const sunsetHours =
      (sunsetDate.getUTCHours() + timezoneOffset / 60 / 60) % 24;
    const sunsetMinutes = sunsetDate.getUTCMinutes();
    // console.log(`Sunrise: ${sunriseDate.toUTCString()}`);
    // console.log(
    //   `hours: ${(sunriseDate.getUTCHours() + timezoneOffset / 60 / 60) % 24}`
    // );
    // console.log(`minutes: ${sunriseDate.getUTCMinutes()}`);
    // console.log(`Sunset: ${sunsetDate.toUTCString()}`);
    // console.log(
    //   `hours: ${(sunsetDate.getUTCHours() + timezoneOffset / 60 / 60) % 24}`
    // );
    // console.log(`minutes: ${sunsetDate.getUTCMinutes()}`);
    while (sunriseSunsetContainer.firstChild) {
      sunriseSunsetContainer.removeChild(sunriseSunsetContainer.firstChild);
    }
    sunriseSunsetContainer.appendChild(
      drawCircleWithPercentagePoints(
        ((sunriseHours + sunriseMinutes / 60) / 24) * 100,
        ((sunsetHours + sunsetMinutes / 60) / 24) * 100
        // (6 / 24) * 100,
        // (19 / 24) * 100
      )
    );
  }
}

function celsiusToFahrenheit(celsiusTemperature) {
  return (celsiusTemperature * 9) / 5 + 32;
}

async function toggleDegrees() {
  // Toggle the degrees symbol F or C
  try {
    const units = degreesCheckbox.checked ? 'imperial' : 'metric';
    const newWeatherData = await getWeatherData(city.textContent, units);
    displayInfo(extractWeatherData(newWeatherData), units === 'metric');
    // displayCity(searchBar.value);
    clearError();
  } catch (error) {
    displayError();
  }
}

function drawCircleWithPercentagePoints(percentage1, percentage2) {
  const canvas = document.createElement('canvas');
  const diameter = 200;
  canvas.width = diameter * 1.25;
  canvas.height = diameter * 1.25;
  const context = canvas.getContext('2d');
  // const centerX = diameter / 2;
  // const centerY = diameter / 2;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = diameter / 2 - 10;
  // const startAngle = (3 * Math.PI) / 2;
  // const endAngle = startAngle + 2 * Math.PI;

  // const angle1 = startAngle + (percentage1 / 100) * 2 * Math.PI;
  // const angle2 = startAngle + (percentage2 / 100) * 2 * Math.PI;
  const angle1 = (1 - percentage1 / 100) * 2 * Math.PI + Math.PI / 2;
  const angle2 = (1 - percentage2 / 100) * 2 * Math.PI + Math.PI / 2;
  const x1 = centerX + radius * Math.cos(angle1);
  const y1 = centerY + radius * Math.sin(angle1);
  const x2 = centerX + radius * Math.cos(angle2);
  const y2 = centerY + radius * Math.sin(angle2);

  context.beginPath();
  // context.arc(centerX, centerY, radius, angle2, angle1);
  context.arc(
    centerX,
    centerY,
    radius,
    (1 - percentage1 / 100) * 2 * Math.PI + Math.PI / 2,
    (1 - percentage2 / 100) * 2 * Math.PI + Math.PI / 2,
    true
  );
  context.lineWidth = 10;
  context.strokeStyle = `rgb(255, 191, 28)`;
  // const gradient = context.createLinearGradient(x1, y1, x2, y2);
  // gradient.addColorStop('0', 'red');
  // gradient.addColorStop('0.5', 'yellow');
  // gradient.addColorStop('1.0', 'orangeyellow');
  // context.strokeStyle = gradient;
  context.stroke();

  // context.beginPath();
  // context.arc(centerX, centerY, radius, angle1, angle2);
  // context.lineWidth = 8;
  // context.strokeStyle = `rgb(0,0,0)`;
  // context.stroke();

  context.beginPath();
  context.arc(x1, y1, 15, 0, 2 * Math.PI);
  context.fill();

  context.beginPath();
  context.arc(x2, y2, 15, 0, 2 * Math.PI);
  context.fill();

  const result = document.createElement('div');
  result.appendChild(canvas);
  return result;

  function degrees_to_radians(degrees) {
    return degrees * (Math.PI / 180);
  }
}

function loadDefaultEventListeners() {
  searchForm.onsubmit = async (event) => {
    try {
      event.preventDefault();

      const units = degreesCheckbox.checked ? 'imperial' : 'metric';
      const newWeatherData = await getWeatherData(searchBar.value, units);
      displayInfo(extractWeatherData(newWeatherData), units === 'metric');
      displayCity(searchBar.value);
      clearError();
    } catch (error) {
      displayError();
    }
  };

  degreesCheckbox.addEventListener('change', toggleDegrees);
}

function displayError() {
  //   const errorDiv = document.createElement('div');
  //   errorDiv.classList.add('error');
  errorContainer.textContent = 'City not found. Please enter a valid city name';
  //   searchForm.parentNode.insertBefore(errorDiv, searchForm.nextSibling);
}

function clearError() {
  errorContainer.textContent = '';
}

export { displayCity, displayInfo, loadDefaultEventListeners };
