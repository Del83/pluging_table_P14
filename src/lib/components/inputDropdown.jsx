/** IMPORT REACT et TOOLS */
import { useState } from "react";
import propTypes from "prop-types";

/** COMPONENTS */
import InputText from "./inputText";

/** ASSETS */
import chevronDown from "../assets/chevronDown.png";
import chevronUp from "../assets/chevronUp.png";

/**
 * React component : The input dropdown of the table
 * @param {string} name field name
 * @param {string} label field label
 * @param {Array} list data to display
 * @param {func} setSelect selection state change
 * @param {func} setInput input state change
 * @param {string} input input value
 * @param {string} className input class name
 * @param {string} classContent input content class name
 * @param {string} classChevron input chevron class name
 * @component
 */
export default function InputDropdown({
  name,
  label,
  list,
  setSelect,
  setInput,
  input,
  className,
  classContent,
  classChevron,
}) {
  const [unfolded, setUnfolded] = useState(false);
  const chevron = unfolded ? chevronUp : chevronDown;
  const handleFolded = () => {
    setUnfolded(!unfolded);
  };

  const select = (e) => {
    handleFolded();
    return setSelect({
      title: e.target.title,
      textContent: e.target.textContent,
    });
  };

  window.onclick = function(e) {
    if (!e.target.matches(".chevron-show")) {
        setUnfolded(false)
    } 
} 

  return (
    <div
      className={unfolded ? "table-dropdown-container folded" : "table-dropdown-container"}
      onClick={handleFolded}
    >
      <InputText
        autocomplete="off"
        label={label}
        name={name}
        className={unfolded ? `unfolded ${className} ` : className}
        input={input}
        setInput={setInput}
      />
      {unfolded && (
        <ul className={classContent} name={name} >
          {list.map((item, index) => (
            <li key={index} title={name} onClick={select}>
              {item}
            </li>
          ))}
        </ul>
      )}
      <img
        className={classChevron}
        src={chevron}
        alt="drop-down menu chevron"
        width="20"
        height="10"
      />
    </div>
  );
}

InputDropdown.propTypes = {
  name: propTypes.string,
  label: propTypes.string,
  list: propTypes.array,
  setSelect: propTypes.func,
  setInput: propTypes.func,
  input: propTypes.node,
  className: propTypes.string,
  classContent: propTypes.string,
  classChevron: propTypes.string,
};
