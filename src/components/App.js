import React from "react"
import ScreenShifter from "./ScreenShifter"
import WelcomeScreen from "./screens/WelcomeScreen"
import StageOneScreen from "./screens/StageOneScreen"
import StageTwoScreen from "./screens/StageTwoScreen"
import SuccessScreen from "./screens/SuccessScreen"

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.submitForm = this.submitForm.bind(this)
    this.updateField = this.updateField.bind(this)

    this.state = {
      currentScreenIndex: 0,
      isSubmitting: false,
      submissionError: null,
      formValues: {
        title: null,
        name: null,
        dob: null,
        location: null,
        datetime: null,
        feedbackScore: null,
        feedbackText: null
      },
    }
  }

  submitForm() {
    alert("TODO")
  }

  updateField(fieldName, value) {
    alert(`TODO ${fieldName} ${value}`)
  }

  render() {
    return (
      <ScreenShifter currentScreenIndex={this.state.currentScreenIndex}>
        <WelcomeScreen
          nextScreen={() => this.setState({currentScreenIndex: 1})}
        />
        <StageOneScreen
          formValues={this.state.formValues}
          updateField={this.updateField}
          nextScreen={() => this.setState({currentScreenIndex: 2})}
        />
        <StageTwoScreen
          formValues={this.state.formValues}
          updateField={this.updateField}
          isSubmitting={this.state.isSubmitting}
          submissionError={this.state.submissionError}
          submitForm={this.submitForm}
        />
        <SuccessScreen />
      </ScreenShifter>
    )
  }
}
