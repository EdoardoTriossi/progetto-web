import { faBackward, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import reactLogo from "../images/react-icon.png";
import "./NavBar.css";

const NavBar = ({ info }) => {
  const [menuShow, setMenuShow] = useState(false);

  function showMenu() {
    setMenuShow(true);
  }

  function hideMenu() {
    setMenuShow(false);
  }

  return (
    <div id="top">
      <section
        className="nav-bar"
        style={{ backgroundImage: `url(${info.image})` }}
      >
        <nav>
          <a href="/">
            <img src={reactLogo} alt="React logo" />
          </a>
          <div
            className="nav-links"
            style={{ right: menuShow ? "0" : "-200px" }}
          >
            <div className="fa-solid" onClick={hideMenu}>
              <FontAwesomeIcon icon={faXmark} />
            </div>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/react">REACT</Link>
              </li>
              <li>
                <Link to="/happy-bar-customer">Happy Bar Order System</Link>
              </li>
              <li>
                <Link to="/happy-bar-kitchen">Happy Bar Crew Dashboard</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
            </ul>
          </div>
          <div className="fa-solid" onClick={showMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </nav>
        <div className="text-box">
          <h1>{info.title}</h1>
          <p>{info.subTitle}</p>
          <a href="#hero-btn" className="hero-btn">
            {info.button}
          </a>
        </div>
        <a className="backward" href="#top">
          <FontAwesomeIcon icon={faBackward} />
        </a>
      </section>
      <a id="hero-btn"></a>
    </div>
  );
};

export default NavBar;
