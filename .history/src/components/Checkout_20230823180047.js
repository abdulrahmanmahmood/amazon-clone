import React from "react";
import Product from "./Product";
import checkoutImage from "../images/checkoutAd.jpg";
import { useAuth } from "./context/GlobalState";

const Checkout = ({}) => {
  const {user,basket} = useAuth()
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img src={checkoutImage} alt="checkout-img" className="checkout-ad" />
      </div>
      <h3>Hello, {user?.email}</h3>
      <h2 className="checkout-title">Your shopping Basket</h2>
      {basket.map((item)=>(
        <CheckoutProductg/>
      ))}
    </div>
  );
};

export default Checkout;
