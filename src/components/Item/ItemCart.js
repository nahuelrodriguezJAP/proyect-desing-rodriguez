import React from 'react'
import { Link } from 'react-router-dom'

const ItemCart = () => {
    return (
        <div>
            <div><Link to={'/'}>
                <imput>Seguir Comprando</imput>
                </Link>
            </div>
            <div>
                <Link to={'/Cart'}>
                    <imput>Ir Al Carrito</imput>
                </Link>

            </div>


        </div>
    )
}

export default ItemCart