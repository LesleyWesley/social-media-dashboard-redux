import React from "react"
import BigCard from "./BigCard.jsx"
import mainData from "../main-data.js"

function BigCardSection() {
  const cardElements = mainData.map(card => {

    const arrowType = card.increase ? "icon-up.svg" : "icon-down.svg"

    return (
      <BigCard
        key={card.platform}
        card={card}
      />
    )
  })

  return (
    <div className="big-card-section">
        {cardElements}
    </div>
  )
}

export default BigCardSection
