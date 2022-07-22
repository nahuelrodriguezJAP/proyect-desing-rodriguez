import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ dato }) => {
  return (<Card style={{ width: '18rem' }}>

    <Card.Body>
      <Card.Title>{dato.nombre}</Card.Title>
      <Card.Text>Categoria  {dato.categoria} <br/>
        Precio {dato.precio}<br />
        
      </Card.Text>
      <Link to={`/detalle/${dato.dato.id}`}>
      <Button variant="primary">Ver Detalle</Button>
      </Link>
    </Card.Body>
  </Card>
  )
}


export default Item