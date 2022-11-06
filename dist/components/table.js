"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Table;
var _tableDisplay = _interopRequireDefault(require("./tableDisplay"));
var _tableSearch = _interopRequireDefault(require("./tableSearch"));
var _tableSorting = _interopRequireDefault(require("./tableSorting"));
var _tablePaging = _interopRequireDefault(require("./tablePaging"));
require("../styles/table.css");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _react = _interopRequireWildcard(require("react"));

/** TOOLS */

/** COMPONENTS */

/** STYLE */

/**
 * React component : table component to simply display, sort, filter, paginate data.
 * @param {Array} dataSorted data sorted
 * @param {func} setDataSorted data sorted management
 * @param {Array} dataFiltered data filtered
 * @param {func} setDataFiltered data filtered management
 * @param {Array} currentItems current items
 * @param {number} currentPage current page
 * @param {func} setCurrentPage current page management
 * @param {node} itemsPerPage items per page
 * @param {string} searchInput search input
 * @param {func} setSearchInput search input management
 * @param {array} categories table column names
 * @param {func} setSelect selection state change
 * @param {boolean} searchBar using the search bar
 * @param {func} setSearchBar management of the use of the search bar
 * @param {string} className input class name
 * @param {string} classContent input content class name
 * @param {string} classChevron input chevron class name
 * @component
 */
function Table(_ref) {
  var dataSorted = _ref.dataSorted,
    setDataSorted = _ref.setDataSorted,
    dataFiltered = _ref.dataFiltered,
    setDataFiltered = _ref.setDataFiltered,
    currentItems = _ref.currentItems,
    currentPage = _ref.currentPage,
    setCurrentPage = _ref.setCurrentPage,
    itemsPerPage = _ref.itemsPerPage,
    searchInput = _ref.searchInput,
    setSearchInput = _ref.setSearchInput,
    categories = _ref.categories,
    setSelect = _ref.setSelect,
    searchBar = _ref.searchBar,
    setSearchBar = _ref.setSearchBar,
    className = _ref.className,
    classContent = _ref.classContent,
    classChevron = _ref.classChevron;
  /** CONVERT DATE FOR A DISPLAY */
  var dateConvert = function dateConvert(date) {
    var slice1 = date.slice(0, 4);
    var slice2 = date.slice(5, 7);
    var slice3 = date.slice(8, 10);
    return slice3 + "/" + slice2 + "/" + slice1;
  };

  /** LIST OF NUMBER OF ENTRIES PER PAGE */
  var numberEntries = [10, 15, 30];

  /** MANAGE SEARCH BAR */
  var handleSearchInput = function handleSearchInput(e) {
    var inputContent = e.target.value.toLowerCase().replace(/\s/g, "").normalize("NFD").replace(/(?:[\^`\xA8\xAF\xB4\xB7\xB8\u02B0-\u034E\u0350-\u0357\u035D-\u0362\u0374\u0375\u037A\u0384\u0385\u0483-\u0487\u0559\u0591-\u05A1\u05A3-\u05BD\u05BF\u05C1\u05C2\u05C4\u064B-\u0652\u0657\u0658\u06DF\u06E0\u06E5\u06E6\u06EA-\u06EC\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F5\u0818\u0819\u0898-\u089F\u08C9-\u08D2\u08E3-\u08FE\u093C\u094D\u0951-\u0954\u0971\u09BC\u09CD\u0A3C\u0A4D\u0ABC\u0ACD\u0AFD-\u0AFF\u0B3C\u0B4D\u0B55\u0BCD\u0C3C\u0C4D\u0CBC\u0CCD\u0D3B\u0D3C\u0D4D\u0DCA\u0E47-\u0E4C\u0E4E\u0EBA\u0EC8-\u0ECC\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F82-\u0F84\u0F86\u0F87\u0FC6\u1037\u1039\u103A\u1063\u1064\u1069-\u106D\u1087-\u108D\u108F\u109A\u109B\u135D-\u135F\u1714\u1715\u17C9-\u17D3\u17DD\u1939-\u193B\u1A75-\u1A7C\u1A7F\u1AB0-\u1ABE\u1AC1-\u1ACB\u1B34\u1B44\u1B6B-\u1B73\u1BAA\u1BAB\u1C36\u1C37\u1C78-\u1C7D\u1CD0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1D2C-\u1D6A\u1DC4-\u1DCF\u1DF5-\u1DFF\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2CEF-\u2CF1\u2E2F\u302A-\u302F\u3099-\u309C\u30FC\uA66F\uA67C\uA67D\uA67F\uA69C\uA69D\uA6F0\uA6F1\uA700-\uA721\uA788-\uA78A\uA7F8\uA7F9\uA8C4\uA8E0-\uA8F1\uA92B-\uA92E\uA953\uA9B3\uA9C0\uA9E5\uAA7B-\uAA7D\uAABF-\uAAC2\uAAF6\uAB5B-\uAB5F\uAB69-\uAB6B\uABEC\uABED\uFB1E\uFE20-\uFE2F\uFF3E\uFF40\uFF70\uFF9E\uFF9F\uFFE3]|\uD800\uDEE0|\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDEE5\uDEE6]|\uD803[\uDD22-\uDD27\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC46\uDC70\uDCB9\uDCBA\uDD33\uDD34\uDD73\uDDC0\uDDCA-\uDDCC\uDE35\uDE36\uDEE9\uDEEA\uDF3C\uDF4D\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC42\uDC46\uDCC2\uDCC3\uDDBF\uDDC0\uDE3F\uDEB6\uDEB7\uDF2B]|\uD806[\uDC39\uDC3A\uDD3D\uDD3E\uDD43\uDDE0\uDE34\uDE47\uDE99]|\uD807[\uDC3F\uDD42\uDD44\uDD45\uDD97]|\uD80D[\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF8F-\uDF9F\uDFF0\uDFF1]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD67-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uD838[\uDC30-\uDC6D\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD46\uDD48-\uDD4A])/g, "");
    setSearchInput(inputContent);
    if (inputContent.length === 0) {
      setSearchBar(false);
      setDataFiltered(dataSorted);
    }
    if (inputContent.length >= 3) {
      var dataFilter = dataSorted.filter(function (item) {
        return item.firstName.toLowerCase().includes(inputContent.toLowerCase()) || item.lastName.toLowerCase().includes(inputContent.toLowerCase()) || item.department.toLowerCase().includes(inputContent.toLowerCase());
      });
      setSearchBar(true);
      return setDataFiltered(dataFilter);
    }
  };

  /** MANAGE SORTING */
  var titleKind = {
    Name: "lastName",
    "Date of birth": "birth",
    Address: "state",
    "Date start": "startDate",
    Department: "department"
  };
  var sortIncreasing = function sortIncreasing(category) {
    var _ = require("lodash");
    if (searchBar) {
      var sortedList = _.sortBy(dataFiltered, titleKind["".concat(category)]);
      return setDataFiltered(sortedList);
    } else if (!searchBar) {
      var _sortedList = _.sortBy(dataSorted, titleKind["".concat(category)]);
      return setDataSorted(_sortedList);
    }
  };
  var sortDescending = function sortDescending(category) {
    var _ = require("lodash");
    if (searchBar) {
      var sortedList = _.sortBy(dataFiltered, titleKind["".concat(category)]).reverse();
      return setDataFiltered(sortedList);
    } else if (!searchBar) {
      var _sortedList2 = _.sortBy(dataSorted, titleKind["".concat(category)]).reverse();
      return setDataSorted(_sortedList2);
    }
  };

  /** MANAGE PAGE SYSTEM */
  var pageNumbers = [];
  var itemsTotal = function itemsTotal() {
    if (searchBar) {
      return dataFiltered.length;
    } else if (!searchBar) {
      return dataSorted.length;
    }
  };
  for (var i = 1; i <= Math.ceil(itemsTotal() / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  var goPreviousPage = function goPreviousPage() {
    currentPage !== 1 && setCurrentPage(currentPage - 1);
  };
  var goNextPage = function goNextPage() {
    currentPage !== pageNumbers.length && setCurrentPage(currentPage + 1);
  };
  return /*#__PURE__*/_react.createElement("section", {
    className: "table-background"
  }, /*#__PURE__*/_react.createElement("section", {
    className: "table-layout-ctn"
  }, /*#__PURE__*/_react.createElement(_tableDisplay.default, {
    itemsPerPage: itemsPerPage,
    setSelect: setSelect,
    numberEntries: numberEntries,
    className: className,
    classContent: classContent,
    classChevron: classChevron,
    setCurrentPage: setCurrentPage
  }), /*#__PURE__*/_react.createElement(_tableSearch.default, {
    handleSearchInput: handleSearchInput,
    searchInput: searchInput
  })), /*#__PURE__*/_react.createElement("table", {
    className: "table-ctn"
  }, /*#__PURE__*/_react.createElement("thead", null, /*#__PURE__*/_react.createElement("tr", null, categories.map(function (category, index) {
    return /*#__PURE__*/_react.createElement("th", {
      key: index,
      scope: "col"
    }, category, " ", /*#__PURE__*/_react.createElement(_tableSorting.default, {
      categories: category,
      sortIncreasing: sortIncreasing,
      sortDescending: sortDescending
    }));
  }))), /*#__PURE__*/_react.createElement("tbody", null, currentItems.map(function (employee, index) {
    return /*#__PURE__*/_react.createElement("tr", {
      key: index
    }, /*#__PURE__*/_react.createElement("td", {
      "data-label": "name"
    }, employee.firstName + " " + employee.lastName.toUpperCase()), /*#__PURE__*/_react.createElement("td", {
      "data-label": "Birth"
    }, dateConvert(employee.birth)), /*#__PURE__*/_react.createElement("td", {
      "data-label": "Address"
    }, /*#__PURE__*/_react.createElement("div", null, /*#__PURE__*/_react.createElement("div", null, employee.street + " " + employee.city), /*#__PURE__*/_react.createElement("div", null, employee.state + " " + employee.zipCode))), /*#__PURE__*/_react.createElement("td", {
      "data-label": "Start date"
    }, dateConvert(employee.startDate)), /*#__PURE__*/_react.createElement("td", {
      "data-label": "Department"
    }, employee.department));
  }))), /*#__PURE__*/_react.createElement(_tablePaging.default, {
    currentPage: currentPage,
    pageNumbers: pageNumbers,
    itemsTotal: itemsTotal,
    goPreviousPage: goPreviousPage,
    goNextPage: goNextPage
  }));
}