import React from "react"
import ScreenShifter from "./ScreenShifter"

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.submitForm = this.submitForm.bind(this)
    this.nextScreen = this.nextScreen.bind(this)
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

  nextScreen() {
    alert("TODO")
  }

  updateField(fieldName, value) {
    alert("TODO")
  }

  render() {
        // <WelcomeScreen nextScreen={this.nextScreen} />
        // <StageOneScreen nextScreen={this.nextScreen} />
        // <StageTwoScreen nextScreen={this.nextScreen} />
        // <SuccessScreen />
    return (
      <ScreenShifter currentScreenIndex={this.state.currentScreenIndex}>
        <div style={{background: "red"}} onClick={() => this.setState({currentScreenIndex: 1})}>hello</div>
        <div style={{background: "blue"}}>world</div>
      </ScreenShifter>
    )
  }
}
