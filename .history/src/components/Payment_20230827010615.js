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
      </div>
    </div>
  )
}

export default Payment