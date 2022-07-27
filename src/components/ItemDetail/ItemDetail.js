import ItemCount from "../Item/ItemCount"


import { Card, Row, Col } from "react-bootstrap"

const ItemDetail = (dato) => {
  return (
    <Row>
      <Col>
        <Card.Img variant="top" src={`${dato.dato.img}`} alt="img" style={{ width: "30rem", height: "30rem" }} />
      </Col>
      <Col>
        <Card>
          <Card.Title>{dato.dato.nombre}</Card.Title>
          <Card.Body>
            <Card.Text>{dato.dato.detalle}<br/>
            {dato.dato.precio}
              <br />
              <ItemCount stock={dato.dato.stock} inicial={1} />
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default ItemDetail