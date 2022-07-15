import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';

const Item = ({ dato }) => {
  return (<Card style={{ width: '18rem' }}>

    <Card.Body>
      <Card.Title>{dato.nombre}</Card.Title>
      <Card.Text>Categoria  {dato.categoria} <br/>
        Precio {dato.precio}<br />
        <ItemCount stock={10} inicial={1} />
      </Card.Text>
      <Button variant="primary">Comprar</Button>
    </Card.Body>
  </Card>

  )
}


export default Item