import React from 'react';
import StartIcon from "../images/icons/star.png";
import from"

const Product = () => {
  return (
    <div className='product'>
      <div className="product-info">
        <p>title</p>
        <p className="product-price">
          <small>$</small>
          <strong>105</strong>
        </p>
      </div>
      <div className="product-rating">
        <p>
          <img src={StartIcon} alt="star-img" />
        </p>
      </div>
      <img src="" alt="product-img" />
      <button>Add to Basket</button>
    </div>
  )
}

export default Product