import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HappyBarCustomer from "./components/customer/HappyBarCustomer";
import Home from "./components/Home";
import HappyBarkitchen from "./components/kitchen/HappyBarKitchen";
import Header from "./components/NavBar";
import ReactInfo from "./components/ReactInfo";
import { getImage } from "./utilities/getImage";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/react" element={<ReactInfo />} />
          <Route path="/happy-bar-customer" element={<HappyBarCustomer />} />
          <Route path="/happy-bar-kitchen" element={<HappyBarkitchen />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

const imageName = "aboutBackgroundImage.jpg";
const aboutInfo = {
  title: "About",
  subTitle: "",
  image: getImage(imageName),
  button: "To know absolutely nothing",
};
function About() {
  return (
    <>
      <Header info={aboutInfo} />
      <h2>About</h2>
    </>
  );
}
