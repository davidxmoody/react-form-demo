import React from "react"
import ScreenShifter from "./components/ScreenShifter"
import WelcomeScreen from "./components/screens/WelcomeScreen"
import StageOneScreen from "./components/screens/StageOneScreen"
import StageTwoScreen from "./components/screens/StageTwoScreen"
import SuccessScreen from "./components/screens/SuccessScreen"

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
    alert(`TODO implement this ${JSON.stringify(this.state.formValues, null, 2)}`)
  }

  updateField(fieldName, value) {
    this.setState({
      formValues: Object.assign({}, this.state.formValues, {
        [fieldName]: value,
      }),
    })
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
