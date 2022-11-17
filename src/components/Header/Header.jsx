import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to={"/"}>
        <div className="logo">Moive App</div>
      </Link>
      <div className="user-image">
        <img src={""} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
