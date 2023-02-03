import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import "../../HappyBar.css";

const Header = ({ title, buttonText, total, enabled, onClick }) => {
  return (
    <header className="happy-bar-order">
      <h1>{title}</h1>
      <p className="pricing-card-title">Total: € {total}</p>
      <Button variant="primary" disabled={!enabled} onClick={onClick}>
        {buttonText}{" "}
      </Button>
    </header>
  );
};

Header.defaultProps = {
  title: "Order form",
  buttonText: "Send order",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Header;
