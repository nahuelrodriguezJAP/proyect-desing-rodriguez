import {createContext, useContext, useState } from 'react'

const CartContext = createContext([])

export const useCartContext = ( )=> useContext(CartContext)

const CartContextProvider =({children})=>{
  const  [cartItem,setCartItem]= useState([])
  
  const addItemCart=(prod)=>{
    let index= cartItem.findIndex(item=>item.id===prod.id)
    if(index > -1 ){
      let nuevacant=cartItem[index].cantidad+prod.cantidad
      cartItem[index].cantidad=nuevacant
      setCartItem([...cartItem])
    }
    else{      
    setCartItem([...cartItem, prod])}
  }

  const clearCart = ()=>{
    setCartItem([]);
  }
  const deleteItem=(id)=>{
    setCartItem(cartItem.filter(item=>item.id!== id))
  }

  return(
    <CartContext.Provider value={{
        cartItem,
        addItemCart,
        clearCart,
        deleteItem
    }}>
        { children }
    </CartContext.Provider>)
}

export default CartContextProvider