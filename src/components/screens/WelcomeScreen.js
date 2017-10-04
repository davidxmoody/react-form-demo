import React from "react"
import PropTypes from "prop-types"
import Button from "../controls/Button"
import Screen from "../Screen"

export default function WelcomeScreen(props) {
  return (
    <Screen title="Welcome!">
      <p>This is a simple React form created by David Moody</p>
      <p>
        You can view the source
        on <a href="https://github.com/davidxmoody/react-form-demo" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>
      <Button onClick={props.nextScreen}>Next</Button>
    </Screen>
  )
}

WelcomeScreen.propTypes = {
  nextScreen: PropTypes.func.isRequired,
}
