import { getWeatherData } from './utils/api';
import extractWeatherData from './extractWeatherData';

const city = document.querySelector('#city');
const searchForm = document.querySelector('#search-form');
const searchBar = document.querySelector('#search-bar');
const errorContainer = document.querySelector('#error-container');
const weatherIconContainer = document.querySelector('#weather-icon-container');
const temperatureContainer = document.querySelector('#temperature');
const feelsLikeContainer = document.querySelector('#feels-like');
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
    // console.log(sunriseDate.toUTCString());
    // console.log(
    //   `hours: ${(sunriseDate.getUTCHours() + timezoneOffset / 60 / 60) % 24}`
    // );
    // console.log(`minutes: ${sunriseDate.getUTCMinutes()}`);
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
