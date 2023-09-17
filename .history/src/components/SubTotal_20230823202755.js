import React from 'react'
import { useAuth } from './context/GlobalState';
import "./subTotal.css";
import CurrencyFormat from './CurrencyFormat';


const SubTotal = () => {
  const {basket}=useAuth();
  return (
    
    <div className='subtotal'>
      Subtotal  ({basket.length} items): 
      {basket.reduce()}
      <CurrencyFormat price=""/>
    </div>
  )
}

export default SubTotal