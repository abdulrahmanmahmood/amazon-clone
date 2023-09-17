import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/header-logo.png";
import searchIcon from "../images/icons/searchIcon.png";
import shooppingCart from "../images/icons/shopping-cart.png";
import "./Header.css";
import {auth}from "../firebase";
import {sign}from "firebase/auth"
import { useAuth } from "./context/GlobalState";

const Header = () => {
  const { user } = useAuth();
  const handleAuthentication=(e)=>{
    e.preventDefault();
  }
  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} alt="logo-img" className="header-logo" />
      </Link>
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <img src={searchIcon} alt="search-icon" className="header-searchIcon" />
      </div>
      <div className="header-nav">
        <Link to="/login">
          <div className="header-option" onClick={handleAuthentication}>
            <div className="header-option-lineOne">
              Hello {user ? user.email : "Guest"}
            </div>

            <div className="header-optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </div>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header-option">
            <div className="header-optionLineOne">Returns</div>
            <div className="header-optionLineTwo">& Orders</div>
          </div>
        </Link>
        <div className="header-option">
          <div className="header-optionLineOne">Your</div>
          <div className="header-optionLineTwo">Prime</div>
        </div>

        <Link to="/checkout">
          <div className="header-optionBasket">
            <img src={shooppingCart} alt="" />
            <span className="header-optionLineTwo header-basketCount">5</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
