import React from "react"
import CartWidget from "./CartWidget"
import Menu from "./Menu"
const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
        <div class="navbar-brand">
          <button className="logo" class="btn btn-light">Product Design</button>
        </div>
        <div class="nav-item">
          <Menu/>
        </div>
        <div class="nav-item">
          <CartWidget />
        </div>

      </div>
    </nav>
  )
}

export default

  NavBar

