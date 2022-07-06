import React from "react"


const NavBar = () => {
  return (
    <nav class="navbar bg-dark">
      <div class="container-fluid">
        <button className="logo" class="btn btn-light">Product Design</button>
        <select class="btn btn-light" name="menu" id="menu">
          <option value="1">Menù</option>
          <option value="2">Productos</option>
          <option value="3">Nosotros</option>
          <option value="4">Contactenos</option>
        </select>
      </div>
    </nav>
  )
}

export default

  NavBar

// < nav class="navbar bg-light" >
//     <div class="container-fluid">
//       <a class="navbar-brand">Product Design</a>
//       <form class="d-flex" >
//           <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
// </nav >
{/* <nav class="navbar bg-light" style={{ backgroundColor: 'black', height: '40px', padding: '8px' }}> <div class="container-fluid"> <button className="logo" style={{ backgroundColor: 'white', marginRight: '80%' }}>Product Design</button>
      <button className="menu" style={{ backgroundColor: 'white' }}><select name="menu" id="menu">
        <option value="1">Menù</option>
        <option value="2">Productos</option>
        <option value="3">Nosotros</option>
        <option value="4">Contactenos</option>
      </select></button>
    </div> */}