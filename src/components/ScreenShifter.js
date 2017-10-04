import React from "react"
import PropTypes from "prop-types"
import "./ScreenShifter.css"

export default function ScreenShifter(props) {
  return (
    <div className="screen-shifter">
      <div className="screen-shifter__centerer">
        {React.Children.map(props.children, (child, index) => {
          const transform = `translate(${(index - props.currentScreenIndex) * 100}%)`
          let className = "screen-shifter__child-container"
          if (index === props.currentScreenIndex) {
            className += " screen-shifter__child-container--active"
          }

          return (
            <div className={className} style={{transform}}>
              {child}
            </div>
          )
        })}
      </div>
    </div>
  )
}

ScreenShifter.propTypes = {
  currentScreenIndex: PropTypes.number.isRequired,
  children: PropTypes.any.isRequired,
}
