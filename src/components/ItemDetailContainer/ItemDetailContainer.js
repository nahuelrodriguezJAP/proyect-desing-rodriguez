import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState([]);

  const getFecht = () => {
    fetch('https://nahuelrodriguezjap.github.io/e-mercado/JSON/Detalle.json')
      .then(response => response.json())
      .then(json => setDetalle(json))
      .catch(err => console.error(err))
      ;
  }
  useEffect(() => { getFecht() }, [])
  return (
    <div>{detalle.map((det) => (
      <div key={det.id} >
        <ItemDetail dato={det} />
      </div>)
    )}</div>
  )
}

export default ItemDetailContainer