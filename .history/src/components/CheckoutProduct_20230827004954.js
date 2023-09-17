import React from "react";
import StartIcon from "../images/icons/star.png";
import "./CheckoutProduct.css"
import { useAuth } from "./context/GlobalState";

const CheckoutProduct = ({ image, price, title, rating,id }) => {


  const {dispatch} = useAuth()
  const removeFromBasket =()=>{
    dispatch({
      type:"REMOVE_FROM_BASKET",
      id:id,
    })
  }
  return (
    <div className="checkoutProduct">
      <img
        className="checkoutProduct-image"
        src={image}
        alt="checkoutProduct-img"
      />
      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct-rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p key={i}>
              <img src={StartIcon} alt="star-img" />
            </p>
          ))}
      </div>
      <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>

    </div>
  );
};

export default CheckoutProduct;
