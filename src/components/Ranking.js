import React from "react"

import "../styles/Ranking.css"
const Ranking = ({ data }) => {
  let rankingList = data.riders.sort((a, b) => {
    const firstRider = a.points
    const secondRider = b.points
    if (firstRider - secondRider > 0) return -1
    if (firstRider - secondRider < 0) return 1
  })

  rankingList = rankingList.map((rider, index) => (
    <li key={`rd${rider.id}`}>
      <span className="position">{++index}</span>
      <span>{rider.name}</span>
      <span>{rider.motorcycle}</span>
      <span>{rider.nationality}</span>
      <span className="points">{rider.points}</span>
    </li>
  ))

  return (
    <div className="ranking">
      <div className="upBar">
        <span>Pozycja</span>
        <span>Zawodnik</span>
        <span>Motocykl</span>
        <span>Narodowość</span>
        <span>Punkty</span>
      </div>
      <ul>{rankingList}</ul>
    </div>
  )
}
export default Ranking
