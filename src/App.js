import React from "react"
import ScreenShifter from "./components/ScreenShifter"
import WelcomeScreen from "./components/screens/WelcomeScreen"
import StageOneScreen from "./components/screens/StageOneScreen"
import StageTwoScreen from "./components/screens/StageTwoScreen"
import SuccessScreen from "./components/screens/SuccessScreen"

import submitSurvey from "./submit-survey"
import getLocation from "./get-location"

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.submitForm = this.submitForm.bind(this)
    this.updateField = this.updateField.bind(this)

    this.state = {
      currentScreenIndex: 0,
      isSubmitting: false,
      submissionError: false,
      formValues: {
        title: null,
        name: null,
        dob: null,
        location: null,
        datetime: getCurrentDatetime(),
        feedbackText: null
      },
    }
  }

  submitForm() {
    this.setState({
      isSubmitting: true,
      submissionError: false,
    })

    return submitSurvey(this.state.formValues)
      .then(() => {
        this.setState({
          isSubmitting: false,
          submissionError: false,
          currentScreenIndex: 3,
        })
      })
      .catch(() => {
        this.setState({
          isSubmitting: false,
          submissionError: true,
        })
      })
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
          getLocation={getLocation}
        />
        <SuccessScreen />
      </ScreenShifter>
    )
  }
}

function getCurrentDatetime() {
  // Slight hack due to the format that the "datetime-local" input supports
  const isoDate = new Date().toISOString()
  return isoDate.substring(0, 16)
}
