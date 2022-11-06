/** TOOLS */
import propTypes from 'prop-types';

/** COMPONENTS */
import Display from "./tableDisplay";
import Search from "./tableSearch";
import Sorting from "./tableSorting";
import Paging from "./tablePaging";

/** STYLE */
import "../styles/table.css";

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
export default function Table({
  dataSorted,
  setDataSorted,
  dataFiltered,
  setDataFiltered,
  currentItems,
  currentPage,
  setCurrentPage,
  itemsPerPage,
  searchInput,
  setSearchInput,
  categories,
  setSelect,
  searchBar,
  setSearchBar,
  className,
  classContent,
  classChevron,
}) {

  /** CONVERT DATE FOR A DISPLAY */
  const dateConvert = (date) => {
    const slice1 = date.slice(0, 4);
    const slice2 = date.slice(5, 7);
    const slice3 = date.slice(8, 10);
    return slice3 + "/" + slice2 + "/" + slice1;
  };

  /** LIST OF NUMBER OF ENTRIES PER PAGE */
  const numberEntries = [10, 15, 30];

  /** MANAGE SEARCH BAR */
  const handleSearchInput = (e) => {
    const inputContent = e.target.value
      .toLowerCase()
      .replace(/\s/g, "")
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "");
    setSearchInput(inputContent);
    if (inputContent.length === 0) {
      setSearchBar(false);
      setDataFiltered(dataSorted);
    }
    if (inputContent.length >= 3) {
      const dataFilter = dataSorted.filter((item) => {
        return (
          item.firstName.toLowerCase().includes(inputContent.toLowerCase()) ||
          item.lastName.toLowerCase().includes(inputContent.toLowerCase()) ||
          item.department.toLowerCase().includes(inputContent.toLowerCase())
        );
      });
      setSearchBar(true);
      return setDataFiltered(dataFilter);
    }
  };

  /** MANAGE SORTING */
  const titleKind = {
    Name: "lastName",
    "Date of birth": "birth",
    Address: "state",
    "Date start": "startDate",
    Department: "department",
  };

  const sortIncreasing = (category) => {
    var _ = require("lodash");
    if (searchBar) {
      const sortedList = _.sortBy(dataFiltered, titleKind[`${category}`]);
      return setDataFiltered(sortedList);
    } else if (!searchBar) {
      const sortedList = _.sortBy(dataSorted, titleKind[`${category}`]);
      return setDataSorted(sortedList);
    }
  };

  const sortDescending = (category) => {
    var _ = require("lodash");
    if (searchBar) {
      const sortedList = _.sortBy(
        dataFiltered,
        titleKind[`${category}`]
      ).reverse();
      return setDataFiltered(sortedList);
    } else if (!searchBar) {
      const sortedList = _.sortBy(
        dataSorted,
        titleKind[`${category}`]
      ).reverse();
      return setDataSorted(sortedList);
    }
  };

  /** MANAGE PAGE SYSTEM */
  const pageNumbers = [];

  const itemsTotal = () => {
    if (searchBar) {
      return dataFiltered.length;
    } else if (!searchBar) {
      return dataSorted.length;
    }
  };

  for (let i = 1; i <= Math.ceil(itemsTotal() / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const goPreviousPage = () => {
    currentPage !== 1 && setCurrentPage(currentPage - 1);
  };
  const goNextPage = () => {
    currentPage !== pageNumbers.length && setCurrentPage(currentPage + 1);
  };

  return (
    <section className="table-background">
      <section className="table-layout-ctn">
        <Display
          itemsPerPage={itemsPerPage}
          setSelect={setSelect}
          numberEntries={numberEntries}
          className={className}
          classContent={classContent}
          classChevron={classChevron}
          setCurrentPage={setCurrentPage}
        />
        <Search
          handleSearchInput={handleSearchInput}
          searchInput={searchInput}
        />
      </section>
      <table className="table-ctn">
        <thead>
          <tr>
            {categories.map((category, index) => (
              <th key={index} scope="col">
                {category}{" "}
                <Sorting
                  categories={category}
                  sortIncreasing={sortIncreasing}
                  sortDescending={sortDescending}
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((employee, index) => (
            <tr key={index}>
              <td data-label="name">
                {employee.firstName + " " + employee.lastName.toUpperCase()}
              </td>
              <td data-label="Birth">{dateConvert(employee.birth)}</td>
              <td data-label="Address">
                <div>
                  <div>{employee.street + " " + employee.city}</div>
                  <div>{employee.state + " " + employee.zipCode}</div>
                </div>
              </td>
              <td data-label="Start date">{dateConvert(employee.startDate)}</td>
              <td data-label="Department">{employee.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Paging
        currentPage={currentPage}
        pageNumbers={pageNumbers}
        itemsTotal={itemsTotal}
        goPreviousPage={goPreviousPage}
        goNextPage={goNextPage}
      />
    </section>
  );
}

Table.propTypes = {
  dataSorted: propTypes.array,
  setDataSorted: propTypes.func,
  dataFiltered: propTypes.array,
  setDataFiltered: propTypes.func,
  currentItems: propTypes.array,
  currentPage: propTypes.number,
  setCurrentPage: propTypes.func,
  itemsPerPage: propTypes.node,
  searchInput: propTypes.string,
  setSearchInput: propTypes.func,
  categories: propTypes.array,
  setSelect: propTypes.func,
  searchBar: propTypes.bool,
  setSearchBar: propTypes.func,
  className: propTypes.string,
  classContent: propTypes.string,
  classChevron: propTypes.string,
};
