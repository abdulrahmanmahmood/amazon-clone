import React from "react";
import Product from "./Product";
import checkoutImage from "../images/checkoutAd.jpg";

const Checkout = ({}) => {
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img src={checkoutImage} alt="checkout-img" className="checkout-ad" />
      </div>
      <h3>Hello, </h3>
    </div>
  );
};

export default Checkout;
