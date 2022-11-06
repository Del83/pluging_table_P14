/** TOOLS */
import propTypes from "prop-types";
/** COMPONENTS */
import InputDropdown from "./inputDropdown";

/**
 * React component : data display management
 * @param {func} setCurrentPage page number change management
 * @param {node} itemsPerPage items per page
 * @param {func} setSelect input state change
 * @param {array} numberEntries List of number of entries per page
 * @param {string} className input class name
 * @param {string} classContent input content class name
 * @param {string} classChevron input chevron class name
 * @component
 */
export default function Display({
  setCurrentPage,    
  itemsPerPage,
  setSelect,
  numberEntries,
  className,
  classContent,
  classChevron,
}) {
  const showPerPage = (e) => {
    setCurrentPage(1)
    return setSelect(e.textContent);
  };

  return (
    <div className="table-show-entries">
      <InputDropdown
        label="Show"
        name="show"
        className={className}
        classContent={classContent}
        classChevron={classChevron}
        value={itemsPerPage}
        input={itemsPerPage}
        list={numberEntries}
        setSelect={showPerPage}
      />
      <span className="entries">entries</span>
    </div>
  );
}

Display.propTypes = {
  setCurrentPage: propTypes.func,
  itemsPerPage: propTypes.node,
  setSelect: propTypes.func,
  numberEntries: propTypes.array,
  className: propTypes.string,
  classContent: propTypes.string,
  classChevron: propTypes.string,
};
