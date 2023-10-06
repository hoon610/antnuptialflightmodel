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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n    font-family: 'Roboto', sans-serif;\r\n    padding: 2rem;\r\n    padding-bottom: 10rem;\r\n    font-size: 1rem;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    color: aliceblue;\r\n    margin: 0; /* Remove default margin to avoid extra space */\r\n    position: relative; \r\n    overflow-x: hidden; /* Add this to hide horizontal overflow */\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n    body {\r\n        padding: 1rem;\r\n        padding-bottom: 12rem; /* Increase padding for mobile devices */\r\n    }\r\n    \r\n}\r\n\r\n@media (min-width: 800px) {\r\n    body {\r\n        padding: 4rem; \r\n        font-size: 1rem;\r\n    }\r\n}\r\n.main{\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n.condition{\r\n    font-size: 3rem;\r\n    margin-bottom: 0rem;\r\n    margin-top: 0rem;\r\n}\r\n.location{\r\n    font-size: 1.2rem;\r\n    margin-top: .5rem;\r\n    margin-bottom: 0.5rem;\r\n}\r\n.date, .time{\r\n    font-size: .75rem;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n}\r\n.temperature{\r\n    margin-bottom: 0.2rem;\r\n    margin-top: 2rem;\r\n    font-size: 4rem;\r\n    font-weight: 700;\r\n}\r\n.displayCF{\r\n    margin-top: .1rem;\r\n    font-size: .8rem;\r\n    margin-bottom: 3rem;\r\n}\r\n.feelslikelabel, .humiditylabel, .uvlabel{\r\n    font-size: 1.2rem;\r\n    margin-bottom: 0.2rem;\r\n    margin-top: 2rem;\r\n}\r\n.feelslike, .humidity, .uv{\r\n    font-size: 1.5rem;\r\n    font-weight: 600;\r\n    margin-bottom: 0.2rem;\r\n    margin-top: 0.2rem;\r\n}\r\n.flight{\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n\r\n}\r\n.status{\r\n    background-color: rgb(38, 183, 240);\r\n    color: rgb(54, 52, 52);\r\n    padding: 2rem;\r\n    font-size: 3rem;\r\n    border-radius: 2rem;\r\n    text-align: center;\r\n}\r\n.factcontainer {\r\n    max-width: 500px;\r\n    background-color: rgb(38, 183, 240);\r\n    margin: 0 auto; \r\n    padding: 10px; \r\n    box-sizing: border-box; \r\n    align-items: center;\r\n    justify-content: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-radius: 2rem;\r\n    margin-bottom: 4rem;\r\n}\r\n.funfactlabel{\r\n    font-size: 2rem;\r\n    margin-bottom: 1rem;\r\n    margin-top: 1rem;\r\n}\r\n.funfact{\r\n    font-size: 1.5rem;\r\n    color: rgb(54, 52, 52);\r\n    margin-left: 3rem;\r\n    margin-right: 3rem;\r\n    margin-top: 0;\r\n    text-align: center;\r\n}\r\nfooter{\r\n    background-color: rgb(229, 239, 248);\r\n    text-align: center;\r\n    position: absolute; \r\n    bottom: 0; \r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    padding: 20px 0; \r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n\r\n}\r\n.about{\r\n    color: black;\r\n    text-align: left;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n}\r\n.github-icon:hover {\r\n    color: #0073e6; \r\n}\r\n.maincontent{\r\n    margin-bottom: 5rem;\r\n    flex-grow: 1;\r\n}\r\n.github-icon{\r\n    width: 1.5rem; \r\n    height: 1.5rem\r\n}\r\n.footername{\r\n    color: black;\r\n    margin-right: 0.5rem;\r\n}\r\n.footernameline{\r\n    display: flex;\r\n    align-items: center;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weatherapp/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weatherapp/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _background_clear_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background/clear.svg */ \"./src/background/clear.svg\");\n/* harmony import */ var _background_cloudy_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background/cloudy.svg */ \"./src/background/cloudy.svg\");\n/* harmony import */ var _background_rainy_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./background/rainy.svg */ \"./src/background/rainy.svg\");\n/* harmony import */ var _background_snow_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./background/snow.svg */ \"./src/background/snow.svg\");\n/* harmony import */ var _background_thunderstorm_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./background/thunderstorm.svg */ \"./src/background/thunderstorm.svg\");\n/* harmony import */ var _background_default_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./background/default.svg */ \"./src/background/default.svg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nsearchWeather(\"Lowell\")\r\nconst searchButton = document.getElementById('searchButton');\r\n\r\nsearchButton.addEventListener('click', function () {\r\n    searchWeather();\r\n});\r\n\r\n\r\nasync function searchWeather() {\r\n    let locationInput = document.getElementById('locationInput').value;\r\n    if (!locationInput) {\r\n        locationInput = \"Lowell\";\r\n    }\r\n\r\n    const weatherData = await fetchWeather(locationInput);\r\n    displayWeather(weatherData);\r\n    displayFlightData(weatherData);\r\n    displayFunFact();\r\n}\r\n\r\nasync function fetchWeather(location) {\r\n    const apiKey = '1cd253fc61af4715bf3191326231808';\r\n    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`, { mode: 'cors' });\r\n    const rawWeatherData = await response.json();\r\n    return rawWeatherData;\r\n}\r\n\r\n\r\nfunction displayWeather(data) {\r\n    const location = data.location;\r\n    const currentWeather = data.current;\r\n\r\n    const cityName = location.name;\r\n    const country = location.country;\r\n    const localtime = location.localtime;\r\n    const inputDate = new Date(localtime);\r\n    const dateFormatOptions = {\r\n        year: '2-digit',\r\n        month: 'short',\r\n        day: 'numeric',\r\n    };\r\n    const formattedDate = inputDate.toLocaleDateString('en-US', dateFormatOptions);\r\n\r\n    const timeFormatOptions = {\r\n        hour: 'numeric',\r\n        minute: 'numeric',\r\n        hour12: true,\r\n    };\r\n    const formattedTime = inputDate.toLocaleTimeString('en-US', timeFormatOptions);\r\n\r\n\r\n    const temperatureCelsius = currentWeather.temp_c;\r\n    const temperatureFahrenheit = currentWeather.temp_f;\r\n    const weatherCondition = currentWeather.condition.text;\r\n    const windSpeedMph = currentWeather.wind_mph;\r\n    const windSpeedKph = currentWeather.wind_kph;\r\n    const humidity = currentWeather.humidity;\r\n    const feelstemperatureCelsius = currentWeather.feelslike_c;\r\n    const feelstemperatureFahrenheit = currentWeather.feelslike_f;\r\n    const uv = currentWeather.uv;\r\n    const weatherConditionCode = currentWeather.condition.code;\r\n\r\n\r\n    const conditionElement = document.querySelector('p.condition');\r\n    conditionElement.textContent = weatherCondition;\r\n    const locationElement = document.querySelector('p.location');\r\n    locationElement.textContent = cityName + ', ' + country;\r\n    const dateElement = document.querySelector('p.date');\r\n    dateElement.textContent = formattedDate;\r\n    const timeElement = document.querySelector('p.time');\r\n    timeElement.textContent = formattedTime;\r\n    const temperatureElement = document.querySelector('p.temperature');\r\n    temperatureElement.textContent = `${temperatureCelsius} °C`;\r\n    const feelslikeElement = document.querySelector('p.feelslike');\r\n    feelslikeElement.textContent = `${feelstemperatureCelsius} °C`;\r\n    const humidityElement = document.querySelector('p.humidity');\r\n    humidityElement.textContent = humidity + '%';\r\n    const uvElement = document.querySelector('p.uv');\r\n    uvElement.textContent = uv;\r\n    \r\n    \r\n    const clearConditions = [1000];\r\n    const cloudyConditions = [1003,1006,1009];\r\n    const rainyConditions = [1063,1072,1150,1153,1168,1171,1180,1183,1186,1189,1192,1195,1198,1201,1240,1243,1246];\r\n    const snowyConditions = [1066,1069,1114,1117,1204,1207,1210,1213,1216,1219,1222,1225,1237,1249,1252,1255,1258,1261,1264];\r\n    const thunderstormConditions = [1087,1273,1276,1279,1282];\r\n    \r\n    const backgroundImages = {\r\n      clear: _background_clear_svg__WEBPACK_IMPORTED_MODULE_1__,\r\n      cloudy: _background_cloudy_svg__WEBPACK_IMPORTED_MODULE_2__,\r\n      rainy: _background_rainy_svg__WEBPACK_IMPORTED_MODULE_3__,\r\n      snow: _background_snow_svg__WEBPACK_IMPORTED_MODULE_4__,\r\n      thunderstorm: _background_thunderstorm_svg__WEBPACK_IMPORTED_MODULE_5__,\r\n      default: _background_default_svg__WEBPACK_IMPORTED_MODULE_6__,\r\n    };\r\n\r\n    const selectedBackground = backgroundImages[getBackgroundKey(weatherConditionCode)];\r\n    document.body.style.backgroundImage = `url(${selectedBackground})`;\r\n    function getBackgroundKey(conditionCode) {\r\n      if (clearConditions.includes(conditionCode)) {\r\n        return 'clear';\r\n      } else if (cloudyConditions.includes(conditionCode)) {\r\n        return 'cloudy';\r\n      } else if (rainyConditions.includes(conditionCode)) {\r\n        return 'rainy';\r\n      } else if (snowyConditions.includes(conditionCode)) {\r\n        return 'snow';\r\n      } else if (thunderstormConditions.includes(conditionCode)) {\r\n        return 'thunderstorm';\r\n      } else {\r\n        return 'default';\r\n      }\r\n    }\r\n}\r\n\r\nfunction displayFlightData(data) {\r\n    const location = data.location;\r\n  const currentWeather = data.current;\r\n  const lat = location.lat;\r\n  const temperatureCelsius = currentWeather.temp_c;\r\n  const weatherCondition = currentWeather.condition.code;\r\n  const humidity = currentWeather.humidity;\r\n\r\n  const lowerTempLimitlite = 15;\r\n  const lowerTempLimit = 20;\r\n  const upperTempLimit = 33;\r\n  const humidityThreshholdlite = 75;\r\n  const humidityThreshhold = 85;\r\n  const favorableWeatherConditions = [1000,1003,1006,1009,1135,1150,1153,1063,1087];\r\n  const rainyConditions = [1180,1183,1186,1189,1192,1195,1240,1243,1246,1273,1276]\r\n  const statusElement = document.querySelector('p.status');\r\n\r\n  if (temperatureCelsius >= lowerTempLimit &&\r\n      temperatureCelsius <= upperTempLimit &&\r\n      humidity >= humidityThreshhold &&\r\n      favorableWeatherConditions.includes(weatherCondition)) {\r\n    statusElement.textContent = \"Very favorable conditions for ant mating flights\";\r\n  } else if (temperatureCelsius >= lowerTempLimitlite &&\r\n    temperatureCelsius <= upperTempLimit &&\r\n    humidity >= humidityThreshholdlite &&\r\n    favorableWeatherConditions.includes(weatherCondition)) {\r\n    statusElement.textContent = \"Slightly cold, but still possible for ant mating flights\";\r\n  } else if (temperatureCelsius < lowerTempLimitlite) {\r\n    statusElement.textContent = \"It is too cold for ant mating flights\";\r\n  } else if (temperatureCelsius > upperTempLimit) {\r\n    statusElement.textContent = \"It is too hot for ant mating flights\";\r\n  } else if (humidity < humidityThreshholdlite) {\r\n    statusElement.textContent = \"It is too dry for ant mating flights\";\r\n  } else if (rainyConditions.includes(weatherCondition)) {\r\n    statusElement.textContent = \"It is too rainy for ant mating flights\";\r\n  } else {\r\n    statusElement.textContent = \"Conditions are not good for ant mating flights\";\r\n  }\r\n}\r\n\r\nfunction displayFunFact(){\r\n    const facts = [\r\n        \"Due to their small size, ants are extremely prone to dessication\",\r\n        \"Ants are incredibly strong relative to their size. They can carry objects that are 50 times their body weight. If a human had the same strength, they could lift a car!\",\r\n        \"Ant colonies are often referred to as superorganisms because the individual ants work together so harmoniously. They have division of labor, communication, and even warfare between different colonies.\",\r\n        \"Except for Antarctica, you can find ants on every continent on Earth. There are over 12,000 known species of ants.\",\r\n        \"Ants are among the oldest insects on the planet. They evolved from wasp-like ancestors in the mid-Cretaceous period, about 110 to 130 million years ago.\",\r\n        \"Ants leave pheromone trails to communicate with other ants. These trails can lead to food sources, signal danger, and help ants find their way back to the nest.\",\r\n        \"Some species of ants are fungus farmers. They cultivate fungi in their nests by bringing plant material that the fungi can grow on. In return, they eat the fungi.\",\r\n        \"Ants have demonstrated problem-solving abilities, such as finding the shortest path to a food source, even without prior knowledge of the terrain.\",\r\n        \"Ants are not just scavengers; they are omnivores. While they primarily feed on nectar, seeds, and other insects, some species are known to hunt larger prey.\",\r\n        \"Ant queens can live for many years, often outliving the workers in the colony. Some ant queens are known to live for up to 30 years.\",\r\n        \"Ants go through complete metamorphosis, which means they have four stages in their lifecycle: egg, larva, pupa, and adult.\",\r\n        \"In many cultures, ants are consumed as food. They are rich in protein and are considered a delicacy in some regions.\",\r\n        \"Some people (including me!) keep ants as pets in special ant farms or formicariums. They are fascinating to observe and study.\",\r\n        \"Ants play a crucial role in seed dispersal, soil aeration, and pest control. They are often called ecosystem engineers for their impact on the environment.\",\r\n        \"Some ant species can float on water and swim when necessary. They can form rafts or bridges to navigate across bodies of water.\"\r\n    ];\r\n    const randomIndex = Math.floor(Math.random() * facts.length);\r\n    const randomFact = facts[randomIndex];\r\n    const factElement = document.querySelector('p.funfact');\r\n    factElement.textContent = randomFact;\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ }),

/***/ "./src/background/clear.svg":
/*!**********************************!*\
  !*** ./src/background/clear.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d883155e146f8bde37b1.svg\";\n\n//# sourceURL=webpack://weatherapp/./src/background/clear.svg?");

/***/ }),

/***/ "./src/background/cloudy.svg":
/*!***********************************!*\
  !*** ./src/background/cloudy.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8f97f5086d993c6cdc6b.svg\";\n\n//# sourceURL=webpack://weatherapp/./src/background/cloudy.svg?");

/***/ }),

/***/ "./src/background/default.svg":
/*!************************************!*\
  !*** ./src/background/default.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"78b73f92004553cf488e.svg\";\n\n//# sourceURL=webpack://weatherapp/./src/background/default.svg?");

/***/ }),

/***/ "./src/background/rainy.svg":
/*!**********************************!*\
  !*** ./src/background/rainy.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"904cc9cf7d61ad11278e.svg\";\n\n//# sourceURL=webpack://weatherapp/./src/background/rainy.svg?");

/***/ }),

/***/ "./src/background/snow.svg":
/*!*********************************!*\
  !*** ./src/background/snow.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"50d1314b1a779fdb0150.svg\";\n\n//# sourceURL=webpack://weatherapp/./src/background/snow.svg?");

/***/ }),

/***/ "./src/background/thunderstorm.svg":
/*!*****************************************!*\
  !*** ./src/background/thunderstorm.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"55986b430d083cd6203d.svg\";\n\n//# sourceURL=webpack://weatherapp/./src/background/thunderstorm.svg?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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