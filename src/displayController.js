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
  city.textContent = cityName;
}

function displayInfo(weatherDataObject) {
  displayTemperature(weatherDataObject.temperature);
  displayWeatherDescription(weatherDataObject.weatherDescription);
  displayFeelsLike(weatherDataObject.feelsLike);
  displayHumidity(weatherDataObject.humidityPercent);

  function displayTemperature(temperatureData) {
    temperature.textContent = temperatureData;
  }

  function displayWeatherDescription(weatherDescriptionData) {
    weatherIconContainer.textContent = weatherDescriptionData;
  }

  function displayFeelsLike(feelsLikeData) {}

  function displayHumidity(humidityData) {}
}

function toggleDegrees() {
  // Toggle the degrees symbol F or C
}

function loadDefaultEventListeners() {
  searchForm.onsubmit = async (event) => {
    try {
      event.preventDefault();
      // console.log(searchBar.value);
      const newWeatherData = await getWeatherData(searchBar.value);
      displayInfo(extractWeatherData(newWeatherData));
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
