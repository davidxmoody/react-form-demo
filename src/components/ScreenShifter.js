import React from "react"
import PropTypes from "prop-types"
import "./ScreenShifter.css"

export default function ScreenShifter(props) {
  return (
    <div className="screen-shifter">
      {React.Children.map(props.children, (child, index) => {
        const transform = `translate(${(index - props.currentScreenIndex) * 100}%)`

        return (
          <div className="screen-shifter__child-container" style={{transform}}>
            {child}
          </div>
        )
      })}
    </div>
  )
}

ScreenShifter.propTypes = {
  currentScreenIndex: PropTypes.number.isRequired,
  children: PropTypes.any.isRequired,
}
