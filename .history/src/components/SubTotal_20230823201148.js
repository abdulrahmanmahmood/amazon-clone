import React from 'react'
import { useAuth } from './context/GlobalState';
import "./subTotal.css"

const SubTotal = () => {
  const {basket}=useAuth();
  return (
    
    <div className='subtotal'>
      Subtotal  ({basket.length} items): 
      <C
    </div>
  )
}

export default SubTotal