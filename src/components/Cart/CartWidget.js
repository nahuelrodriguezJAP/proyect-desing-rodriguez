import React from 'react'
import CartIcon from '../img/carrito.png'
import Style from '../Cart/CartWidget.css'

const CartWidget = () => {
  return (
    <button class='btn'><img style={Style} src={CartIcon} alt="Cart"/></button>
  )
}

export default CartWidget