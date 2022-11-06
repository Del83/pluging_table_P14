"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Display;
var _inputDropdown = _interopRequireDefault(require("./inputDropdown"));
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _react = _interopRequireWildcard(require("react"));
/** TOOLS */

/** COMPONENTS */

/**
 * React component : data display management
 * @param {func} setCurrentPage page number change management
 * @param {node} itemsPerPage items per page
 * @param {func} setSelect input state change
 * @param {array} numberEntries List of number of entries per page
 * @param {string} className input class name
 * @param {string} classContent input content class name
 * @param {string} classChevron input chevron class name
 * @component
 */
function Display(_ref) {
  var setCurrentPage = _ref.setCurrentPage,
    itemsPerPage = _ref.itemsPerPage,
    setSelect = _ref.setSelect,
    numberEntries = _ref.numberEntries,
    className = _ref.className,
    classContent = _ref.classContent,
    classChevron = _ref.classChevron;
  var showPerPage = function showPerPage(e) {
    setCurrentPage(1);
    return setSelect(e.textContent);
  };
  return /*#__PURE__*/_react.createElement("div", {
    className: "table-show-entries"
  }, /*#__PURE__*/_react.createElement(_inputDropdown.default, {
    label: "Show",
    name: "show",
    className: className,
    classContent: classContent,
    classChevron: classChevron,
    value: itemsPerPage,
    input: itemsPerPage,
    list: numberEntries,
    setSelect: showPerPage
  }), /*#__PURE__*/_react.createElement("span", {
    className: "entries"
  }, "entries"));
}