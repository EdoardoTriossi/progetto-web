import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import { getImage } from "src/utilities/getImage";

function Dish({ dish, onIncrement, onDecrement, onClear }) {
  return (
    <div style={{ backgroundColor: ".bg-light" }}>
      <Card>
        <Card.Header className="text-center">{dish.title}</Card.Header>
        <Card.Img
          variant="top"
          src={getImage(dish.image)}
          style={{ width: "100%", height: "30vh", objectFit: "cover" }}
        ></Card.Img>
        <Card.Body style={{ height: "10%" }}>
          <ListGroup className="list-group-flush" style={{ height: "5%" }}>
            <ListGroup.Item>{dish.ingredientsIT}</ListGroup.Item>
            <ListGroup.Item>{dish.ingredientsEN}</ListGroup.Item>
          </ListGroup>
          <Container fluid="true">
            <Row className="mb-x">
              <Col className="mb-3">
                <Stack direction="horizontal">
                  <Button
                    variant="primary"
                    className="m-2"
                    onClick={() => onIncrement(dish.id)}
                  >
                    +
                  </Button>
                  <Button
                    variant="primary"
                    className="m-2"
                    onClick={() => onDecrement(dish.id)}
                  >
                    -
                  </Button>
                  <Button
                    variant="danger"
                    className="m-2"
                    onClick={() => onClear(dish.id)}
                  >
                    x
                  </Button>
                </Stack>
              </Col>
              <Col>
                <p className="pricing-card-title" style={{ color: "red" }}>
                  Prezzo: € {dish.price}
                </p>
              </Col>
              <Col>
                <p className="h3">Nr: {dish.quantity}</p>
              </Col>
              <Col>
                <p className="pricing-card-title">
                  Total: € {parseInt(dish.quantity) * parseInt(dish.price)}
                </p>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Dish;
