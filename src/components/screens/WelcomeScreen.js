import React from "react"
import PropTypes from "prop-types"
import Button from "../controls/Button"
import Screen from "./Screen"

export default function WelcomeScreen(props) {
  return (
    <Screen title="Welcome!">
      <p>This is a simple react form demo created by David Moody</p>
      <Button onClick={props.nextScreen}>Next</Button>
    </Screen>
  )
}

WelcomeScreen.propTypes = {
  nextScreen: PropTypes.func.isRequired,
}
