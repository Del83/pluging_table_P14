"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InputText;

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _react = _interopRequireWildcard(require("react"));

/** TOOLS */

/**
* React component : The input text of the table
* @param {string} name field name
* @param {string} label field label
* @param {func} setInput input state change
* @param {string} input input value
* @param {string} className input class name
* @component
*/
function InputText(_ref) {
  var name = _ref.name,
    label = _ref.label,
    setInput = _ref.setInput,
    input = _ref.input,
    className = _ref.className;
  var handleInput = function handleInput(e) {
    return setInput(e);
  };
  return /*#__PURE__*/_react.createElement("div", {
    className: "table-input"
  }, /*#__PURE__*/_react.createElement("div", null, /*#__PURE__*/_react.createElement("label", {
    className: "table-label",
    htmlFor: name
  }, label, /*#__PURE__*/_react.createElement("input", {
    key: name,
    name: name,
    type: "text",
    id: name,
    value: input,
    onChange: function onChange(e) {
      return handleInput({
        value: e.target.value,
        name: e.target.name
      });
    },
    className: className,
    min: 3,
    max: 20
  }))));
}