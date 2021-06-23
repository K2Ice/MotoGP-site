import React, { useEffect } from "react"
import { NavLink } from "react-router-dom"

import "../styles/Header.css"

import motogp from "../pic/motogp_riders.jpg"
import motogp1 from "../pic/motogp_riders1.jpg"
import motogp2 from "../pic/motogp_riders2.jpg"

let bannerNumer = 0
const bannerImages = [motogp, motogp1, motogp2]

const Header = (props) => {
  const banner = () => {
    document.querySelector(".headPic img").src = bannerImages[bannerNumer]
    bannerNumer++
    if (bannerNumer > bannerImages.length - 1) bannerNumer = 0
  }
  useEffect(() => {
    const indexBannerInterval = setInterval(banner, 5000)
    return () => clearInterval(indexBannerInterval)
  }, [])

  return (
    <header class="headPic">
      <img src={motogp} alt="motoGP" />
      <div class="layer"></div>
      <NavLink to="/">
        <h1>Moto GP</h1>
      </NavLink>
    </header>
  )
}
export default Header

// style={{ backgroundImage: `url(${motogp})` }}
