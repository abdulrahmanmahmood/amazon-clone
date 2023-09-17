import React from "react";
import checkoutImage from "../images/checkoutAd.jpg";
import { useAuth } from "./context/GlobalState";
import CheckoutProduct from "./CheckoutProduct";
import "./ch"

const Checkout = ({}) => {
  const { user, basket } = useAuth();
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img src={checkoutImage} alt="checkout-img" className="checkout-ad" />
      </div>
      <h3>Hello, {user?.email}</h3>
      <h2 className="checkout-title">Your shopping Basket</h2>
      {basket.map((item) => (
        <CheckoutProduct
        key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          rating={item.rating}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Checkout;
