import React from "react"

function LittleCard(props) {

  const arrowType = props.card.increase ? "icon-up.svg" : "icon-down.svg"

  const arrowAlt = props.card.increase ? "increase" : "decrease"

  const changeColor = {
      color: props.card.increase ? "#1db489" : "#dc414c"
  }

  return (
    <div className={props.darkMode ? "little-card darkmode" : "little-card"}>
        <div className="little-card--headings-div">
            <h4 className="little-card--title">{props.card.stat}</h4>
            <img src={props.card.icon} alt={props.card.platform} className="little-card--icon"/>
        </div>
        <div className="little-card--stats-div">
            <span className="little-card--main-stat">{props.card.total}</span>
            <div className="little-card--percentage-div" style={changeColor}>
                <img src={arrowType} alt={arrowAlt} className="little-card--arrow-type"/>
                <span className="little-card--change-stat">{`${props.card.percentChanged}%`}</span>
            </div>
        </div>
    </div>
  )
}

export default LittleCard
