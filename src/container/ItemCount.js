import { useState } from "react"


const ItemCount = ({stock, inicial}) => {
    const [count, modificar] = useState(inicial)
    
    console.log(inicial)

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
        <div class="col-5 align-self-center">
            {count}
            <button class='btn btn-dark' onClick={aumentar}>+</button>
            <button class='btn btn-dark' onClick={disminuir}>-  </button><br/>
            <button class='btn btn-dark'>Agregar al Carrito</button><span>Stock Disponible{stock}</span>
        </div>
    )
}

export default ItemCount