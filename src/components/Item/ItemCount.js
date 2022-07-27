import { useState } from "react"
import { Button, ButtonGroup } from "react-bootstrap"


const ItemCount = ({ stock, inicial, handleInterc}) => {
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
            <button className="btn btn-secondary" onClick={handleInterc}>Agregar al Carrito</button><br/>
                <span style={{ width: '18rem' }}> Stock Disponible: <strong>{stock}</strong></span>
        </div>
    )
}

export default ItemCount