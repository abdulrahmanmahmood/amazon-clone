import React from "react";
import StartIcon from "../images/icons/star.png";
import "./Product.css";

const Product = ({ image, price, title, rating }) => {
  const AddToBasket = ()
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
