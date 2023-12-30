import React from "react"
import LittleCard from "./LittleCard.jsx"
import data from "../todays-data.js"



function LittleCardSection () {

  const littleCardElements = data.map(card => {
    return (
      <LittleCard
          key={card.id}
          card={card}
      />
    )
  })

  return (
    <div className="little-card-section">
      <h2 className="little-card-section--title darkmode">Overview - Today</h2>
      <div className="little-card-section-container">
        {littleCardElements}
      </div>
    </div>
  )
}

export default LittleCardSection
