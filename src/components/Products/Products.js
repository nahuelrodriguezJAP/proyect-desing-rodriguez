import { useEffect, useState } from "react"
import Item from "../Item/Item";

const Products = () => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('https://nahuelrodriguezjap.github.io/e-mercado/JSOn/Productos.json')
      .then(response => response.json())
      .then(json => setProductos(json))

  }, [])
  return (
    <div>{
      productos.map((product) => (
        <div key={product.img}>
          <Item dato={product} />
        </div>))}
    </div>
  )
}

export default Products