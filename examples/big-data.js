/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"examples/big-data": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([1,"common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/big-data-generator.js":
/*!****************************************!*\
  !*** ./examples/big-data-generator.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./examples/util.js");
/* harmony import */ var _src_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/util */ "./src/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Gen =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Gen, _React$Component);

  function Gen() {
    var _this;

    _classCallCheck(this, Gen);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Gen).call(this));

    _defineProperty(_assertThisInitialized(_this), "state", {
      nums: ''
    });

    _defineProperty(_assertThisInitialized(_this), "onGen", function (e) {
      var onGen = _this.props.onGen;
      e.preventDefault();

      var vals = _this.getVals();

      onGen(Object(_util__WEBPACK_IMPORTED_MODULE_2__["generateData"])(vals.x, vals.y, vals.z));

      _this.setState({
        nums: Object(_util__WEBPACK_IMPORTED_MODULE_2__["calcTotal"])(vals.x, vals.y, vals.z)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getVals", function () {
      return {
        x: parseInt(_this.xRef.current.value, 10),
        y: parseInt(_this.yRef.current.value, 10),
        z: parseInt(_this.zRef.current.value, 10)
      };
    });

    _this.xRef = Object(_src_util__WEBPACK_IMPORTED_MODULE_3__["createRef"])();
    _this.yRef = Object(_src_util__WEBPACK_IMPORTED_MODULE_3__["createRef"])();
    _this.zRef = Object(_src_util__WEBPACK_IMPORTED_MODULE_3__["createRef"])();
    return _this;
  }

  _createClass(Gen, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var onGen = this.props.onGen;
      var vals = this.getVals();
      onGen(Object(_util__WEBPACK_IMPORTED_MODULE_2__["generateData"])(vals.x, vals.y, vals.z));
    }
  }, {
    key: "render",
    value: function render() {
      var nums = this.state.nums;
      var _this$props = this.props,
          x = _this$props.x,
          y = _this$props.y,
          z = _this$props.z;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          padding: '0 20px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "big data generator"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.onGen
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          marginRight: 10
        }
      }, "x:", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        ref: this.xRef,
        defaultValue: x,
        type: "number",
        min: "1",
        required: true,
        style: {
          width: 50
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          marginRight: 10
        }
      }, "y:", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        ref: this.yRef,
        defaultValue: y,
        type: "number",
        min: "1",
        required: true,
        style: {
          width: 50
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          marginRight: 10
        }
      }, "z:", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        ref: this.zRef,
        defaultValue: z,
        type: "number",
        min: "1",
        required: true,
        style: {
          width: 50
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit"
      }, "Generate"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "total nodes: ", nums || Object(_util__WEBPACK_IMPORTED_MODULE_2__["calcTotal"])(x, y, z))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          fontSize: 12
        }
      }, "x\uFF1A\u6BCF\u4E00\u7EA7\u4E0B\u7684\u8282\u70B9\u603B\u6570\u3002y\uFF1A\u6BCF\u7EA7\u8282\u70B9\u91CC\u6709y\u4E2A\u8282\u70B9\u3001\u5B58\u5728\u5B50\u8282\u70B9\u3002z\uFF1A\u6811\u7684level\u5C42\u7EA7\u6570\uFF080\u8868\u793A\u4E00\u7EA7\uFF09"));
    }
  }]);

  return Gen;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Gen, "propTypes", {
  onGen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  x: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  y: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  z: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
});

_defineProperty(Gen, "defaultProps", {
  onGen: function onGen() {},
  x: 20,
  y: 18,
  z: 1
});

/* harmony default export */ __webpack_exports__["default"] = (Gen);

/***/ }),

/***/ "./examples/big-data.js":
/*!******************************!*\
  !*** ./examples/big-data.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'rc-tree-select/assets/index.less'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'rc-tree-select'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _big_data_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./big-data-generator */ "./examples/big-data-generator.js");
/* harmony import */ var _demo_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demo.less */ "./examples/demo.less");
/* harmony import */ var _demo_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_demo_less__WEBPACK_IMPORTED_MODULE_4__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint react/no-multi-comp:0, no-console:0 */







var Demo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Demo, _React$Component);

  function Demo() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Demo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Demo)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      gData: [],
      gData1: [],
      value: '',
      value1: ''
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (value) {
      console.log('onChange', value);

      _this.setState({
        value: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeStrictly", function (value1) {
      console.log('onChangeStrictly', value1);
      var ind = parseInt(Math.random() * 3, 10);
      value1.push({
        value: "0-0-0-".concat(ind, "-value"),
        label: "0-0-0-".concat(ind, "-label"),
        halfChecked: true
      });

      _this.setState({
        value1: value1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onGen", function (data) {
      _this.setState({
        gData: data,
        gData1: _toConsumableArray(data),
        value: '0-0-0-value',
        value1: [{
          value: '0-0-value',
          label: '0-0-label',
          halfChecked: true
        }, {
          value: '0-0-0-value',
          label: '0-0-0-label'
        }] // value: ['0-0-0-0-value', '0-0-0-1-value', '0-0-0-2-value'],

      });
    });

    return _this;
  }

  _createClass(Demo, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          value1 = _this$state.value1,
          gData1 = _this$state.gData1,
          value = _this$state.value,
          gData = _this$state.gData;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          padding: '0 20px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_big_data_generator__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onGen: this.onGen
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          display: 'flex'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          marginRight: 20
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "normal check"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'rc-tree-select'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        style: {
          width: 300
        },
        dropdownStyle: {
          maxHeight: 200,
          overflow: 'auto'
        },
        treeData: gData,
        treeLine: true,
        value: value,
        placeholder: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", null, "\u8BF7\u4E0B\u62C9\u9009\u62E9"),
        treeCheckable: true,
        showCheckedStrategy: !(function webpackMissingModule() { var e = new Error("Cannot find module 'rc-tree-select'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        onChange: this.onChange
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "checkStrictly"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'rc-tree-select'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        style: {
          width: 300
        },
        dropdownStyle: {
          maxHeight: 200,
          overflow: 'auto'
        },
        treeData: gData1,
        treeLine: true,
        value: value1,
        placeholder: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", null, "\u8BF7\u4E0B\u62C9\u9009\u62E9"),
        treeCheckable: true,
        treeCheckStrictly: true,
        showCheckedStrategy: !(function webpackMissingModule() { var e = new Error("Cannot find module 'rc-tree-select'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        onChange: this.onChangeStrictly
      }))));
    }
  }]);

  return Demo;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Demo, null), document.getElementById('__react-content'));

/***/ }),

/***/ "./node_modules/rc-tree/es/TreeNode.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-tree/es/TreeNode.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rc_animate_es_CSSMotion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-animate/es/CSSMotion */ "./node_modules/rc-animate/es/CSSMotion.js");
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rc-util/es/Children/toArray */ "./node_modules/rc-util/es/Children/toArray.js");
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var _contextTypes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contextTypes */ "./node_modules/rc-tree/es/contextTypes.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./util */ "./node_modules/rc-tree/es/util.js");
















var ICON_OPEN = 'open';
var ICON_CLOSE = 'close';

var defaultTitle = '---';

var TreeNode = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(TreeNode, _React$Component);

  function TreeNode(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, TreeNode);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (TreeNode.__proto__ || Object.getPrototypeOf(TreeNode)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      dragNodeHighlight: false
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(TreeNode, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, this.context, {
        rcTreeNode: {
          // onUpCheckConduct: this.onUpCheckConduct,
        }
      });
    }

    // Isomorphic needn't load data in server side

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var eventKey = this.props.eventKey;
      var registerTreeNode = this.context.rcTree.registerTreeNode;


      this.syncLoadData(this.props);

      registerTreeNode(eventKey, this);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.syncLoadData(this.props);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var eventKey = this.props.eventKey;
      var registerTreeNode = this.context.rcTree.registerTreeNode;

      registerTreeNode(eventKey, null);
    }

    // Disabled item still can be switch


    // Drag usage

  }, {
    key: 'isSelectable',
    value: function isSelectable() {
      var selectable = this.props.selectable;
      var treeSelectable = this.context.rcTree.selectable;

      // Ignore when selectable is undefined or null

      if (typeof selectable === 'boolean') {
        return selectable;
      }

      return treeSelectable;
    }

    // Load data to avoid default expanded tree without data


    // Switcher


    // Checkbox


    // Icon + Title


    // Children list wrapped with `Animation`

  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var loading = this.props.loading;

      var _props = this.props,
          className = _props.className,
          style = _props.style,
          dragOver = _props.dragOver,
          dragOverGapTop = _props.dragOverGapTop,
          dragOverGapBottom = _props.dragOverGapBottom,
          isLeaf = _props.isLeaf,
          expanded = _props.expanded,
          selected = _props.selected,
          checked = _props.checked,
          halfChecked = _props.halfChecked,
          otherProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_props, ['className', 'style', 'dragOver', 'dragOverGapTop', 'dragOverGapBottom', 'isLeaf', 'expanded', 'selected', 'checked', 'halfChecked']);

      var _context$rcTree = this.context.rcTree,
          prefixCls = _context$rcTree.prefixCls,
          filterTreeNode = _context$rcTree.filterTreeNode,
          draggable = _context$rcTree.draggable;

      var disabled = this.isDisabled();
      var dataOrAriaAttributeProps = Object(_util__WEBPACK_IMPORTED_MODULE_14__["getDataAndAria"])(otherProps);

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        'li',
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({
          className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(className, (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-treenode-disabled', disabled), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-treenode-switcher-' + (expanded ? 'open' : 'close'), !isLeaf), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-treenode-checkbox-checked', checked), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-treenode-checkbox-indeterminate', halfChecked), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-treenode-selected', selected), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-treenode-loading', loading), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, 'drag-over', !disabled && dragOver), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, 'drag-over-gap-top', !disabled && dragOverGapTop), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, 'drag-over-gap-bottom', !disabled && dragOverGapBottom), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, 'filter-node', filterTreeNode && filterTreeNode(this)), _classNames)),

          style: style,

          role: 'treeitem',

          onDragEnter: draggable ? this.onDragEnter : undefined,
          onDragOver: draggable ? this.onDragOver : undefined,
          onDragLeave: draggable ? this.onDragLeave : undefined,
          onDrop: draggable ? this.onDrop : undefined,
          onDragEnd: draggable ? this.onDragEnd : undefined
        }, dataOrAriaAttributeProps),
        this.renderSwitcher(),
        this.renderCheckbox(),
        this.renderSelector(),
        this.renderChildren()
      );
    }
  }]);

  return TreeNode;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

TreeNode.propTypes = {
  eventKey: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, // Pass by parent `cloneElement`
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  root: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,

  // By parent
  expanded: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  checked: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  loaded: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  halfChecked: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node,
  title: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node,
  pos: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  dragOver: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  dragOverGapTop: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  dragOverGapBottom: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,

  // By user
  isLeaf: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  selectable: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  disableCheckbox: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func]),
  switcherIcon: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func])
};
TreeNode.contextTypes = _contextTypes__WEBPACK_IMPORTED_MODULE_13__["nodeContextTypes"];
TreeNode.childContextTypes = _contextTypes__WEBPACK_IMPORTED_MODULE_13__["nodeContextTypes"];
TreeNode.defaultProps = {
  title: defaultTitle
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onSelectorClick = function (e) {
    // Click trigger before select/check operation
    var onNodeClick = _this2.context.rcTree.onNodeClick;

    onNodeClick(e, _this2);

    if (_this2.isSelectable()) {
      _this2.onSelect(e);
    } else {
      _this2.onCheck(e);
    }
  };

  this.onSelectorDoubleClick = function (e) {
    var onNodeDoubleClick = _this2.context.rcTree.onNodeDoubleClick;

    onNodeDoubleClick(e, _this2);
  };

  this.onSelect = function (e) {
    if (_this2.isDisabled()) return;

    var onNodeSelect = _this2.context.rcTree.onNodeSelect;

    e.preventDefault();
    onNodeSelect(e, _this2);
  };

  this.onCheck = function (e) {
    if (_this2.isDisabled()) return;

    var _props2 = _this2.props,
        disableCheckbox = _props2.disableCheckbox,
        checked = _props2.checked;
    var _context$rcTree2 = _this2.context.rcTree,
        checkable = _context$rcTree2.checkable,
        onNodeCheck = _context$rcTree2.onNodeCheck;


    if (!checkable || disableCheckbox) return;

    e.preventDefault();
    var targetChecked = !checked;
    onNodeCheck(e, _this2, targetChecked);
  };

  this.onMouseEnter = function (e) {
    var onNodeMouseEnter = _this2.context.rcTree.onNodeMouseEnter;

    onNodeMouseEnter(e, _this2);
  };

  this.onMouseLeave = function (e) {
    var onNodeMouseLeave = _this2.context.rcTree.onNodeMouseLeave;

    onNodeMouseLeave(e, _this2);
  };

  this.onContextMenu = function (e) {
    var onNodeContextMenu = _this2.context.rcTree.onNodeContextMenu;

    onNodeContextMenu(e, _this2);
  };

  this.onDragStart = function (e) {
    var onNodeDragStart = _this2.context.rcTree.onNodeDragStart;


    e.stopPropagation();
    _this2.setState({
      dragNodeHighlight: true
    });
    onNodeDragStart(e, _this2);

    try {
      // ie throw error
      // firefox-need-it
      e.dataTransfer.setData('text/plain', '');
    } catch (error) {
      // empty
    }
  };

  this.onDragEnter = function (e) {
    var onNodeDragEnter = _this2.context.rcTree.onNodeDragEnter;


    e.preventDefault();
    e.stopPropagation();
    onNodeDragEnter(e, _this2);
  };

  this.onDragOver = function (e) {
    var onNodeDragOver = _this2.context.rcTree.onNodeDragOver;


    e.preventDefault();
    e.stopPropagation();
    onNodeDragOver(e, _this2);
  };

  this.onDragLeave = function (e) {
    var onNodeDragLeave = _this2.context.rcTree.onNodeDragLeave;


    e.stopPropagation();
    onNodeDragLeave(e, _this2);
  };

  this.onDragEnd = function (e) {
    var onNodeDragEnd = _this2.context.rcTree.onNodeDragEnd;


    e.stopPropagation();
    _this2.setState({
      dragNodeHighlight: false
    });
    onNodeDragEnd(e, _this2);
  };

  this.onDrop = function (e) {
    var onNodeDrop = _this2.context.rcTree.onNodeDrop;


    e.preventDefault();
    e.stopPropagation();
    _this2.setState({
      dragNodeHighlight: false
    });
    onNodeDrop(e, _this2);
  };

  this.onExpand = function (e) {
    var onNodeExpand = _this2.context.rcTree.onNodeExpand;

    onNodeExpand(e, _this2);
  };

  this.setSelectHandle = function (node) {
    _this2.selectHandle = node;
  };

  this.getNodeChildren = function () {
    var children = _this2.props.children;

    var originList = Object(rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_11__["default"])(children).filter(function (node) {
      return node;
    });
    var targetList = Object(_util__WEBPACK_IMPORTED_MODULE_14__["getNodeChildren"])(originList);

    if (originList.length !== targetList.length) {
      Object(_util__WEBPACK_IMPORTED_MODULE_14__["warnOnlyTreeNode"])();
    }

    return targetList;
  };

  this.getNodeState = function () {
    var expanded = _this2.props.expanded;


    if (_this2.isLeaf()) {
      return null;
    }

    return expanded ? ICON_OPEN : ICON_CLOSE;
  };

  this.isLeaf = function () {
    var _props3 = _this2.props,
        isLeaf = _props3.isLeaf,
        loaded = _props3.loaded;
    var loadData = _this2.context.rcTree.loadData;


    var hasChildren = _this2.getNodeChildren().length !== 0;

    if (isLeaf === false) {
      return false;
    }

    return isLeaf || !loadData && !hasChildren || loadData && loaded && !hasChildren;
  };

  this.isDisabled = function () {
    var disabled = _this2.props.disabled;
    var treeDisabled = _this2.context.rcTree.disabled;

    // Follow the logic of Selectable

    if (disabled === false) {
      return false;
    }

    return !!(treeDisabled || disabled);
  };

  this.syncLoadData = function (props) {
    var expanded = props.expanded,
        loading = props.loading,
        loaded = props.loaded;
    var _context$rcTree3 = _this2.context.rcTree,
        loadData = _context$rcTree3.loadData,
        onNodeLoad = _context$rcTree3.onNodeLoad;


    if (loading) return;

    // read from state to avoid loadData at same time
    if (loadData && expanded && !_this2.isLeaf()) {
      // We needn't reload data when has children in sync logic
      // It's only needed in node expanded
      var hasChildren = _this2.getNodeChildren().length !== 0;
      if (!hasChildren && !loaded) {
        onNodeLoad(_this2);
      }
    }
  };

  this.renderSwitcher = function () {
    var _props4 = _this2.props,
        expanded = _props4.expanded,
        switcherIconFromProps = _props4.switcherIcon;
    var _context$rcTree4 = _this2.context.rcTree,
        prefixCls = _context$rcTree4.prefixCls,
        switcherIconFromCtx = _context$rcTree4.switcherIcon;


    var switcherIcon = switcherIconFromProps || switcherIconFromCtx;

    if (_this2.isLeaf()) {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        'span',
        { className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(prefixCls + '-switcher', prefixCls + '-switcher-noop') },
        typeof switcherIcon === 'function' ? switcherIcon(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, _this2.props, { isLeaf: true })) : switcherIcon
      );
    }

    var switcherCls = classnames__WEBPACK_IMPORTED_MODULE_9___default()(prefixCls + '-switcher', prefixCls + '-switcher_' + (expanded ? ICON_OPEN : ICON_CLOSE));
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      'span',
      { onClick: _this2.onExpand, className: switcherCls },
      typeof switcherIcon === 'function' ? switcherIcon(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, _this2.props, { isLeaf: false })) : switcherIcon
    );
  };

  this.renderCheckbox = function () {
    var _props5 = _this2.props,
        checked = _props5.checked,
        halfChecked = _props5.halfChecked,
        disableCheckbox = _props5.disableCheckbox;
    var _context$rcTree5 = _this2.context.rcTree,
        prefixCls = _context$rcTree5.prefixCls,
        checkable = _context$rcTree5.checkable;

    var disabled = _this2.isDisabled();

    if (!checkable) return null;

    // [Legacy] Custom element should be separate with `checkable` in future
    var $custom = typeof checkable !== 'boolean' ? checkable : null;

    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      'span',
      {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(prefixCls + '-checkbox', checked && prefixCls + '-checkbox-checked', !checked && halfChecked && prefixCls + '-checkbox-indeterminate', (disabled || disableCheckbox) && prefixCls + '-checkbox-disabled'),
        onClick: _this2.onCheck
      },
      $custom
    );
  };

  this.renderIcon = function () {
    var loading = _this2.props.loading;
    var prefixCls = _this2.context.rcTree.prefixCls;


    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('span', {
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(prefixCls + '-iconEle', prefixCls + '-icon__' + (_this2.getNodeState() || 'docu'), loading && prefixCls + '-icon_loading')
    });
  };

  this.renderSelector = function () {
    var dragNodeHighlight = _this2.state.dragNodeHighlight;
    var _props6 = _this2.props,
        title = _props6.title,
        selected = _props6.selected,
        icon = _props6.icon,
        loading = _props6.loading;
    var _context$rcTree6 = _this2.context.rcTree,
        prefixCls = _context$rcTree6.prefixCls,
        showIcon = _context$rcTree6.showIcon,
        treeIcon = _context$rcTree6.icon,
        draggable = _context$rcTree6.draggable,
        loadData = _context$rcTree6.loadData;

    var disabled = _this2.isDisabled();

    var wrapClass = prefixCls + '-node-content-wrapper';

    // Icon - Still show loading icon when loading without showIcon
    var $icon = void 0;

    if (showIcon) {
      var currentIcon = icon || treeIcon;

      $icon = currentIcon ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        'span',
        {
          className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(prefixCls + '-iconEle', prefixCls + '-icon__customize')
        },
        typeof currentIcon === 'function' ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(currentIcon, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, _this2.props)) : currentIcon
      ) : _this2.renderIcon();
    } else if (loadData && loading) {
      $icon = _this2.renderIcon();
    }

    // Title
    var $title = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      'span',
      { className: prefixCls + '-title' },
      title
    );

    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      'span',
      {
        ref: _this2.setSelectHandle,
        title: typeof title === 'string' ? title : '',
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('' + wrapClass, wrapClass + '-' + (_this2.getNodeState() || 'normal'), !disabled && (selected || dragNodeHighlight) && prefixCls + '-node-selected', !disabled && draggable && 'draggable'),
        draggable: !disabled && draggable || undefined,
        'aria-grabbed': !disabled && draggable || undefined,

        onMouseEnter: _this2.onMouseEnter,
        onMouseLeave: _this2.onMouseLeave,
        onContextMenu: _this2.onContextMenu,
        onClick: _this2.onSelectorClick,
        onDoubleClick: _this2.onSelectorDoubleClick,
        onDragStart: draggable ? _this2.onDragStart : undefined
      },
      $icon,
      $title
    );
  };

  this.renderChildren = function () {
    var _props7 = _this2.props,
        expanded = _props7.expanded,
        pos = _props7.pos;
    var _context$rcTree7 = _this2.context.rcTree,
        prefixCls = _context$rcTree7.prefixCls,
        motion = _context$rcTree7.motion,
        renderTreeNode = _context$rcTree7.renderTreeNode;

    // Children TreeNode

    var nodeList = _this2.getNodeChildren();

    if (nodeList.length === 0) {
      return null;
    }
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      rc_animate_es_CSSMotion__WEBPACK_IMPORTED_MODULE_10__["default"],
      babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({ visible: expanded }, motion),
      function (_ref) {
        var style = _ref.style,
            className = _ref.className;

        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          'ul',
          {
            className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(className, prefixCls + '-child-tree', expanded && prefixCls + '-child-tree-open'),
            style: style,
            'data-expanded': expanded,
            role: 'group'
          },
          Object(_util__WEBPACK_IMPORTED_MODULE_14__["mapChildren"])(nodeList, function (node, index) {
            return renderTreeNode(node, index, pos);
          })
        );
      }
    );
  };
};

TreeNode.isTreeNode = 1;

Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_12__["polyfill"])(TreeNode);

/* harmony default export */ __webpack_exports__["default"] = (TreeNode);

/***/ }),

/***/ "./node_modules/rc-tree/es/contextTypes.js":
/*!*************************************************!*\
  !*** ./node_modules/rc-tree/es/contextTypes.js ***!
  \*************************************************/
/*! exports provided: treeContextTypes, nodeContextTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "treeContextTypes", function() { return treeContextTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeContextTypes", function() { return nodeContextTypes; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);

/**
 * Webpack has bug for import loop, which is not the same behavior as ES module.
 * When util.js imports the TreeNode for tree generate will cause treeContextTypes be empty.
 */



/**
 * Thought we still use `cloneElement` to pass `key`,
 * other props can pass with context for future refactor.
 */
var treeContextTypes = {
  rcTree: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    root: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

    prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    selectable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    showIcon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),
    draggable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    checkable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]),
    checkStrictly: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    openTransitionName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    openAnimation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),

    loadData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    filterTreeNode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    renderTreeNode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

    isKeyChecked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

    onNodeClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeDoubleClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeExpand: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeCheck: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeContextMenu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeDragStart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeDragEnter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeDragOver: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeDragLeave: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeDragEnd: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeDrop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func

    // TODO: Remove this
    // onBatchNodeCheck: PropTypes.func,
    // onCheckConductFinished: PropTypes.func,

    // Tree will store the entities when the treeNode refresh.
    // User can pass the func to add more info to customize the additional info.
    // processTreeEntity: PropTypes.func,
  })
};

var nodeContextTypes = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, treeContextTypes, {
  rcTreeNode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    onUpCheckConduct: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
  })
});

/***/ }),

/***/ "./node_modules/rc-tree/es/util.js":
/*!*****************************************!*\
  !*** ./node_modules/rc-tree/es/util.js ***!
  \*****************************************/
/*! exports provided: warnOnlyTreeNode, arrDel, arrAdd, posToArr, getPosition, isTreeNode, getNodeChildren, isCheckDisabled, traverseTreeNodes, mapChildren, getDragNodesKeys, calcDropPosition, calcSelectedKeys, convertDataToTree, convertTreeToEntities, parseCheckedKeys, conductCheck, conductExpandParent, getDataAndAria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnOnlyTreeNode", function() { return warnOnlyTreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrDel", function() { return arrDel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrAdd", function() { return arrAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posToArr", function() { return posToArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosition", function() { return getPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTreeNode", function() { return isTreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNodeChildren", function() { return getNodeChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCheckDisabled", function() { return isCheckDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traverseTreeNodes", function() { return traverseTreeNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapChildren", function() { return mapChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDragNodesKeys", function() { return getDragNodesKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcDropPosition", function() { return calcDropPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcSelectedKeys", function() { return calcSelectedKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertDataToTree", function() { return convertDataToTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertTreeToEntities", function() { return convertTreeToEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseCheckedKeys", function() { return parseCheckedKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conductCheck", function() { return conductCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conductExpandParent", function() { return conductExpandParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataAndAria", function() { return getDataAndAria; });
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/Children/toArray */ "./node_modules/rc-util/es/Children/toArray.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! warning */ "./node_modules/rc-tree/node_modules/warning/browser.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TreeNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TreeNode */ "./node_modules/rc-tree/es/TreeNode.js");






var DRAG_SIDE_RANGE = 0.25;
var DRAG_MIN_GAP = 2;

var onlyTreeNodeWarned = false;

function warnOnlyTreeNode() {
  if (onlyTreeNodeWarned) return;

  onlyTreeNodeWarned = true;
  warning__WEBPACK_IMPORTED_MODULE_3___default()(false, 'Tree only accept TreeNode as children.');
}

function arrDel(list, value) {
  var clone = list.slice();
  var index = clone.indexOf(value);
  if (index >= 0) {
    clone.splice(index, 1);
  }
  return clone;
}

function arrAdd(list, value) {
  var clone = list.slice();
  if (clone.indexOf(value) === -1) {
    clone.push(value);
  }
  return clone;
}

function posToArr(pos) {
  return pos.split('-');
}

function getPosition(level, index) {
  return level + '-' + index;
}

function isTreeNode(node) {
  return node && node.type && node.type.isTreeNode;
}

function getNodeChildren(children) {
  return Object(rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_2__["default"])(children).filter(isTreeNode);
}

function isCheckDisabled(node) {
  var _ref = node.props || {},
      disabled = _ref.disabled,
      disableCheckbox = _ref.disableCheckbox;

  return !!(disabled || disableCheckbox);
}

function traverseTreeNodes(treeNodes, callback) {
  function processNode(node, index, parent) {
    var children = node ? node.props.children : treeNodes;
    var pos = node ? getPosition(parent.pos, index) : 0;

    // Filter children
    var childList = getNodeChildren(children);

    // Process node if is not root
    if (node) {
      var data = {
        node: node,
        index: index,
        pos: pos,
        key: node.key || pos,
        parentPos: parent.node ? parent.pos : null
      };

      callback(data);
    }

    // Process children node
    react__WEBPACK_IMPORTED_MODULE_1__["Children"].forEach(childList, function (subNode, subIndex) {
      processNode(subNode, subIndex, { node: node, pos: pos });
    });
  }

  processNode(null);
}

/**
 * Use `rc-util` `toArray` to get the children list which keeps the key.
 * And return single node if children is only one(This can avoid `key` missing check).
 */
function mapChildren(children, func) {
  var list = Object(rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_2__["default"])(children).map(func);
  if (list.length === 1) {
    return list[0];
  }
  return list;
}

function getDragNodesKeys(treeNodes, node) {
  var _node$props = node.props,
      eventKey = _node$props.eventKey,
      pos = _node$props.pos;

  var dragNodesKeys = [];

  traverseTreeNodes(treeNodes, function (_ref2) {
    var key = _ref2.key;

    dragNodesKeys.push(key);
  });
  dragNodesKeys.push(eventKey || pos);
  return dragNodesKeys;
}

// Only used when drag, not affect SSR.
function calcDropPosition(event, treeNode) {
  var clientY = event.clientY;

  var _treeNode$selectHandl = treeNode.selectHandle.getBoundingClientRect(),
      top = _treeNode$selectHandl.top,
      bottom = _treeNode$selectHandl.bottom,
      height = _treeNode$selectHandl.height;

  var des = Math.max(height * DRAG_SIDE_RANGE, DRAG_MIN_GAP);

  if (clientY <= top + des) {
    return -1;
  } else if (clientY >= bottom - des) {
    return 1;
  }

  return 0;
}

/**
 * Return selectedKeys according with multiple prop
 * @param selectedKeys
 * @param props
 * @returns [string]
 */
function calcSelectedKeys(selectedKeys, props) {
  if (!selectedKeys) return undefined;

  var multiple = props.multiple;

  if (multiple) {
    return selectedKeys.slice();
  }

  if (selectedKeys.length) {
    return [selectedKeys[0]];
  }
  return selectedKeys;
}

/**
 * Since React internal will convert key to string,
 * we need do this to avoid `checkStrictly` use number match
 */
function keyListToString(keyList) {
  if (!keyList) return keyList;
  return keyList.map(function (key) {
    return String(key);
  });
}

var internalProcessProps = function internalProcessProps(props) {
  return props;
};
function convertDataToTree(treeData, processer) {
  if (!treeData) return [];

  var _ref3 = processer || {},
      _ref3$processProps = _ref3.processProps,
      processProps = _ref3$processProps === undefined ? internalProcessProps : _ref3$processProps;

  var list = Array.isArray(treeData) ? treeData : [treeData];
  return list.map(function (_ref4) {
    var children = _ref4.children,
        props = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref4, ['children']);

    var childrenNodes = convertDataToTree(children, processer);

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      _TreeNode__WEBPACK_IMPORTED_MODULE_4__["default"],
      processProps(props),
      childrenNodes
    );
  });
}

// TODO: ========================= NEW LOGIC =========================
/**
 * Calculate treeNodes entities. `processTreeEntity` is used for `rc-tree-select`
 * @param treeNodes
 * @param processTreeEntity  User can customize the entity
 */
function convertTreeToEntities(treeNodes) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      initWrapper = _ref5.initWrapper,
      processEntity = _ref5.processEntity,
      onProcessFinished = _ref5.onProcessFinished;

  var posEntities = {};
  var keyEntities = {};
  var wrapper = {
    posEntities: posEntities,
    keyEntities: keyEntities
  };

  if (initWrapper) {
    wrapper = initWrapper(wrapper) || wrapper;
  }

  traverseTreeNodes(treeNodes, function (item) {
    var node = item.node,
        index = item.index,
        pos = item.pos,
        key = item.key,
        parentPos = item.parentPos;

    var entity = { node: node, index: index, key: key, pos: pos };

    posEntities[pos] = entity;
    keyEntities[key] = entity;

    // Fill children
    entity.parent = posEntities[parentPos];
    if (entity.parent) {
      entity.parent.children = entity.parent.children || [];
      entity.parent.children.push(entity);
    }

    if (processEntity) {
      processEntity(entity, wrapper);
    }
  });

  if (onProcessFinished) {
    onProcessFinished(wrapper);
  }

  return wrapper;
}

/**
 * Parse `checkedKeys` to { checkedKeys, halfCheckedKeys } style
 */
function parseCheckedKeys(keys) {
  if (!keys) {
    return null;
  }

  // Convert keys to object format
  var keyProps = void 0;
  if (Array.isArray(keys)) {
    // [Legacy] Follow the api doc
    keyProps = {
      checkedKeys: keys,
      halfCheckedKeys: undefined
    };
  } else if (typeof keys === 'object') {
    keyProps = {
      checkedKeys: keys.checked || undefined,
      halfCheckedKeys: keys.halfChecked || undefined
    };
  } else {
    warning__WEBPACK_IMPORTED_MODULE_3___default()(false, '`checkedKeys` is not an array or an object');
    return null;
  }

  keyProps.checkedKeys = keyListToString(keyProps.checkedKeys);
  keyProps.halfCheckedKeys = keyListToString(keyProps.halfCheckedKeys);

  return keyProps;
}

/**
 * Conduct check state by the keyList. It will conduct up & from the provided key.
 * If the conduct path reach the disabled or already checked / unchecked node will stop conduct.
 * @param keyList       list of keys
 * @param isCheck       is check the node or not
 * @param keyEntities   parsed by `convertTreeToEntities` function in Tree
 * @param checkStatus   Can pass current checked status for process (usually for uncheck operation)
 * @returns {{checkedKeys: [], halfCheckedKeys: []}}
 */
function conductCheck(keyList, isCheck, keyEntities) {
  var checkStatus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var checkedKeys = {};
  var halfCheckedKeys = {}; // Record the key has some child checked (include child half checked)

  (checkStatus.checkedKeys || []).forEach(function (key) {
    checkedKeys[key] = true;
  });

  (checkStatus.halfCheckedKeys || []).forEach(function (key) {
    halfCheckedKeys[key] = true;
  });

  // Conduct up
  function conductUp(key) {
    if (checkedKeys[key] === isCheck) return;

    var entity = keyEntities[key];
    if (!entity) return;

    var children = entity.children,
        parent = entity.parent,
        node = entity.node;


    if (isCheckDisabled(node)) return;

    // Check child node checked status
    var everyChildChecked = true;
    var someChildChecked = false; // Child checked or half checked

    (children || []).filter(function (child) {
      return !isCheckDisabled(child.node);
    }).forEach(function (_ref6) {
      var childKey = _ref6.key;

      var childChecked = checkedKeys[childKey];
      var childHalfChecked = halfCheckedKeys[childKey];

      if (childChecked || childHalfChecked) someChildChecked = true;
      if (!childChecked) everyChildChecked = false;
    });

    // Update checked status
    if (isCheck) {
      checkedKeys[key] = everyChildChecked;
    } else {
      checkedKeys[key] = false;
    }
    halfCheckedKeys[key] = someChildChecked;

    if (parent) {
      conductUp(parent.key);
    }
  }

  // Conduct down
  function conductDown(key) {
    if (checkedKeys[key] === isCheck) return;

    var entity = keyEntities[key];
    if (!entity) return;

    var children = entity.children,
        node = entity.node;


    if (isCheckDisabled(node)) return;

    checkedKeys[key] = isCheck;

    (children || []).forEach(function (child) {
      conductDown(child.key);
    });
  }

  function conduct(key) {
    var entity = keyEntities[key];

    if (!entity) {
      warning__WEBPACK_IMPORTED_MODULE_3___default()(false, '\'' + key + '\' does not exist in the tree.');
      return;
    }

    var children = entity.children,
        parent = entity.parent,
        node = entity.node;

    checkedKeys[key] = isCheck;

    if (isCheckDisabled(node)) return;

    // Conduct down
    (children || []).filter(function (child) {
      return !isCheckDisabled(child.node);
    }).forEach(function (child) {
      conductDown(child.key);
    });

    // Conduct up
    if (parent) {
      conductUp(parent.key);
    }
  }

  (keyList || []).forEach(function (key) {
    conduct(key);
  });

  var checkedKeyList = [];
  var halfCheckedKeyList = [];

  // Fill checked list
  Object.keys(checkedKeys).forEach(function (key) {
    if (checkedKeys[key]) {
      checkedKeyList.push(key);
    }
  });

  // Fill half checked list
  Object.keys(halfCheckedKeys).forEach(function (key) {
    if (!checkedKeys[key] && halfCheckedKeys[key]) {
      halfCheckedKeyList.push(key);
    }
  });

  return {
    checkedKeys: checkedKeyList,
    halfCheckedKeys: halfCheckedKeyList
  };
}

/**
 * If user use `autoExpandParent` we should get the list of parent node
 * @param keyList
 * @param keyEntities
 */
function conductExpandParent(keyList, keyEntities) {
  var expandedKeys = {};

  function conductUp(key) {
    if (expandedKeys[key]) return;

    var entity = keyEntities[key];
    if (!entity) return;

    expandedKeys[key] = true;

    var parent = entity.parent,
        node = entity.node;


    if (isCheckDisabled(node)) return;

    if (parent) {
      conductUp(parent.key);
    }
  }

  (keyList || []).forEach(function (key) {
    conductUp(key);
  });

  return Object.keys(expandedKeys);
}

/**
 * Returns only the data- and aria- key/value pairs
 * @param {object} props 
 */
function getDataAndAria(props) {
  return Object.keys(props).reduce(function (prev, key) {
    if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-') {
      prev[key] = props[key];
    }
    return prev;
  }, {});
}

/***/ }),

/***/ "./node_modules/rc-tree/node_modules/warning/browser.js":
/*!**************************************************************!*\
  !*** ./node_modules/rc-tree/node_modules/warning/browser.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/rc-util/es/Dom/class.js":
/*!**********************************************!*\
  !*** ./node_modules/rc-util/es/Dom/class.js ***!
  \**********************************************/
/*! exports provided: hasClass, addClass, removeClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
function hasClass(node, className) {
  if (node.classList) {
    return node.classList.contains(className);
  }

  var originClass = node.className;
  return " ".concat(originClass, " ").indexOf(" ".concat(className, " ")) > -1;
}
function addClass(node, className) {
  if (node.classList) {
    node.classList.add(className);
  } else {
    if (!hasClass(node, className)) {
      node.className = "".concat(node.className, " ").concat(className);
    }
  }
}
function removeClass(node, className) {
  if (node.classList) {
    node.classList.remove(className);
  } else {
    if (hasClass(node, className)) {
      var originClass = node.className;
      node.className = " ".concat(originClass, " ").replace(" ".concat(className, " "), ' ');
    }
  }
}

/***/ }),

/***/ "./src/strategies.js":
/*!***************************!*\
  !*** ./src/strategies.js ***!
  \***************************/
/*! exports provided: SHOW_ALL, SHOW_PARENT, SHOW_CHILD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_ALL", function() { return SHOW_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_PARENT", function() { return SHOW_PARENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_CHILD", function() { return SHOW_CHILD; });
var SHOW_ALL = 'SHOW_ALL';
var SHOW_PARENT = 'SHOW_PARENT';
var SHOW_CHILD = 'SHOW_CHILD';

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: findPopupContainer, toTitle, toArray, createRef, UNSELECTABLE_STYLE, UNSELECTABLE_ATTRIBUTE, flatToHierarchy, resetAriaId, generateAriaId, isLabelInValue, parseSimpleTreeData, isPosRelated, cleanEntity, getFilterTree, formatInternalValue, getLabel, formatSelectorValue, convertDataToTree, convertTreeToEntities, getHalfCheckedKeys, conductCheck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findPopupContainer", function() { return findPopupContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toTitle", function() { return toTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return createRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNSELECTABLE_STYLE", function() { return UNSELECTABLE_STYLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNSELECTABLE_ATTRIBUTE", function() { return UNSELECTABLE_ATTRIBUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatToHierarchy", function() { return flatToHierarchy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetAriaId", function() { return resetAriaId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateAriaId", function() { return generateAriaId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLabelInValue", function() { return isLabelInValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSimpleTreeData", function() { return parseSimpleTreeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPosRelated", function() { return isPosRelated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanEntity", function() { return cleanEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilterTree", function() { return getFilterTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatInternalValue", function() { return formatInternalValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLabel", function() { return getLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatSelectorValue", function() { return formatSelectorValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertDataToTree", function() { return convertDataToTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertTreeToEntities", function() { return convertTreeToEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHalfCheckedKeys", function() { return getHalfCheckedKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conductCheck", function() { return conductCheck; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_tree_es_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-tree/es/util */ "./node_modules/rc-tree/es/util.js");
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/es/Children/toArray */ "./node_modules/rc-util/es/Children/toArray.js");
/* harmony import */ var rc_util_es_Dom_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-util/es/Dom/class */ "./node_modules/rc-util/es/Dom/class.js");
/* harmony import */ var _strategies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./strategies */ "./src/strategies.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var warnDeprecatedLabel = false; // =================== DOM =====================

function findPopupContainer(node, prefixClass) {
  var current = node;

  while (current) {
    if (Object(rc_util_es_Dom_class__WEBPACK_IMPORTED_MODULE_4__["hasClass"])(current, prefixClass)) {
      return current;
    }

    current = current.parentNode;
  }

  return null;
} // =================== MISC ====================

function toTitle(title) {
  if (typeof title === 'string') {
    return title;
  }

  return null;
}
function toArray(data) {
  if (data === undefined || data === null) return [];
  return Array.isArray(data) ? data : [data];
} // Shallow copy of React 16.3 createRef api

function createRef() {
  var func = function setRef(node) {
    func.current = node;
  };

  return func;
} // =============== Legacy ===============

var UNSELECTABLE_STYLE = {
  userSelect: 'none',
  WebkitUserSelect: 'none'
};
var UNSELECTABLE_ATTRIBUTE = {
  unselectable: 'unselectable'
};
/**
 * Convert position list to hierarchy structure.
 * This is little hack since use '-' to split the position.
 */

function flatToHierarchy(positionList) {
  if (!positionList.length) {
    return [];
  }

  var entrances = {}; // Prepare the position map

  var posMap = {};
  var parsedList = positionList.slice().map(function (entity) {
    var clone = _objectSpread({}, entity, {
      fields: entity.pos.split('-')
    });

    delete clone.children;
    return clone;
  });
  parsedList.forEach(function (entity) {
    posMap[entity.pos] = entity;
  });
  parsedList.sort(function (a, b) {
    return a.fields.length - b.fields.length;
  }); // Create the hierarchy

  parsedList.forEach(function (entity) {
    var parentPos = entity.fields.slice(0, -1).join('-');
    var parentEntity = posMap[parentPos];

    if (!parentEntity) {
      entrances[entity.pos] = entity;
    } else {
      parentEntity.children = parentEntity.children || [];
      parentEntity.children.push(entity);
    } // Some time position list provide `key`, we don't need it


    delete entity.key;
    delete entity.fields;
  });
  return Object.keys(entrances).map(function (key) {
    return entrances[key];
  });
} // =============== Accessibility ===============

var ariaId = 0;
function resetAriaId() {
  ariaId = 0;
}
function generateAriaId(prefix) {
  ariaId += 1;
  return "".concat(prefix, "_").concat(ariaId);
}
function isLabelInValue(props) {
  var treeCheckable = props.treeCheckable,
      treeCheckStrictly = props.treeCheckStrictly,
      labelInValue = props.labelInValue;

  if (treeCheckable && treeCheckStrictly) {
    return true;
  }

  return labelInValue || false;
} // =================== Tree ====================

function parseSimpleTreeData(treeData, _ref) {
  var id = _ref.id,
      pId = _ref.pId,
      rootPId = _ref.rootPId;
  var keyNodes = {};
  var rootNodeList = []; // Fill in the map

  var nodeList = treeData.map(function (node) {
    var clone = _objectSpread({}, node);

    var key = clone[id];
    keyNodes[key] = clone;
    clone.key = clone.key || key;
    return clone;
  }); // Connect tree

  nodeList.forEach(function (node) {
    var parentKey = node[pId];
    var parent = keyNodes[parentKey]; // Fill parent

    if (parent) {
      parent.children = parent.children || [];
      parent.children.push(node);
    } // Fill root tree node


    if (parentKey === rootPId || !parent && rootPId === null) {
      rootNodeList.push(node);
    }
  });
  return rootNodeList;
}
/**
 * Detect if position has relation.
 * e.g. 1-2 related with 1-2-3
 * e.g. 1-3-2 related with 1
 * e.g. 1-2 not related with 1-21
 */

function isPosRelated(pos1, pos2) {
  var fields1 = pos1.split('-');
  var fields2 = pos2.split('-');
  var minLen = Math.min(fields1.length, fields2.length);

  for (var i = 0; i < minLen; i += 1) {
    if (fields1[i] !== fields2[i]) {
      return false;
    }
  }

  return true;
}
/**
 * This function is only used on treeNode check (none treeCheckStrictly but has searchInput).
 * We convert entity to { node, pos, children } format.
 * This is legacy bug but we still need to do with it.
 * @param entity
 */

function cleanEntity(_ref2) {
  var node = _ref2.node,
      pos = _ref2.pos,
      children = _ref2.children;
  var instance = {
    node: node,
    pos: pos
  };

  if (children) {
    instance.children = children.map(cleanEntity);
  }

  return instance;
}
/**
 * Get a filtered TreeNode list by provided treeNodes.
 * [Legacy] Since `Tree` use `key` as map but `key` will changed by React,
 * we have to convert `treeNodes > data > treeNodes` to keep the key.
 * Such performance hungry!
 *
 * We pass `Component` as argument is to fix eslint issue.
 */

function getFilterTree(treeNodes, searchValue, filterFunc, valueEntities, Component) {
  if (!searchValue) {
    return null;
  }

  function mapFilteredNodeToData(node) {
    if (!node) return null;
    var match = false;

    if (filterFunc(searchValue, node)) {
      match = true;
    }

    var children = Object(rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_3__["default"])(node.props.children).map(mapFilteredNodeToData).filter(function (n) {
      return n;
    });

    if (children.length || match) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, node.props, {
        key: valueEntities[node.props.value].key
      }), children);
    }

    return null;
  }

  return treeNodes.map(mapFilteredNodeToData).filter(function (node) {
    return node;
  });
} // =================== Value ===================

/**
 * Convert value to array format to make logic simplify.
 */

function formatInternalValue(value, props) {
  var valueList = toArray(value); // Parse label in value

  if (isLabelInValue(props)) {
    return valueList.map(function (val) {
      if (typeof val !== 'object' || !val) {
        return {
          value: '',
          label: ''
        };
      }

      return val;
    });
  }

  return valueList.map(function (val) {
    return {
      value: val
    };
  });
}
function getLabel(wrappedValue, entity, treeNodeLabelProp) {
  if (wrappedValue.label) {
    return wrappedValue.label;
  }

  if (entity && entity.node.props) {
    return entity.node.props[treeNodeLabelProp];
  } // Since value without entity will be in missValueList.
  // This code will never reached, but we still need this in case.


  return wrappedValue.value;
}
/**
 * Convert internal state `valueList` to user needed value list.
 * This will return an array list. You need check if is not multiple when return.
 *
 * `allCheckedNodes` is used for `treeCheckStrictly`
 */

function formatSelectorValue(valueList, props, valueEntities) {
  var treeNodeLabelProp = props.treeNodeLabelProp,
      treeCheckable = props.treeCheckable,
      treeCheckStrictly = props.treeCheckStrictly,
      showCheckedStrategy = props.showCheckedStrategy; // Will hide some value if `showCheckedStrategy` is set

  if (treeCheckable && !treeCheckStrictly) {
    var values = {};
    valueList.forEach(function (wrappedValue) {
      values[wrappedValue.value] = wrappedValue;
    });
    var hierarchyList = flatToHierarchy(valueList.map(function (_ref3) {
      var value = _ref3.value;
      return valueEntities[value];
    }));

    if (showCheckedStrategy === _strategies__WEBPACK_IMPORTED_MODULE_5__["SHOW_PARENT"]) {
      // Only get the parent checked value
      return hierarchyList.map(function (_ref4) {
        var value = _ref4.node.props.value;
        return {
          label: getLabel(values[value], valueEntities[value], treeNodeLabelProp),
          value: value
        };
      });
    }

    if (showCheckedStrategy === _strategies__WEBPACK_IMPORTED_MODULE_5__["SHOW_CHILD"]) {
      // Only get the children checked value
      var targetValueList = []; // Find the leaf children

      var traverse = function traverse(_ref5) {
        var value = _ref5.node.props.value,
            children = _ref5.children;

        if (!children || children.length === 0) {
          targetValueList.push({
            label: getLabel(values[value], valueEntities[value], treeNodeLabelProp),
            value: value
          });
          return;
        }

        children.forEach(function (entity) {
          traverse(entity);
        });
      };

      hierarchyList.forEach(function (entity) {
        traverse(entity);
      });
      return targetValueList;
    }
  }

  return valueList.map(function (wrappedValue) {
    return {
      label: getLabel(wrappedValue, valueEntities[wrappedValue.value], treeNodeLabelProp),
      value: wrappedValue.value
    };
  });
}
/**
 * Use `rc-tree` convertDataToTree to convert treeData to TreeNodes.
 * This will change the label to title value
 */

function processProps(props) {
  var title = props.title,
      label = props.label,
      key = props.key,
      value = props.value;

  var cloneProps = _objectSpread({}, props); // Warning user not to use deprecated label prop.


  if (label && !title) {
    if (!warnDeprecatedLabel) {
      warning__WEBPACK_IMPORTED_MODULE_1___default()(false, "'label' in treeData is deprecated. Please use 'title' instead.");
      warnDeprecatedLabel = true;
    }

    cloneProps.title = label;
  }

  if (!key) {
    cloneProps.key = value;
  }

  return cloneProps;
}

function convertDataToTree(treeData) {
  return Object(rc_tree_es_util__WEBPACK_IMPORTED_MODULE_2__["convertDataToTree"])(treeData, {
    processProps: processProps
  });
}
/**
 * Use `rc-tree` convertTreeToEntities for entities calculation.
 * We have additional entities of `valueEntities`
 */

function initWrapper(wrapper) {
  return _objectSpread({}, wrapper, {
    valueEntities: {}
  });
}

function processEntity(entity, wrapper) {
  var value = entity.node.props.value;
  entity.value = value; // This should be empty, or will get error message.

  var currentEntity = wrapper.valueEntities[value];

  if (currentEntity) {
    warning__WEBPACK_IMPORTED_MODULE_1___default()(false, "Conflict! value of node '".concat(entity.key, "' (").concat(value, ") has already used by node '").concat(currentEntity.key, "'."));
  }

  wrapper.valueEntities[value] = entity;
}

function convertTreeToEntities(treeNodes) {
  return Object(rc_tree_es_util__WEBPACK_IMPORTED_MODULE_2__["convertTreeToEntities"])(treeNodes, {
    initWrapper: initWrapper,
    processEntity: processEntity
  });
}
/**
 * https://github.com/ant-design/ant-design/issues/13328
 * We need calculate the half check key when searchValue is set.
 */
// TODO: This logic may better move to rc-tree

function getHalfCheckedKeys(valueList, valueEntities) {
  var values = {}; // Fill checked keys

  valueList.forEach(function (_ref6) {
    var value = _ref6.value;
    values[value] = false;
  }); // Fill half checked keys

  valueList.forEach(function (_ref7) {
    var value = _ref7.value;
    var current = valueEntities[value];

    while (current && current.parent) {
      var parentValue = current.parent.value;
      if (parentValue in values) break;
      values[parentValue] = true;
      current = current.parent;
    }
  }); // Get half keys

  return Object.keys(values).filter(function (value) {
    return values[value];
  }).map(function (value) {
    return valueEntities[value].key;
  });
}
var conductCheck = rc_tree_es_util__WEBPACK_IMPORTED_MODULE_2__["conductCheck"];

/***/ }),

/***/ 1:
/*!************************************!*\
  !*** multi ./examples/big-data.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./examples/big-data.js */"./examples/big-data.js");


/***/ })

/******/ });
//# sourceMappingURL=big-data.js.map