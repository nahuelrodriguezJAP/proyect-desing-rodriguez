import { Col } from "react-bootstrap"
import { Card } from "react-bootstrap"


const CategoryCard = ( Cat ) => {
    

  return (<Col><Card>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Text>
      <h1>{ Cat}</h1>
      </Card.Text>
    </Card.Body>
  </Card></Col>
  )
}

export default CategoryCard