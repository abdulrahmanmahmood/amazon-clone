import React from 'react'
import { Link } from 'react-router-dom'

const Payment = ({}) => {
  const {basket,user}
  return (
    <div className='payment'>
      <div className='payment-container'>
        <h1>
          checkout (<Link to="/checkout">{}</Link>)
        </h1>
      </div>
    </div>
  )
}

export default Payment