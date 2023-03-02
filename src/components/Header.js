import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <Link to="/">
      <img className="logo" alt="logo" src={require("../logo.png")} />
    </Link>
  );
};

const ListItem = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="nav-items">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/">
          <li>Cart</li>
        </Link>
        <Link to="/login">
          <li onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? "Logout" : "Login"}
          </li>
        </Link>
      </ul>
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <ListItem />
    </div>
  );
};

export default HeaderComponent;
