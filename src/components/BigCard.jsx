import React from "react"


function BigCard(props) {

  const changeColor = {
      color: props.card.increase ? "#1db489" : "#dc414c"
  }

  const backgroundType = props.card.gradient ? "backgroundImage" : "backgroundColor"

  const backgroundStyles = {
    [backgroundType]: props.card.color
  }


  const arrowType = props.card.increase ? "icon-up.svg" : "icon-down.svg"

  const arrowAlt = props.card.increase ? "increase" : "decrease"

  return (
    <div className="card" style={backgroundStyles}>
      <div className={props.darkMode ? "card-container darkmode" : "card-container"}>
            <div className="big-card--heading">
                <img src={props.card.icon} alt={props.card.platform} className="big-card--icon"/>
                <h3 className="handle">{props.card.username}</h3>
            </div>
            <div className="followers-div">
                <span className="followers-amount">{props.card.total}</span>
                <p className="followers-heading">{props.card.type}</p>
            </div>
            <div className="increase-div" style={changeColor}>
                <img src={arrowType} alt={arrowAlt} />
                <span className="increase-amount">{props.card.amountChanged}</span>
                <p>Today</p>
            </div>
        </div>
    </div>
  )
}

export default BigCard
