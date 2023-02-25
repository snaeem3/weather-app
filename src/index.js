import { displayInfo, loadDefaultEventListeners } from './displayController';
import { getWeatherData } from './utils/api';
import extractWeatherData from './extractWeatherData';

console.log('Weather App page loaded');
main();

async function main() {
  const weatherData = await getWeatherData('London');
  console.log(weatherData);
  console.log(`Temperature: ${weatherData.main.temp}`);
  console.table(extractWeatherData(weatherData));

  displayInfo(extractWeatherData(weatherData));
  loadDefaultEventListeners();
}
