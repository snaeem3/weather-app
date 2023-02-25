/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayCity\": () => (/* binding */ displayCity),\n/* harmony export */   \"displayInfo\": () => (/* binding */ displayInfo),\n/* harmony export */   \"loadDefaultEventListeners\": () => (/* binding */ loadDefaultEventListeners)\n/* harmony export */ });\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/api */ \"./src/utils/api.js\");\n/* harmony import */ var _extractWeatherData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extractWeatherData */ \"./src/extractWeatherData.js\");\n\n\n\nconst city = document.querySelector('#city');\nconst searchForm = document.querySelector('#search-form');\nconst searchBar = document.querySelector('#search-bar');\nconst errorContainer = document.querySelector('#error-container');\nconst weatherIconContainer = document.querySelector('#weather-icon-container');\nconst temperature = document.querySelector('#temperature');\nconst degreesCheckbox = document.querySelector('#degrees-checkbox');\n\nfunction displayCity(cityName) {\n  city.textContent = cityName;\n}\n\nfunction displayInfo(weatherDataObject) {\n  displayTemperature(weatherDataObject.temperature);\n  displayWeatherDescription(weatherDataObject.weatherDescription);\n  displayFeelsLike(weatherDataObject.feelsLike);\n  displayHumidity(weatherDataObject.humidityPercent);\n\n  function displayTemperature(temperatureData) {\n    temperature.textContent = temperatureData;\n  }\n\n  function displayWeatherDescription(weatherDescriptionData) {\n    weatherIconContainer.textContent = weatherDescriptionData;\n  }\n\n  function displayFeelsLike(feelsLikeData) {}\n\n  function displayHumidity(humidityData) {}\n}\n\nfunction toggleDegrees() {\n  // Toggle the degrees symbol F or C\n}\n\nfunction loadDefaultEventListeners() {\n  searchForm.onsubmit = async (event) => {\n    try {\n      event.preventDefault();\n      // console.log(searchBar.value);\n      const newWeatherData = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(searchBar.value);\n      displayInfo((0,_extractWeatherData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(newWeatherData));\n      clearError();\n    } catch (error) {\n      displayError();\n    }\n  };\n\n  degreesCheckbox.addEventListener('change', toggleDegrees);\n}\n\nfunction displayError() {\n  //   const errorDiv = document.createElement('div');\n  //   errorDiv.classList.add('error');\n  errorContainer.textContent = 'City not found. Please enter a valid city name';\n  //   searchForm.parentNode.insertBefore(errorDiv, searchForm.nextSibling);\n}\n\nfunction clearError() {\n  errorContainer.textContent = '';\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/displayController.js?");

/***/ }),

/***/ "./src/extractWeatherData.js":
/*!***********************************!*\
  !*** ./src/extractWeatherData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ extractWeatherData)\n/* harmony export */ });\nfunction extractWeatherData(weatherData) {\n  // Returns an object of selected weather data variables\n  const temperature = weatherData.main.temp;\n  const weatherDescription = weatherData.weather[0].description;\n  const feelsLike = weatherData.main.feels_like;\n  const humidityPercent = weatherData.main.humidity;\n  const sunRise = weatherData.sys.sunrise;\n  const sunSet = weatherData.sys.sunset;\n  return {\n    temperature,\n    weatherDescription,\n    feelsLike,\n    humidityPercent,\n    sunRise,\n    sunSet,\n  };\n}\n\n\n//# sourceURL=webpack://weather-app/./src/extractWeatherData.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayController */ \"./src/displayController.js\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/api */ \"./src/utils/api.js\");\n/* harmony import */ var _extractWeatherData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extractWeatherData */ \"./src/extractWeatherData.js\");\n\n\n\n\nconsole.log('Weather App page loaded');\nmain();\n\nasync function main() {\n  const weatherData = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)('London');\n  console.log(weatherData);\n  console.log(`Temperature: ${weatherData.main.temp}`);\n  console.table((0,_extractWeatherData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(weatherData));\n\n  (0,_displayController__WEBPACK_IMPORTED_MODULE_0__.displayInfo)((0,_extractWeatherData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(weatherData));\n  (0,_displayController__WEBPACK_IMPORTED_MODULE_0__.loadDefaultEventListeners)();\n}\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/utils/api.js":
/*!**************************!*\
  !*** ./src/utils/api.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeatherData\": () => (/* binding */ getWeatherData)\n/* harmony export */ });\nconst API_KEY = 'd8990a92b3e6fcbc8aebc61fc2f193ec';\n\nasync function getWeatherData(location) {\n  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;\n  const response = await fetch(url);\n  if (!response.ok) {\n    throw new Error(`HTTP error! status: ${response.status}`);\n  }\n  const weatherData = await response.json();\n  return weatherData;\n}\n\n\n//# sourceURL=webpack://weather-app/./src/utils/api.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;