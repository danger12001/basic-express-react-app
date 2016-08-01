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

	var ListItem = __webpack_require__(1);
	var listBox = __webpack_require__(2);
	var list = __webpack_require__(3);
	var addForm = __webpack_require__(4);

	ReactDOM.render(
	//  React.createElement('ul', null, <ListItem checked={true}/>),
	React.createElement(
	  'listBox',
	  null,
	  React.createElement(
	    'list',
	    null,
	    React.createElement(ListItem, null)
	  ),
	  React.createElement('addForm', null)
	), document.getElementById('app'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var listItem = React.createClass({
	  displayName: 'listItem',

	  getDefaultProps: function getDefaultProps() {
	    return {
	      checked: true
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
	          'Not Active'
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
	          'Active'
	        )
	      );
	      // return <li style={style} onClick={this.activeToggle}>This is Not Active</li>;
	    }
	  }

	});

	module.exports = listItem;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	var listBox = React.createClass({
	  displayName: "listBox",

	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "listBox" },
	      React.createElement(
	        "h1",
	        null,
	        "TO DO "
	      )
	    );
	  }
	});
	module.exports = listBox;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	var list = React.createClass({
	  displayName: "list",

	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "list" },
	      React.createElement("ul", null)
	    );
	  }
	});
	module.exports = list;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	var addForm = React.createClass({
	  displayName: 'addForm',

	  getInitialState: function getInitialState() {
	    return { text: '' };
	  },

	  handleTextChange: function handleTextChange(e) {
	    this.setState({ text: e.target.value });
	  },
	  handleSubmit: function handleSubmit(e) {
	    e.preventDefault();
	    var text = this.state.text.trim();
	    if (!text) {
	      return;
	    }
	    this.setState({ text: '' });
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'addForm' },
	      React.createElement('input', { type: 'text', placeholder: 'Insert Item here', value: this.state.text, onChange: this.handleTextChange }),
	      React.createElement('input', { type: 'submit' })
	    );
	  }
	});
	module.exports = addForm;

/***/ }
/******/ ]);