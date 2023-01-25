import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import { getImage } from "src/utilities/getImage";
import "../HappyBarKitchen.css";
import "src/index.css";

function Dish({ dish, onIncrement, onDecrement, onClear }) {
  return (
    <div style={{ backgroundColor: ".bg-light" }}>
      <Card style={{ height: "100%" }}>
        <Card.Header 
          className="text-center" 
          style={{ 
            height: "100px", 
            alignItems: "center", 
            display: "flex",
            justifyContent: "center",
            }}>
          <h3> {dish.title}</h3>
        </Card.Header>
        <Card.Img
          variant="top"
          src={getImage(dish.image)}
          style={{ width: "100%", height: "350px", objectFit: "cover" }}
        ></Card.Img>
        <Card.Body>
          <ListGroup
            className="list-group-flush"
            style={{
              height: "50%",
              textAlign: "center",
            }}
          >
            <ListGroup.Item style={{ height: "50%" }}>
              <p>{dish.ingredientsIT}</p>
            </ListGroup.Item>
            <ListGroup.Item style={{ height: "50%" }}>
              <p>{dish.ingredientsEN}</p>
            </ListGroup.Item>
          </ListGroup>
          <Container fluid="true">
            <Row
              className="mb-x"
              style={{
                paddingLeft: "7%",
                paddingTop: "3%",
              }}
            >
              <Col
                style={{
                  padding: "4%",
                  textAlignVertical: "center",
                  textAlign: "center",
                }}
              >
                <p>Prezzo: € {dish.price}</p>
              </Col>
            </Row>
            <Row>
              {" "}
              <Col
                style={{
                  padding: "1%",
                  paddingRight: "7%",
                  textAlignVertical: "center",
                  textAlign: "center",
                }}
              >
                <h3>Nr: {dish.quantity}</h3>
              </Col>
              <Col
                style={{
                  padding: "1%",
                  textAlignVertical: "center",
                  textAlign: "center",
                }}
              >
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
