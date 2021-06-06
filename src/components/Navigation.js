import React from "react"
import { NavLink } from "react-router-dom"
import "../styles/Navigation.css"

const Navigation = () => (
  <nav class="mainNav">
    <ul>
      <li>
        <NavLink to="/riders">Zawodnicy</NavLink>
      </li>
      <li>
        <NavLink to="/teams">Zespoły</NavLink>
      </li>
      <li>
        <NavLink to="/races">Wyścigi</NavLink>
      </li>
      <li>
        <NavLink to="/rank">Ranking</NavLink>
      </li>
    </ul>
  </nav>
)
export default Navigation
