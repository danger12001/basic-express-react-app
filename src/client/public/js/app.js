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

	var TodoApp = __webpack_require__(1);
	ReactDOM.render(React.createElement(TodoApp, null), document.getElementById('app'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var TodoList = __webpack_require__(2);
	var TodoApp = React.createClass({
	  displayName: 'TodoApp',

	  getInitialState: function getInitialState() {
	    return { items: [], text: '' };
	  },
	  onChange: function onChange(e) {
	    this.setState({ text: e.target.value });
	  },
	  handleSubmit: function handleSubmit(e) {
	    e.preventDefault();
	    var nextItems = this.state.items.concat([{ text: this.state.text, id: Date.now() }]);
	    var nextText = '';
	    this.setState({ items: nextItems, text: nextText });
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'TODO'
	      ),
	      React.createElement(TodoList, { items: this.state.items }),
	      React.createElement(
	        'form',
	        { onSubmit: this.handleSubmit },
	        React.createElement('input', { onChange: this.onChange, value: this.state.text }),
	        React.createElement(
	          'button',
	          null,
	          'Add #' + (this.state.items.length + 1)
	        )
	      )
	    );
	  }
	});
	module.exports = TodoApp;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	var TodoList = React.createClass({
	  displayName: "TodoList",

	  render: function render() {
	    var createItem = function createItem(item) {
	      return React.createElement(
	        "li",
	        { key: item.id },
	        item.text
	      );
	    };
	    return React.createElement(
	      "ul",
	      null,
	      this.props.items.map(createItem)
	    );
	  }
	});
	module.exports = TodoList;

/***/ }
/******/ ]);