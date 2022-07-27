

import CartWidget from "../Cart/CartWidget"
import Menu from "../Menu/Menu"


import { Link, NavLink } from "react-router-dom"
import { Button } from "react-bootstrap"
import { Dropdown } from "react-bootstrap"

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
          <Dropdown>
            <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
             Categorías
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item >
                <Link to={`/Categoria/Living`}>
                  <Button variant="outline-secondary" >Living</Button>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item >
                <Link to={`/Categoria/Cocina`}>
                  <Button variant="outline-secondary" >Cocina</Button>
                </Link>

              </Dropdown.Item>
              <Dropdown.Item >
                <Link to={`/Categoria/Baño`}>
                  <Button variant="outline-secondary" >Baño</Button>
                </Link>

              </Dropdown.Item>
              <Dropdown.Item >
                <Link to={`/Categoria/Dormitorio`}>
                  <Button variant="outline-secondary">Dormitorio</Button>
                </Link>

              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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

