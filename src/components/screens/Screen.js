import React from "react"
import PropTypes from "prop-types"
import "./Screen.css"

export default function Screen(props) {
  return (
    <div className="screen">
      <h2>{props.title}</h2>
      {props.children}
    </div>
  )
}

Screen.propTypes = {
  title: PropTypes.string.isRequired,
}
