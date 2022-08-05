import React from 'react'
import { Link } from 'react-router-dom'

const ItemCart = () => {
    return (
        <div>
            <div><Link to={'/'}>
                Seguir Comprando
                </Link>
            </div>
            <div>
                <Link to={'/Cart'}>
                    Ir Al Carrito
                </Link>

            </div>


        </div>
    )
}

export default ItemCart