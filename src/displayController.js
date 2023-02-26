import { getWeatherData } from './utils/api';
import extractWeatherData from './extractWeatherData';

const city = document.querySelector('#city');
const searchForm = document.querySelector('#search-form');
const searchBar = document.querySelector('#search-bar');
const errorContainer = document.querySelector('#error-container');
const weatherIconContainer = document.querySelector('#weather-icon-container');
const temperature = document.querySelector('#temperature');
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
  displayTemperature(weatherDataObject.temperature, isMetric);
  displayWeatherDescription(weatherDataObject.weatherDescription);
  displayFeelsLike(weatherDataObject.feelsLike, isMetric);
  displayHumidity(weatherDataObject.humidityPercent);

  function displayTemperature(temperatureData, metric) {
    if (metric) {
      temperature.textContent = temperatureData;
    } else {
      temperature.textContent = celsiusToFahrenheit(temperatureData);
    }
  }

  function displayWeatherDescription(weatherDescriptionData) {
    weatherIconContainer.textContent = weatherDescriptionData;
  }

  function displayFeelsLike(feelsLikeData, metric) {}

  function displayHumidity(humidityData) {}
}

function celsiusToFahrenheit(celsiusTemperature) {
  return (celsiusTemperature * 9) / 5 + 32;
}

async function toggleDegrees() {
  // Toggle the degrees symbol F or C
  try {
    const units = degreesCheckbox.checked ? 'imperial' : 'metric';
    const newWeatherData = await getWeatherData(city.textContent, units);
    displayInfo(extractWeatherData(newWeatherData));
    // displayCity(searchBar.value);
    clearError();
  } catch (error) {
    displayError();
  }

  // displayInfo(currentWeatherData, degreesCheckbox.checked);
}

function loadDefaultEventListeners() {
  searchForm.onsubmit = async (event) => {
    try {
      event.preventDefault();

      const units = degreesCheckbox.checked ? 'imperial' : 'metric';
      const newWeatherData = await getWeatherData(searchBar.value, units);
      displayInfo(extractWeatherData(newWeatherData));
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
