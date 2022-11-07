/** TOOLS */
import propTypes from 'prop-types';

/**
* React component
* @param {string} name field name
* @param {string} label field label
* @param {func} setInput input state change
* @param {string} input input value
* @param {string} className input class name
* @returns {JSX} The input text of the table
*/
export default function InputText ({ name, label, setInput, input, className }) {

  const handleInput = (e) => setInput(e)
  
    return (
      <div className="table-input"> 
      <div>
         <label className="table-label" htmlFor={name}>
            {label}
            <input
                key={name}
                name={name}
                type="text"
                id={name}
                value={input}
                onChange={ (e) => handleInput({value : e.target.value, name: e.target.name})}
                className={className}
                min={3}
                max={20}
              />
        </label>
      </div> 
      </div>  
    )
}

InputText.propTypes = {
  name: propTypes.string, 
  label: propTypes.string, 
  setInput: propTypes.func, 
  input: propTypes.node,
  className: propTypes.string,
}
