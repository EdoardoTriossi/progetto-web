import Dish from "./Dish";
import Row from "react-bootstrap/Row";

const Order = ({ order, onIncrement, onDecrement, onClear }) => {
  return (
    <>
      <Row xs={1} md={3} className="g-4">
        {order.dishes.map((dish) => (
          <Dish
            key={dish.id}
            dish={dish}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onClear={onClear}
          />
        ))}
      </Row>
    </>
  );
};

export default Order;
