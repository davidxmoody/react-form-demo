import React from "react"
import PropTypes from "prop-types"
import Button from "../controls/Button"
import TextField from "../controls/TextField"
import Screen from "../Screen"

export default function StageTwoScreen(props) {
  return (
    <Screen title="Part two">
      <TextField
        label="Your current location"
        value={props.formValues.location}
        onChange={(value) => props.updateField("location", value)}
      />
      <TextField
        label="Your current date and time"
        value={props.formValues.datetime}
        onChange={(value) => props.updateField("datetime", value)}
      />
      <TextField
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
}
