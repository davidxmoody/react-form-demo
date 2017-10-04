import React from "react"
import Screen from "./Screen"

export default function WelcomeScreen(props) {
  return (
    <Screen title="Thank you!">
      <p>Your data has been submitted</p>
      <p>Please reload the app if you would like to try it again</p>
    </Screen>
  )
}
