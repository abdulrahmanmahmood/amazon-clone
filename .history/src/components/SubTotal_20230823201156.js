import React from 'react'
import { useAuth } from './context/GlobalState';
import "./subTotal.css"

const SubTotal = () => {
  const {basket}=useAuth();
  return (
    
    <div className='subtotal'>
      Subtotal  ({basket.length} items): 
      <CurrencyFormat
    </div>
  )
}

export default SubTotal