import React from "react";
import checkoutImage from "../images/checkoutAd.jpg";
import { useAuth } from "./context/GlobalState";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";

const Checkout = ({}) => {
  const { user, basket } = useAuth();
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img src={checkoutImage} alt="checkout-img" className="checkout-ad" />
      </div>

  
    </div>
  );
};

export default Checkout;
