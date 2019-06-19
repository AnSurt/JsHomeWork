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
/******/ 	return __webpack_require__(__webpack_require__.s = "./modules/board.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./modules/board.js":
/*!**************************!*\
  !*** ./modules/board.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards.js */ \"./modules/cards.js\");\n/* harmony import */ var _columns_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columns.js */ \"./modules/columns.js\");\n\r\n\r\n\r\nconst myBoard = document.getElementById('myBoard');\r\nObject(_columns_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n    .then(_cards_js__WEBPACK_IMPORTED_MODULE_0__[\"getCards\"]);\r\n\r\n\n\n//# sourceURL=webpack:///./modules/board.js?");

/***/ }),

/***/ "./modules/cards.js":
/*!**************************!*\
  !*** ./modules/cards.js ***!
  \**************************/
/*! exports provided: getCards, addCard, updateCard, allCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCards\", function() { return getCards; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addCard\", function() { return addCard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateCard\", function() { return updateCard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"allCards\", function() { return allCards; });\nlet allCards = [];\r\nlet getCards = () =>\r\n\r\n    fetch(\"http://localhost:8089/api/card\")\r\n        .then(response => response.json())\r\n        .then(json => {\r\n            json.forEach(function (element) {\r\n                console.log(element);\r\n\r\n                let column = document.getElementById(`column${element.columnId}`);\r\n                drawCard(element, column);\r\n                \r\n\r\n            })\r\n            allCards=json;\r\n        });\r\n\r\n\r\nlet drawCard = (element, column) => {\r\n    const card = document.createElement('div');\r\n    const deleteButton = document.createElement(\"div\");\r\n    \r\n\r\n    card.innerText = element.title;\r\n    card.className = 'flex-card';\r\n    \r\n    card.addEventListener('dragstart', onDragStart);\r\n    card.setAttribute('draggable', true);\r\n    card.setAttribute('data-block-id', element.id );  \r\n    card.contentEditable= 'true';  \r\n    card.id = `card${element.id}`;\r\n    card.appendChild(deleteButton);\r\n    deleteButton.contentEditable= 'false';\r\n    deleteButton.className = 'cardButton'\r\n    deleteButton.addEventListener('click', () => deleteCard(element.id));\r\n    deleteButton.innerText = 'Remove';\r\n\r\n    card.draggable = 'true';\r\n\r\n    card.addEventListener('click', (event) => {\r\n        \r\n        let newTitle=event.target.textContent;\r\n     \r\n        \r\n        updateCard({ ...element, title: newTitle })\r\n            .then(newCard => {\r\n                card.innerText = newCard.title;\r\n                card.appendChild(deleteButton);\r\n                \r\n            });\r\n    });\r\n\r\n\r\n    column.appendChild(card);\r\n\r\n \r\n\r\n}\r\nlet updateCard = (card) =>\r\n\r\n    fetch(\"http://localhost:8089/api/card/\" + card.id, {\r\n        method: 'PUT',\r\n        headers: {\r\n            'Accept': 'application/json',\r\n            'Content-Type': 'application/json'\r\n        },\r\n        body: JSON.stringify(card)\r\n    })\r\n        .then(response => response.json())\r\n\r\n\r\n\r\nlet addCard = (columnId, title) => {\r\n\r\n    var card = {\r\n        title,\r\n        columnId\r\n    };\r\n\r\n    fetch(\"http://localhost:8089/api/card\", {\r\n        method: 'POST',\r\n        headers: {\r\n            'Accept': 'application/json',\r\n            'Content-Type': 'application/json'\r\n        },\r\n        body: JSON.stringify(card)\r\n    })\r\n        .then(response => response.json())\r\n        .then(element => console.log(element) || drawCard(element, document.getElementById(`column${element.columnId}`)));\r\n};\r\nlet deleteCard = (id) => fetch(\"http://localhost:8089/api/card/\" + id.toString(), {\r\n    method: 'DELETE',\r\n})\r\n    .then(() => document.getElementById(`card${id}`).remove())\r\n\r\n\r\n    \r\n\r\nfunction onDragStart(event) {\r\n  console.log('onDragStart', event.target.dataset.blockId);\r\n  event.dataTransfer.setData(\"blockId\", event.target.dataset.blockId);\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/cards.js?");

/***/ }),

/***/ "./modules/columns.js":
/*!****************************!*\
  !*** ./modules/columns.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards.js */ \"./modules/cards.js\");\n\r\nlet getColumns = () =>\r\n\r\n    fetch(\"http://localhost:8089/api/column\")\r\n        .then(response => response.json())\r\n        .then(json => {\r\n            json.forEach(function (element) {\r\n                const myBoard = document.getElementById('myBoard');\r\n                const myColumns = document.createElement('div');\r\n                const card = document.getElementById(`card${element.id}`)\r\n\r\n                myColumns.innerText = element.title;\r\n                myColumns.draggable = 'true';\r\n                myColumns.className = 'flex-columns';\r\n                myColumns.id = `column${element.id}`;\r\n                myColumns.addEventListener('dragover', function (event) {\r\n                    event.preventDefault();\r\n                });\r\n                myColumns.addEventListener('drop', onDrop);\r\n\r\n                const button = document.createElement('div');\r\n                button.innerText = '+';\r\n                button.className = 'columnButton'\r\n                button.addEventListener('click', () => {\r\n                    var title = prompt('Enter title');\r\n                    Object(_cards_js__WEBPACK_IMPORTED_MODULE_0__[\"addCard\"])(element.id, title);\r\n                });\r\n                myColumns.appendChild(button);\r\n                myBoard.appendChild(myColumns);\r\n\r\n            }\r\n            )\r\n\r\n        });\r\n\r\n\r\n\r\nfunction onDragOver(event) {\r\n  console.log('onDragover');\r\n  event.preventDefault()\r\n}\r\n\r\nfunction onDrop(event) {\r\n  try {\r\n    event.preventDefault()\r\n    console.log('onDrop');\r\n    const blockId = event.dataTransfer.getData(\"blockId\");\r\n    console.log('dropped blockId', blockId);\r\n\r\n\r\n    const blockEl = document.querySelector(`[data-block-id=\"${blockId}\"]`);\r\n    // blockEl.setAttribute('draggable', false);\r\n\r\n    const insertAfter = getBlockToInsertAfter(event.clientY, event.clientX);\r\n\r\n    console.log(insertAfter, blockEl);\r\n    if (insertAfter) {\r\n      insertAfter.after(blockEl)\r\n    } else {\r\n      document.querySelector('.flex-columns').append(blockEl);\r\n    }\r\n    console.log('id',event.target.id)\r\n    let newCard = _cards_js__WEBPACK_IMPORTED_MODULE_0__[\"allCards\"].find(card=> blockId==card.id);\r\n    let [newID] = event.target.id.split('column').reverse();\r\n    console.log(\"split\", newID);\r\n   \r\n    console.log(_cards_js__WEBPACK_IMPORTED_MODULE_0__[\"allCards\"]);\r\n    Object(_cards_js__WEBPACK_IMPORTED_MODULE_0__[\"updateCard\"])({...newCard, columnId: newID})\r\n    .then(updatedCard => _cards_js__WEBPACK_IMPORTED_MODULE_0__[\"allCards\"].splice( _cards_js__WEBPACK_IMPORTED_MODULE_0__[\"allCards\"].indexOf(newCard), 1,updatedCard))\r\n    .then(()=>console.log(_cards_js__WEBPACK_IMPORTED_MODULE_0__[\"allCards\"]))\r\n \r\n\r\n  }\r\n  catch (ex) {console .log(\"error\", ex) }\r\n \r\n}\r\nfunction getBlockToInsertAfter(y, x) {\r\n  return [...document.querySelectorAll('.flex-columns .flex-card')]\r\n    .filter((element) => element.getBoundingClientRect().top < y && element.getBoundingClientRect().left < x)\r\n    .pop();\r\n\r\n}\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (getColumns);\r\n\n\n//# sourceURL=webpack:///./modules/columns.js?");

/***/ })

/******/ });