import React from "react"
import PropTypes from "prop-types"
import "./InputField.css"

export default function InputField(props) {
  const showValidTick = props.validationRegex && (props.value || "").match(props.validationRegex)
  const showActionButton = props.actionButtonText && props.actionButtonAction

  return (
    <div className={`text-field ${showValidTick ? "text-field--valid" : ""}`}>
      <label>
        <div className="text-field__label">{props.label}:</div>
        {showActionButton && (
          <button className="text-field__action-button" onClick={props.actionButtonAction}>
            {props.actionButtonText}
          </button>
        )}
        <input
          className="text-field__input"
          type={props.type}
          value={props.value || ""}
          onChange={(e) => props.onChange(e.target.value)}
        />
      </label>
    </div>
  )
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  validationRegex: PropTypes.any,
  actionButtonText: PropTypes.string,
  actionButtonAction: PropTypes.func,
}

InputField.defaultProps = {
  type: "text",
}
