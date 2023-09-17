import React from 'react'
import { useAuth } from './context/GlobalState';
import "./subTotal.css";
import CurrencyFormat from 'react-currency-format';


const SubTotal = () => {
  const {basket}=useAuth();
  return (
    
    <div className='subtotal'>
      Subtotal  ({basket.length} items): 
      <CurrencyFormat renderText={(value)=>(
        <>
        <p>Subtotal</p>
        </>
      )}/>
    </div>
  )
}

export default SubTotal