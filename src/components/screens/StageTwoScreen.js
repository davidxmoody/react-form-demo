import React from "react"
import PropTypes from "prop-types"
import Button from "../controls/Button"
import InputField from "../controls/InputField"
import Screen from "../Screen"

export default function StageTwoScreen(props) {
  return (
    <Screen title="Part two">
      <InputField
        label="Your current location"
        value={props.formValues.location}
        onChange={(value) => props.updateField("location", value)}
        actionButtonText="Tap to automatically detect"
        actionButtonAction={() => {
          props.getLocation()
            .then((location) => props.updateField("location", location))
            .catch(() => alert("Sorry, could not automatically lookup your location, please enter it manually"))
        }}
      />
      <InputField
        label="Your current date and time"
        value={props.formValues.datetime}
        type="datetime-local"
        onChange={(value) => props.updateField("datetime", value)}
      />
      <InputField
        label="Additional feedback"
        value={props.formValues.feedbackText}
        onChange={(value) => props.updateField("feedbackText", value)}
      />
      <Button busy={props.isSubmitting} onClick={props.submitForm}>
        Submit
      </Button>
    </Screen>
  )
}

StageTwoScreen.propTypes = {
  formValues: PropTypes.shape({
    location: PropTypes.string,
    datetime: PropTypes.string,
    feedbackScore: PropTypes.number, // TODO implement this or delete it
    feedbackText: PropTypes.string,
  }).isRequired,
  updateField: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  submissionError: PropTypes.any,
  submitForm: PropTypes.func.isRequired,
  getLocation: PropTypes.func.isRequired,
}
