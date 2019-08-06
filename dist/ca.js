/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./start */ \"./src/start.js\")(window);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/renderer.js":
/*!*************************!*\
  !*** ./src/renderer.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nmodule.exports =\n/*#__PURE__*/\nfunction () {\n  function Renderer(global) {\n    _classCallCheck(this, Renderer);\n\n    this.global = global;\n    this.fps = 30;\n    this.step = 0;\n    this.currentCell = null;\n    this.currentId = -1;\n    this.width = 100;\n    this.height = 100;\n    this.cellSize = 1;\n    this.canvas = null;\n    this.parentId = null;\n    this.interval = null;\n    this.setupDone = false;\n  }\n\n  _createClass(Renderer, [{\n    key: \"setCellSize\",\n    value: function setCellSize(size) {\n      if (this.setupDone) throw new Error('This function can only be called in the setup function.');\n      this.cellSize = size;\n    }\n  }, {\n    key: \"setSize\",\n    value: function setSize(width, height) {\n      if (this.setupDone) throw new Error('This function can only be called in the setup function.');\n      this.width = width;\n      this.height = height;\n    }\n  }, {\n    key: \"setParent\",\n    value: function setParent(parentId) {\n      if (this.setupDone) throw new Error('This function can only be called in the setup function.');\n      this.parentId = parentId;\n    }\n  }, {\n    key: \"getFramerate\",\n    value: function getFramerate() {\n      return this.fps;\n    }\n  }, {\n    key: \"setFramerate\",\n    value: function setFramerate(fps) {\n      this.fps = fps;\n\n      if (this.interval != null) {\n        clearInterval(this.interval);\n        this.interval = setInterval(this.onRender.bind(this), Math.floor(1000 / this.fps));\n      }\n    }\n  }, {\n    key: \"setPoint\",\n    value: function setPoint(x, y, c) {\n      if (this.currentCell == null) throw Error('This function can only be called in loop function.');\n      if (c.h != undefined) c = util.hsvToRgb(c);\n      var p = this.currentCell.pos[y] + x * 4;\n      this.image.data[p + 0] = c.r;\n      this.image.data[p + 1] = c.g;\n      this.image.data[p + 2] = c.b;\n      this.image.data[p + 3] = 255;\n    }\n  }, {\n    key: \"setBackground\",\n    value: function setBackground(c) {\n      if (c.h != undefined) c = util.hsvToRgb(c);\n\n      for (var i = 0; i < this.cellSize; ++i) {\n        for (var j = 0; j < this.cellSize; ++j) {\n          this.setPoint(i, j, c);\n        }\n      }\n    }\n  }, {\n    key: \"getId\",\n    value: function getId() {\n      if (this.currentId == null) throw Error('This function can only be called in loop or construct function.');\n      return this.currentId;\n    }\n  }, {\n    key: \"getCell\",\n    value: function getCell() {\n      if (this.currentCell == null) throw Error('This function can only be called in loop function.');\n      return this.currentCell.cell;\n    }\n  }, {\n    key: \"cloneCell\",\n    value: function cloneCell() {\n      if (this.currentCell == null) throw Error('This function can only be called in loop function.');\n      return JSON.parse(JSON.stringify(this.currentCell.cell));\n    }\n  }, {\n    key: \"getNeighbor\",\n    value: function getNeighbor(index) {\n      if (this.currentCell == null) throw Error('This function can only be called in loop function.');\n      return this.currentCell.neighborhood[index] == null ? null : this.currentCell.neighborhood[index].cell;\n    }\n  }, {\n    key: \"createAutomata\",\n    value: function createAutomata() {\n      this.canvas = document.createElement('canvas');\n\n      if (typeof this.parentId == 'string' && this.parentId != null) {\n        var parent = document.getElementById(this.parentId);\n        parent.appendChild(this.canvas);\n      } else document.body.appendChild(this.canvas);\n\n      this.canvas.width = this.width * this.cellSize;\n      this.canvas.height = this.height * this.cellSize;\n      this.context = this.canvas.getContext('2d');\n      this.image = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);\n      this.cells = [new Array(this.width * this.height), new Array(this.width * this.height)];\n\n      for (var i = 0; i < this.width * this.height; ++i) {\n        this.cells[0][i] = {\n          cell: null,\n          neighborhood: null,\n          pos: null\n        };\n        this.cells[1][i] = {\n          cell: null,\n          neighborhood: null,\n          pos: null\n        };\n      }\n\n      for (var _i = 0; _i < this.width * this.height; ++_i) {\n        var x = _i % this.width;\n        var y = Math.floor(_i / this.width);\n        var neighborhood = this.computeNeighborhood(x, y);\n        var pos = new Array(this.cellSize);\n\n        for (var j = 0; j < pos.length; ++j) {\n          pos[j] = ((j + y * this.cellSize) * this.width + x) * this.cellSize * 4;\n        }\n\n        this.cells[0][_i].neighborhood = neighborhood[0];\n        this.cells[1][_i].neighborhood = neighborhood[1];\n        this.cells[0][_i].pos = pos;\n        this.cells[1][_i].pos = pos;\n      }\n    }\n  }, {\n    key: \"computeNeighborhood\",\n    value: function computeNeighborhood(x, y) {\n      var pos = [[-1, -1], // TOPLEFT\n      [0, -1], // TOP\n      [1, -1], // TOPRIGHT\n      [1, 0], // RIGHT\n      [1, 1], // BOTTOMRIGHT\n      [0, 1], // BOTTOM\n      [-1, 1], // BOTTOMLEFT\n      [-1, 0] // LEFT\n      ];\n      var neighborhood = [[], []];\n\n      for (var i = 0; i < pos.length; ++i) {\n        var newX = x + pos[i][0];\n        var newY = y + pos[i][1];\n\n        if (newX < 0 || newX >= this.width || newY < 0 || newY >= this.height) {\n          neighborhood[0].push(null);\n          neighborhood[1].push(null);\n        } else {\n          neighborhood[0].push(this.cells[0][newX + newY * this.width]);\n          neighborhood[1].push(this.cells[1][newX + newY * this.width]);\n        }\n      }\n\n      return neighborhood;\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      if (global.setup) {\n        global.setup();\n      }\n\n      this.createAutomata();\n\n      if (global.construct) {\n        for (var i = 0; i < this.width * this.height; ++i) {\n          this.currentId = i;\n          this.cells[this.step][i].cell = global.construct();\n        }\n\n        this.currentCell = null;\n        this.currentId = -1;\n      }\n\n      this.interval = setInterval(this.onRender.bind(this), Math.floor(1000 / this.fps));\n    }\n  }, {\n    key: \"onRender\",\n    value: function onRender() {\n      if (global.loop == undefined) return;\n\n      for (var i = 0; i < this.width * this.height; ++i) {\n        this.currentCell = this.cells[this.step][i];\n        this.currentId = i;\n        this.cells[1 - this.step][i].cell = global.loop();\n      }\n\n      this.currentCell = null;\n      this.currentId = -1;\n      this.step = 1 - this.step;\n      this.context.putImageData(this.image, 0, 0);\n    }\n  }]);\n\n  return Renderer;\n}();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/renderer.js?");

/***/ }),

/***/ "./src/start.js":
/*!**********************!*\
  !*** ./src/start.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Renderer = __webpack_require__(/*! ./renderer */ \"./src/renderer.js\");\n\nfunction start(global) {\n  // Constants\n  global.TOPLEFT = 0;\n  global.TOP = 1;\n  global.TOPRIGHT = 2;\n  global.RIGHT = 3;\n  global.BOTTOMRIGHT = 4;\n  global.BOTTOM = 5;\n  global.BOTTOMLEFT = 6;\n  global.LEFT = 7;\n\n  global.ColorHSV = function ColorHSV(h, s, v) {\n    _classCallCheck(this, ColorHSV);\n\n    this.h = h;\n    this.s = s;\n    this.v = v;\n  };\n\n  global.ColorRGB = function ColorRGB(r, g, b) {\n    _classCallCheck(this, ColorRGB);\n\n    this.r = r;\n    this.g = g;\n    this.b = b;\n  };\n\n  global.createAutomata = function (width, height) {\n    var cellSize = 1,\n        parent = null;\n\n    if ((arguments.length <= 2 ? 0 : arguments.length - 2) == 1) {\n      if (typeof (arguments.length <= 2 ? undefined : arguments[2]) == 'number') cellSize = arguments.length <= 2 ? undefined : arguments[2];else parent = arguments.length <= 2 ? undefined : arguments[2];\n    } else if ((arguments.length <= 2 ? 0 : arguments.length - 2) == 2) {\n      cellSize = arguments.length <= 2 ? undefined : arguments[2];\n      parent = arguments.length <= 3 ? undefined : arguments[3];\n    }\n\n    render.setSize(width, height);\n    render.setCellSize(cellSize);\n    render.setParent(parent);\n  };\n\n  global.framerate = function (fps) {\n    if (fps == undefined) return render.getFramerate();\n    render.setFramerate(fps);\n  };\n\n  global.point = function (x, y, c) {\n    render.setPoint(x, y, c);\n  };\n\n  global.background = function (c) {\n    render.setBackground(c);\n  };\n\n  global.id = function () {\n    return render.getId();\n  };\n\n  global.cell = function () {\n    return render.getCell();\n  };\n\n  global.cloneCell = function () {\n    return render.cloneCell();\n  };\n\n  global.neighbor = function (index) {\n    return render.getNeighbor(index);\n  };\n\n  var render = new Renderer();\n  global.addEventListener('load', function () {\n    return render.start();\n  });\n}\n\nmodule.exports = start;\n\n//# sourceURL=webpack:///./src/start.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hsvToRgb = function hsvToRgb(c) {\n  var r, g, b;\n  var h = c.h / 360;\n  var s = c.s / 255;\n  var v = c.v / 255;\n  var i = Math.floor(h * 6);\n  var f = h * 6 - i;\n  var p = v * (1 - s);\n  var q = v * (1 - f * s);\n  var t = v * (1 - (1 - f) * s);\n\n  switch (i % 6) {\n    case 0:\n      r = v, g = t, b = p;\n      break;\n\n    case 1:\n      r = q, g = v, b = p;\n      break;\n\n    case 2:\n      r = p, g = v, b = t;\n      break;\n\n    case 3:\n      r = p, g = q, b = v;\n      break;\n\n    case 4:\n      r = t, g = p, b = v;\n      break;\n\n    case 5:\n      r = v, g = p, b = q;\n      break;\n  }\n\n  return {\n    r: Math.floor(r * 255),\n    g: Math.floor(g * 255),\n    b: Math.floor(b * 255)\n  };\n};\n\nmodule.exports = {\n  hsvToRgb: hsvToRgb\n};\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });