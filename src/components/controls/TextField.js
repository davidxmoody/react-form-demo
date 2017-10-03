import React from "react"
import PropTypes from "prop-types"
import "./TextField.css"

export default function TextField(props) {
  return (
    <div className="text-field">
      <label>
        <div className="text-field__label">{props.label}:</div>
        <input
          className="text-field__input"
          type="text"
          value={props.value || ""}
          onChange={(e) => props.onChange(e.target.value)}
        />
      </label>
    </div>
  )
}

TextField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}
