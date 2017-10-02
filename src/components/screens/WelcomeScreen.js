import React from "react"
import PropTypes from "prop-types"
import Button from "../controls/Button"

export default function WelcomeScreen(props) {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>This is a simple react form demo created by David Moody</p>
      <Button onClick={props.nextScreen}>Next</Button>
    </div>
  )
}

WelcomeScreen.propTypes = {
  nextScreen: PropTypes.func.isRequired,
}
