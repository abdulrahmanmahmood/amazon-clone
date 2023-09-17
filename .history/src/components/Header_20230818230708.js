import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/header-logo.png";
import searchIcon from "../images/icons/searchIcon.png"

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} alt="logo-img" className="header-logo" />
      </Link>
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <img src={searchIcon} alt="search-icon" />
      </div>
      <div className="header-nav">
        <Link to="/login">
          <div className="header-option">
          <div className="header-option-lineOne">Hello Guest</div>
          <div className="header-option-lineTwo">sign in</div>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header-option">
          <div className="header-option-lineOne">Returns</div>
          <div className="header-option-lineTwo">& Orders</div>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default Header;
