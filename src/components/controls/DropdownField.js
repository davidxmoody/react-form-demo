import React from "react"
import PropTypes from "prop-types"
import "./DropdownField.css"

// Quick hack to get around the null value not being supported in dropdowns
const NULL = "NULL"

export default function DropdownField(props) {
  return (
    <div className="dropdown-field">
      <label>
        <div className="dropdown-field__label">{props.label}:</div>
        <select
          className="dropdown-field__input"
          value={props.value || NULL}
          onChange={(e) => {
            let selectedValue = e.target.value
            if (selectedValue === NULL) selectedValue = null
            props.onChange(selectedValue)
          }}
        >
          <option className="dropdown-field__default-option" value={NULL}>
            Please select...
          </option>

          {props.options.map((val) => (
            <option key={val} value={val}>{val}</option>
          ))}
        </select>
      </label>
    </div>
  )
}

DropdownField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
}
