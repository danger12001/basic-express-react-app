/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var MenuItem = __webpack_require__(1);
	var activeItem = MenuItem("");
	var inactiveItem = MenuItem("isActive={true}");

	ReactDOM.render(React.createElement('ul', null, activeItem, inactiveItem), document.getElementById('app'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	function MenuItem(props) {
	  console.log(props);
	  var style = {
	    color: props.isActive ? 'red' : 'green'
	  };
	  return React.createElement(
	    'li',
	    { style: style },
	    'This is great!'
	  );
	  //   if (isActive) {
	  //       return <li>This is awesome!</li>
	  //     } else {
	  //       return <li>This is great!</li>
	  //     }
	}

	module.exports = MenuItem;

/***/ }
/******/ ]);