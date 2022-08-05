import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState([]);
  const { productId } = useParams()

  const getFecht = () => {
    fetch('https://nahuelrodriguezjap.github.io/e-mercado/JSON/Detalle.json')
      .then(response => response.json())
      .then(res => setDetalle(res.find(res => res.id === productId)))
      .catch(err => console.error(err))

  }
  useEffect(() => { getFecht() }, [productId])
  return (

    <div>
      <ItemDetail dato={detalle} />

    </div>
  )
}

export default ItemDetailContainer