import { useState } from "react"
import { Button, ButtonGroup } from "react-bootstrap"


const ItemCount = ({ stock,  handleInterc}) => {
    const [count, modificar] = useState(1)


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
    console.log(count)
    return (
        <div>
            <ButtonGroup aria-label="Basic example">

                <Button variant='secondary' onClick={aumentar}>+</Button>
                <Button variant='secondary' onClick={disminuir}>- </Button>
            </ButtonGroup><hr />
            <h1>{count}</h1>
            <button className="btn btn-secondary" onClick={()=>handleInterc(count)}>Agregar al Carrito</button><br/>
                <span style={{ width: '18rem' }}> Stock Disponible: <strong>{stock}</strong></span>
        </div>
    )
}

export default ItemCount