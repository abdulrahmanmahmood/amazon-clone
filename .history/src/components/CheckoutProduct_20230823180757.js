import React from "react";

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
          <strong></strong>
        </p>
      </div>

    </div>
  );
};

export default CheckoutProduct;
