console.log("Weather App page loaded"),async function(e){const a=await fetch("https://api.openweathermap.org/data/2.5/weather?q=London&APPID=d8990a92b3e6fcbc8aebc61fc2f193ec");console.log(a)}();