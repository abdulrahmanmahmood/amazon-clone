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
        p.ch
      </div>

    </div>
  );
};

export default CheckoutProduct;
