import React from "react"
import PropTypes from "prop-types"
import "./Button.css"

export default function Button(props) {
  return (
    <button
      disabled={props.busy}
      className={`button ${props.busy ? "button--busy" : ""}`}
      onClick={props.onClick}
    >{props.children}</button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  busy: PropTypes.bool,
}
