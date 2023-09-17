import React from 'react'

const Product = () => {
  return (
    <div className='product'>
      <div className="product-info">
        <p>title</p>
        <p className="product-price">
          <small>$</small>
          <strong>10</strong>
        </p>
      </div>
    </div>
  )
}

export default Product