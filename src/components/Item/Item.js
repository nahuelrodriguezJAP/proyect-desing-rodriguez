import { useEffect, useState } from "react"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from "react-router-dom";
import Col from 'react-bootstrap/esm/Col';

const Item = () => {

  const [productos, setProductos] = useState([]);
  const {categoryId}= useParams()
  
  
  useEffect(() => {if (categoryId) {
    fetch('https://nahuelrodriguezjap.github.io/e-mercado/JSON/Productos.json')
      .then(response => response.json())
      .then(json => setTimeout(() => (setProductos(json.filter(productos=>productos.categoria=== categoryId))), 2000))
      .catch(err => console.log(err))
    
  } else {
    fetch('https://nahuelrodriguezjap.github.io/e-mercado/JSON/Productos.json')
      .then(response => response.json())
      .then(json => setTimeout(() => (setProductos(json)), 2000))
      .catch(err => console.log(err))
    
  }
  }, [categoryId])


  return (
    <div>{
      productos.map(product => (
        <Col>
          <div key={product.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img style={{ width: '18rem', height:'18rem'}} src={product.img} />
              <Card.Body>
                <Card.Title>{product.nombre}</Card.Title>
                <Card.Text>Categoria:  {product.categoria} <br />
                  Precio {product.precio}<br />

                </Card.Text>
                <Link to={`/detalle/${product.id}`}>
                  <Button variant="primary">Ver Detalle</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </Col>))
    }
    </div>
  )

}

export default Item