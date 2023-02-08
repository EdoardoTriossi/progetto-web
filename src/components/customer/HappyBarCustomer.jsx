import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { getImage } from "src/utilities/getImage";
import NavBar from "../NavBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Order from "./components/Order";
import "../HappyBar.css";

const imageName = "happyBarCustomerBackgroundImage.jpg";
const happyBarCustomerInfo = {
  title: "Happy bar customer order",
  subTitle: "Happy bar order",
  image: getImage(imageName),
  button: "Ordina!",
};

function HappyBarCustomer() {
  const [order, setOrder] = useState(null);
  const [newOrder, setNewOrder] = useState(null);

  // Load app state
  useEffect(() => {
    const getOrder = async () => {
      const orderFromServer = await fetchOrder();
      setOrder(orderFromServer);
      setNewOrder(orderFromServer);
    };

    getOrder();
  }, []);

  // Fetch Order
  const fetchOrder = async () => {
    const res = await fetch("http://localhost:5000/order");
    const data = await res.json();

    return data;
  };

  const resetTotal = (_order) => {
    _order.total = _order.dishes.reduce(
      (accumulator, dish) => accumulator + dish.quantity * dish.price,
      0
    );
  }

  const dishIncrement = (id) => {
    let _order = { ...order };
    _order.dishes = _order.dishes.map((dish) =>
      dish.id === id ? { ...dish, quantity: dish.quantity + 1 } : dish
    );

    resetTotal(_order);

    setOrder(_order);
  };

  const dishDecrement = (id) => {
    let _order = { ...order };
    _order.dishes = _order.dishes.map((dish) =>
      dish.id === id
        ? {
            ...dish,
            quantity: dish.quantity > 0 ? dish.quantity - 1 : dish.quantity,
          }
        : dish
    );

    resetTotal(_order);

    setOrder(_order);
  };

  const dishClear = (id) => {
    let _order = { ...order };
    _order.dishes = _order.dishes.map((dish) =>
      dish.id === id ? { ...dish, quantity: 0 } : dish
    );

    resetTotal(_order);

    setOrder(_order);
  };

  // Add Orders
  const addOrder = async (_order) => {
    const res = await fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(_order),
    });

    await res.json();
  };

  const getUUID = () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  };

  const cleanOrder = () => {
    setOrder(newOrder);
  };

  const sendOrder = async () => {
    let _order = { ...order };
    _order.dishes = _order.dishes.filter((dish) => dish.quantity !== 0);

    _order.id = getUUID();

    await addOrder(_order);

    cleanOrder();
  };

  return (
    <>
      <NavBar info={happyBarCustomerInfo} />

      <div className="happy-bar-container">
        {order !== null ? (
          <>
            <Header
              title="Order form"
              buttonText="Send order"
              total={order.total}
              enabled={true}
              onClick={sendOrder}
            />
            <Order
              order={order}
              onIncrement={dishIncrement}
              onDecrement={dishDecrement}
              onClear={dishClear}
            />
          </>
        ) : (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        <Footer />
      </div>
    </>
  );
}

export default HappyBarCustomer;
