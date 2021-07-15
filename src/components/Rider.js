import React from "react"
import { Link } from "react-router-dom"

import "../styles/Rider.css"

const Rider = ({ rider }) => {
  return (
    <div className="rider">
      <div className="riderDescription">
        <Link to={`/rider/${rider.name}`}>
          <h1>{rider.name}</h1>
        </Link>
        <p>{rider.team}</p>
      </div>
      <div className="riderPhoto">
        <img
          className="riderImage"
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
