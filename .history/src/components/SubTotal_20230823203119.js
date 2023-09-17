import React from 'react'
import { useAuth } from './context/GlobalState';
import "./subTotal.css";
import CurrencyFormat from './CurrencyFormat';


const SubTotal = () => {
  const getBasketToal = (arr[])=>{
arr
  }
  const {basket}=useAuth();
  return (
    
    <div className='subtotal'>
      Subtotal  ({basket.length} items): 
      <CurrencyFormat price={getBasketToal}/>
    </div>
  )
}

export default SubTotal