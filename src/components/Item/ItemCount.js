import { useState } from "react"
import { Button } from "react-bootstrap"


const ItemCount = ({stock, inicial}) => {
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
        <div className="col-5 align-self-center">
            {count}
            <Button  onClick={aumentar}/>
            <Button onClick={disminuir}>-  </Button><br/>
            <Button>Agregar al Carrito</Button><span>Stock Disponible{stock}</span>
        </div>
    )
}

export default ItemCount