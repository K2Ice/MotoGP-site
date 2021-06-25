import React from "react"

import "../styles/Teams.css"

const Teams = ({ data }) => {
  let teams = data.riders.map((rider) => rider.team)
  const teamsTab = []
  teams.forEach((team) => {
    if (!teamsTab.includes(team)) teamsTab.push(team)
  })

  teams = teamsTab.map((team) => <p>{team}</p>)
  return (
    <div className="teams">
      <p>{teams}</p>
    </div>
  )
}

export default Teams
