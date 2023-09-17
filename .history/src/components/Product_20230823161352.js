import React from "react";
import StartIcon from "../images/icons/star.png";
import "./Product.css";
import { useAuth } from "./context/GlobalState";

const Product = ({ image, price, title, rating,id }) => {
  const {dispatch} = useAuth()
  const AddToBasket = ()=>{
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      }
    })
  }
  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="product-rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>
              <img src={StartIcon} alt="star-img" />
            </p>
          ))}
      </div>
      <img src={image} alt="product-img" />
      <button onClick={AddToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
