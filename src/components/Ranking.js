import React from "react"

import "../styles/Ranking.css"
const Ranking = ({ data }) => {
  const rankingList = data.riders.map((rider) => (
    <li key={`rd${rider.id}`} points={rider.points}>
      <span className="position"></span>
      <span>{rider.name}</span>
      <span>{rider.motocycle}</span>
      <span>{rider.nationality}</span>
      <span className="points">{rider.points}</span>
    </li>
  ))
  rankingList.sort((a, b) => {
    const firstRider = a.props.points
    const secondRider = b.props.points
    if (firstRider - secondRider > 0) return -1
    if (firstRider - secondRider < 0) return 1
  })
  // rankingList.forEach((element, index) => {
  //   element.props.children ++index
  // })
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
