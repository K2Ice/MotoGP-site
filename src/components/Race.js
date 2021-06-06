import React from "react"
import "../styles/Race.css"

const Race = ({ race }) => {
  return (
    <div className="race">
      <p>{race.race}</p>
      <p>{race.track}</p>
    </div>
  )
}

export default Race
