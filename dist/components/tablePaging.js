"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Paging;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _react = _interopRequireWildcard(require("react"));
/** TOOLS */

/**
 * React component : table paging
 * @param {number} currentPage the current page
 * @param {array} pageNumbers the page numbers
 * @param {func} itemsTotal the total of the items
 * @param {func} goPreviousPage function to go to the previous page
 * @param {func} goNextPage function to go to the next page
 * @component
 */
function Paging(_ref) {
  var currentPage = _ref.currentPage,
    pageNumbers = _ref.pageNumbers,
    itemsTotal = _ref.itemsTotal,
    goPreviousPage = _ref.goPreviousPage,
    goNextPage = _ref.goNextPage;
  return /*#__PURE__*/_react.createElement("section", {
    className: "table-layout-ctn"
  }, /*#__PURE__*/_react.createElement("p", {
    className: "table-showing-page"
  }, " ", "Showing ", /*#__PURE__*/_react.createElement("b", {
    className: "enhancementFrame"
  }, currentPage), " to ", /*#__PURE__*/_react.createElement("b", {
    className: "enhancementFrame"
  }, pageNumbers.length), " of", " ", /*#__PURE__*/_react.createElement("b", {
    className: "enhancementFrame"
  }, itemsTotal()), " entries"), /*#__PURE__*/_react.createElement("div", {
    className: "table-pagination"
  }, /*#__PURE__*/_react.createElement("span", {
    className: currentPage === 1 ? "table-page-inactive" : "pointer",
    onClick: goPreviousPage
  }, "Previous"), " ", /*#__PURE__*/_react.createElement("b", {
    className: "enhancementFrame"
  }, currentPage), " ", /*#__PURE__*/_react.createElement("span", {
    className: currentPage === pageNumbers.length ? "table-page-inactive" : "pointer",
    onClick: goNextPage
  }, "Next")));
}