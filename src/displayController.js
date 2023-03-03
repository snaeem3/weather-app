import { getWeatherData } from './utils/api';
import extractWeatherData from './extractWeatherData';

const city = document.querySelector('#city');
const searchForm = document.querySelector('#search-form');
const searchBar = document.querySelector('#search-bar');
const errorContainer = document.querySelector('#error-container');
const weatherDataContainer = document.querySelector('#weather-data-container');
const weatherIconContainer = document.querySelector('#weather-icon-container');
const weatherDescriptionContainer = document.querySelector(
  '#weather-description-container'
);
const temperatureContainer = document.querySelector('#temperature');
const feelsLikeContainer = document.querySelector('#feels-like');
const humidityContainer = document.querySelector('#humidity-data');
const pressureContainer = document.querySelector('#pressure-data');
const windContainer = document.querySelector('#wind-data');
const sunriseSunsetContainer = document.querySelector(
  '#sunrise-sunset-container'
);
const sunriseSunsetIconContainer = document.querySelector(
  '#sunrise-sunset-icons'
);
const sunRiseTime = document.querySelector('#sunrise-time');
const sunSetTime = document.querySelector('#sunset-time');
const degreesCheckbox = document.querySelector('#degrees-checkbox');
const loadingDiv = document.querySelector('#loading');

function displayCity(cityName) {
  let words = cityName.toLowerCase();
  words = words.split(' ');
  for (let i = 0; i < words.length; i += 1) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  city.textContent = words.join(' ');
}

function displayInfo(weatherDataObject, isMetric = true) {
  displayIcon(weatherDataObject.icon);
  displayWeatherDescription(weatherDataObject.weatherDescription);
  displayTemperature(weatherDataObject.temperature, isMetric);
  displayFeelsLike(weatherDataObject.feelsLike, isMetric);
  displayHumidity(weatherDataObject.humidityPercent);
  displayPressure(weatherDataObject.pressure);
  displayWind(
    weatherDataObject.windSpeed,
    weatherDataObject.windDirection,
    isMetric
  );
  displaySunriseSunset(
    weatherDataObject.sunRise,
    weatherDataObject.sunSet,
    weatherDataObject.timeZone,
    weatherDataObject.time
  );

  function displayIcon(weatherIcon) {
    weatherIconContainer.style.backgroundImage = `url(http://openweathermap.org/img/wn/${weatherIcon}@2x.png)`;
  }

  function displayWeatherDescription(weatherDescriptionData) {
    weatherDescriptionContainer.textContent = weatherDescriptionData;
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

  function displayHumidity(humidityData) {
    humidityContainer.textContent = `${humidityData}%`;
  }

  function displayPressure(pressureData) {
    pressureContainer.textContent = `${pressureData} hPa`;
  }

  function displayWind(windSpeed, windDirection, metric) {
    const windUnits = isMetric ? 'm/s' : 'mph';
    windContainer.textContent = `${windSpeed} ${windUnits} ${degToDirection(
      windDirection
    )}`;

    function degToDirection(degrees) {
      // Define array of directions
      const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

      // Split into the 8 directions
      let index = (degrees * 8) / 360;

      // Round to nearest integer.
      index = Math.round(index, 0);

      // Ensure it's within 0-7
      index = (index + 8) % 8;

      return directions[index];
    }
  }

  function displaySunriseSunset(sunriseData, sunsetData, timezoneOffset) {
    const sunriseDate = new Date(sunriseData * 1000);
    const sunsetDate = new Date(sunsetData * 1000);
    const sunriseHours =
      (sunriseDate.getUTCHours() + timezoneOffset / 60 / 60) % 24;
    const sunriseMinutes = sunriseDate.getUTCMinutes();
    const sunsetHours =
      (sunsetDate.getUTCHours() + timezoneOffset / 60 / 60) % 24;
    const sunsetMinutes = sunsetDate.getUTCMinutes();
    const timeDate = new Date();
    const timeHours = (timeDate.getUTCHours() + timezoneOffset / 60 / 60) % 24;
    const timeMinutes = timeDate.getUTCMinutes();

    sunRiseTime.textContent = ` ${getLocalTime(sunriseData, timezoneOffset)}`;
    sunSetTime.textContent = ` ${getLocalTime(sunsetData, timezoneOffset)}`;
    // console.log(`Sunset: ${sunsetDate.toUTCString()}`);
    // console.log(
    //   `hours: ${(sunriseDate.getUTCHours() + timezoneOffset / 60 / 60) % 24}`
    // );
    // console.log(`minutes: ${sunriseDate.getUTCMinutes()}`);
    // console.log(`Sunset: ${sunsetDate.toUTCString()}`);
    // console.log(
    //   `hours: ${(sunsetDate.getUTCHours() + timezoneOffset / 60 / 60) % 24}`
    // );
    // console.log(`minutes: ${sunsetDate.getUTCMinutes()}`);
    while (sunriseSunsetIconContainer.firstChild) {
      sunriseSunsetIconContainer.removeChild(
        sunriseSunsetIconContainer.firstChild
      );
    }
    sunriseSunsetIconContainer.appendChild(
      drawCircleWithPercentagePoints(
        ((sunriseHours + sunriseMinutes / 60) / 24) * 100,
        ((sunsetHours + sunsetMinutes / 60) / 24) * 100,
        ((timeHours + timeMinutes / 60) / 24) * 100
      )
    );
  }
}

function getLocalTime(utc, timezoneOffset) {
  // Convert the UTC time to milliseconds
  const time = new Date(utc * 1000);

  // Adjust for the timezone offset
  const localTime = new Date(time.valueOf() + timezoneOffset * 1000);

  // Format the local time as a string
  const hours = localTime.getUTCHours().toString().padStart(2, '0');
  const minutes = localTime.getMinutes().toString().padStart(2, '0');
  const seconds = localTime.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
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

function drawCircleWithPercentagePoints(percentage1, percentage2, percentage3) {
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
  const angle3 = (1 - percentage3 / 100) * 2 * Math.PI + Math.PI / 2;
  const x1 = centerX + radius * Math.cos(angle1);
  const y1 = centerY + radius * Math.sin(angle1);
  const x2 = centerX + radius * Math.cos(angle2);
  const y2 = centerY + radius * Math.sin(angle2);
  const x3 = centerX + radius * Math.cos(angle3);
  const y3 = centerX + radius * Math.sin(angle3);

  // Day Arc
  context.beginPath();
  context.arc(
    centerX,
    centerY,
    radius,
    (1 - percentage1 / 100) * 2 * Math.PI + Math.PI / 2,
    (1 - percentage2 / 100) * 2 * Math.PI + Math.PI / 2,
    true
  );
  context.lineWidth = 5;
  context.strokeStyle = `rgb(135, 206, 235)`;
  let gradient = context.createLinearGradient(x1, y1, x2, y2);
  // context.strokeStyle = gradient;
  context.stroke();

  // Night arc
  context.beginPath();
  context.arc(centerX, centerY, radius, angle1, angle2);
  context.lineWidth = 4;
  context.strokeStyle = `rgb(0,0,0)`;
  gradient = context.createLinearGradient(x1, y1, x2, y2);
  gradient.addColorStop('0', 'blue');
  // gradient.addColorStop('0.5', 'indigo');
  gradient.addColorStop('1.0', 'indigo');
  // context.strokeStyle = gradient;
  context.stroke();

  // Sunrise icon
  context.beginPath();
  context.arc(x1, y1, 15, 0, 1 * Math.PI, true);
  context.fillStyle = `rgb(236, 93, 255)`;
  context.fill();

  // Sunset icon
  context.beginPath();
  context.arc(x2, y2, 15, 0, 1 * Math.PI, true);
  context.fillStyle = `rgb(255, 30, 30)`;
  context.fill();

  // Sun icon
  context.beginPath();
  context.arc(x3, y3, 15, 0, 2 * Math.PI);
  context.fillStyle = `orange`;
  context.fill();

  const result = document.createElement('div');
  result.appendChild(canvas);
  return result;
}

function loadDefaultEventListeners() {
  searchForm.onsubmit = async (event) => {
    try {
      event.preventDefault();

      displayLoadMessage();
      const units = degreesCheckbox.checked ? 'imperial' : 'metric';
      const newWeatherData = await getWeatherData(searchBar.value, units);
      displayInfo(extractWeatherData(newWeatherData), units === 'metric');
      displayCity(searchBar.value);
      clearError();
    } catch (error) {
      displayError();
    }
    clearLoadMessage();
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

function displayLoadMessage() {
  loadingDiv.style.display = 'flex';
  loadingDiv.classList.add('active');
}

function clearLoadMessage() {
  loadingDiv.style.display = 'none';
  loadingDiv.classList.remove('active');
}

export {
  displayCity,
  displayInfo,
  loadDefaultEventListeners,
  clearLoadMessage,
};
