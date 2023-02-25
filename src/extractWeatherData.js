export default function extractWeatherData(weatherData) {
  // Returns an object of selected weather data variables
  const temperature = weatherData.main.temp;
  const weatherDescription = weatherData.weather[0].description;
  const feelsLike = weatherData.main.feels_like;
  const humidityPercent = weatherData.main.humidity;
  const sunRise = weatherData.sys.sunrise;
  const sunSet = weatherData.sys.sunset;
  return {
    temperature,
    weatherDescription,
    feelsLike,
    humidityPercent,
    sunRise,
    sunSet,
  };
}
