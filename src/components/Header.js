import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <Link to="/">
      <img
        className="h-28 ml-12 mt-5 mb-3"
        alt="logo"
        src={require("../logo.png")}
      />
    </Link>
  );
};

const ListItem = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="nav-items">
      <ul className="flex mr-16 mt-24 text-neutral-300">
        <Link to="/">
          <li className="px-5">Home</li>
        </Link>
        <Link to="/about">
          <li className="px-5">About</li>
        </Link>
        <Link to="/contact">
          <li className="px-5">Contact</li>
        </Link>
        <Link to="/">
          <li className="px-5">Cart</li>
        </Link>
        <Link to="/login">
          <li className="px-5" onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? "Logout" : "Login"}
          </li>
        </Link>
      </ul>
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <div className="flex bg-black justify-between">
      <Title />
      <ListItem />
    </div>
  );
};

export default HeaderComponent;
