import React from "react"

import "../styles/Teams.css"

const Teams = ({ data }) => {
  let teams = data.riders.map((rider) => ({
    team: rider.team,
    moto: rider.motorcycle,
  }))

  let teamTab = []
  teams.forEach((element) => {
    if (teamTab.length === 0) return teamTab.push(element)
    let isAdded = false
    let index = 0
    while (!isAdded) {
      if (index === teamTab.length) {
        teamTab.push(element)
        isAdded = true
      }
      if (element.team === teamTab[index].team) isAdded = true
      index++
    }
  })

  teamTab = teamTab.map((teamItem) => (
    <div className="team-element">
      <img
        src={`./pic/logos/${teamItem.moto.toLowerCase()}-vector-logo.png`}
        alt={`${teamItem.moto}`}
      />
      <p>{teamItem.team}</p>
    </div>
  ))

  return <div className="teams">{teamTab}</div>
}

export default Teams
