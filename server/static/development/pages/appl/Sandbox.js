module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/appl/Sandbox.js":
/*!*******************************!*\
  !*** ./pages/appl/Sandbox.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.scss */ "./pages/appl/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../editor */ "./pages/editor.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! debounce */ "debounce");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\cwcra\\Documents\\Code Chrysalis\\Final_Project\\Hire-Me\\dragon\\pages\\appl\\Sandbox.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // default code

const code = `import x from 'x';

// edit this example

function Greet() {
  return <span>Hello World!</span>
}

<Greet />
`;

class SandBox extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      code
    });

    _defineProperty(this, "editor", null);

    _defineProperty(this, "el", null);

    _defineProperty(this, "onCodeChange", ({
      target: {
        value
      }
    }) => {
      this.setState({
        code: value
      });
      this.run(value);
    });

    _defineProperty(this, "run", debounce__WEBPACK_IMPORTED_MODULE_4___default()(() => {
      const {
        code
      } = this.state;
      this.editor.run(code);
    }, 500));

    _defineProperty(this, "submitCode", ({
      target: {
        value
      }
    }) => {});
  }

  componentDidMount() {
    this.editor = Object(_editor__WEBPACK_IMPORTED_MODULE_3__["createEditor"])(this.el);
    this.editor.run(code);
  }

  render() {
    const {
      code
    } = this.state;
    return __jsx("div", {
      className: "app",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "split-view",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "code-editor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    }, __jsx("textarea", {
      value: code,
      onChange: this.onCodeChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    })), __jsx("div", {
      className: "preview",
      ref: el => this.el = el,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }
    })), __jsx("button", {
      onClick: this.submitCode,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }
    }, "Submit"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SandBox);

/***/ }),

/***/ "./pages/appl/styles.scss":
/*!********************************!*\
  !*** ./pages/appl/styles.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/editor.js":
/*!*************************!*\
  !*** ./pages/editor.js ***!
  \*************************/
/*! exports provided: findReactNode, createEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findReactNode", function() { return findReactNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEditor", function() { return createEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! object-path */ "object-path");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(object_path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var acorn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! acorn */ "acorn");
/* harmony import */ var acorn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(acorn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var escodegen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! escodegen */ "escodegen");
/* harmony import */ var escodegen__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(escodegen__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_standalone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/standalone */ "@babel/standalone");
/* harmony import */ var _babel_standalone__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_standalone__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\cwcra\\Documents\\Code Chrysalis\\Final_Project\\Hire-Me\\dragon\\pages\\editor.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable */







function isReactNode(node) {
  const type = node.type; //"ExpressionStatement"

  const obj = object_path__WEBPACK_IMPORTED_MODULE_2___default.a.get(node, "expression.callee.object.name");
  const func = object_path__WEBPACK_IMPORTED_MODULE_2___default.a.get(node, "expression.callee.property.name");
  return type === "ExpressionStatement" && obj === "React" && func === "createElement";
}

function findReactNode(ast) {
  const {
    body
  } = ast;
  return body.find(isReactNode);
}
function createEditor(domElement, moduleResolver = () => null) {
  function render(node) {
    react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(node, domElement);
  }

  function require(moduleName) {
    return moduleResolver(moduleName);
  }

  function getWrapperFunction(code) {
    try {
      // 1. transform code
      const tcode = Object(_babel_standalone__WEBPACK_IMPORTED_MODULE_5__["transform"])(code, {
        presets: ["es2015", "react"]
      }).code; // 2. get AST

      const ast = acorn__WEBPACK_IMPORTED_MODULE_3__["parse"](tcode, {
        sourceType: "module"
      }); // 3. find React.createElement expression in the body of program

      const rnode = findReactNode(ast);

      if (rnode) {
        const nodeIndex = ast.body.indexOf(rnode); // 4. convert the React.createElement invocation to source and remove the trailing semicolon

        const createElSrc = Object(escodegen__WEBPACK_IMPORTED_MODULE_4__["generate"])(rnode).slice(0, -1); // 5. transform React.createElement(...) to render(React.createElement(...)),
        // where render is a callback passed from outside

        const renderCallAst = acorn__WEBPACK_IMPORTED_MODULE_3__["parse"](`render(${createElSrc})`).body[0];
        ast.body[nodeIndex] = renderCallAst;
      } // 6. create a new wrapper function with all dependency as parameters


      return new Function("React", "render", "require", Object(escodegen__WEBPACK_IMPORTED_MODULE_4__["generate"])(ast));
    } catch (ex) {
      // in case of exception render the exception message
      render(__jsx("pre", {
        style: {
          color: "red"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 14
        }
      }, ex.message));
    }
  }

  return {
    // returns transpiled code in a wrapper function which can be invoked later
    compile(code) {
      return getWrapperFunction(code);
    },

    // compiles and invokes the wrapper function
    run(code) {
      this.compile(code)(react__WEBPACK_IMPORTED_MODULE_0___default.a, render, require);
    },

    // just compiles and returns the stringified wrapper function
    getCompiledCode(code) {
      return getWrapperFunction(code).toString();
    }

  };
}

/***/ }),

/***/ 6:
/*!*************************************!*\
  !*** multi ./pages/appl/Sandbox.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\cwcra\Documents\Code Chrysalis\Final_Project\Hire-Me\dragon\pages\appl\Sandbox.js */"./pages/appl/Sandbox.js");


/***/ }),

/***/ "@babel/standalone":
/*!************************************!*\
  !*** external "@babel/standalone" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/standalone");

/***/ }),

/***/ "acorn":
/*!************************!*\
  !*** external "acorn" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("acorn");

/***/ }),

/***/ "debounce":
/*!***************************!*\
  !*** external "debounce" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("debounce");

/***/ }),

/***/ "escodegen":
/*!****************************!*\
  !*** external "escodegen" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("escodegen");

/***/ }),

/***/ "object-path":
/*!******************************!*\
  !*** external "object-path" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("object-path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBwbC9TYW5kYm94LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2VkaXRvci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvc3RhbmRhbG9uZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFjb3JuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGVib3VuY2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlc2NvZGVnZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJvYmplY3QtcGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiXSwibmFtZXMiOlsiY29kZSIsIlNhbmRCb3giLCJSZWFjdCIsIkNvbXBvbmVudCIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJydW4iLCJkZWJvdW5jZSIsInN0YXRlIiwiZWRpdG9yIiwiY29tcG9uZW50RGlkTW91bnQiLCJjcmVhdGVFZGl0b3IiLCJlbCIsInJlbmRlciIsIm9uQ29kZUNoYW5nZSIsInN1Ym1pdENvZGUiLCJpc1JlYWN0Tm9kZSIsIm5vZGUiLCJ0eXBlIiwib2JqIiwiT2JqUGF0aCIsImdldCIsImZ1bmMiLCJmaW5kUmVhY3ROb2RlIiwiYXN0IiwiYm9keSIsImZpbmQiLCJkb21FbGVtZW50IiwibW9kdWxlUmVzb2x2ZXIiLCJSZWFjdERPTSIsInJlcXVpcmUiLCJtb2R1bGVOYW1lIiwiZ2V0V3JhcHBlckZ1bmN0aW9uIiwidGNvZGUiLCJiYWJlbFRyYW5zZm9ybSIsInByZXNldHMiLCJBY29ybiIsInNvdXJjZVR5cGUiLCJybm9kZSIsIm5vZGVJbmRleCIsImluZGV4T2YiLCJjcmVhdGVFbFNyYyIsImdlbmVyYXRlSnMiLCJzbGljZSIsInJlbmRlckNhbGxBc3QiLCJGdW5jdGlvbiIsImV4IiwiY29sb3Ii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Q0FPLE9BQUcsQ0FBQ1AsSUFBRCxFQUFPO0FBQ1IsV0FBS2tELE9BQUwsQ0FBYWxELElBQWIsRUFBbUJFLDRDQUFuQixFQUEwQlksTUFBMUIsRUFBa0NpQixPQUFsQztBQUNELEtBVEk7O0FBV0w7QUFDQW9CLG1CQUFlLENBQUNuRCxJQUFELEVBQU87QUFDcEIsYUFBT2lDLGtCQUFrQixDQUFDakMsSUFBRCxDQUFsQixDQUF5Qm9ELFFBQXpCLEVBQVA7QUFDRDs7QUFkSSxHQUFQO0FBZ0JELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkZELDhDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhcHBsXFxTYW5kYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMuc2Nzc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7IGNyZWF0ZUVkaXRvciB9IGZyb20gXCIuLi9lZGl0b3JcIjtcbmltcG9ydCBkZWJvdW5jZSBmcm9tIFwiZGVib3VuY2VcIjtcblxuLy8gZGVmYXVsdCBjb2RlXG5jb25zdCBjb2RlID0gYGltcG9ydCB4IGZyb20gJ3gnO1xuXG4vLyBlZGl0IHRoaXMgZXhhbXBsZVxuXG5mdW5jdGlvbiBHcmVldCgpIHtcbiAgcmV0dXJuIDxzcGFuPkhlbGxvIFdvcmxkITwvc3Bhbj5cbn1cblxuPEdyZWV0IC8+XG5gO1xuXG5jbGFzcyBTYW5kQm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgY29kZSxcbiAgfTtcblxuICBlZGl0b3IgPSBudWxsO1xuXG4gIGVsID0gbnVsbDtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmVkaXRvciA9IGNyZWF0ZUVkaXRvcih0aGlzLmVsKTtcbiAgICB0aGlzLmVkaXRvci5ydW4oY29kZSk7XG4gIH1cblxuICBvbkNvZGVDaGFuZ2UgPSAoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvZGU6IHZhbHVlIH0pO1xuICAgIHRoaXMucnVuKHZhbHVlKTtcbiAgfTtcblxuICBydW4gPSBkZWJvdW5jZSgoKSA9PiB7XG4gICAgY29uc3QgeyBjb2RlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuZWRpdG9yLnJ1bihjb2RlKTtcbiAgfSwgNTAwKTtcblxuICBzdWJtaXRDb2RlID0gKHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4ge307XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29kZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGxpdC12aWV3XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2RlLWVkaXRvclwiPlxuICAgICAgICAgICAgPHRleHRhcmVhIHZhbHVlPXtjb2RlfSBvbkNoYW5nZT17dGhpcy5vbkNvZGVDaGFuZ2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3XCIgcmVmPXsoZWwpID0+ICh0aGlzLmVsID0gZWwpfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1Ym1pdENvZGV9PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTYW5kQm94O1xuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgT2JqUGF0aCBmcm9tIFwib2JqZWN0LXBhdGhcIjtcblxuaW1wb3J0ICogYXMgQWNvcm4gZnJvbSBcImFjb3JuXCI7XG5cbmltcG9ydCB7IGdlbmVyYXRlIGFzIGdlbmVyYXRlSnMgfSBmcm9tIFwiZXNjb2RlZ2VuXCI7XG5pbXBvcnQgeyB0cmFuc2Zvcm0gYXMgYmFiZWxUcmFuc2Zvcm0gfSBmcm9tIFwiQGJhYmVsL3N0YW5kYWxvbmVcIjtcblxuZnVuY3Rpb24gaXNSZWFjdE5vZGUobm9kZSkge1xuICBjb25zdCB0eXBlID0gbm9kZS50eXBlOyAvL1wiRXhwcmVzc2lvblN0YXRlbWVudFwiXG4gIGNvbnN0IG9iaiA9IE9ialBhdGguZ2V0KG5vZGUsIFwiZXhwcmVzc2lvbi5jYWxsZWUub2JqZWN0Lm5hbWVcIik7XG4gIGNvbnN0IGZ1bmMgPSBPYmpQYXRoLmdldChub2RlLCBcImV4cHJlc3Npb24uY2FsbGVlLnByb3BlcnR5Lm5hbWVcIik7XG4gIHJldHVybiAoXG4gICAgdHlwZSA9PT0gXCJFeHByZXNzaW9uU3RhdGVtZW50XCIgJiZcbiAgICBvYmogPT09IFwiUmVhY3RcIiAmJlxuICAgIGZ1bmMgPT09IFwiY3JlYXRlRWxlbWVudFwiXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUmVhY3ROb2RlKGFzdCkge1xuICBjb25zdCB7IGJvZHkgfSA9IGFzdDtcbiAgcmV0dXJuIGJvZHkuZmluZChpc1JlYWN0Tm9kZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFZGl0b3IoZG9tRWxlbWVudCwgbW9kdWxlUmVzb2x2ZXIgPSAoKSA9PiBudWxsKSB7XG4gIGZ1bmN0aW9uIHJlbmRlcihub2RlKSB7XG4gICAgUmVhY3RET00ucmVuZGVyKG5vZGUsIGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVxdWlyZShtb2R1bGVOYW1lKSB7XG4gICAgcmV0dXJuIG1vZHVsZVJlc29sdmVyKG1vZHVsZU5hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0V3JhcHBlckZ1bmN0aW9uKGNvZGUpIHtcbiAgICB0cnkge1xuICAgICAgLy8gMS4gdHJhbnNmb3JtIGNvZGVcbiAgICAgIGNvbnN0IHRjb2RlID0gYmFiZWxUcmFuc2Zvcm0oY29kZSwgeyBwcmVzZXRzOiBbXCJlczIwMTVcIiwgXCJyZWFjdFwiXSB9KS5jb2RlO1xuXG4gICAgICAvLyAyLiBnZXQgQVNUXG4gICAgICBjb25zdCBhc3QgPSBBY29ybi5wYXJzZSh0Y29kZSwge1xuICAgICAgICBzb3VyY2VUeXBlOiBcIm1vZHVsZVwiLFxuICAgICAgfSk7XG5cbiAgICAgIC8vIDMuIGZpbmQgUmVhY3QuY3JlYXRlRWxlbWVudCBleHByZXNzaW9uIGluIHRoZSBib2R5IG9mIHByb2dyYW1cbiAgICAgIGNvbnN0IHJub2RlID0gZmluZFJlYWN0Tm9kZShhc3QpO1xuXG4gICAgICBpZiAocm5vZGUpIHtcbiAgICAgICAgY29uc3Qgbm9kZUluZGV4ID0gYXN0LmJvZHkuaW5kZXhPZihybm9kZSk7XG4gICAgICAgIC8vIDQuIGNvbnZlcnQgdGhlIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaW52b2NhdGlvbiB0byBzb3VyY2UgYW5kIHJlbW92ZSB0aGUgdHJhaWxpbmcgc2VtaWNvbG9uXG4gICAgICAgIGNvbnN0IGNyZWF0ZUVsU3JjID0gZ2VuZXJhdGVKcyhybm9kZSkuc2xpY2UoMCwgLTEpO1xuICAgICAgICAvLyA1LiB0cmFuc2Zvcm0gUmVhY3QuY3JlYXRlRWxlbWVudCguLi4pIHRvIHJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KC4uLikpLFxuICAgICAgICAvLyB3aGVyZSByZW5kZXIgaXMgYSBjYWxsYmFjayBwYXNzZWQgZnJvbSBvdXRzaWRlXG4gICAgICAgIGNvbnN0IHJlbmRlckNhbGxBc3QgPSBBY29ybi5wYXJzZShgcmVuZGVyKCR7Y3JlYXRlRWxTcmN9KWApLmJvZHlbMF07XG5cbiAgICAgICAgYXN0LmJvZHlbbm9kZUluZGV4XSA9IHJlbmRlckNhbGxBc3Q7XG4gICAgICB9XG5cbiAgICAgIC8vIDYuIGNyZWF0ZSBhIG5ldyB3cmFwcGVyIGZ1bmN0aW9uIHdpdGggYWxsIGRlcGVuZGVuY3kgYXMgcGFyYW1ldGVyc1xuICAgICAgcmV0dXJuIG5ldyBGdW5jdGlvbihcIlJlYWN0XCIsIFwicmVuZGVyXCIsIFwicmVxdWlyZVwiLCBnZW5lcmF0ZUpzKGFzdCkpO1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAvLyBpbiBjYXNlIG9mIGV4Y2VwdGlvbiByZW5kZXIgdGhlIGV4Y2VwdGlvbiBtZXNzYWdlXG4gICAgICByZW5kZXIoPHByZSBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT57ZXgubWVzc2FnZX08L3ByZT4pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLy8gcmV0dXJucyB0cmFuc3BpbGVkIGNvZGUgaW4gYSB3cmFwcGVyIGZ1bmN0aW9uIHdoaWNoIGNhbiBiZSBpbnZva2VkIGxhdGVyXG4gICAgY29tcGlsZShjb2RlKSB7XG4gICAgICByZXR1cm4gZ2V0V3JhcHBlckZ1bmN0aW9uKGNvZGUpO1xuICAgIH0sXG5cbiAgICAvLyBjb21waWxlcyBhbmQgaW52b2tlcyB0aGUgd3JhcHBlciBmdW5jdGlvblxuICAgIHJ1bihjb2RlKSB7XG4gICAgICB0aGlzLmNvbXBpbGUoY29kZSkoUmVhY3QsIHJlbmRlciwgcmVxdWlyZSk7XG4gICAgfSxcblxuICAgIC8vIGp1c3QgY29tcGlsZXMgYW5kIHJldHVybnMgdGhlIHN0cmluZ2lmaWVkIHdyYXBwZXIgZnVuY3Rpb25cbiAgICBnZXRDb21waWxlZENvZGUoY29kZSkge1xuICAgICAgcmV0dXJuIGdldFdyYXBwZXJGdW5jdGlvbihjb2RlKS50b1N0cmluZygpO1xuICAgIH0sXG4gIH07XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvc3RhbmRhbG9uZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhY29yblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkZWJvdW5jZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlc2NvZGVnZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib2JqZWN0LXBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=