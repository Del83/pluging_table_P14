"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;
require("../styles/modal.css");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _react = _interopRequireWildcard(require("react"));
/** TOOLS */

/**
* React component
* @param {bool} display modal display
* @param {func} setDisplay modal state change
* @param {string} messageModal modal message
* @returns {JSX} Modal component
*/
function Modal(_ref) {
  var displayModal = _ref.displayModal,
    setDisplayModal = _ref.setDisplayModal,
    messageModal = _ref.messageModal;
  var handleDisplay = function handleDisplay() {
    setDisplayModal(!displayModal);
  };
  return /*#__PURE__*/_react.createElement("section", {
    className: displayModal ? "modal" : "display"
  }, /*#__PURE__*/_react.createElement("div", null, /*#__PURE__*/_react.createElement("button", {
    className: "modal-close",
    onClick: handleDisplay
  }, "X"), /*#__PURE__*/_react.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.createElement("p", null, messageModal))));
}