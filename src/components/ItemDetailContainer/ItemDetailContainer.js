import { React, useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState([]);

  const getFecht = () => {
    fetch('https://nahuelrodriguezjap.github.io/e-mercado/JSON%20Autos/Detalle.json')
      .then(response => response.json())
      .then(json => setDetalle(json))
      .catch(err => console.error(err))
      ;
  }

  useEffect(() => { getFecht() }, [])

  console.log(detalle)
  return (
    <div>{detalle.map((det) => (
      <div key={det.id} class="col-4">
        <ItemDetail dato={det} />
      </div>)
    )}</div>
  )
}

export default ItemDetailContainer