import React, { useState } from 'react'
import ItemCount from '../Item/ItemCount';
import ItemCart from '../Item/ItemCart';
import { useCartContext } from '../../context/CartContextProvider';


const Intercambiabilidad = ({dato , inicial}) => {
    const [imputType, setImputType]= useState('button');

    const {addItemCart, cartItem}= useCartContext()

    const handleInterc= ( count)=>{
        setImputType('input');
        addItemCart({...dato, cantidad:count});
        console.log(cartItem);

    }
  return (
    <div>{imputType==='button' ?
    <ItemCount stock={dato.stock} inicial={inicial} handleInterc={handleInterc}/> 
    :
    <ItemCart/>}</div>
  )
}

export default Intercambiabilidad