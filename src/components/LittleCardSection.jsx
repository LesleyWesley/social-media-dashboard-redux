import React from "react"
import LittleCard from "./LittleCard.jsx"
import data from "../todays-data.js"



function LittleCardSection (props) {

  const littleCardElements = data.map(card => {
    return (
      <LittleCard
          key={card.id}
          card={card}
          darkMode={props.darkMode}
      />
    )
  })

  return (
    <div className="little-card-section">
      <h2 className={props.darkMode ? "little-card-section--title darkmode" : "little-card-section--title"}>Overview - Today</h2>
      <div className="little-card-section-container">
        {littleCardElements}
      </div>
    </div>
  )
}

export default LittleCardSection
