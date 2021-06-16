import React from "react"

import "../styles/Rider.css"

const Rider = ({ rider }) => {
  return (
    <div className="rider">
      <h1>{rider.name}</h1>
      <p>{rider.team}</p>
      <div className="riderPhoto">
        <img
          src={`./pic/riders/${rider.name
            .toLowerCase()
            .replace(/\s/g, "")
            .replace("\u00F1", "n")}.png`}
          alt={rider.name}
        />
      </div>
    </div>
  )
}

export default Rider
