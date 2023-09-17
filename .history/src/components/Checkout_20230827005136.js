import React from "react";
import checkoutImage from "../images/checkoutAd.jpg";
import { useAuth } from "./context/GlobalState";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import SubTotal from "./SubTotal";

const Checkout = ({}) => {
  const { user, basket } = useAuth();
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img src={checkoutImage} alt="checkout-img" className="checkout-ad" />
        <div>
        <h3>Hello, {user?.email}</h3>
        <h2 className="checkout-title">Your shopping Basket</h2>

        {if(basket.length>0){
          
        }
        
        basket.map((item) => (
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
      </div>

  <div className="checkout-right">
    <SubTotal/> 
  </div>
    </div>
  );
};

export default Checkout;
