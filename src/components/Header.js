import React from "react"
import { NavLink } from "react-router-dom"

import "../styles/Header.css"

import motogp from "../pic/motogp_riders.jpg"
const Header = (props) => (
  <header class="headPic">
    <img src={motogp} alt="motoGP" />
    <div class="layer"></div>
    <NavLink to="/">
      <h1>Moto GP</h1>
    </NavLink>
  </header>
)
export default Header

// style={{ backgroundImage: `url(${motogp})` }}
