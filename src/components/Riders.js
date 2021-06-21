import React, { useEffect } from "react"
import Rider from "./Rider"

import "../styles/Riders.css"

const Riders = (props) => {
  const { changeState, chosenTeam, data } = props

  let riderList = data.riders.filter((rider) => {
    if (chosenTeam === "all") return rider
    if (chosenTeam === rider.team) return rider
  })

  riderList = riderList.map((rider) => <Rider key={rider.id} rider={rider} />)
  const teams = []
  let number = 111

  const selectOptions = data.riders.map((rider) => {
    if (!teams.includes(rider.team)) {
      teams.push(rider.team)
      return (
        <option key={number++} num={number++} value={rider.team}>
          {rider.team}
        </option>
      )
    }
  })

  useEffect(() => {
    changeState(true)
    return () => {
      changeState(false)
    }
  }, [])
  return (
    <>
      <div className="teamSelect">
        <label>Zawodnicy wedle zespołów:</label>
        <select onChange={props.change}>
          <option value="all">Wszyscy</option>
          {selectOptions}
        </select>
      </div>
      <div className="riders">{riderList}</div>
    </>
  )
}
export default Riders
