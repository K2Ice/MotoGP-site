import React from "react"

import "../styles/Ranking.css"
const Ranking = ({ data }) => {
  const rankingList = data.riders.map((rider) => (
    <li key={`rd${rider.id}`} points={rider.points}>
      {rider.name}
      <span className="points">{rider.points}</span>
    </li>
  ))
  rankingList.sort((a, b) => {
    const firstRider = a.props.points
    const secondRider = b.props.points
    if (firstRider - secondRider > 0) return -1
    if (firstRider - secondRider < 0) return 1
  })
  return (
    <div className="ranking">
      <div className="upBar">
        <span className="name">Zawodnik</span>
        <span>Punkty</span>
      </div>
      <ul>{rankingList}</ul>
    </div>
  )
}
export default Ranking
