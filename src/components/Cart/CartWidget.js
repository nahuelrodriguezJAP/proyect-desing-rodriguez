import React from 'react'
import CartIcon from '../img/carrito.png'
import Style from '../Cart/CartWidget.css'

const CartWidget = () => {
  return (
    <img style={Style} src={CartIcon} alt="Cart"/>
  )
}

export default CartWidget