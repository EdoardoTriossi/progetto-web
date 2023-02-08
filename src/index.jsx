import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./fonts/dogica.ttf";
import "./fonts/dogicabold.ttf";
import "./fonts/dogicapixel.ttf";
import "./fonts/dogicapixelbold.ttf";
import "./fonts/PokemonHollow.ttf";
import "./fonts/PokemonSolid.ttf";

// React bootstrap configuration
import "react-bootstrap/dist/react-bootstrap.min";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
