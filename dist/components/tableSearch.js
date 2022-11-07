"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Search;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _react = _interopRequireWildcard(require("react"));
/** TOOLS */

/**
 * React component
 * @param {func} handleSearchInput function that handles the search bar entry
 * @param {string} searchInput search input
 * @returns {JSX} Search in table
 */
function Search(_ref) {
  var handleSearchInput = _ref.handleSearchInput,
    searchInput = _ref.searchInput;
  return /*#__PURE__*/_react.createElement("div", {
    className: "table-search"
  }, /*#__PURE__*/_react.createElement("span", {
    className: "table-search-label"
  }, "Search"), /*#__PURE__*/_react.createElement("input", {
    className: "table-search-input",
    name: "search",
    type: "search",
    placeholder: " ...",
    onChange: function onChange(e) {
      return handleSearchInput(e);
    },
    value: searchInput
  }));
}