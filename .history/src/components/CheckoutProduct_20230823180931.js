import React from "react";
import 

const CheckoutProduct = ({ image, price, title, rating,hiddenButton }) => {
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
        <div className="product-rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p key={i}>
              <img src={StartIcon} alt="star-img" />
            </p>
          ))}
      </div>
      </div>

    </div>
  );
};

export default CheckoutProduct;
