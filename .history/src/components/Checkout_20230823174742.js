import React from 'react'
import Product from './Product';
import checkoutImage from "../images/checkoutAd.jpg"

const Checkout = ({}) => {
  return (
    <div className='checkout'>
<div className="checkout-left">
  <img src={checkoutImage} alt="checkout-imag" className='checkout-ad' />
</div>
    </div>
  )
}

export default Checkout