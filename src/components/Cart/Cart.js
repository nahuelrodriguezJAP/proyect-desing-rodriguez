
import { useCartContext } from "../../context/CartContextProvider"
import { Link } from 'react-router-dom'


const Cart = () => {
    const { cartItem, clearCart, deleteItem} = useCartContext()
    console.log(cartItem[0])
    return (
        <div>{
            cartItem.length > 0 ?

                <div>{


                    cartItem.map((prod) => {
                        return (
                            <div> 
                                <h1>{prod.nombre}</h1>
                                <h2>{prod.cantidad}</h2>
                                <img src={prod.img} alt='img' />
                                <button onClick={()=>deleteItem(prod.id)}>Eliminar Producto</button>
                            </div>)

                    })}
                <button onClick={clearCart}>Vaciar Carrito</button>
                </div>
                :
                <div>
                    <h3>Carrito Vacio</h3>
                    <Link to='/'>
                        <h3> Volver al Home</h3>

                    </Link>
                </div>
        }</div>
    )
}

export default Cart