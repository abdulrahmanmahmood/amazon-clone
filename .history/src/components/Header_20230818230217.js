import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/header-logo.png";
import 

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} alt="logo-img" className="header-logo" />
      </Link>
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Header;
