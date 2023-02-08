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
  button: "Fonti!",
};
function About() {
  return (
    <>
      <Header info={aboutInfo} />
      <section className="about">
      <h3> 
        Ringraziamenti speciali a tutte le fonti citate nel README.
        <br></br>
        In particolare ai canali che hanno prodotto i seguenti video:
      </h3>
        <p>
        <dl>
          <dd>[How To Make Website Using HTML & CSS | Full Responsive Multi Page Website Design Step by Step] <a href="https://youtu.be/oYRda7UtuhA">https://youtu.be/oYRda7UtuhA</a></dd>
          <dd>[React JS Crash Course | Task Tracker] <a href="https://youtu.be/w7ejDZ8SWv8">https://youtu.be/w7ejDZ8SWv8</a></dd>
          <dd>[6 State Mistakes Every Junior React Developer Makes] <a href="https://youtu.be/Fhu5cu864ag">https://youtu.be/Fhu5cu864ag</a></dd>
          <dd>[All useEffect Mistakes Every Junior React Developer Makes] <a href="https://youtu.be/QQYeipc_cik">https://youtu.be/QQYeipc_cik</a></dd>
          <dd>[Learn React useReducer Hook with Examples] <a href="https://youtu.be/RZPAQV7JvNU">https://youtu.be/RZPAQV7JvNU</a></dd>
          <dd>[Learn useMemo and React Memo for Faster Apps] <a href="https://youtu.be/6-BfMpTT2PE">https://youtu.be/6-BfMpTT2PE</a></dd>
          <dd>[BEST Ways to Handle and Validate React Forms without a Library] <a href="https://youtu.be/tIdNeoHniEY">https://youtu.be/tIdNeoHniEY</a></dd>
          <dd>[React + Bootstrap 5 - let'st build a real page] <a href="https://youtu.be/l2131Rok8XU">https://youtu.be/l2131Rok8XU</a></dd>
        </dl>
      </p>
      </section>
    </>
  );
}
