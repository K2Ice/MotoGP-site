import React from "react"
import Race from "./Race"

const Races = ({ data }) => {
  let index = 1
  const allRaces = data.races.map((race) => <Race key={index++} race={race} />)
  return (
    <div className="races">
      <div className="header">
        <p>Wyścig</p>
        <p>Tor</p>
      </div>
      {allRaces}
    </div>
  )
}

export default Races
