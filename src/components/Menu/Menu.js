
import { Link } from 'react-router-dom'
import MenuIcon from '../img/menu.png'
const Menu = () => {
    return (
        <div>
        <div class="dropdown">
                <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
                    <img src={MenuIcon} alt="Menu"/>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><Link to="/Categorias"><a class="dropdown-item" >Categorías</a></Link></li>
                    <li><Link to="/Nosotros"><a class="dropdown-item" >Nosotros</a></Link></li>
                    <li><Link to="/Contacto"><a class="dropdown-item" >Contactenos</a></Link></li>
                </ul>
            </div></div>
    )
}

export default Menu