import React from "react"
import PropTypes from "prop-types"
import Button from "../controls/Button"
import InputField from "../controls/InputField"
import DropdownField from "../controls/DropdownField"
import Screen from "../Screen"

export default function StageOneScreen(props) {
  return (
    <Screen title="Part one">
      <DropdownField
        label="Title"
        value={props.formValues.title}
        onChange={(value) => props.updateField("title", value)}
        options={["Mr", "Mrs", "Ms", "Miss"]}
      />
      <InputField
        label="Name"
        value={props.formValues.name}
        onChange={(value) => props.updateField("name", value)}
      />
      <InputField
        label="Date of birth"
        value={props.formValues.dob}
        type="date"
        onChange={(value) => props.updateField("dob", value)}
      />
      <Button onClick={props.nextScreen}>Next</Button>
    </Screen>
  )
}

StageOneScreen.propTypes = {
  formValues: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    dob: PropTypes.string,
  }).isRequired,
  updateField: PropTypes.func.isRequired,
  nextScreen: PropTypes.func.isRequired,
}
