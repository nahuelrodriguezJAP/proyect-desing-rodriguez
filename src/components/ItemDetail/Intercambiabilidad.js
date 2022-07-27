import React, { useState } from 'react'
import ItemCount from '../Item/ItemCount';
import ItemCart from '../Item/ItemCart';

const Intercambiabilidad = (stock) => {
    const [imputType, setImputType]= useState('button');

    const handleInterc= ( )=>{
        setImputType('input')

    }
  return (
    <div>{imputType==='button' ?
    <ItemCount stock={stock} inicial={1} handleInterc={handleInterc}/> 
    :
    <ItemCart/>}</div>
  )
}

export default Intercambiabilidad