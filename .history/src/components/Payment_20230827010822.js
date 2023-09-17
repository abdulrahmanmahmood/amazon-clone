import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from './context/GlobalState';
import "./payment.css"

const Payment = ({}) => {
  const {basket} = useAuth()
  return (
    <div className='payment'>
      <div className='payment-container'>
        <h1>
          checkout (<Link to="/checkout">{basket.length} items</Link>)
        </h1>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className='payment-address'>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment