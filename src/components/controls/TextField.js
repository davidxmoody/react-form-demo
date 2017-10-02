import React from "react"
import PropTypes from "prop-types"

export default function TextField(props) {
  return (
    <div>
      <label>
        <div>{props.label}</div>
        <div>
          <input
            type="text"
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
          />
        </div>
      </label>
    </div>
  )
}

TextField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}
