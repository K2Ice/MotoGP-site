import React from "react"

import "../styles/RiderInfo.css"

const RiderInfo = ({ data, match }) => {
  const riderObj =
    data.riders[
      data.riders.findIndex((rider) => rider.name === match.params.name)
    ]
  return (
    <div className="descriptionRider">
      <h1>{riderObj.name}</h1>
      <div className="riderInfo">
        <div>
          Zespół: <span>{riderObj.team}</span>
        </div>
        <div>
          Narodowość:<span> {riderObj.nationality}</span>
        </div>
        <div>
          Numer: <span>{riderObj.number}</span>
        </div>
      </div>
      <img
        className="riderImg"
        src={`../pic/riders/${riderObj.name
          .toLowerCase()
          .replace(/\s/g, "")
          .replace("\u00F1", "n")}.png`}
        alt={riderObj.name}
      />
      <img
        className="moto"
        src={`../pic/riders/${riderObj.name
          .toLowerCase()
          .replace(/\s/g, "")
          .replace("\u00F1", "n")}motophoto.png`}
        alt={`${riderObj.name} moto`}
      />
    </div>
  )
}

export default RiderInfo
