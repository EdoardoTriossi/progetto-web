import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { getImage } from "src/utilities/getImage";
import NavBar from "../NavBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Order from "./components/Order";
import "../HappyBar.css";

const imageName = "happyBarKitchenBackgroundImage.jpg";
const headerInfo = {
  title: "Happy bar dashboard",
  subTitle: "Happy bar dashboard",
  image: getImage(imageName),
  button: "Cucina!",
};

function HappyBarKitchen() {
  const [orders, setOrders] = useState(null);
  const [order, setOrder] = useState(null);

  // Load app state
  useEffect(() => {
    const getOrders = async () => {
      const ordersFromServer = await fetchOrders();
      setOrders(ordersFromServer);
    };

    const getOrder = () => {
      let orderFromServer = null;

      if (orders != null && orders.length > 0) {
        orderFromServer = orders.shift();
      }

      setOrder(orderFromServer);
    };

    getOrders();
    getOrder();
  }, [orders]);

  // Fetch Order
  const fetchOrders = async () => {
    const res = await fetch("http://localhost:5000/orders");
    const data = await res.json();

    return data;
  };

  // Delete order
  const deleteOrder = async (id) => {
    await fetch(`http://localhost:5000/orders/${id}`, { method: "DELETE" });

    setOrders(orders.filter((order) => order.id !== id));
  };

  console.log("HappyBarKitchen", headerInfo);

  return (
    <>
      <NavBar info={headerInfo} />
      <div className="happy-bar-container">
        {order !== null ? (
          <>
            <Header
              title="Order"
              buttonText="Ready"
              total={order.total}
              enabled={true}
              onClick={() => deleteOrder(order.id)}
            />
            <Order order={order} />
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

export default HappyBarKitchen;
