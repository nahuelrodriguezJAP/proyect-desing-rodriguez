
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Menu = () => {
    return (
        <div>
            <ButtonGroup>
            <Button variant="outline-light">Nosotros</Button>
                <Button variant="outline-light">
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
                </Button>
                <Button variant="outline-light">Contactenos</Button>
            </ButtonGroup>
        </div>
    )
}

export default Menu