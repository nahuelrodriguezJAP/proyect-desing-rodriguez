import { useEffect, useState } from "react"
import Item from "../Item/Item";
import Col from 'react-bootstrap/esm/Col';

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
        <Col xs lg="2">
          <div key={product.img}>
            <Item dato={product} />
          </div>
        </Col>))}
    </div>
  )
}

export default Products