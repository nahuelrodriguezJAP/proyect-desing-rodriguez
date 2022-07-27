import { useState } from "react"
import { Button, ButtonGroup } from "react-bootstrap"


const ItemCount = ({ stock, inicial }) => {
    const [count, modificar] = useState(inicial)


    const aumentar = () => {
        if (count < stock) {
            modificar(count + 1)
        }
    }
    const disminuir = () => {
        if (count > 1) {
            modificar(count - 1)
        }

    }
    return (
        <div>
            <ButtonGroup aria-label="Basic example">
                <Button variant='secondary' onClick={aumentar}>+</Button>
                <Button variant='secondary' onClick={disminuir}>- </Button> <br />
            </ButtonGroup><hr />
            <Button variant='secondary'>Agregar al Carrito</Button><br/>
                <span style={{ width: '18rem' }}> Stock Disponible: <strong>{stock}</strong></span>
        </div>
    )
}

export default ItemCount