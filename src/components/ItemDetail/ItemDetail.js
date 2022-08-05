
import Intercambiabilidad from "./Intercambiabilidad"

import { Card, Row, Col } from "react-bootstrap"

const ItemDetail = ({ dato, inicial }) => {
  console.log(dato)
  return (
    <Row>
      <Col>
        <Card.Img style={{ width: '18rem', height: '18rem' }} src={dato.img} />
      </Col>
      <Col>
        <Card style={{ width: '28rem' }}>
          <Card.Body>
            <Card.Title>{dato.nombre}</Card.Title>
            <Card.Text>{dato.detalle}<br />
              {dato.precio}
              <br />
              <Intercambiabilidad dato={dato} inicial={inicial} />
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default ItemDetail