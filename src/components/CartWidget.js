import React from 'react'
import CartIcon from '../img/carrito.png'
import Style from '../components/CartWidget.css'

const CartWidget = () => {
  return (
    <div><button class='btn'><img style={Style} src={CartIcon}/></button></div>
  )
}

export default CartWidget