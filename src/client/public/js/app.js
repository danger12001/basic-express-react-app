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

	// var ListItem = require('./listItem');

	var listBox = __webpack_require__(1);
	var items = ["test", "testing"];
	// var list = require('./list');
	// var addForm = require('./addForm');
	ReactDOM.render(React.createElement("listBox", { items: items }), document.getElementById('app'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var list = __webpack_require__(2);
	// var addForm = require('./addForm');

	var listBox = React.createClass({
	  displayName: "listBox",


	  render: function render() {
	    var items = this.state.items;
	    return React.createElement(
	      "div",
	      { className: "listBox" },
	      React.createElement(
	        "h1",
	        null,
	        "TO DO"
	      ),
	      React.createElement("list", { items: items }),
	      "// ",
	      React.createElement("addForm", null)
	    );
	  }
	});
	module.exports = listBox;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var ListItem = __webpack_require__(3);
	var list = React.createClass({
	  displayName: "list",

	  render: function render() {
	    var items = this.props.items;

	    return React.createElement(
	      "div",
	      { className: "list" },
	      React.createElement(
	        "ul",
	        null,
	        items.map(function (item, index) {
	          return React.createElement(ListItem, { key: index, text: items, checked: false });
	        })
	      )
	    );
	  }
	});
	module.exports = list;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	var listItem = React.createClass({
	  displayName: 'listItem',

	  getDefaultProps: function getDefaultProps() {
	    return {
	      checked: true,
	      text: 'text'
	    };
	  },
	  getInitialState: function getInitialState() {
	    if (this.props.checked) {
	      return {
	        checked: true
	      };
	    } else {
	      return {
	        checked: false
	      };
	    }
	  },
	  activeToggle: function activeToggle() {
	    this.setState({
	      checked: !this.state.checked
	    });
	  },

	  render: function render() {

	    var style = { color: this.state.checked ? 'black' : 'grey', textDecoration: this.state.checked ? "none" : "line-through" };
	    if (this.state.checked) {
	      // return <li style={style}>This is Active </li>;
	      return React.createElement(
	        'li',
	        null,
	        React.createElement('input', { onClick: this.activeToggle, type: 'checkbox' }),
	        ' ',
	        React.createElement(
	          'p',
	          { style: style },
	          this.props.text
	        )
	      );
	    } else {
	      return React.createElement(
	        'li',
	        null,
	        React.createElement('input', { onClick: this.activeToggle, type: 'checkbox' }),
	        ' ',
	        React.createElement(
	          'p',
	          { style: style },
	          this.props.text
	        )
	      );
	      // return <li style={style} onClick={this.activeToggle}>This is Not Active</li>;
	    }
	  }

	});

	module.exports = listItem;

/***/ }
/******/ ]);