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

	'use strict';

	var Menu = __webpack_require__(1);

	ReactDOM.render(React.createElement(Menu, null)
	// document.getElementById('app')
	);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var MenuItem = __webpack_require__(2);
	var Menu = React.createClass({
	  displayName: 'Menu',

	  render: function render() {
	    return React.createElement(
	      'ul',
	      null,
	      React.createElement(MenuItem, { isActive: true }),
	      ', ',
	      React.createElement(MenuItem, null)
	    );
	    // document.getElementById('app');
	  }
	});
	module.exports = Menu;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	var MenuItem = React.createClass({
	  displayName: 'MenuItem',

	  render: function render() {
	    var style = { color: this.props.isActive ? 'red' : 'blue' };
	    if (this.props.isActive) {
	      return React.createElement(
	        'li',
	        { style: style },
	        'This is Active'
	      );
	    } else {
	      return React.createElement(
	        'li',
	        { style: style },
	        'This is not'
	      );
	    }
	  }

	});
	module.exports = MenuItem;

/***/ }
/******/ ]);