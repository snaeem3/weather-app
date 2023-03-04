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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/magnify.svg */ \"./src/images/magnify.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Oxygen&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --section-padding: 8px;\\n  --section-margin: 1rem;\\n  --border-radius-default: 0.75rem;\\n  --primary-color: #9aa9fd;\\n  --primary-color-dark: #008181;\\n  --shade-color: #494949da;\\n  --color-shadow: grey;\\n}\\n\\n*,\\n*::before,\\n*::after {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  font-family: \\\"Oxygen\\\", sans-serif;\\n}\\n\\nbutton,\\ninput,\\nselect,\\ntextarea {\\n  font-family: inherit;\\n  font-size: 100%;\\n}\\n\\nbutton {\\n  background-color: var(--primary-color);\\n  color: white;\\n  border: none;\\n  border-radius: 32px;\\n  padding: var(--section-padding) calc(var(--section-padding) * 2);\\n  text-decoration: none;\\n  font-size: 1.5rem;\\n  transition-duration: 0.2s;\\n}\\n\\nbutton:not(:disabled),\\ninput:not(:disabled),\\ninput:not(:disabled) + label,\\na {\\n  cursor: pointer;\\n}\\n\\nbutton:not(:disabled):hover {\\n  background-color: var(--primary-color-dark);\\n}\\n\\nul {\\n  list-style-type: none;\\n}\\n\\nbody {\\n  background: rgba(241, 241, 241, 0.849);\\n}\\n\\nmain {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 1rem;\\n  font-size: 1.25rem;\\n}\\n\\nmain > * {\\n  padding: var(--section-padding);\\n}\\n\\nh1 {\\n  font-size: 4rem;\\n}\\n\\n#search-form {\\n  position: relative;\\n}\\n\\ninput[type=\\\"text\\\"] {\\n  border-radius: var(--border-radius-default);\\n  padding: var(--section-padding);\\n  border: 0;\\n  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);\\n}\\n\\n#city-submit-btn {\\n  position: absolute;\\n  right: 1rem;\\n  top: 0.75rem;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  padding: 1rem;\\n  background-color: inherit;\\n  /* vertical-align: top; */\\n}\\n\\nh2 {\\n  font-size: 3rem;\\n}\\n\\n.error {\\n  color: red;\\n}\\n\\n#weather-data-container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 0.5rem;\\n  background: white;\\n  /* border: solid 1px rgba(0, 0, 0); */\\n  border-radius: var(--border-radius-default);\\n  padding: 1rem;\\n  box-shadow: 2px 5px 5px var(--color-shadow);\\n  position: relative;\\n}\\n\\n/* Hide all child elements except #loading when actively fetching data */\\n#weather-data-container:has(.active) > :not(#loading) {\\n  opacity: 0;\\n}\\n#weather-data-container:has(.active) {\\n  background: #5c5c5caf;\\n}\\n\\n#weather-temperature-container {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n#weather-icon-container {\\n  padding: 4rem;\\n  background: no-repeat center center;\\n  background-size: cover;\\n  position: relative;\\n}\\n\\n#weather-description-container {\\n  opacity: 0;\\n  position: absolute;\\n  width: max-content;\\n  left: 50%;\\n  transform: translateX(-50%) translateY(200%);\\n  transition: opacity 250ms ease-in-out;\\n  font-style: italic;\\n  color: rgb(63, 63, 63);\\n  /* transition-delay: 250ms; */\\n}\\n\\n#weather-icon-container:hover #weather-description-container {\\n  opacity: 1;\\n}\\n\\n#temperature-container {\\n  padding: var(--section-padding);\\n  text-align: right;\\n}\\n\\n#temperature {\\n  font-size: 2rem;\\n}\\n\\n#feels-like {\\n  font-size: 1rem;\\n}\\n\\ntable {\\n  table-layout: fixed;\\n  /* width: 100%; */\\n  border-collapse: collapse;\\n  /* background: rgb(196, 236, 255); */\\n  border-radius: var(--border-radius-default);\\n  /* padding: var(--section-padding); */\\n  /* border-top: solid 1px gray; */\\n}\\n\\ntable td {\\n  border-left: 1px solid gray;\\n  border-right: 1px solid gray;\\n}\\n\\ntable td:first-child {\\n  border-left: none;\\n}\\n\\ntable td:last-child {\\n  border-right: none;\\n}\\n\\nth {\\n  text-align: center;\\n  width: 33%;\\n  padding: 0.5rem;\\n}\\n\\ntd {\\n  padding: 1rem;\\n  text-align: center;\\n  letter-spacing: 1px;\\n  white-space: nowrap;\\n}\\n\\n/* Sunrise sunset styling */\\n#sunrise-sunset-container {\\n  display: grid;\\n  place-items: center;\\n}\\n\\n#sunrise-sunset-container > * {\\n  grid-column: 1;\\n  grid-row: 1;\\n}\\n\\n#sunrise-sunset-times > li::before {\\n  display: inline-block;\\n  font-weight: bold;\\n}\\n\\n#sunrise-time::before {\\n  content: \\\"Sunrise\\\";\\n  color: rgb(236, 93, 255);\\n}\\n\\n#sunset-time::before {\\n  content: \\\"Sunset\\\";\\n  color: rgb(255, 30, 30);\\n}\\n\\n/* Toggle switch styling */\\ninput[type=\\\"checkbox\\\"] {\\n  position: absolute;\\n  opacity: 0;\\n  z-index: -1;\\n}\\n\\n.check-trail {\\n  display: flex;\\n  align-items: center;\\n  width: 8em;\\n  height: 4em;\\n  background: #2c3e50;\\n  border-radius: 2.5em;\\n  transition: all 0.5s ease;\\n  cursor: pointer;\\n}\\n\\n.check-handler {\\n  display: flex;\\n  margin-left: 0.5em;\\n  justify-content: center;\\n  align-items: center;\\n  width: 3em;\\n  height: 3em;\\n  background: #34495e;\\n  border-radius: 50%;\\n  transition: all 0.5s ease;\\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);\\n}\\n.check-handler:before {\\n  content: \\\"C\\\";\\n  color: white;\\n  font-size: 2em;\\n  font-weight: bold;\\n}\\n\\ninput[type=\\\"checkbox\\\"]:checked + .check-trail {\\n  background: #16a085;\\n}\\ninput[type=\\\"checkbox\\\"]:checked + .check-trail .check-handler {\\n  margin-left: 50%;\\n  background: #1abc9c;\\n}\\ninput[type=\\\"checkbox\\\"]:checked + .check-trail .check-handler::before {\\n  content: \\\"F\\\";\\n}\\n\\nfooter {\\n  background: var(--primary-color);\\n  text-align: center;\\n  margin-top: var(--section-margin);\\n  padding: var(--section-padding);\\n}\\n\\n.icon {\\n  vertical-align: bottom;\\n}\\n\\n#loading {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  /* background-color: rgba(0, 0, 0, 0.5); */\\n  color: white;\\n  font-size: 3rem;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearLoadMessage\": () => (/* binding */ clearLoadMessage),\n/* harmony export */   \"displayCity\": () => (/* binding */ displayCity),\n/* harmony export */   \"displayInfo\": () => (/* binding */ displayInfo),\n/* harmony export */   \"loadDefaultEventListeners\": () => (/* binding */ loadDefaultEventListeners)\n/* harmony export */ });\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/api */ \"./src/utils/api.js\");\n/* harmony import */ var _extractWeatherData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extractWeatherData */ \"./src/extractWeatherData.js\");\n\n\n\nconst city = document.querySelector('#city');\nconst searchForm = document.querySelector('#search-form');\nconst searchBar = document.querySelector('#search-bar');\nconst errorContainer = document.querySelector('#error-container');\nconst weatherDataContainer = document.querySelector('#weather-data-container');\nconst weatherIconContainer = document.querySelector('#weather-icon-container');\nconst weatherDescriptionContainer = document.querySelector(\n  '#weather-description-container'\n);\nconst temperatureContainer = document.querySelector('#temperature');\nconst feelsLikeContainer = document.querySelector('#feels-like');\nconst humidityContainer = document.querySelector('#humidity-data');\nconst pressureContainer = document.querySelector('#pressure-data');\nconst windContainer = document.querySelector('#wind-data');\nconst sunriseSunsetContainer = document.querySelector(\n  '#sunrise-sunset-container'\n);\nconst sunriseSunsetIconContainer = document.querySelector(\n  '#sunrise-sunset-icons'\n);\nconst sunRiseTime = document.querySelector('#sunrise-time');\nconst sunSetTime = document.querySelector('#sunset-time');\nconst degreesCheckbox = document.querySelector('#degrees-checkbox');\nconst loadingDiv = document.querySelector('#loading');\n\nfunction displayCity(cityName) {\n  let words = cityName.toLowerCase();\n  words = words.split(' ');\n  for (let i = 0; i < words.length; i += 1) {\n    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);\n  }\n  city.textContent = words.join(' ');\n}\n\nfunction displayInfo(weatherDataObject, isMetric = true) {\n  displayIcon(weatherDataObject.icon);\n  displayWeatherDescription(weatherDataObject.weatherDescription);\n  displayTemperature(weatherDataObject.temperature, isMetric);\n  displayFeelsLike(weatherDataObject.feelsLike, isMetric);\n  displayHumidity(weatherDataObject.humidityPercent);\n  displayPressure(weatherDataObject.pressure);\n  displayWind(\n    weatherDataObject.windSpeed,\n    weatherDataObject.windDirection,\n    isMetric\n  );\n  displaySunriseSunset(\n    weatherDataObject.sunRise,\n    weatherDataObject.sunSet,\n    weatherDataObject.timeZone,\n    weatherDataObject.time\n  );\n\n  function displayIcon(weatherIcon) {\n    weatherIconContainer.style.backgroundImage = `url(http://openweathermap.org/img/wn/${weatherIcon}@2x.png)`;\n  }\n\n  function displayWeatherDescription(weatherDescriptionData) {\n    weatherDescriptionContainer.textContent = weatherDescriptionData;\n  }\n\n  function displayTemperature(temperatureData, metric) {\n    if (metric) {\n      temperatureContainer.textContent = `${Math.round(temperatureData)} °C`;\n    } else {\n      temperatureContainer.textContent = `${Math.round(temperatureData)} °F`;\n    }\n  }\n\n  function displayFeelsLike(feelsLikeData, metric) {\n    if (metric) {\n      feelsLikeContainer.textContent = `Feels like ${Math.round(\n        feelsLikeData\n      )} °C`;\n    } else {\n      feelsLikeContainer.textContent = `Feels like ${Math.round(\n        feelsLikeData\n      )} °F`;\n    }\n  }\n\n  function displayHumidity(humidityData) {\n    humidityContainer.textContent = `${humidityData}%`;\n  }\n\n  function displayPressure(pressureData) {\n    pressureContainer.textContent = `${pressureData} hPa`;\n  }\n\n  function displayWind(windSpeed, windDirection, metric) {\n    const windUnits = isMetric ? 'm/s' : 'mph';\n    windContainer.textContent = `${windSpeed} ${windUnits} ${degToDirection(\n      windDirection\n    )}`;\n\n    function degToDirection(degrees) {\n      // Define array of directions\n      const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];\n\n      // Split into the 8 directions\n      let index = (degrees * 8) / 360;\n\n      // Round to nearest integer.\n      index = Math.round(index, 0);\n\n      // Ensure it's within 0-7\n      index = (index + 8) % 8;\n\n      return directions[index];\n    }\n  }\n\n  function displaySunriseSunset(sunriseData, sunsetData, timezoneOffset) {\n    const sunriseDate = new Date(sunriseData * 1000);\n    const sunsetDate = new Date(sunsetData * 1000);\n    const sunriseHours =\n      (sunriseDate.getUTCHours() + timezoneOffset / 60 / 60) % 24;\n    const sunriseMinutes = sunriseDate.getUTCMinutes();\n    const sunsetHours =\n      (sunsetDate.getUTCHours() + timezoneOffset / 60 / 60) % 24;\n    const sunsetMinutes = sunsetDate.getUTCMinutes();\n    const timeDate = new Date();\n    const timeHours = (timeDate.getUTCHours() + timezoneOffset / 60 / 60) % 24;\n    const timeMinutes = timeDate.getUTCMinutes();\n\n    sunRiseTime.textContent = ` ${getLocalTime(sunriseData, timezoneOffset)}`;\n    sunSetTime.textContent = ` ${getLocalTime(sunsetData, timezoneOffset)}`;\n    // console.log(`Sunset: ${sunsetDate.toUTCString()}`);\n    // console.log(\n    //   `hours: ${(sunriseDate.getUTCHours() + timezoneOffset / 60 / 60) % 24}`\n    // );\n    // console.log(`minutes: ${sunriseDate.getUTCMinutes()}`);\n    // console.log(`Sunset: ${sunsetDate.toUTCString()}`);\n    // console.log(\n    //   `hours: ${(sunsetDate.getUTCHours() + timezoneOffset / 60 / 60) % 24}`\n    // );\n    // console.log(`minutes: ${sunsetDate.getUTCMinutes()}`);\n    while (sunriseSunsetIconContainer.firstChild) {\n      sunriseSunsetIconContainer.removeChild(\n        sunriseSunsetIconContainer.firstChild\n      );\n    }\n    sunriseSunsetIconContainer.appendChild(\n      drawCircleWithPercentagePoints(\n        ((sunriseHours + sunriseMinutes / 60) / 24) * 100,\n        ((sunsetHours + sunsetMinutes / 60) / 24) * 100,\n        ((timeHours + timeMinutes / 60) / 24) * 100\n      )\n    );\n  }\n}\n\nfunction getLocalTime(utc, timezoneOffset) {\n  // Convert the UTC time to milliseconds\n  const time = new Date(utc * 1000);\n\n  // Adjust for the timezone offset\n  const localTime = new Date(time.valueOf() + timezoneOffset * 1000);\n\n  // Format the local time as a string\n  const hours = localTime.getUTCHours().toString().padStart(2, '0');\n  const minutes = localTime.getMinutes().toString().padStart(2, '0');\n  const seconds = localTime.getSeconds().toString().padStart(2, '0');\n  return `${hours}:${minutes}`;\n}\n\nfunction celsiusToFahrenheit(celsiusTemperature) {\n  return (celsiusTemperature * 9) / 5 + 32;\n}\n\nasync function toggleDegrees() {\n  // Toggle the degrees symbol F or C\n  try {\n    const units = degreesCheckbox.checked ? 'imperial' : 'metric';\n    const newWeatherData = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(city.textContent, units);\n    displayInfo((0,_extractWeatherData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(newWeatherData), units === 'metric');\n    // displayCity(searchBar.value);\n    clearError();\n  } catch (error) {\n    displayError();\n  }\n}\n\nfunction drawCircleWithPercentagePoints(percentage1, percentage2, percentage3) {\n  const canvas = document.createElement('canvas');\n  const diameter = 200;\n  canvas.width = diameter * 1.25;\n  canvas.height = diameter * 1.25;\n  const context = canvas.getContext('2d');\n  const centerX = canvas.width / 2;\n  const centerY = canvas.height / 2;\n  const radius = diameter / 2 - 10;\n\n  const angle1 = (1 - percentage1 / 100) * 2 * Math.PI + Math.PI / 2;\n  const angle2 = (1 - percentage2 / 100) * 2 * Math.PI + Math.PI / 2;\n  const angle3 = (1 - percentage3 / 100) * 2 * Math.PI + Math.PI / 2;\n  const x1 = centerX + radius * Math.cos(angle1);\n  const y1 = centerY + radius * Math.sin(angle1);\n  const x2 = centerX + radius * Math.cos(angle2);\n  const y2 = centerY + radius * Math.sin(angle2);\n  const x3 = centerX + radius * Math.cos(angle3);\n  const y3 = centerX + radius * Math.sin(angle3);\n\n  // Day Arc\n  context.beginPath();\n  context.arc(\n    centerX,\n    centerY,\n    radius,\n    (1 - percentage1 / 100) * 2 * Math.PI + Math.PI / 2,\n    (1 - percentage2 / 100) * 2 * Math.PI + Math.PI / 2,\n    true\n  );\n  context.lineWidth = 5;\n  context.strokeStyle = `rgb(135, 206, 235)`;\n  let gradient = context.createLinearGradient(x1, y1, x2, y2);\n  // context.strokeStyle = gradient;\n  context.stroke();\n\n  // Night arc\n  context.beginPath();\n  context.arc(centerX, centerY, radius, angle1, angle2);\n  context.lineWidth = 4;\n  context.strokeStyle = `rgb(0,0,0)`;\n  gradient = context.createLinearGradient(x1, y1, x2, y2);\n  gradient.addColorStop('0', 'blue');\n  // gradient.addColorStop('0.5', 'indigo');\n  gradient.addColorStop('1.0', 'indigo');\n  // context.strokeStyle = gradient;\n  context.stroke();\n\n  // Sunrise icon\n  context.beginPath();\n  context.arc(x1, y1, 15, 0, 1 * Math.PI, true);\n  context.fillStyle = `rgb(236, 93, 255)`;\n  context.fill();\n\n  // Sunset icon\n  context.beginPath();\n  context.arc(x2, y2, 15, 0, 1 * Math.PI, true);\n  context.fillStyle = `rgb(255, 30, 30)`;\n  context.fill();\n\n  // Sun icon\n  context.beginPath();\n  context.arc(x3, y3, 15, 0, 2 * Math.PI);\n  context.fillStyle = `orange`;\n  context.fill();\n\n  const result = document.createElement('div');\n  result.appendChild(canvas);\n  return result;\n}\n\nfunction loadDefaultEventListeners() {\n  searchForm.onsubmit = async (event) => {\n    try {\n      event.preventDefault();\n\n      displayLoadMessage();\n      const units = degreesCheckbox.checked ? 'imperial' : 'metric';\n      const newWeatherData = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(searchBar.value, units);\n      displayInfo((0,_extractWeatherData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(newWeatherData), units === 'metric');\n      displayCity(searchBar.value);\n      clearError();\n    } catch (error) {\n      displayError();\n    }\n    clearLoadMessage();\n  };\n\n  degreesCheckbox.addEventListener('change', toggleDegrees);\n}\n\nfunction displayError() {\n  //   const errorDiv = document.createElement('div');\n  //   errorDiv.classList.add('error');\n  errorContainer.textContent = 'City not found. Please enter a valid city name';\n  //   searchForm.parentNode.insertBefore(errorDiv, searchForm.nextSibling);\n}\n\nfunction clearError() {\n  errorContainer.textContent = '';\n}\n\nfunction displayLoadMessage() {\n  loadingDiv.style.display = 'flex';\n  loadingDiv.classList.add('active');\n}\n\nfunction clearLoadMessage() {\n  loadingDiv.style.display = 'none';\n  loadingDiv.classList.remove('active');\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/displayController.js?");

/***/ }),

/***/ "./src/extractWeatherData.js":
/*!***********************************!*\
  !*** ./src/extractWeatherData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ extractWeatherData)\n/* harmony export */ });\nfunction extractWeatherData(weatherData) {\n  // Returns an object of selected weather data variables\n  const temperature = weatherData.main.temp;\n  const weatherDescription = weatherData.weather[0].description;\n  const { icon } = weatherData.weather[0];\n  const feelsLike = weatherData.main.feels_like;\n  const humidityPercent = weatherData.main.humidity;\n  const { pressure } = weatherData.main;\n  const windSpeed = weatherData.wind.speed;\n  const windDirection = weatherData.wind.deg;\n  const sunRise = weatherData.sys.sunrise;\n  const sunSet = weatherData.sys.sunset;\n  const timeZone = weatherData.timezone;\n  const time = weatherData.dt;\n  return {\n    temperature,\n    weatherDescription,\n    icon,\n    feelsLike,\n    humidityPercent,\n    pressure,\n    windSpeed,\n    windDirection,\n    sunRise,\n    sunSet,\n    timeZone,\n    time,\n  };\n}\n\n\n//# sourceURL=webpack://weather-app/./src/extractWeatherData.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayController */ \"./src/displayController.js\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/api */ \"./src/utils/api.js\");\n/* harmony import */ var _extractWeatherData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extractWeatherData */ \"./src/extractWeatherData.js\");\n\n\n\n\n\nconst STARTING_CITY = 'London';\n\nconsole.log('Weather App page loaded');\nmain();\n\nasync function main() {\n  const weatherData = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__.getWeatherData)(STARTING_CITY);\n  // console.log(weatherData);\n  // console.log(`Temperature: ${weatherData.main.temp}`);\n  // console.table(extractWeatherData(weatherData));\n\n  (0,_displayController__WEBPACK_IMPORTED_MODULE_1__.displayCity)(STARTING_CITY);\n  (0,_displayController__WEBPACK_IMPORTED_MODULE_1__.displayInfo)((0,_extractWeatherData__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(weatherData));\n  (0,_displayController__WEBPACK_IMPORTED_MODULE_1__.clearLoadMessage)();\n  (0,_displayController__WEBPACK_IMPORTED_MODULE_1__.loadDefaultEventListeners)();\n}\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/utils/api.js":
/*!**************************!*\
  !*** ./src/utils/api.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeatherData\": () => (/* binding */ getWeatherData)\n/* harmony export */ });\nconst API_KEY = 'd8990a92b3e6fcbc8aebc61fc2f193ec';\n\nasync function getWeatherData(location, units = 'metric') {\n  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=${API_KEY}`;\n  const response = await fetch(url);\n  if (!response.ok) {\n    throw new Error(`HTTP error! status: ${response.status}`);\n  }\n  const weatherData = await response.json();\n  return weatherData;\n}\n\n\n//# sourceURL=webpack://weather-app/./src/utils/api.js?");

/***/ }),

/***/ "./src/images/magnify.svg":
/*!********************************!*\
  !*** ./src/images/magnify.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"54ff7732bb1a5ff166c6.svg\";\n\n//# sourceURL=webpack://weather-app/./src/images/magnify.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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