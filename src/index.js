import './styles.css';
import {
  displayCity,
  displayInfo,
  loadDefaultEventListeners,
} from './displayController';
import { getWeatherData } from './utils/api';
import extractWeatherData from './extractWeatherData';

const STARTING_CITY = 'London';

console.log('Weather App page loaded');
main();

async function main() {
  const weatherData = await getWeatherData(STARTING_CITY);
  console.log(weatherData);
  console.log(`Temperature: ${weatherData.main.temp}`);
  console.table(extractWeatherData(weatherData));

  displayCity(STARTING_CITY);
  displayInfo(extractWeatherData(weatherData));
  loadDefaultEventListeners();
}
