const API_KEY = 'd8990a92b3e6fcbc8aebc61fc2f193ec';

export async function getWeatherData(location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const weatherData = await response.json();
  return weatherData;
}
