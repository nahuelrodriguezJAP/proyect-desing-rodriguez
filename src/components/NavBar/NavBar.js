import React from "react"
import { Link } from "react-router-dom"
import CartWidget from "../Cart/CartWidget"
import Menu from "../Menu/Menu"
const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
        <div class="navbar-brand">
          <Link to={`/`}>
            <button className="logo" class="btn btn-light">Product Design</button>
          </Link>
        </div>
        <div class="nav-item">
          <Menu />
        </div>
        <div class="nav-item">
          <Link to={`/cart`}>
            <CartWidget />
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default

  NavBar

