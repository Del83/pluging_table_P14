/** TOOLS */
import propTypes from "prop-types";

/**
 * React component
 * @param {string} categories table column names
 * @param {func} sortIncreasing function that handles ascending sort
 * @param {func} sortDescending function that handles descending sort
 * @returns {JSX} Sort table
 */
export default function Sorting({
  categories,
  sortIncreasing,
  sortDescending,
}) {
  return (
    <div>
      <div
        className="chevronUp"
        dataset={categories}
        onClick={(e) => {
          const category = e.target.attributes.dataset.value;
          return sortIncreasing(category);
        }}
      >
        ▲
      </div>

      <div
        className="chevronDown"
        dataset={categories}
        onClick={(e) => {
          const category = e.target.attributes.dataset.value;
          return sortDescending(category);
        }}
      >
        ▲
      </div>
    </div>
  );
}

Sorting.propTypes = {
  categories: propTypes.string,
  sortIncreasing: propTypes.func,
  sortDescending: propTypes.func,
};
