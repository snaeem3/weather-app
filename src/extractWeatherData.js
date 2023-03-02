export default function extractWeatherData(weatherData) {
  // Returns an object of selected weather data variables
  const temperature = weatherData.main.temp;
  const weatherDescription = weatherData.weather[0].description;
  const { icon } = weatherData.weather[0];
  const feelsLike = weatherData.main.feels_like;
  const humidityPercent = weatherData.main.humidity;
  const { pressure } = weatherData.main;
  const windSpeed = weatherData.wind.speed;
  const windDirection = weatherData.wind.deg;
  const sunRise = weatherData.sys.sunrise;
  const sunSet = weatherData.sys.sunset;
  const timeZone = weatherData.timezone;
  const time = weatherData.dt;
  return {
    temperature,
    weatherDescription,
    icon,
    feelsLike,
    humidityPercent,
    pressure,
    windSpeed,
    windDirection,
    sunRise,
    sunSet,
    timeZone,
    time,
  };
}
