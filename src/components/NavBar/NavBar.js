

import CartWidget from "../Cart/CartWidget"
import Menu from "../Menu/Menu"


import { Link, NavLink } from "react-router-dom"
import { Button } from "react-bootstrap"

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
        <div class="navbar-brand">
          <Link to={`/`}>
            <Button className="logo" variant="outline-light">PRODUCT DESIGN</Button>
          </Link>
        </div>
        <div class="nav-item">
          <Menu />
        </div>
        <div class="nav-item">
          <NavLink to={`/cart`} >
            <CartWidget />
          </NavLink>
        </div>

      </div>
    </nav>
  )
}

export default

  NavBar

