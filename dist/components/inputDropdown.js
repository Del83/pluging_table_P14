"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InputDropdown;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
//var _react = require("react");
var _inputText = _interopRequireDefault(require("./inputText"));
var _chevronDown = _interopRequireDefault(require("../assets/chevronDown.png"));
var _chevronUp = _interopRequireDefault(require("../assets/chevronUp.png"));
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _react = _interopRequireWildcard(require("react"));

/** IMPORT REACT et TOOLS */

/** COMPONENTS */

/** ASSETS */

/**
 * React component 
 * @param {string} name field name
 * @param {string} label field label
 * @param {Array} list data to display
 * @param {func} setSelect selection state change
 * @param {func} setInput input state change
 * @param {string} input input value
 * @param {string} className input class name
 * @param {string} classContent input content class name
 * @param {string} classChevron input chevron class name
 * @returns {JSX} The input dropdown of the table
 */
function InputDropdown(_ref) {
  var name = _ref.name,
    label = _ref.label,
    list = _ref.list,
    setSelect = _ref.setSelect,
    setInput = _ref.setInput,
    input = _ref.input,
    className = _ref.className,
    classContent = _ref.classContent,
    classChevron = _ref.classChevron;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    unfolded = _useState2[0],
    setUnfolded = _useState2[1];
  var chevron = unfolded ? _chevronUp.default : _chevronDown.default;
  var handleFolded = function handleFolded() {
    setUnfolded(!unfolded);
  };
  var select = function select(e) {
    handleFolded();
    return setSelect({
      title: e.target.title,
      textContent: e.target.textContent
    });
  };
  window.onclick = function (e) {
    if (!e.target.matches(".chevron-show")) {
      setUnfolded(false);
    }
  };
  return /*#__PURE__*/_react.createElement("div", {
    className: unfolded ? "table-dropdown-container folded" : "table-dropdown-container",
    onClick: handleFolded
  }, /*#__PURE__*/_react.createElement(_inputText.default, {
    autocomplete: "off",
    label: label,
    name: name,
    className: unfolded ? "unfolded ".concat(className, " ") : className,
    input: input,
    setInput: setInput
  }), unfolded && /*#__PURE__*/_react.createElement("ul", {
    className: classContent,
    name: name
  }, list.map(function (item, index) {
    return /*#__PURE__*/_react.createElement("li", {
      key: index,
      title: name,
      onClick: select
    }, item);
  })), /*#__PURE__*/_react.createElement("img", {
    className: classChevron,
    src: chevron,
    alt: "drop-down menu chevron",
    width: "20",
    height: "10"
  }));
}