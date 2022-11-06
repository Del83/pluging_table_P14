"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Sorting;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _react = _interopRequireWildcard(require("react"));
/** TOOLS */

/**
 * Sort table
 * @param {string} categories table column names
 * @param {func} sortIncreasing function that handles ascending sort
 * @param {func} sortDescending function that handles descending sort
 * @component
 */
function Sorting(_ref) {
  var categories = _ref.categories,
    sortIncreasing = _ref.sortIncreasing,
    sortDescending = _ref.sortDescending;
  return /*#__PURE__*/_react.createElement("div", null, /*#__PURE__*/_react.createElement("div", {
    className: "chevronUp",
    dataset: categories,
    onClick: function onClick(e) {
      var category = e.target.attributes.dataset.value;
      return sortIncreasing(category);
    }
  }, "\u25B2"), /*#__PURE__*/_react.createElement("div", {
    className: "chevronDown",
    dataset: categories,
    onClick: function onClick(e) {
      var category = e.target.attributes.dataset.value;
      return sortDescending(category);
    }
  }, "\u25B2"));
}