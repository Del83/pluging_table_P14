/** TOOLS */
import propTypes from "prop-types";

/**
 * React component : Search in table
 * @param {func} handleSearchInput function that handles the search bar entry
 * @param {string} searchInput search input
 * @component
 */
export default function Search({ handleSearchInput, searchInput }) {
  return (
    <div className="table-search">
      <span className="table-search-label">Search</span>
      <input
        className="table-search-input"
        name="search"
        type="search"
        placeholder={" ..."}
        onChange={(e) => handleSearchInput(e)}
        value={searchInput}
      />
    </div>
  );
}

Search.propTypes = {
  handleSearchInput: propTypes.func,
  searchInput: propTypes.string,
};
