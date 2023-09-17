import React from "react";
import Product from "./Product";
import checkoutImage from "../images/checkoutAd.jpg";
import { useAuth } from "./context/GlobalState";

const Checkout = ({}) => {
  const {user} = useAuth()
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img src={checkoutImage} alt="checkout-img" className="checkout-ad" />
      </div>
      <h3>Hello, {user?}</h3>
    </div>
  );
};

export default Checkout;
