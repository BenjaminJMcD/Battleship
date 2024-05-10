/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.header {
    font-size: 70px;
    text-align: center;
    background-color:rgb(86, 116, 141);
}

.gameBoard {
    width: 400px;
    height: 400px;
    border: 5px solid black;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
}

.gridSquare {
    border: 1px solid black;
}

.main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items:center;
    background-color: steelblue;
}

.empty {
    background-color: lightblue;
}
.ship {
    background-color: gray
}
.miss {
    background-color: white;
}
.hit {
    background-color: red;
}

.placeShipsDiv {
    border: 5px solid black;
    width: 400px;
    margin-top: 20px;
    background-color: white;
}

.shiftInstruction {
    text-align: center;
    margin-bottom: 12px;
    font-size: 18px
}

.shipsContainer {
    width: 402px;
    height: 140px;
    display: flex;
    flex-wrap: wrap;
}

.shipDiv {
    display: flex;
    height: 37px;
    margin-left: 10px;
    border: 1px solid black;
}

.shipsContainerVert {
    width: 410px;
    gap: 40px;
    margin-bottom: 10px;
    margin-left: 20px;
    display:flex;

}

.shipDivVert {
    display: flex;
    flex-direction: column;
    align-self:center;
}

.shipSquare {
    border: 1px solid black;
    background-color: gray;
    width: 37px;
    height: 37px;
}

.conclusionText {
    font-size: 30px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 10px;
}

button {
    border-radius: 20px;
    height: 70px;
    font-size: 30px;
    background-color: black;
    color: white;
    margin-left: 20px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,kBAAkB;IAClB,kCAAkC;AACtC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,aAAa;IACb,sCAAsC;AAC1C;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,oBAAoB;IACpB,2BAA2B;AAC/B;;AAEA;IACI,2BAA2B;AAC/B;AACA;IACI;AACJ;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB;AACJ;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,SAAS;IACT,mBAAmB;IACnB,iBAAiB;IACjB,YAAY;;AAEhB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,uBAAuB;IACvB,sBAAsB;IACtB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,uBAAuB;IACvB,YAAY;IACZ,iBAAiB;AACrB","sourcesContent":[".header {\n    font-size: 70px;\n    text-align: center;\n    background-color:rgb(86, 116, 141);\n}\n\n.gameBoard {\n    width: 400px;\n    height: 400px;\n    border: 5px solid black;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n}\n\n.gridSquare {\n    border: 1px solid black;\n}\n\n.main {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-items:center;\n    background-color: steelblue;\n}\n\n.empty {\n    background-color: lightblue;\n}\n.ship {\n    background-color: gray\n}\n.miss {\n    background-color: white;\n}\n.hit {\n    background-color: red;\n}\n\n.placeShipsDiv {\n    border: 5px solid black;\n    width: 400px;\n    margin-top: 20px;\n    background-color: white;\n}\n\n.shiftInstruction {\n    text-align: center;\n    margin-bottom: 12px;\n    font-size: 18px\n}\n\n.shipsContainer {\n    width: 402px;\n    height: 140px;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.shipDiv {\n    display: flex;\n    height: 37px;\n    margin-left: 10px;\n    border: 1px solid black;\n}\n\n.shipsContainerVert {\n    width: 410px;\n    gap: 40px;\n    margin-bottom: 10px;\n    margin-left: 20px;\n    display:flex;\n\n}\n\n.shipDivVert {\n    display: flex;\n    flex-direction: column;\n    align-self:center;\n}\n\n.shipSquare {\n    border: 1px solid black;\n    background-color: gray;\n    width: 37px;\n    height: 37px;\n}\n\n.conclusionText {\n    font-size: 30px;\n    text-align: center;\n    margin-top: 20px;\n    margin-bottom: 10px;\n}\n\nbutton {\n    border-radius: 20px;\n    height: 70px;\n    font-size: 30px;\n    background-color: black;\n    color: white;\n    margin-left: 20px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/CompBoard.js":
/*!**************************!*\
  !*** ./src/CompBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CompBoard)
/* harmony export */ });
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");


function CompBoard() {

    let compBoard = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"];

    let compShips = compBoard.ships;
    
    for (const ship in compShips) {
        alternateVert(compShips[ship])
    }

    let ship1 = compBoard.ships.ship1;
    let ship2 = compBoard.ships.ship2;
    let ship3 = compBoard.ships.ship3;
    let ship4 = compBoard.ships.ship4;
    let ship5 = compBoard.ships.ship5;

    do {
    let ship1Coords = secureSpot(ship1);
    compBoard.placeShip(ship1, ship1Coords.row, ship1Coords.column);
    } while (ship1.placement.length == 0)

    do {
    let ship2Coords = secureSpot(ship2);
    compBoard.placeShip(ship2, ship2Coords.row, ship2Coords.column);
    } while (ship2.placement.length == 0);

    do {
    let ship3Coords = secureSpot(ship3);
    compBoard.placeShip(ship3, ship3Coords.row, ship3Coords.column);
    } while (ship3.placement.length == 0);

    do {
    let ship4Coords = secureSpot(ship4);
    compBoard.placeShip(ship4, ship4Coords.row, ship4Coords.column);
    } while (ship4.placement.length == 0);

    do {
    let ship5Coords = secureSpot(ship5);
    compBoard.placeShip(ship5, ship5Coords.row, ship5Coords.column);
    } while (ship5.placement.length == 0)
    

    return compBoard;

}
    
function randomNumber(highValue) {
    return Math.floor(Math.random() * highValue);
}
    
    
function alternateVert (ship) {
    let rng = randomNumber(2);
    
    if (rng == 0) {
        ship.vert = false
    }
    else if (rng == 1) {
        ship.vert = true
    }
    return ship;
}
    
function secureSpot(ship) {
    
    if (ship.vert) {
        let row = randomNumber(ship.length+1);
        let column = randomNumber(10);
        return {
            row,
            column
        }
    }
    else if (!ship.vert) {
        let row = randomNumber(10);
        let column = randomNumber(ship.length+1);
        return {
            row,
            column
        }
    }
}

/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/Ship.js");


// 0 = NOTHING
// 1 = SHIP             <<< add 1
// 2 = MISS             <<< add 2 
// 3 = HIT              <<< add 2

class Gameboard {
    constructor() {
        this.board = this.createBoard();
        this.ships = {
            ship1 : new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](2),
            ship2 : new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](3),
            ship3 : new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](3),
            ship4 : new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](4),
            ship5 : new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](5),
        }
    }
    
    createBoard() {
        let board = [];
        for (let i=0; i<10; i++) {
            board[i] = [];
            for (let j=0; j<10; j++) {
                board[i][j] = 0;
            }
        }
        return board;
    }

    // board[ROW][COLUMN]

    placeShip(ship, row, column) {

        // VERT = TRUE/FALSE
        // IF PLACEMENT OUT OF BOUNDS, RETURNS ORIGINAL BOARD
        // CHECKS FOR COLLISIONS, RETURNS ORIGINAL BOARD IF COLLISION

        if (ship.vert && row+ship.length < 11) {
            let conflict = true;
            for (let i=row; i<row+ship.length; i++) {
                if (this.board[i][column] == 1) {
                    return this.board;
                }
                else {conflict = false}
            }
            if (!conflict) {
                for (let i=row; i<row+ship.length; i++) {
                    this.board[i][column] = 1;
                    let coord = [];
                    coord.push(i);
                    coord.push(column);
                    ship.placement.push(coord);
                }
            }
        }

        if (!ship.vert && column+ship.length < 11) {
            let conflict = true;
            for (let i=column; i<column+ship.length; i++) {
                if (this.board[row][i] == 1) {
                    return this.board;
                }
                else {conflict = false}
            }
            if (!conflict) {

                for (let i=column; i<column+ship.length; i++) {
                    this.board[row][i] = 1;
                    let coord = [];
                    coord.push(row);
                    coord.push(i);
                    ship.placement.push(coord);
                }
            }
        }
        return this.board;
    };

    receiveAttack(row, column) {

        // MISS
        if (this.board[row][column] == 0) {
            // RECORD MISS ON GAMEBOARD
            this.board[row][column] = 2;
        }
        // HIT
        else if (this.board[row][column] == 1) {
            // RECORD HIT ON GAMEBOARD
            this.board[row][column] = 3;

            // RECORD HIT ON SHIP
            let coord = [row, column];
            let ships = this.ships;
            for (const ship in ships) {
                let placements = ships[ship].placement;
                for (const coords in placements) {
                    if (placements[coords][0] == coord[0] && placements[coords][1] == coord[1]) {
                        ships[ship].hit();
                    }
                }   
            }
        }
        // return this.board;
    }

    // REPORT IF ALL SHIPS ARE SUNK

    reportSunk() {

        let gameOver = false;
        let counter = 0;

        let ships = this.ships;

        for (const ship in ships) {
            // RUN ISSUNK() ON ALL SHIPS
            ships[ship].isSunk();
            // PUSH SUNKEN SHIPS TO ARRAY
            if (ships[ship].sunk) {
                counter++
            }
        }
        if (counter == 5) {
            gameOver = true;
        }
        return gameOver
    }

    setupComplete() {
        let gameStart = false;
        let counter = 0;
        
        let ships = this.ships;

        for (const ship in ships) {
            // CHECK IF SHIPS ARE PLACED
            ships[ship].shipPlaced();
            // ADD TO COUNTER IF PLACED
            if (ships[ship].placed) {
                counter++
            }
        }
        if (counter == 5) {
            gameStart = true;
        }
        return gameStart;
    }


}

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");


class Player {
    constructor() {
        this.remainingMoves = this.allMoves();
        this.playerTurn = true;
    }

    allMoves() {
        let moves = [];
        for (let i=0; i<10; i++) {
            for (let j=0; j<10; j++) {
                moves.push([i, j]);
            }
        }
        return moves;
    }

    // HELPER FUNCTION TO SEARCH REMAINING MOVES
    searchRemainingMoves(childArray) {
        for (let i=0; i<this.remainingMoves.length; i++) {
            if (this.remainingMoves[i].every(function(value, index) {
                return value === childArray[index]})) {
                    return true;
                }
        }
        return false;
    }

    randomIndex(highValue) {
        return Math.floor(Math.random() * highValue)
    }
    
    playerMove(row, column, computerBoard, playerBoard) {

        computerBoard.receiveAttack(row, column);

        if (computerBoard.board[row][column] == 2) {
            this.computerMove(playerBoard)
        }
    }

    computerMove(playerBoard) {

        // GET RANDOM INDEX OF REMAINING MOVES
        let index = this.randomIndex(this.remainingMoves.length);
        // GET COORDS AT INDEX
        let move = this.remainingMoves[index];
        // REMOVE COORDS FROM REMAINING MOVES
        this.remainingMoves.splice(index, 1);

        let row = move[0];
        let column = move[1];
        
        // MISS
        if (playerBoard.board[row][column] == 0) {
            return playerBoard.receiveAttack(row, column);
        }
        // HIT
        else if (playerBoard.board[row][column] == 1) {
            playerBoard.receiveAttack(row, column);
            // MOVE AGAIN W SMART MOVE

            return this.adjacentMove(row, column, playerBoard)
        }
    }

    adjacentMove(row, column, playerBoard) {
        
        // CREATE LIST OF POSSIBLE SMART ADJACENT MOVES
        let possibleMoves = [];

        let up = row-1;
        let down = row+1;
        let left = column-1;
        let right = column+1;

        if (up>=0 && this.searchRemainingMoves([up, column])) {
            possibleMoves.push([up, column])
        };
        if (down<10 && this.searchRemainingMoves([down, column])) {
            possibleMoves.push([down, column])
        };
        if (left>=0 && this.searchRemainingMoves([row, left])) {
            possibleMoves.push([row, left])
        };
        if (right<10 && this.searchRemainingMoves([row, right])) {
            possibleMoves.push([row, right])
        }

        // IF NO SMART MOVES, GO BACK TO RANDOM MOVE
        if (possibleMoves.length == 0) {
            return setTimeout(() => {
                this.computerMove(playerBoard);}, 500); 
        }

        // PICK MOVE RANDOMLY FROM POSSIBLE MOVES
        let randomIndex = this.randomIndex(possibleMoves.length);
        let move = possibleMoves[randomIndex];

        // SAVE MOVES AS NEWROW AND NEWCOLUMN
        let newRow = move[0];
        let newColumn = move[1];

        // REMOVE NEW MOVE FROM REMAINING MOVES
        let remainingMovesIndex = this.remainingMoves.indexOf([newRow, newColumn]);
        this.remainingMoves.splice(remainingMovesIndex, 1);

        // MISS -- DOCUMENT ATTACK AND END
        if (playerBoard.board[newRow][newColumn] == 0) {
            return playerBoard.receiveAttack(newRow, newColumn);
        }
        // HIT -- DOCUMENT ATTACK AND RUN DIRECTED MOVE
        else if (playerBoard.board[newRow][newColumn] == 1) {
            playerBoard.receiveAttack(newRow, newColumn);
            return this.directedMove(row, column, newRow, newColumn, playerBoard);
        }
    }

    directedMove(oldRow, oldColumn, newRow, newColumn, playerBoard) {

        //
        // NEW ROW ON TOP, OLD ROW ON BOT
        if (oldRow > newRow) {
            let top = newRow;
            let bot = oldRow;
            let possibleMoves = [];

            // CHECK IF ABOVE/BELOW ARE VALID MOVES

            let newTop = top-1;
            let newBot = bot+1;

            if (top > 0 && this.searchRemainingMoves([newTop, oldColumn])) {
                possibleMoves.push(newTop);
            }
            if (bot < 9 && this.searchRemainingMoves([newBot, oldColumn])) {
                possibleMoves.push(newBot);
            }

            // IF VALID MOVE
            if (possibleMoves.length != 0) {
                // PICK MOVE AT RANDOM
                let index = this.randomIndex(possibleMoves.length);
                // REMOVE MOVE FROM REMAININGMOVES
                let remainingMovesIndex = this.remainingMoves.indexOf([possibleMoves[index], oldColumn]);
                this.remainingMoves.splice(remainingMovesIndex, 1);

                // IF HIT
                if (playerBoard.board[possibleMoves[index]][oldColumn] == 1) {
                    // RECEIVE ATTACK
                    playerBoard.receiveAttack(possibleMoves[index], oldColumn);
                    // RUN DIRECTED MOVE WITH NEW BOOKENDS
                    if (possibleMoves[index] < top) {
                        let newBookendRow = possibleMoves[index];
                        return this.directedMove(newBookendRow, oldColumn, bot, newColumn, playerBoard);
                    }
                    else if (possibleMoves[index] > bot) {
                        let newBookendRow = possibleMoves[index];
                        return this.directedMove(newBookendRow, oldColumn, top, newColumn, playerBoard);
                    }
                }
                // IF MISS
                else if (playerBoard.board[possibleMoves[index]][oldColumn] == 0) {
                    return playerBoard.receiveAttack(possibleMoves[index], oldColumn);
                }
            }
            // NO VALID MOVES -- RANDOM MOVE
            else {
                return this.computerMove(playerBoard)
            }

        }

        //
        // OLD ROW ON TOP, NEW ROW ON BOT
        else if (oldRow < newRow) {
            let top = oldRow;
            let bot = newRow;
            let possibleMoves = [];

            // CHECK IF ABOVE/BELOW ARE VALID MOVES

            let newTop = top-1;
            let newBot = bot+1;

            if (top > 0 && this.searchRemainingMoves([newTop, oldColumn])) {
                possibleMoves.push(newTop);
            }
            if (bot < 9 && this.searchRemainingMoves([newBot, oldColumn])) {
                possibleMoves.push(newBot);
            }

            // IF VALID MOVE
            if (possibleMoves.length != 0) {
                // PICK MOVE AT RANDOM
                let index = this.randomIndex(possibleMoves.length);
                // REMOVE MOVE FROM REMAININGMOVES
                let remainingMovesIndex = this.remainingMoves.indexOf([possibleMoves[index], oldColumn]);
                this.remainingMoves.splice(remainingMovesIndex, 1);

                // IF HIT
                if (playerBoard.board[possibleMoves[index]][oldColumn] == 1) {
                    // RECEIVE ATTACK
                    playerBoard.receiveAttack(possibleMoves[index], oldColumn);
                    // RUN DIRECTED MOVE WITH NEW BOOKENDS
                    if (possibleMoves[index] < top) {
                        let newBookendRow = possibleMoves[index];
                        return this.directedMove(newBookendRow, oldColumn, bot, newColumn, playerBoard);
                    }
                    else if (possibleMoves[index] > bot) {
                        let newBookendRow = possibleMoves[index];
                        return this.directedMove(newBookendRow, oldColumn, top, newColumn, playerBoard);
                    }
                }
                // IF MISS
                else if (playerBoard.board[possibleMoves[index]][oldColumn] == 0) {
                    return playerBoard.receiveAttack(possibleMoves[index], oldColumn);
                }
            }
            // NO VALID MOVES -- RANDOM MOVE
            else {
                return this.computerMove(playerBoard)
            }
        }

        //
        // NEW COLUMN ON LEFT OLD COLUMN ON RIGHT
        else if (oldColumn > newColumn) {
            let left = newColumn;
            let right = oldColumn;
            let possibleMoves = [];

            let newLeft = left-1;
            let newRight = right+1;

            if (left > 0 && this.searchRemainingMoves([oldRow, newLeft])) {
                possibleMoves.push(newLeft);
            }
            if (right < 9 && this.searchRemainingMoves([oldRow, newRight])) {
                possibleMoves.push(newRight);
            }

            if (possibleMoves.length !=0) {
                // PICK MOVE AT RANDOM
                let index = this.randomIndex(possibleMoves.length);
                // REMOVE MOVE FROM REMAININGMOVES
                let remainingMovesIndex = this.remainingMoves.indexOf([oldRow, possibleMoves[index]]);
                this.remainingMoves.splice(remainingMovesIndex, 1);

                // IF HIT
                if (playerBoard.board[oldRow][possibleMoves[index]] == 1) {
                    // RECEIVE ATTACK
                    playerBoard.receiveAttack(oldRow, possibleMoves[index]);
                    // RUN DIRECTED MOVE WITH NEW BOOKENDS
                    if (possibleMoves[index] > right) {
                        let newBookendColumn = possibleMoves[index];
                        return this.directedMove(oldRow, left, newRow, newBookendColumn, playerBoard);
                    }
                    else if (possibleMoves[index] < left) {
                        let newBookendColumn = possibleMoves[index];
                        return this.directedMove(oldRow, newBookendColumn, newRow, right, playerBoard);
                    }
                }
                // IF MISS
                else if (playerBoard.board[oldRow][possibleMoves[index]] == 0) {
                    return playerBoard.receiveAttack(oldRow, possibleMoves[index]);
                }
            }
            else {
                return this.computerMove(playerBoard)
            }
        }

        //
        // OLD COLUMN ON LEFT NEW COLUMN ON RIGHT
        else if (oldColumn < newColumn) {
            let left = oldColumn;
            let right = newColumn;
            let possibleMoves = [];

            // IF NEW MOVE VALID, ADD TO POSSIBLE MOVES FOR LEFT AND RIGHT +-1

            let newLeft = left-1;
            let newRight = right+1;

            if (left > 0 && this.searchRemainingMoves([oldRow, newLeft])) {
                possibleMoves.push(newLeft);
            }
            if (right < 9 && this.searchRemainingMoves([oldRow, newRight])) {
                possibleMoves.push(newRight);
            }

            // IF THERE ARE VALID MOVES
            if (possibleMoves.length !=0) {
                // PICK MOVE AT RANDOM AND REMOVE FROM REMAINING MOVES
                let index = this.randomIndex(possibleMoves.length);
                let remainingMovesIndex = this.remainingMoves.indexOf([oldRow, possibleMoves[index]]);
                this.remainingMoves.splice(remainingMovesIndex, 1);

                // IF HIT
                if (playerBoard.board[oldRow][possibleMoves[index]] == 1) {
                    // RECEIVE ATTACK
                    playerBoard.receiveAttack(oldRow, possibleMoves[index]);
                    // RUN DIRECTED MOVE WITH NEW BOOKENDS
                    if (possibleMoves[index] > right) {
                        let newBookendColumn = possibleMoves[index];
                        return this.directedMove(oldRow, left, newRow, newBookendColumn, playerBoard);
                    }
                    else if (possibleMoves[index] < left) {
                        let newBookendColumn = possibleMoves[index];
                        return this.directedMove(oldRow, newBookendColumn, newRow, right, playerBoard);
                    }
                }
                // IF MISS
                else if (playerBoard.board[oldRow][possibleMoves[index]] == 0) {
                    return playerBoard.receiveAttack(oldRow, possibleMoves[index]);
                }
            }
            // IF THERE ARE NO VALID MOVES, RANDOM ATTACK
            else {
                return this.computerMove(playerBoard)
            }

        }
    }

}

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.vert = false;
        this.placement = [];
        this.sunk = false;
        this.placed = false;
    }

    altVert () {
        if (this.vert) {
            this.vert = false
        }
        else if (!this.vert) {
            this.vert = true
        }
    }

    hit() {
        return this.hits++;
    }

    isSunk() {
        if (this.hits == this.length) {
            return this.sunk = true;
        }
        else {
            return this.sunk;
        }
    }

    shipPlaced() {
        if (this.placement.length > 0) {
            this.placed = true;
        }
        else {
            return this.placed
        }
    }
}




// Ship.hits = number of hits
// Ship.hit() = add hit

// Ship.isSunk() = checks if sunk - returns true/false

/***/ }),

/***/ "./src/newGame.js":
/*!************************!*\
  !*** ./src/newGame.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newGame)
/* harmony export */ });
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ "./src/Player.js");
/* harmony import */ var _CompBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CompBoard */ "./src/CompBoard.js");




function newGame () {

    let player1 = new _Player__WEBPACK_IMPORTED_MODULE_1__["default"];
    let computer = new _Player__WEBPACK_IMPORTED_MODULE_1__["default"];

    let playerBoard = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"];
    let compBoard = (0,_CompBoard__WEBPACK_IMPORTED_MODULE_2__["default"])();

    return {
        player1,
        computer,
        playerBoard,
        compBoard
    }

}


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _newGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newGame */ "./src/newGame.js");




// GENERATES COMPUTER BOARD W RANDOM SHIP PLACEMENTS

let game = (0,_newGame__WEBPACK_IMPORTED_MODULE_1__["default"])();

let computer = game.compBoard               // GAMEBOARD
let compBoard = game.compBoard.board;       // GAMEBOARD.BOARD
let player1 = game.playerBoard;             // GAMEBOARD
let playerBoard = game.playerBoard.board;   // GAMEBOARD.BOARD
let player = game.player1;                  // PLAYER

let header = document.createElement("div");
header.classList.add("header");
header.innerText = "BATTLESHIP";
document.body.appendChild(header);

let main = document.createElement("div");
main.classList.add("main");
document.body.appendChild(main);

let playerGameBoard = document.createElement("div");
playerGameBoard.classList.add("playerBoard");
playerGameBoard.classList.add("gameBoard");
main.appendChild(playerGameBoard);

let compGameBoard = document.createElement("div");
compGameBoard.classList.add("compBoard");
compGameBoard.classList.add("gameBoard");
main.appendChild(compGameBoard);

function generatePlayerBoard() {
    playerGameBoard.innerHTML = "";

    for (let i=0; i<10; i++) {
        for (let j=0; j<10; j++) {
            // CREATE AND APPEND GRIDSQUARES WITH ROW/COL ATTRIBUTES
            let gridSquare = document.createElement("div");
            playerGameBoard.appendChild(gridSquare);
            gridSquare.classList.add("gridSquare");
            gridSquare.classList.add("playerGridSquare");
            gridSquare.setAttribute("row", i);
            gridSquare.setAttribute("column", j);

            // ADD EVENT LISTENERS FOR DRAG N DROP PLACE SHIP
            gridSquare.addEventListener("dragover", function(e) {
                e.preventDefault();
            })
            gridSquare.addEventListener("drop", function(e) {
                e.preventDefault();

                let ship = e.dataTransfer.getData("text/html");
                let dropRow = Number(e.target.getAttribute("row"));
                let dropCol = Number(e.target.getAttribute("column"));

                if (ship == 'ship1') {
                    player1.placeShip(player1.ships.ship1, dropRow, dropCol);
                }
                if (ship == 'ship2') {
                    player1.placeShip(player1.ships.ship2, dropRow, dropCol);
                }
                if (ship == 'ship3') {
                    player1.placeShip(player1.ships.ship3, dropRow, dropCol);
                }
                if (ship == 'ship4') {
                    player1.placeShip(player1.ships.ship4, dropRow, dropCol);
                }
                if (ship == 'ship5') {
                    player1.placeShip(player1.ships.ship5, dropRow, dropCol);
                }
                generatePlayerBoard();
            })

            // GIVE GRIDSQUARES VALUES TO DOCUMENT PLACEMENT AND GAME
            if (playerBoard[i][j] == 0) {
                gridSquare.classList.add("empty");
            }
            else if (playerBoard[i][j] == 1) {
                gridSquare.classList.add("ship");
            }
            else if (playerBoard[i][j] == 2) {
                gridSquare.classList.add("miss");
            }
            else if (playerBoard[i][j] == 3) {
                gridSquare.classList.add("hit");
            }
        }
    }
}

function generateComputerBoard() {
    compGameBoard.innerHTML = "";
    for (let i=0; i<10; i++) {
        for (let j=0; j<10; j++) {
            let gridSquare = document.createElement("div");
            compGameBoard.appendChild(gridSquare);
            gridSquare.classList.add("gridSquare");
            gridSquare.setAttribute("row", i);
            gridSquare.setAttribute("column", j);
            gridSquare.onclick = function(e) {
                if (player1.setupComplete()) {
                    let row = e.target.getAttribute("row");
                    let col = e.target.getAttribute("column");
                    player.playerMove(row, col, computer, player1);
                    generateComputerBoard();
                    generatePlayerBoard();
                    checkWinLose();
                }
            }

            // CHECK WIN/LOSE. REMOVE ONCLICK
            let win = computer.reportSunk();
            let lose = player1.reportSunk();
            if (win == true) {
                gridSquare.onclick = null;
            }
            if (lose == true) {
                gridSquare.onclick = null;
            }

            // ADD APPROPRIATE CLASS TO EACH GRIDSQUARE
            if (compBoard[i][j] == 0) {
                gridSquare.classList.add("empty");
            }
            else if (compBoard[i][j] == 1) {
                gridSquare.classList.add("empty");
            }
            else if (compBoard[i][j] == 2) {
                gridSquare.classList.add("miss");
                gridSquare.onclick = null;
            }
            else if (compBoard[i][j] == 3) {
                gridSquare.classList.add("hit");
            }
        }
    }
}

// SHIPS TO BE PLACED 

// SHIPS CONTAINER

let placeShipsDiv = document.createElement("div");
placeShipsDiv.classList.add("placeShipsDiv");
main.appendChild(placeShipsDiv);

let shiftInstruction = document.createElement("p");
placeShipsDiv.appendChild(shiftInstruction);
shiftInstruction.classList.add("shiftInstruction")
shiftInstruction.innerText = "Press SHIFT to change Orientation"

let shipsContainer = document.createElement("div");
shipsContainer.classList.add("shipsContainer");
placeShipsDiv.appendChild(shipsContainer);

// CREATE SHIPS
let placeShip1 = document.createElement("div");
addShipSquares(placeShip1, 2);
placeShip1.setAttribute("ship", "ship1");
shipsContainer.appendChild(placeShip1);

let placeShip2 = document.createElement("div");
addShipSquares(placeShip2, 3);
placeShip2.setAttribute("ship", "ship2");
shipsContainer.appendChild(placeShip2);

let placeShip3 = document.createElement("div");
addShipSquares(placeShip3, 3);
placeShip3.setAttribute("ship", "ship3");
shipsContainer.appendChild(placeShip3);

let placeShip4 = document.createElement("div");
addShipSquares(placeShip4, 4);
placeShip4.setAttribute("ship", "ship4");
shipsContainer.appendChild(placeShip4);

let placeShip5 = document.createElement("div");
addShipSquares(placeShip5, 5);
placeShip5.setAttribute("ship", "ship5");
shipsContainer.appendChild(placeShip5);
placeShip5 = game.playerBoard.ships.ship5;

function addShipSquares(shipDiv, length) {
    shipDiv.classList.add("shipDiv");
    for (let i=0; i<length; i++) {
        let shipSquare = document.createElement("div");
        shipSquare.classList.add("shipSquare");
        shipDiv.appendChild(shipSquare);
    }
}

// TOGGLE VERT/HORIZ SHIP OBJECT AND DOM FOR UNPLACED SHIPS

window.onkeydown = toggleShips

function toggleShips (e) {
    if (e.shiftKey) {
    toggleVert();
    toggleVertShip();
    }
}

function toggleVertShip () {
    let ships = player1.ships;
    ships.ship1.altVert();
    ships.ship2.altVert();
    ships.ship3.altVert();
    ships.ship4.altVert();
    ships.ship5.altVert();
}

function toggleVert () {
    let ships;
    if (document.querySelectorAll('.shipDivVert').length == 0){
        ships = document.querySelectorAll('.shipDiv');
        ships.forEach(ship => {
            ship.classList.remove("shipDiv");
            ship.parentNode.classList.remove("shipsContainer")
            ship.classList.add("shipDivVert");
            ship.parentNode.classList.add("shipsContainerVert")
        });
    }
    else {
        ships = document.querySelectorAll('.shipDivVert');
        ships.forEach(ship => {
                ship.classList.remove("shipDivVert");
                ship.parentNode.classList.remove("shipsContainerVert");
                ship.classList.add("shipDiv");
                ship.parentNode.classList.add("shipsContainer");
        });
    }
}

// ADD DRAGGABLE TO ALL INITIAL PLACEMENT SHIPS

let ships = document.querySelectorAll('.shipDiv');
ships.forEach(ship => {
    ship.setAttribute("draggable", "true");
    ship.addEventListener("dragstart", handleDragStart);
    ship.addEventListener("dragend", handleDragEnd);
});

function handleDragStart(e) {
        e.dataTransfer.setDragImage(e.target, 25, 20);
        let ship = e.target.getAttribute("ship");
        e.dataTransfer.setData("text/html", ship);
}

function handleDragEnd(e) {

    let ship = e.target.getAttribute("ship");

    if (ship == "ship1") {
        if (player1.ships.ship1.placement.length == 2) {
            this.style.opacity = "0.4"
            e.target.setAttribute("draggable", "false");
        }
    }
    if (ship == "ship2") {
        if (player1.ships.ship2.placement.length == 3) {
            this.style.opacity = "0.4"
            e.target.setAttribute("draggable", "false");
        }
    }
    if (ship == "ship3") {
        if (player1.ships.ship3.placement.length == 3) {
            this.style.opacity = "0.4"
            e.target.setAttribute("draggable", "false");
        }
    }
    if (ship == "ship4") {
        if (player1.ships.ship4.placement.length == 4) {
            this.style.opacity = "0.4"
            e.target.setAttribute("draggable", "false");
        }
    }
    if (ship == "ship5") {
        if (player1.ships.ship5.placement.length == 5) {
            this.style.opacity = "0.4"
            e.target.setAttribute("draggable", "false");
        }
    }
}

function checkWinLose () {
    let win = computer.reportSunk();
    let lose = player1.reportSunk();
    if (win == true) {
        winScreen();
    }
    if (lose == true) {
        loseScreen();
    }
}

function winScreen () {
    let winDiv = document.createElement("div");
    main.appendChild(winDiv);
    let winTitle = document.createElement("p");
    winTitle.classList.add("conclusionText");
    winDiv.appendChild(winTitle);
    winTitle.innerText = "IT A WIN WIN WIN !"

    let playAgain = document.createElement("button");
    winDiv.appendChild(playAgain);
    playAgain.innerText = "PLAY AGAIN ?!"
    playAgain.addEventListener("click", () => {
        window.location.reload();
    })
}

function loseScreen() {
    let loseDiv = document.createElement("div");
    main.appendChild(loseDiv);
    let loseTitle = document.createElement("p");
    loseTitle.classList.add("conclusionText")
    loseDiv.appendChild(loseTitle);
    loseTitle.innerText = "you LOST !!!!!!"

    let playAgain = document.createElement("button");
    loseDiv.appendChild(playAgain);
    playAgain.innerText = "PLAY AGAIN ?!"
    playAgain.addEventListener("click", () => {
        window.location.reload();
    })
}

generatePlayerBoard();
generateComputerBoard();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLFVBQVU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvQ29tcEJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL25ld0dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmhlYWRlciB7XG4gICAgZm9udC1zaXplOiA3MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig4NiwgMTE2LCAxNDEpO1xufVxuXG4uZ2FtZUJvYXJkIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xufVxuXG4uZ3JpZFNxdWFyZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5tYWluIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOmNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XG59XG5cbi5lbXB0eSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xufVxuLnNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXlcbn1cbi5taXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5oaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnBsYWNlU2hpcHNEaXYge1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uc2hpZnRJbnN0cnVjdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgZm9udC1zaXplOiAxOHB4XG59XG5cbi5zaGlwc0NvbnRhaW5lciB7XG4gICAgd2lkdGg6IDQwMnB4O1xuICAgIGhlaWdodDogMTQwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5zaGlwRGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMzdweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLnNoaXBzQ29udGFpbmVyVmVydCB7XG4gICAgd2lkdGg6IDQxMHB4O1xuICAgIGdhcDogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIGRpc3BsYXk6ZmxleDtcblxufVxuXG4uc2hpcERpdlZlcnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1zZWxmOmNlbnRlcjtcbn1cblxuLnNoaXBTcXVhcmUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gICAgd2lkdGg6IDM3cHg7XG4gICAgaGVpZ2h0OiAzN3B4O1xufVxuXG4uY29uY2x1c2lvblRleHQge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixvQkFBb0I7SUFDcEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osU0FBUztJQUNULG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiA3MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDg2LCAxMTYsIDE0MSk7XFxufVxcblxcbi5nYW1lQm9hcmQge1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmdyaWRTcXVhcmUge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6Y2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XFxufVxcblxcbi5lbXB0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG59XFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5XFxufVxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5wbGFjZVNoaXBzRGl2IHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5zaGlmdEluc3RydWN0aW9uIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgICBmb250LXNpemU6IDE4cHhcXG59XFxuXFxuLnNoaXBzQ29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDQwMnB4O1xcbiAgICBoZWlnaHQ6IDE0MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5zaGlwRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAzN3B4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5zaGlwc0NvbnRhaW5lclZlcnQge1xcbiAgICB3aWR0aDogNDEwcHg7XFxuICAgIGdhcDogNDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG5cXG59XFxuXFxuLnNoaXBEaXZWZXJ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24tc2VsZjpjZW50ZXI7XFxufVxcblxcbi5zaGlwU3F1YXJlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIHdpZHRoOiAzN3B4O1xcbiAgICBoZWlnaHQ6IDM3cHg7XFxufVxcblxcbi5jb25jbHVzaW9uVGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9HYW1lYm9hcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tcEJvYXJkKCkge1xuXG4gICAgbGV0IGNvbXBCb2FyZCA9IG5ldyBHYW1lYm9hcmQ7XG5cbiAgICBsZXQgY29tcFNoaXBzID0gY29tcEJvYXJkLnNoaXBzO1xuICAgIFxuICAgIGZvciAoY29uc3Qgc2hpcCBpbiBjb21wU2hpcHMpIHtcbiAgICAgICAgYWx0ZXJuYXRlVmVydChjb21wU2hpcHNbc2hpcF0pXG4gICAgfVxuXG4gICAgbGV0IHNoaXAxID0gY29tcEJvYXJkLnNoaXBzLnNoaXAxO1xuICAgIGxldCBzaGlwMiA9IGNvbXBCb2FyZC5zaGlwcy5zaGlwMjtcbiAgICBsZXQgc2hpcDMgPSBjb21wQm9hcmQuc2hpcHMuc2hpcDM7XG4gICAgbGV0IHNoaXA0ID0gY29tcEJvYXJkLnNoaXBzLnNoaXA0O1xuICAgIGxldCBzaGlwNSA9IGNvbXBCb2FyZC5zaGlwcy5zaGlwNTtcblxuICAgIGRvIHtcbiAgICBsZXQgc2hpcDFDb29yZHMgPSBzZWN1cmVTcG90KHNoaXAxKTtcbiAgICBjb21wQm9hcmQucGxhY2VTaGlwKHNoaXAxLCBzaGlwMUNvb3Jkcy5yb3csIHNoaXAxQ29vcmRzLmNvbHVtbik7XG4gICAgfSB3aGlsZSAoc2hpcDEucGxhY2VtZW50Lmxlbmd0aCA9PSAwKVxuXG4gICAgZG8ge1xuICAgIGxldCBzaGlwMkNvb3JkcyA9IHNlY3VyZVNwb3Qoc2hpcDIpO1xuICAgIGNvbXBCb2FyZC5wbGFjZVNoaXAoc2hpcDIsIHNoaXAyQ29vcmRzLnJvdywgc2hpcDJDb29yZHMuY29sdW1uKTtcbiAgICB9IHdoaWxlIChzaGlwMi5wbGFjZW1lbnQubGVuZ3RoID09IDApO1xuXG4gICAgZG8ge1xuICAgIGxldCBzaGlwM0Nvb3JkcyA9IHNlY3VyZVNwb3Qoc2hpcDMpO1xuICAgIGNvbXBCb2FyZC5wbGFjZVNoaXAoc2hpcDMsIHNoaXAzQ29vcmRzLnJvdywgc2hpcDNDb29yZHMuY29sdW1uKTtcbiAgICB9IHdoaWxlIChzaGlwMy5wbGFjZW1lbnQubGVuZ3RoID09IDApO1xuXG4gICAgZG8ge1xuICAgIGxldCBzaGlwNENvb3JkcyA9IHNlY3VyZVNwb3Qoc2hpcDQpO1xuICAgIGNvbXBCb2FyZC5wbGFjZVNoaXAoc2hpcDQsIHNoaXA0Q29vcmRzLnJvdywgc2hpcDRDb29yZHMuY29sdW1uKTtcbiAgICB9IHdoaWxlIChzaGlwNC5wbGFjZW1lbnQubGVuZ3RoID09IDApO1xuXG4gICAgZG8ge1xuICAgIGxldCBzaGlwNUNvb3JkcyA9IHNlY3VyZVNwb3Qoc2hpcDUpO1xuICAgIGNvbXBCb2FyZC5wbGFjZVNoaXAoc2hpcDUsIHNoaXA1Q29vcmRzLnJvdywgc2hpcDVDb29yZHMuY29sdW1uKTtcbiAgICB9IHdoaWxlIChzaGlwNS5wbGFjZW1lbnQubGVuZ3RoID09IDApXG4gICAgXG5cbiAgICByZXR1cm4gY29tcEJvYXJkO1xuXG59XG4gICAgXG5mdW5jdGlvbiByYW5kb21OdW1iZXIoaGlnaFZhbHVlKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGhpZ2hWYWx1ZSk7XG59XG4gICAgXG4gICAgXG5mdW5jdGlvbiBhbHRlcm5hdGVWZXJ0IChzaGlwKSB7XG4gICAgbGV0IHJuZyA9IHJhbmRvbU51bWJlcigyKTtcbiAgICBcbiAgICBpZiAocm5nID09IDApIHtcbiAgICAgICAgc2hpcC52ZXJ0ID0gZmFsc2VcbiAgICB9XG4gICAgZWxzZSBpZiAocm5nID09IDEpIHtcbiAgICAgICAgc2hpcC52ZXJ0ID0gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gc2hpcDtcbn1cbiAgICBcbmZ1bmN0aW9uIHNlY3VyZVNwb3Qoc2hpcCkge1xuICAgIFxuICAgIGlmIChzaGlwLnZlcnQpIHtcbiAgICAgICAgbGV0IHJvdyA9IHJhbmRvbU51bWJlcihzaGlwLmxlbmd0aCsxKTtcbiAgICAgICAgbGV0IGNvbHVtbiA9IHJhbmRvbU51bWJlcigxMCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByb3csXG4gICAgICAgICAgICBjb2x1bW5cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICghc2hpcC52ZXJ0KSB7XG4gICAgICAgIGxldCByb3cgPSByYW5kb21OdW1iZXIoMTApO1xuICAgICAgICBsZXQgY29sdW1uID0gcmFuZG9tTnVtYmVyKHNoaXAubGVuZ3RoKzEpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcm93LFxuICAgICAgICAgICAgY29sdW1uXG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vU2hpcFwiO1xuXG4vLyAwID0gTk9USElOR1xuLy8gMSA9IFNISVAgICAgICAgICAgICAgPDw8IGFkZCAxXG4vLyAyID0gTUlTUyAgICAgICAgICAgICA8PDwgYWRkIDIgXG4vLyAzID0gSElUICAgICAgICAgICAgICA8PDwgYWRkIDJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ib2FyZCA9IHRoaXMuY3JlYXRlQm9hcmQoKTtcbiAgICAgICAgdGhpcy5zaGlwcyA9IHtcbiAgICAgICAgICAgIHNoaXAxIDogbmV3IFNoaXAoMiksXG4gICAgICAgICAgICBzaGlwMiA6IG5ldyBTaGlwKDMpLFxuICAgICAgICAgICAgc2hpcDMgOiBuZXcgU2hpcCgzKSxcbiAgICAgICAgICAgIHNoaXA0IDogbmV3IFNoaXAoNCksXG4gICAgICAgICAgICBzaGlwNSA6IG5ldyBTaGlwKDUpLFxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNyZWF0ZUJvYXJkKCkge1xuICAgICAgICBsZXQgYm9hcmQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPDEwOyBpKyspIHtcbiAgICAgICAgICAgIGJvYXJkW2ldID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8MTA7IGorKykge1xuICAgICAgICAgICAgICAgIGJvYXJkW2ldW2pdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfVxuXG4gICAgLy8gYm9hcmRbUk9XXVtDT0xVTU5dXG5cbiAgICBwbGFjZVNoaXAoc2hpcCwgcm93LCBjb2x1bW4pIHtcblxuICAgICAgICAvLyBWRVJUID0gVFJVRS9GQUxTRVxuICAgICAgICAvLyBJRiBQTEFDRU1FTlQgT1VUIE9GIEJPVU5EUywgUkVUVVJOUyBPUklHSU5BTCBCT0FSRFxuICAgICAgICAvLyBDSEVDS1MgRk9SIENPTExJU0lPTlMsIFJFVFVSTlMgT1JJR0lOQUwgQk9BUkQgSUYgQ09MTElTSU9OXG5cbiAgICAgICAgaWYgKHNoaXAudmVydCAmJiByb3crc2hpcC5sZW5ndGggPCAxMSkge1xuICAgICAgICAgICAgbGV0IGNvbmZsaWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAobGV0IGk9cm93OyBpPHJvdytzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbaV1bY29sdW1uXSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtjb25mbGljdCA9IGZhbHNlfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFjb25mbGljdCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGk9cm93OyBpPHJvdytzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV1bY29sdW1uXSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb29yZCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBjb29yZC5wdXNoKGkpO1xuICAgICAgICAgICAgICAgICAgICBjb29yZC5wdXNoKGNvbHVtbik7XG4gICAgICAgICAgICAgICAgICAgIHNoaXAucGxhY2VtZW50LnB1c2goY29vcmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc2hpcC52ZXJ0ICYmIGNvbHVtbitzaGlwLmxlbmd0aCA8IDExKSB7XG4gICAgICAgICAgICBsZXQgY29uZmxpY3QgPSB0cnVlO1xuICAgICAgICAgICAgZm9yIChsZXQgaT1jb2x1bW47IGk8Y29sdW1uK3NoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3ddW2ldID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge2NvbmZsaWN0ID0gZmFsc2V9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWNvbmZsaWN0KSB7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpPWNvbHVtbjsgaTxjb2x1bW4rc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11baV0gPSAxO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY29vcmQgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgY29vcmQucHVzaChyb3cpO1xuICAgICAgICAgICAgICAgICAgICBjb29yZC5wdXNoKGkpO1xuICAgICAgICAgICAgICAgICAgICBzaGlwLnBsYWNlbWVudC5wdXNoKGNvb3JkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gICAgfTtcblxuICAgIHJlY2VpdmVBdHRhY2socm93LCBjb2x1bW4pIHtcblxuICAgICAgICAvLyBNSVNTXG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sdW1uXSA9PSAwKSB7XG4gICAgICAgICAgICAvLyBSRUNPUkQgTUlTUyBPTiBHQU1FQk9BUkRcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2x1bW5dID0gMjtcbiAgICAgICAgfVxuICAgICAgICAvLyBISVRcbiAgICAgICAgZWxzZSBpZiAodGhpcy5ib2FyZFtyb3ddW2NvbHVtbl0gPT0gMSkge1xuICAgICAgICAgICAgLy8gUkVDT1JEIEhJVCBPTiBHQU1FQk9BUkRcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2x1bW5dID0gMztcblxuICAgICAgICAgICAgLy8gUkVDT1JEIEhJVCBPTiBTSElQXG4gICAgICAgICAgICBsZXQgY29vcmQgPSBbcm93LCBjb2x1bW5dO1xuICAgICAgICAgICAgbGV0IHNoaXBzID0gdGhpcy5zaGlwcztcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc2hpcCBpbiBzaGlwcykge1xuICAgICAgICAgICAgICAgIGxldCBwbGFjZW1lbnRzID0gc2hpcHNbc2hpcF0ucGxhY2VtZW50O1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY29vcmRzIGluIHBsYWNlbWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYWNlbWVudHNbY29vcmRzXVswXSA9PSBjb29yZFswXSAmJiBwbGFjZW1lbnRzW2Nvb3Jkc11bMV0gPT0gY29vcmRbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBzW3NoaXBdLmhpdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHJldHVybiB0aGlzLmJvYXJkO1xuICAgIH1cblxuICAgIC8vIFJFUE9SVCBJRiBBTEwgU0hJUFMgQVJFIFNVTktcblxuICAgIHJlcG9ydFN1bmsoKSB7XG5cbiAgICAgICAgbGV0IGdhbWVPdmVyID0gZmFsc2U7XG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcblxuICAgICAgICBsZXQgc2hpcHMgPSB0aGlzLnNoaXBzO1xuXG4gICAgICAgIGZvciAoY29uc3Qgc2hpcCBpbiBzaGlwcykge1xuICAgICAgICAgICAgLy8gUlVOIElTU1VOSygpIE9OIEFMTCBTSElQU1xuICAgICAgICAgICAgc2hpcHNbc2hpcF0uaXNTdW5rKCk7XG4gICAgICAgICAgICAvLyBQVVNIIFNVTktFTiBTSElQUyBUTyBBUlJBWVxuICAgICAgICAgICAgaWYgKHNoaXBzW3NoaXBdLnN1bmspIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyKytcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY291bnRlciA9PSA1KSB7XG4gICAgICAgICAgICBnYW1lT3ZlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdhbWVPdmVyXG4gICAgfVxuXG4gICAgc2V0dXBDb21wbGV0ZSgpIHtcbiAgICAgICAgbGV0IGdhbWVTdGFydCA9IGZhbHNlO1xuICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgIFxuICAgICAgICBsZXQgc2hpcHMgPSB0aGlzLnNoaXBzO1xuXG4gICAgICAgIGZvciAoY29uc3Qgc2hpcCBpbiBzaGlwcykge1xuICAgICAgICAgICAgLy8gQ0hFQ0sgSUYgU0hJUFMgQVJFIFBMQUNFRFxuICAgICAgICAgICAgc2hpcHNbc2hpcF0uc2hpcFBsYWNlZCgpO1xuICAgICAgICAgICAgLy8gQUREIFRPIENPVU5URVIgSUYgUExBQ0VEXG4gICAgICAgICAgICBpZiAoc2hpcHNbc2hpcF0ucGxhY2VkKSB7XG4gICAgICAgICAgICAgICAgY291bnRlcisrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvdW50ZXIgPT0gNSkge1xuICAgICAgICAgICAgZ2FtZVN0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2FtZVN0YXJ0O1xuICAgIH1cblxuXG59IiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9HYW1lYm9hcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZW1haW5pbmdNb3ZlcyA9IHRoaXMuYWxsTW92ZXMoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJUdXJuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBhbGxNb3ZlcygpIHtcbiAgICAgICAgbGV0IG1vdmVzID0gW107XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8MTA7IGorKykge1xuICAgICAgICAgICAgICAgIG1vdmVzLnB1c2goW2ksIGpdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW92ZXM7XG4gICAgfVxuXG4gICAgLy8gSEVMUEVSIEZVTkNUSU9OIFRPIFNFQVJDSCBSRU1BSU5JTkcgTU9WRVNcbiAgICBzZWFyY2hSZW1haW5pbmdNb3ZlcyhjaGlsZEFycmF5KSB7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTx0aGlzLnJlbWFpbmluZ01vdmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZW1haW5pbmdNb3Zlc1tpXS5ldmVyeShmdW5jdGlvbih2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09IGNoaWxkQXJyYXlbaW5kZXhdfSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByYW5kb21JbmRleChoaWdoVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGhpZ2hWYWx1ZSlcbiAgICB9XG4gICAgXG4gICAgcGxheWVyTW92ZShyb3csIGNvbHVtbiwgY29tcHV0ZXJCb2FyZCwgcGxheWVyQm9hcmQpIHtcblxuICAgICAgICBjb21wdXRlckJvYXJkLnJlY2VpdmVBdHRhY2socm93LCBjb2x1bW4pO1xuXG4gICAgICAgIGlmIChjb21wdXRlckJvYXJkLmJvYXJkW3Jvd11bY29sdW1uXSA9PSAyKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXB1dGVyTW92ZShwbGF5ZXJCb2FyZClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXB1dGVyTW92ZShwbGF5ZXJCb2FyZCkge1xuXG4gICAgICAgIC8vIEdFVCBSQU5ET00gSU5ERVggT0YgUkVNQUlOSU5HIE1PVkVTXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMucmFuZG9tSW5kZXgodGhpcy5yZW1haW5pbmdNb3Zlcy5sZW5ndGgpO1xuICAgICAgICAvLyBHRVQgQ09PUkRTIEFUIElOREVYXG4gICAgICAgIGxldCBtb3ZlID0gdGhpcy5yZW1haW5pbmdNb3Zlc1tpbmRleF07XG4gICAgICAgIC8vIFJFTU9WRSBDT09SRFMgRlJPTSBSRU1BSU5JTkcgTU9WRVNcbiAgICAgICAgdGhpcy5yZW1haW5pbmdNb3Zlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgIGxldCByb3cgPSBtb3ZlWzBdO1xuICAgICAgICBsZXQgY29sdW1uID0gbW92ZVsxXTtcbiAgICAgICAgXG4gICAgICAgIC8vIE1JU1NcbiAgICAgICAgaWYgKHBsYXllckJvYXJkLmJvYXJkW3Jvd11bY29sdW1uXSA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbHVtbik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSElUXG4gICAgICAgIGVsc2UgaWYgKHBsYXllckJvYXJkLmJvYXJkW3Jvd11bY29sdW1uXSA9PSAxKSB7XG4gICAgICAgICAgICBwbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sdW1uKTtcbiAgICAgICAgICAgIC8vIE1PVkUgQUdBSU4gVyBTTUFSVCBNT1ZFXG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkamFjZW50TW92ZShyb3csIGNvbHVtbiwgcGxheWVyQm9hcmQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGphY2VudE1vdmUocm93LCBjb2x1bW4sIHBsYXllckJvYXJkKSB7XG4gICAgICAgIFxuICAgICAgICAvLyBDUkVBVEUgTElTVCBPRiBQT1NTSUJMRSBTTUFSVCBBREpBQ0VOVCBNT1ZFU1xuICAgICAgICBsZXQgcG9zc2libGVNb3ZlcyA9IFtdO1xuXG4gICAgICAgIGxldCB1cCA9IHJvdy0xO1xuICAgICAgICBsZXQgZG93biA9IHJvdysxO1xuICAgICAgICBsZXQgbGVmdCA9IGNvbHVtbi0xO1xuICAgICAgICBsZXQgcmlnaHQgPSBjb2x1bW4rMTtcblxuICAgICAgICBpZiAodXA+PTAgJiYgdGhpcy5zZWFyY2hSZW1haW5pbmdNb3ZlcyhbdXAsIGNvbHVtbl0pKSB7XG4gICAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2goW3VwLCBjb2x1bW5dKVxuICAgICAgICB9O1xuICAgICAgICBpZiAoZG93bjwxMCAmJiB0aGlzLnNlYXJjaFJlbWFpbmluZ01vdmVzKFtkb3duLCBjb2x1bW5dKSkge1xuICAgICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKFtkb3duLCBjb2x1bW5dKVxuICAgICAgICB9O1xuICAgICAgICBpZiAobGVmdD49MCAmJiB0aGlzLnNlYXJjaFJlbWFpbmluZ01vdmVzKFtyb3csIGxlZnRdKSkge1xuICAgICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKFtyb3csIGxlZnRdKVxuICAgICAgICB9O1xuICAgICAgICBpZiAocmlnaHQ8MTAgJiYgdGhpcy5zZWFyY2hSZW1haW5pbmdNb3Zlcyhbcm93LCByaWdodF0pKSB7XG4gICAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2goW3JvdywgcmlnaHRdKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSUYgTk8gU01BUlQgTU9WRVMsIEdPIEJBQ0sgVE8gUkFORE9NIE1PVkVcbiAgICAgICAgaWYgKHBvc3NpYmxlTW92ZXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVyTW92ZShwbGF5ZXJCb2FyZCk7fSwgNTAwKTsgXG4gICAgICAgIH1cblxuICAgICAgICAvLyBQSUNLIE1PVkUgUkFORE9NTFkgRlJPTSBQT1NTSUJMRSBNT1ZFU1xuICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSB0aGlzLnJhbmRvbUluZGV4KHBvc3NpYmxlTW92ZXMubGVuZ3RoKTtcbiAgICAgICAgbGV0IG1vdmUgPSBwb3NzaWJsZU1vdmVzW3JhbmRvbUluZGV4XTtcblxuICAgICAgICAvLyBTQVZFIE1PVkVTIEFTIE5FV1JPVyBBTkQgTkVXQ09MVU1OXG4gICAgICAgIGxldCBuZXdSb3cgPSBtb3ZlWzBdO1xuICAgICAgICBsZXQgbmV3Q29sdW1uID0gbW92ZVsxXTtcblxuICAgICAgICAvLyBSRU1PVkUgTkVXIE1PVkUgRlJPTSBSRU1BSU5JTkcgTU9WRVNcbiAgICAgICAgbGV0IHJlbWFpbmluZ01vdmVzSW5kZXggPSB0aGlzLnJlbWFpbmluZ01vdmVzLmluZGV4T2YoW25ld1JvdywgbmV3Q29sdW1uXSk7XG4gICAgICAgIHRoaXMucmVtYWluaW5nTW92ZXMuc3BsaWNlKHJlbWFpbmluZ01vdmVzSW5kZXgsIDEpO1xuXG4gICAgICAgIC8vIE1JU1MgLS0gRE9DVU1FTlQgQVRUQUNLIEFORCBFTkRcbiAgICAgICAgaWYgKHBsYXllckJvYXJkLmJvYXJkW25ld1Jvd11bbmV3Q29sdW1uXSA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayhuZXdSb3csIG5ld0NvbHVtbik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSElUIC0tIERPQ1VNRU5UIEFUVEFDSyBBTkQgUlVOIERJUkVDVEVEIE1PVkVcbiAgICAgICAgZWxzZSBpZiAocGxheWVyQm9hcmQuYm9hcmRbbmV3Um93XVtuZXdDb2x1bW5dID09IDEpIHtcbiAgICAgICAgICAgIHBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2sobmV3Um93LCBuZXdDb2x1bW4pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0ZWRNb3ZlKHJvdywgY29sdW1uLCBuZXdSb3csIG5ld0NvbHVtbiwgcGxheWVyQm9hcmQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlyZWN0ZWRNb3ZlKG9sZFJvdywgb2xkQ29sdW1uLCBuZXdSb3csIG5ld0NvbHVtbiwgcGxheWVyQm9hcmQpIHtcblxuICAgICAgICAvL1xuICAgICAgICAvLyBORVcgUk9XIE9OIFRPUCwgT0xEIFJPVyBPTiBCT1RcbiAgICAgICAgaWYgKG9sZFJvdyA+IG5ld1Jvdykge1xuICAgICAgICAgICAgbGV0IHRvcCA9IG5ld1JvdztcbiAgICAgICAgICAgIGxldCBib3QgPSBvbGRSb3c7XG4gICAgICAgICAgICBsZXQgcG9zc2libGVNb3ZlcyA9IFtdO1xuXG4gICAgICAgICAgICAvLyBDSEVDSyBJRiBBQk9WRS9CRUxPVyBBUkUgVkFMSUQgTU9WRVNcblxuICAgICAgICAgICAgbGV0IG5ld1RvcCA9IHRvcC0xO1xuICAgICAgICAgICAgbGV0IG5ld0JvdCA9IGJvdCsxO1xuXG4gICAgICAgICAgICBpZiAodG9wID4gMCAmJiB0aGlzLnNlYXJjaFJlbWFpbmluZ01vdmVzKFtuZXdUb3AsIG9sZENvbHVtbl0pKSB7XG4gICAgICAgICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKG5ld1RvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYm90IDwgOSAmJiB0aGlzLnNlYXJjaFJlbWFpbmluZ01vdmVzKFtuZXdCb3QsIG9sZENvbHVtbl0pKSB7XG4gICAgICAgICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKG5ld0JvdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElGIFZBTElEIE1PVkVcbiAgICAgICAgICAgIGlmIChwb3NzaWJsZU1vdmVzLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gUElDSyBNT1ZFIEFUIFJBTkRPTVxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMucmFuZG9tSW5kZXgocG9zc2libGVNb3Zlcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIC8vIFJFTU9WRSBNT1ZFIEZST00gUkVNQUlOSU5HTU9WRVNcbiAgICAgICAgICAgICAgICBsZXQgcmVtYWluaW5nTW92ZXNJbmRleCA9IHRoaXMucmVtYWluaW5nTW92ZXMuaW5kZXhPZihbcG9zc2libGVNb3Zlc1tpbmRleF0sIG9sZENvbHVtbl0pO1xuICAgICAgICAgICAgICAgIHRoaXMucmVtYWluaW5nTW92ZXMuc3BsaWNlKHJlbWFpbmluZ01vdmVzSW5kZXgsIDEpO1xuXG4gICAgICAgICAgICAgICAgLy8gSUYgSElUXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllckJvYXJkLmJvYXJkW3Bvc3NpYmxlTW92ZXNbaW5kZXhdXVtvbGRDb2x1bW5dID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUkVDRUlWRSBBVFRBQ0tcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayhwb3NzaWJsZU1vdmVzW2luZGV4XSwgb2xkQ29sdW1uKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gUlVOIERJUkVDVEVEIE1PVkUgV0lUSCBORVcgQk9PS0VORFNcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvc3NpYmxlTW92ZXNbaW5kZXhdIDwgdG9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Qm9va2VuZFJvdyA9IHBvc3NpYmxlTW92ZXNbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0ZWRNb3ZlKG5ld0Jvb2tlbmRSb3csIG9sZENvbHVtbiwgYm90LCBuZXdDb2x1bW4sIHBsYXllckJvYXJkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwb3NzaWJsZU1vdmVzW2luZGV4XSA+IGJvdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0Jvb2tlbmRSb3cgPSBwb3NzaWJsZU1vdmVzW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGVkTW92ZShuZXdCb29rZW5kUm93LCBvbGRDb2x1bW4sIHRvcCwgbmV3Q29sdW1uLCBwbGF5ZXJCb2FyZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSUYgTUlTU1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBsYXllckJvYXJkLmJvYXJkW3Bvc3NpYmxlTW92ZXNbaW5kZXhdXVtvbGRDb2x1bW5dID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2socG9zc2libGVNb3Zlc1tpbmRleF0sIG9sZENvbHVtbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTk8gVkFMSUQgTU9WRVMgLS0gUkFORE9NIE1PVkVcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXB1dGVyTW92ZShwbGF5ZXJCb2FyZClcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gT0xEIFJPVyBPTiBUT1AsIE5FVyBST1cgT04gQk9UXG4gICAgICAgIGVsc2UgaWYgKG9sZFJvdyA8IG5ld1Jvdykge1xuICAgICAgICAgICAgbGV0IHRvcCA9IG9sZFJvdztcbiAgICAgICAgICAgIGxldCBib3QgPSBuZXdSb3c7XG4gICAgICAgICAgICBsZXQgcG9zc2libGVNb3ZlcyA9IFtdO1xuXG4gICAgICAgICAgICAvLyBDSEVDSyBJRiBBQk9WRS9CRUxPVyBBUkUgVkFMSUQgTU9WRVNcblxuICAgICAgICAgICAgbGV0IG5ld1RvcCA9IHRvcC0xO1xuICAgICAgICAgICAgbGV0IG5ld0JvdCA9IGJvdCsxO1xuXG4gICAgICAgICAgICBpZiAodG9wID4gMCAmJiB0aGlzLnNlYXJjaFJlbWFpbmluZ01vdmVzKFtuZXdUb3AsIG9sZENvbHVtbl0pKSB7XG4gICAgICAgICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKG5ld1RvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYm90IDwgOSAmJiB0aGlzLnNlYXJjaFJlbWFpbmluZ01vdmVzKFtuZXdCb3QsIG9sZENvbHVtbl0pKSB7XG4gICAgICAgICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKG5ld0JvdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElGIFZBTElEIE1PVkVcbiAgICAgICAgICAgIGlmIChwb3NzaWJsZU1vdmVzLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gUElDSyBNT1ZFIEFUIFJBTkRPTVxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMucmFuZG9tSW5kZXgocG9zc2libGVNb3Zlcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIC8vIFJFTU9WRSBNT1ZFIEZST00gUkVNQUlOSU5HTU9WRVNcbiAgICAgICAgICAgICAgICBsZXQgcmVtYWluaW5nTW92ZXNJbmRleCA9IHRoaXMucmVtYWluaW5nTW92ZXMuaW5kZXhPZihbcG9zc2libGVNb3Zlc1tpbmRleF0sIG9sZENvbHVtbl0pO1xuICAgICAgICAgICAgICAgIHRoaXMucmVtYWluaW5nTW92ZXMuc3BsaWNlKHJlbWFpbmluZ01vdmVzSW5kZXgsIDEpO1xuXG4gICAgICAgICAgICAgICAgLy8gSUYgSElUXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllckJvYXJkLmJvYXJkW3Bvc3NpYmxlTW92ZXNbaW5kZXhdXVtvbGRDb2x1bW5dID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUkVDRUlWRSBBVFRBQ0tcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayhwb3NzaWJsZU1vdmVzW2luZGV4XSwgb2xkQ29sdW1uKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gUlVOIERJUkVDVEVEIE1PVkUgV0lUSCBORVcgQk9PS0VORFNcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvc3NpYmxlTW92ZXNbaW5kZXhdIDwgdG9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Qm9va2VuZFJvdyA9IHBvc3NpYmxlTW92ZXNbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0ZWRNb3ZlKG5ld0Jvb2tlbmRSb3csIG9sZENvbHVtbiwgYm90LCBuZXdDb2x1bW4sIHBsYXllckJvYXJkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwb3NzaWJsZU1vdmVzW2luZGV4XSA+IGJvdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0Jvb2tlbmRSb3cgPSBwb3NzaWJsZU1vdmVzW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGVkTW92ZShuZXdCb29rZW5kUm93LCBvbGRDb2x1bW4sIHRvcCwgbmV3Q29sdW1uLCBwbGF5ZXJCb2FyZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSUYgTUlTU1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBsYXllckJvYXJkLmJvYXJkW3Bvc3NpYmxlTW92ZXNbaW5kZXhdXVtvbGRDb2x1bW5dID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2socG9zc2libGVNb3Zlc1tpbmRleF0sIG9sZENvbHVtbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTk8gVkFMSUQgTU9WRVMgLS0gUkFORE9NIE1PVkVcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXB1dGVyTW92ZShwbGF5ZXJCb2FyZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIE5FVyBDT0xVTU4gT04gTEVGVCBPTEQgQ09MVU1OIE9OIFJJR0hUXG4gICAgICAgIGVsc2UgaWYgKG9sZENvbHVtbiA+IG5ld0NvbHVtbikge1xuICAgICAgICAgICAgbGV0IGxlZnQgPSBuZXdDb2x1bW47XG4gICAgICAgICAgICBsZXQgcmlnaHQgPSBvbGRDb2x1bW47XG4gICAgICAgICAgICBsZXQgcG9zc2libGVNb3ZlcyA9IFtdO1xuXG4gICAgICAgICAgICBsZXQgbmV3TGVmdCA9IGxlZnQtMTtcbiAgICAgICAgICAgIGxldCBuZXdSaWdodCA9IHJpZ2h0KzE7XG5cbiAgICAgICAgICAgIGlmIChsZWZ0ID4gMCAmJiB0aGlzLnNlYXJjaFJlbWFpbmluZ01vdmVzKFtvbGRSb3csIG5ld0xlZnRdKSkge1xuICAgICAgICAgICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaChuZXdMZWZ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyaWdodCA8IDkgJiYgdGhpcy5zZWFyY2hSZW1haW5pbmdNb3Zlcyhbb2xkUm93LCBuZXdSaWdodF0pKSB7XG4gICAgICAgICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKG5ld1JpZ2h0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBvc3NpYmxlTW92ZXMubGVuZ3RoICE9MCkge1xuICAgICAgICAgICAgICAgIC8vIFBJQ0sgTU9WRSBBVCBSQU5ET01cbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnJhbmRvbUluZGV4KHBvc3NpYmxlTW92ZXMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAvLyBSRU1PVkUgTU9WRSBGUk9NIFJFTUFJTklOR01PVkVTXG4gICAgICAgICAgICAgICAgbGV0IHJlbWFpbmluZ01vdmVzSW5kZXggPSB0aGlzLnJlbWFpbmluZ01vdmVzLmluZGV4T2YoW29sZFJvdywgcG9zc2libGVNb3Zlc1tpbmRleF1dKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbWFpbmluZ01vdmVzLnNwbGljZShyZW1haW5pbmdNb3Zlc0luZGV4LCAxKTtcblxuICAgICAgICAgICAgICAgIC8vIElGIEhJVFxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJCb2FyZC5ib2FyZFtvbGRSb3ddW3Bvc3NpYmxlTW92ZXNbaW5kZXhdXSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJFQ0VJVkUgQVRUQUNLXG4gICAgICAgICAgICAgICAgICAgIHBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2sob2xkUm93LCBwb3NzaWJsZU1vdmVzW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJVTiBESVJFQ1RFRCBNT1ZFIFdJVEggTkVXIEJPT0tFTkRTXG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3NzaWJsZU1vdmVzW2luZGV4XSA+IHJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Qm9va2VuZENvbHVtbiA9IHBvc3NpYmxlTW92ZXNbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0ZWRNb3ZlKG9sZFJvdywgbGVmdCwgbmV3Um93LCBuZXdCb29rZW5kQ29sdW1uLCBwbGF5ZXJCb2FyZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocG9zc2libGVNb3Zlc1tpbmRleF0gPCBsZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Qm9va2VuZENvbHVtbiA9IHBvc3NpYmxlTW92ZXNbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0ZWRNb3ZlKG9sZFJvdywgbmV3Qm9va2VuZENvbHVtbiwgbmV3Um93LCByaWdodCwgcGxheWVyQm9hcmQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIElGIE1JU1NcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwbGF5ZXJCb2FyZC5ib2FyZFtvbGRSb3ddW3Bvc3NpYmxlTW92ZXNbaW5kZXhdXSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKG9sZFJvdywgcG9zc2libGVNb3Zlc1tpbmRleF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXB1dGVyTW92ZShwbGF5ZXJCb2FyZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIE9MRCBDT0xVTU4gT04gTEVGVCBORVcgQ09MVU1OIE9OIFJJR0hUXG4gICAgICAgIGVsc2UgaWYgKG9sZENvbHVtbiA8IG5ld0NvbHVtbikge1xuICAgICAgICAgICAgbGV0IGxlZnQgPSBvbGRDb2x1bW47XG4gICAgICAgICAgICBsZXQgcmlnaHQgPSBuZXdDb2x1bW47XG4gICAgICAgICAgICBsZXQgcG9zc2libGVNb3ZlcyA9IFtdO1xuXG4gICAgICAgICAgICAvLyBJRiBORVcgTU9WRSBWQUxJRCwgQUREIFRPIFBPU1NJQkxFIE1PVkVTIEZPUiBMRUZUIEFORCBSSUdIVCArLTFcblxuICAgICAgICAgICAgbGV0IG5ld0xlZnQgPSBsZWZ0LTE7XG4gICAgICAgICAgICBsZXQgbmV3UmlnaHQgPSByaWdodCsxO1xuXG4gICAgICAgICAgICBpZiAobGVmdCA+IDAgJiYgdGhpcy5zZWFyY2hSZW1haW5pbmdNb3Zlcyhbb2xkUm93LCBuZXdMZWZ0XSkpIHtcbiAgICAgICAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2gobmV3TGVmdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmlnaHQgPCA5ICYmIHRoaXMuc2VhcmNoUmVtYWluaW5nTW92ZXMoW29sZFJvdywgbmV3UmlnaHRdKSkge1xuICAgICAgICAgICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaChuZXdSaWdodCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElGIFRIRVJFIEFSRSBWQUxJRCBNT1ZFU1xuICAgICAgICAgICAgaWYgKHBvc3NpYmxlTW92ZXMubGVuZ3RoICE9MCkge1xuICAgICAgICAgICAgICAgIC8vIFBJQ0sgTU9WRSBBVCBSQU5ET00gQU5EIFJFTU9WRSBGUk9NIFJFTUFJTklORyBNT1ZFU1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMucmFuZG9tSW5kZXgocG9zc2libGVNb3Zlcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGxldCByZW1haW5pbmdNb3Zlc0luZGV4ID0gdGhpcy5yZW1haW5pbmdNb3Zlcy5pbmRleE9mKFtvbGRSb3csIHBvc3NpYmxlTW92ZXNbaW5kZXhdXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1haW5pbmdNb3Zlcy5zcGxpY2UocmVtYWluaW5nTW92ZXNJbmRleCwgMSk7XG5cbiAgICAgICAgICAgICAgICAvLyBJRiBISVRcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyQm9hcmQuYm9hcmRbb2xkUm93XVtwb3NzaWJsZU1vdmVzW2luZGV4XV0gPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBSRUNFSVZFIEFUVEFDS1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKG9sZFJvdywgcG9zc2libGVNb3Zlc1tpbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBSVU4gRElSRUNURUQgTU9WRSBXSVRIIE5FVyBCT09LRU5EU1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9zc2libGVNb3Zlc1tpbmRleF0gPiByaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0Jvb2tlbmRDb2x1bW4gPSBwb3NzaWJsZU1vdmVzW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGVkTW92ZShvbGRSb3csIGxlZnQsIG5ld1JvdywgbmV3Qm9va2VuZENvbHVtbiwgcGxheWVyQm9hcmQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBvc3NpYmxlTW92ZXNbaW5kZXhdIDwgbGVmdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0Jvb2tlbmRDb2x1bW4gPSBwb3NzaWJsZU1vdmVzW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGVkTW92ZShvbGRSb3csIG5ld0Jvb2tlbmRDb2x1bW4sIG5ld1JvdywgcmlnaHQsIHBsYXllckJvYXJkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJRiBNSVNTXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGxheWVyQm9hcmQuYm9hcmRbb2xkUm93XVtwb3NzaWJsZU1vdmVzW2luZGV4XV0gPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayhvbGRSb3csIHBvc3NpYmxlTW92ZXNbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJRiBUSEVSRSBBUkUgTk8gVkFMSUQgTU9WRVMsIFJBTkRPTSBBVFRBQ0tcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXB1dGVyTW92ZShwbGF5ZXJCb2FyZClcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLmhpdHMgPSAwO1xuICAgICAgICB0aGlzLnZlcnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wbGFjZW1lbnQgPSBbXTtcbiAgICAgICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGxhY2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYWx0VmVydCAoKSB7XG4gICAgICAgIGlmICh0aGlzLnZlcnQpIHtcbiAgICAgICAgICAgIHRoaXMudmVydCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXRoaXMudmVydCkge1xuICAgICAgICAgICAgdGhpcy52ZXJ0ID0gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGl0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oaXRzKys7XG4gICAgfVxuXG4gICAgaXNTdW5rKCkge1xuICAgICAgICBpZiAodGhpcy5oaXRzID09IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN1bms7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaGlwUGxhY2VkKCkge1xuICAgICAgICBpZiAodGhpcy5wbGFjZW1lbnQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5wbGFjZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxhY2VkXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG5cbi8vIFNoaXAuaGl0cyA9IG51bWJlciBvZiBoaXRzXG4vLyBTaGlwLmhpdCgpID0gYWRkIGhpdFxuXG4vLyBTaGlwLmlzU3VuaygpID0gY2hlY2tzIGlmIHN1bmsgLSByZXR1cm5zIHRydWUvZmFsc2UiLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL0dhbWVib2FyZFwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCBDb21wQm9hcmQgZnJvbSBcIi4vQ29tcEJvYXJkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld0dhbWUgKCkge1xuXG4gICAgbGV0IHBsYXllcjEgPSBuZXcgUGxheWVyO1xuICAgIGxldCBjb21wdXRlciA9IG5ldyBQbGF5ZXI7XG5cbiAgICBsZXQgcGxheWVyQm9hcmQgPSBuZXcgR2FtZWJvYXJkO1xuICAgIGxldCBjb21wQm9hcmQgPSBDb21wQm9hcmQoKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBsYXllcjEsXG4gICAgICAgIGNvbXB1dGVyLFxuICAgICAgICBwbGF5ZXJCb2FyZCxcbiAgICAgICAgY29tcEJvYXJkXG4gICAgfVxuXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBuZXdHYW1lIGZyb20gJy4vbmV3R2FtZSc7XG5cblxuLy8gR0VORVJBVEVTIENPTVBVVEVSIEJPQVJEIFcgUkFORE9NIFNISVAgUExBQ0VNRU5UU1xuXG5sZXQgZ2FtZSA9IG5ld0dhbWUoKTtcblxubGV0IGNvbXB1dGVyID0gZ2FtZS5jb21wQm9hcmQgICAgICAgICAgICAgICAvLyBHQU1FQk9BUkRcbmxldCBjb21wQm9hcmQgPSBnYW1lLmNvbXBCb2FyZC5ib2FyZDsgICAgICAgLy8gR0FNRUJPQVJELkJPQVJEXG5sZXQgcGxheWVyMSA9IGdhbWUucGxheWVyQm9hcmQ7ICAgICAgICAgICAgIC8vIEdBTUVCT0FSRFxubGV0IHBsYXllckJvYXJkID0gZ2FtZS5wbGF5ZXJCb2FyZC5ib2FyZDsgICAvLyBHQU1FQk9BUkQuQk9BUkRcbmxldCBwbGF5ZXIgPSBnYW1lLnBsYXllcjE7ICAgICAgICAgICAgICAgICAgLy8gUExBWUVSXG5cbmxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5oZWFkZXIuaW5uZXJUZXh0ID0gXCJCQVRUTEVTSElQXCI7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbmxldCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbm1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuXG5sZXQgcGxheWVyR2FtZUJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnBsYXllckdhbWVCb2FyZC5jbGFzc0xpc3QuYWRkKFwicGxheWVyQm9hcmRcIik7XG5wbGF5ZXJHYW1lQm9hcmQuY2xhc3NMaXN0LmFkZChcImdhbWVCb2FyZFwiKTtcbm1haW4uYXBwZW5kQ2hpbGQocGxheWVyR2FtZUJvYXJkKTtcblxubGV0IGNvbXBHYW1lQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29tcEdhbWVCb2FyZC5jbGFzc0xpc3QuYWRkKFwiY29tcEJvYXJkXCIpO1xuY29tcEdhbWVCb2FyZC5jbGFzc0xpc3QuYWRkKFwiZ2FtZUJvYXJkXCIpO1xubWFpbi5hcHBlbmRDaGlsZChjb21wR2FtZUJvYXJkKTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVQbGF5ZXJCb2FyZCgpIHtcbiAgICBwbGF5ZXJHYW1lQm9hcmQuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGZvciAobGV0IGk9MDsgaTwxMDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGo9MDsgajwxMDsgaisrKSB7XG4gICAgICAgICAgICAvLyBDUkVBVEUgQU5EIEFQUEVORCBHUklEU1FVQVJFUyBXSVRIIFJPVy9DT0wgQVRUUklCVVRFU1xuICAgICAgICAgICAgbGV0IGdyaWRTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgcGxheWVyR2FtZUJvYXJkLmFwcGVuZENoaWxkKGdyaWRTcXVhcmUpO1xuICAgICAgICAgICAgZ3JpZFNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiZ3JpZFNxdWFyZVwiKTtcbiAgICAgICAgICAgIGdyaWRTcXVhcmUuY2xhc3NMaXN0LmFkZChcInBsYXllckdyaWRTcXVhcmVcIik7XG4gICAgICAgICAgICBncmlkU3F1YXJlLnNldEF0dHJpYnV0ZShcInJvd1wiLCBpKTtcbiAgICAgICAgICAgIGdyaWRTcXVhcmUuc2V0QXR0cmlidXRlKFwiY29sdW1uXCIsIGopO1xuXG4gICAgICAgICAgICAvLyBBREQgRVZFTlQgTElTVEVORVJTIEZPUiBEUkFHIE4gRFJPUCBQTEFDRSBTSElQXG4gICAgICAgICAgICBncmlkU3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGdyaWRTcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIGxldCBzaGlwID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHQvaHRtbFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgZHJvcFJvdyA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJyb3dcIikpO1xuICAgICAgICAgICAgICAgIGxldCBkcm9wQ29sID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNvbHVtblwiKSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2hpcCA9PSAnc2hpcDEnKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllcjEucGxhY2VTaGlwKHBsYXllcjEuc2hpcHMuc2hpcDEsIGRyb3BSb3csIGRyb3BDb2wpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2hpcCA9PSAnc2hpcDInKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllcjEucGxhY2VTaGlwKHBsYXllcjEuc2hpcHMuc2hpcDIsIGRyb3BSb3csIGRyb3BDb2wpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2hpcCA9PSAnc2hpcDMnKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllcjEucGxhY2VTaGlwKHBsYXllcjEuc2hpcHMuc2hpcDMsIGRyb3BSb3csIGRyb3BDb2wpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2hpcCA9PSAnc2hpcDQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllcjEucGxhY2VTaGlwKHBsYXllcjEuc2hpcHMuc2hpcDQsIGRyb3BSb3csIGRyb3BDb2wpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2hpcCA9PSAnc2hpcDUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllcjEucGxhY2VTaGlwKHBsYXllcjEuc2hpcHMuc2hpcDUsIGRyb3BSb3csIGRyb3BDb2wpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBnZW5lcmF0ZVBsYXllckJvYXJkKCk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyBHSVZFIEdSSURTUVVBUkVTIFZBTFVFUyBUTyBET0NVTUVOVCBQTEFDRU1FTlQgQU5EIEdBTUVcbiAgICAgICAgICAgIGlmIChwbGF5ZXJCb2FyZFtpXVtqXSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgZ3JpZFNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiZW1wdHlcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwbGF5ZXJCb2FyZFtpXVtqXSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgZ3JpZFNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHBsYXllckJvYXJkW2ldW2pdID09IDIpIHtcbiAgICAgICAgICAgICAgICBncmlkU3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocGxheWVyQm9hcmRbaV1bal0gPT0gMykge1xuICAgICAgICAgICAgICAgIGdyaWRTcXVhcmUuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVDb21wdXRlckJvYXJkKCkge1xuICAgIGNvbXBHYW1lQm9hcmQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBmb3IgKGxldCBpPTA7IGk8MTA7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqPTA7IGo8MTA7IGorKykge1xuICAgICAgICAgICAgbGV0IGdyaWRTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29tcEdhbWVCb2FyZC5hcHBlbmRDaGlsZChncmlkU3F1YXJlKTtcbiAgICAgICAgICAgIGdyaWRTcXVhcmUuY2xhc3NMaXN0LmFkZChcImdyaWRTcXVhcmVcIik7XG4gICAgICAgICAgICBncmlkU3F1YXJlLnNldEF0dHJpYnV0ZShcInJvd1wiLCBpKTtcbiAgICAgICAgICAgIGdyaWRTcXVhcmUuc2V0QXR0cmlidXRlKFwiY29sdW1uXCIsIGopO1xuICAgICAgICAgICAgZ3JpZFNxdWFyZS5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIxLnNldHVwQ29tcGxldGUoKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcm93ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwicm93XCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY29sID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY29sdW1uXCIpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucGxheWVyTW92ZShyb3csIGNvbCwgY29tcHV0ZXIsIHBsYXllcjEpO1xuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUNvbXB1dGVyQm9hcmQoKTtcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVQbGF5ZXJCb2FyZCgpO1xuICAgICAgICAgICAgICAgICAgICBjaGVja1dpbkxvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENIRUNLIFdJTi9MT1NFLiBSRU1PVkUgT05DTElDS1xuICAgICAgICAgICAgbGV0IHdpbiA9IGNvbXB1dGVyLnJlcG9ydFN1bmsoKTtcbiAgICAgICAgICAgIGxldCBsb3NlID0gcGxheWVyMS5yZXBvcnRTdW5rKCk7XG4gICAgICAgICAgICBpZiAod2luID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBncmlkU3F1YXJlLm9uY2xpY2sgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxvc2UgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGdyaWRTcXVhcmUub25jbGljayA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFERCBBUFBST1BSSUFURSBDTEFTUyBUTyBFQUNIIEdSSURTUVVBUkVcbiAgICAgICAgICAgIGlmIChjb21wQm9hcmRbaV1bal0gPT0gMCkge1xuICAgICAgICAgICAgICAgIGdyaWRTcXVhcmUuY2xhc3NMaXN0LmFkZChcImVtcHR5XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY29tcEJvYXJkW2ldW2pdID09IDEpIHtcbiAgICAgICAgICAgICAgICBncmlkU3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJlbXB0eVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbXBCb2FyZFtpXVtqXSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgZ3JpZFNxdWFyZS5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICAgICAgICAgICAgICBncmlkU3F1YXJlLm9uY2xpY2sgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY29tcEJvYXJkW2ldW2pdID09IDMpIHtcbiAgICAgICAgICAgICAgICBncmlkU3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIFNISVBTIFRPIEJFIFBMQUNFRCBcblxuLy8gU0hJUFMgQ09OVEFJTkVSXG5cbmxldCBwbGFjZVNoaXBzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnBsYWNlU2hpcHNEaXYuY2xhc3NMaXN0LmFkZChcInBsYWNlU2hpcHNEaXZcIik7XG5tYWluLmFwcGVuZENoaWxkKHBsYWNlU2hpcHNEaXYpO1xuXG5sZXQgc2hpZnRJbnN0cnVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xucGxhY2VTaGlwc0Rpdi5hcHBlbmRDaGlsZChzaGlmdEluc3RydWN0aW9uKTtcbnNoaWZ0SW5zdHJ1Y3Rpb24uY2xhc3NMaXN0LmFkZChcInNoaWZ0SW5zdHJ1Y3Rpb25cIilcbnNoaWZ0SW5zdHJ1Y3Rpb24uaW5uZXJUZXh0ID0gXCJQcmVzcyBTSElGVCB0byBjaGFuZ2UgT3JpZW50YXRpb25cIlxuXG5sZXQgc2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuc2hpcHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNoaXBzQ29udGFpbmVyXCIpO1xucGxhY2VTaGlwc0Rpdi5hcHBlbmRDaGlsZChzaGlwc0NvbnRhaW5lcik7XG5cbi8vIENSRUFURSBTSElQU1xubGV0IHBsYWNlU2hpcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuYWRkU2hpcFNxdWFyZXMocGxhY2VTaGlwMSwgMik7XG5wbGFjZVNoaXAxLnNldEF0dHJpYnV0ZShcInNoaXBcIiwgXCJzaGlwMVwiKTtcbnNoaXBzQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYWNlU2hpcDEpO1xuXG5sZXQgcGxhY2VTaGlwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5hZGRTaGlwU3F1YXJlcyhwbGFjZVNoaXAyLCAzKTtcbnBsYWNlU2hpcDIuc2V0QXR0cmlidXRlKFwic2hpcFwiLCBcInNoaXAyXCIpO1xuc2hpcHNDb250YWluZXIuYXBwZW5kQ2hpbGQocGxhY2VTaGlwMik7XG5cbmxldCBwbGFjZVNoaXAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmFkZFNoaXBTcXVhcmVzKHBsYWNlU2hpcDMsIDMpO1xucGxhY2VTaGlwMy5zZXRBdHRyaWJ1dGUoXCJzaGlwXCIsIFwic2hpcDNcIik7XG5zaGlwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwbGFjZVNoaXAzKTtcblxubGV0IHBsYWNlU2hpcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuYWRkU2hpcFNxdWFyZXMocGxhY2VTaGlwNCwgNCk7XG5wbGFjZVNoaXA0LnNldEF0dHJpYnV0ZShcInNoaXBcIiwgXCJzaGlwNFwiKTtcbnNoaXBzQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYWNlU2hpcDQpO1xuXG5sZXQgcGxhY2VTaGlwNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5hZGRTaGlwU3F1YXJlcyhwbGFjZVNoaXA1LCA1KTtcbnBsYWNlU2hpcDUuc2V0QXR0cmlidXRlKFwic2hpcFwiLCBcInNoaXA1XCIpO1xuc2hpcHNDb250YWluZXIuYXBwZW5kQ2hpbGQocGxhY2VTaGlwNSk7XG5wbGFjZVNoaXA1ID0gZ2FtZS5wbGF5ZXJCb2FyZC5zaGlwcy5zaGlwNTtcblxuZnVuY3Rpb24gYWRkU2hpcFNxdWFyZXMoc2hpcERpdiwgbGVuZ3RoKSB7XG4gICAgc2hpcERpdi5jbGFzc0xpc3QuYWRkKFwic2hpcERpdlwiKTtcbiAgICBmb3IgKGxldCBpPTA7IGk8bGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHNoaXBTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzaGlwU3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzaGlwU3F1YXJlXCIpO1xuICAgICAgICBzaGlwRGl2LmFwcGVuZENoaWxkKHNoaXBTcXVhcmUpO1xuICAgIH1cbn1cblxuLy8gVE9HR0xFIFZFUlQvSE9SSVogU0hJUCBPQkpFQ1QgQU5EIERPTSBGT1IgVU5QTEFDRUQgU0hJUFNcblxud2luZG93Lm9ua2V5ZG93biA9IHRvZ2dsZVNoaXBzXG5cbmZ1bmN0aW9uIHRvZ2dsZVNoaXBzIChlKSB7XG4gICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICB0b2dnbGVWZXJ0KCk7XG4gICAgdG9nZ2xlVmVydFNoaXAoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVZlcnRTaGlwICgpIHtcbiAgICBsZXQgc2hpcHMgPSBwbGF5ZXIxLnNoaXBzO1xuICAgIHNoaXBzLnNoaXAxLmFsdFZlcnQoKTtcbiAgICBzaGlwcy5zaGlwMi5hbHRWZXJ0KCk7XG4gICAgc2hpcHMuc2hpcDMuYWx0VmVydCgpO1xuICAgIHNoaXBzLnNoaXA0LmFsdFZlcnQoKTtcbiAgICBzaGlwcy5zaGlwNS5hbHRWZXJ0KCk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVZlcnQgKCkge1xuICAgIGxldCBzaGlwcztcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXBEaXZWZXJ0JykubGVuZ3RoID09IDApe1xuICAgICAgICBzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwRGl2Jyk7XG4gICAgICAgIHNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICBzaGlwLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwRGl2XCIpO1xuICAgICAgICAgICAgc2hpcC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwc0NvbnRhaW5lclwiKVxuICAgICAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwic2hpcERpdlZlcnRcIik7XG4gICAgICAgICAgICBzaGlwLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcInNoaXBzQ29udGFpbmVyVmVydFwiKVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXBEaXZWZXJ0Jyk7XG4gICAgICAgIHNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICAgICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcERpdlZlcnRcIik7XG4gICAgICAgICAgICAgICAgc2hpcC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwc0NvbnRhaW5lclZlcnRcIik7XG4gICAgICAgICAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwic2hpcERpdlwiKTtcbiAgICAgICAgICAgICAgICBzaGlwLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcInNoaXBzQ29udGFpbmVyXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8vIEFERCBEUkFHR0FCTEUgVE8gQUxMIElOSVRJQUwgUExBQ0VNRU5UIFNISVBTXG5cbmxldCBzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwRGl2Jyk7XG5zaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgIHNoaXAuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIFwidHJ1ZVwiKTtcbiAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgaGFuZGxlRHJhZ1N0YXJ0KTtcbiAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsIGhhbmRsZURyYWdFbmQpO1xufSk7XG5cbmZ1bmN0aW9uIGhhbmRsZURyYWdTdGFydChlKSB7XG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERyYWdJbWFnZShlLnRhcmdldCwgMjUsIDIwKTtcbiAgICAgICAgbGV0IHNoaXAgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJzaGlwXCIpO1xuICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dC9odG1sXCIsIHNoaXApO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVEcmFnRW5kKGUpIHtcblxuICAgIGxldCBzaGlwID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwic2hpcFwiKTtcblxuICAgIGlmIChzaGlwID09IFwic2hpcDFcIikge1xuICAgICAgICBpZiAocGxheWVyMS5zaGlwcy5zaGlwMS5wbGFjZW1lbnQubGVuZ3RoID09IDIpIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUub3BhY2l0eSA9IFwiMC40XCJcbiAgICAgICAgICAgIGUudGFyZ2V0LnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCBcImZhbHNlXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChzaGlwID09IFwic2hpcDJcIikge1xuICAgICAgICBpZiAocGxheWVyMS5zaGlwcy5zaGlwMi5wbGFjZW1lbnQubGVuZ3RoID09IDMpIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUub3BhY2l0eSA9IFwiMC40XCJcbiAgICAgICAgICAgIGUudGFyZ2V0LnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCBcImZhbHNlXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChzaGlwID09IFwic2hpcDNcIikge1xuICAgICAgICBpZiAocGxheWVyMS5zaGlwcy5zaGlwMy5wbGFjZW1lbnQubGVuZ3RoID09IDMpIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUub3BhY2l0eSA9IFwiMC40XCJcbiAgICAgICAgICAgIGUudGFyZ2V0LnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCBcImZhbHNlXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChzaGlwID09IFwic2hpcDRcIikge1xuICAgICAgICBpZiAocGxheWVyMS5zaGlwcy5zaGlwNC5wbGFjZW1lbnQubGVuZ3RoID09IDQpIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUub3BhY2l0eSA9IFwiMC40XCJcbiAgICAgICAgICAgIGUudGFyZ2V0LnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCBcImZhbHNlXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChzaGlwID09IFwic2hpcDVcIikge1xuICAgICAgICBpZiAocGxheWVyMS5zaGlwcy5zaGlwNS5wbGFjZW1lbnQubGVuZ3RoID09IDUpIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUub3BhY2l0eSA9IFwiMC40XCJcbiAgICAgICAgICAgIGUudGFyZ2V0LnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCBcImZhbHNlXCIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1dpbkxvc2UgKCkge1xuICAgIGxldCB3aW4gPSBjb21wdXRlci5yZXBvcnRTdW5rKCk7XG4gICAgbGV0IGxvc2UgPSBwbGF5ZXIxLnJlcG9ydFN1bmsoKTtcbiAgICBpZiAod2luID09IHRydWUpIHtcbiAgICAgICAgd2luU2NyZWVuKCk7XG4gICAgfVxuICAgIGlmIChsb3NlID09IHRydWUpIHtcbiAgICAgICAgbG9zZVNjcmVlbigpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gd2luU2NyZWVuICgpIHtcbiAgICBsZXQgd2luRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHdpbkRpdik7XG4gICAgbGV0IHdpblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgd2luVGl0bGUuY2xhc3NMaXN0LmFkZChcImNvbmNsdXNpb25UZXh0XCIpO1xuICAgIHdpbkRpdi5hcHBlbmRDaGlsZCh3aW5UaXRsZSk7XG4gICAgd2luVGl0bGUuaW5uZXJUZXh0ID0gXCJJVCBBIFdJTiBXSU4gV0lOICFcIlxuXG4gICAgbGV0IHBsYXlBZ2FpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgd2luRGl2LmFwcGVuZENoaWxkKHBsYXlBZ2Fpbik7XG4gICAgcGxheUFnYWluLmlubmVyVGV4dCA9IFwiUExBWSBBR0FJTiA/IVwiXG4gICAgcGxheUFnYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBsb3NlU2NyZWVuKCkge1xuICAgIGxldCBsb3NlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGxvc2VEaXYpO1xuICAgIGxldCBsb3NlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsb3NlVGl0bGUuY2xhc3NMaXN0LmFkZChcImNvbmNsdXNpb25UZXh0XCIpXG4gICAgbG9zZURpdi5hcHBlbmRDaGlsZChsb3NlVGl0bGUpO1xuICAgIGxvc2VUaXRsZS5pbm5lclRleHQgPSBcInlvdSBMT1NUICEhISEhIVwiXG5cbiAgICBsZXQgcGxheUFnYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBsb3NlRGl2LmFwcGVuZENoaWxkKHBsYXlBZ2Fpbik7XG4gICAgcGxheUFnYWluLmlubmVyVGV4dCA9IFwiUExBWSBBR0FJTiA/IVwiXG4gICAgcGxheUFnYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KVxufVxuXG5nZW5lcmF0ZVBsYXllckJvYXJkKCk7XG5nZW5lcmF0ZUNvbXB1dGVyQm9hcmQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==