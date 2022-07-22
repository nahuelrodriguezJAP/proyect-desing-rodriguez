
import MenuIcon from '../img/menu.png'
const Menu = () => {
    return (
        <div>
        <div class="dropdown">
                <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
                    <img src={MenuIcon} alt="Menu"/>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Productos</a></li>
                    <li><a class="dropdown-item" href="#">Nosotros</a></li>
                    <li><a class="dropdown-item" href="#">Contactenos</a></li>
                </ul>
            </div></div>
    )
}

export default Menu