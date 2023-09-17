import React from 'react'

const CheckoutProduct = ({image,price,title,rating,}) => {
  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct-image' src={image} alt="checkoutProduct-image" />
      
    </div>
  )
}

export default CheckoutProduct