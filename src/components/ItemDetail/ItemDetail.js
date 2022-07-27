import Intercambiabilidad from "./Intercambiabilidad"


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
              <Intercambiabilidad stock={dato.dato.stock}/>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default ItemDetail