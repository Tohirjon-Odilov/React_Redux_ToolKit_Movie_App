import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/user.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to={"/"}>
        <div className="logo">Moive App</div>
      </Link>
      <div className="user-image">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
