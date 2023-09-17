import React from 'react'
import { useAuth } from './context/GlobalState';
import "./subTotal.css";
import CurrencyFormat from './CurrencyFormat';


const SubTotal = () => {
  const {basket}=useAuth();
  return (
    
    <div className='subtotal'>
      Subtotal  ({basket.length} items): 
      {}
      <CurrencyFormat price={basket.reduce((item)=>{
           return(item.price)
      })}/>
    </div>
  )
}

export default SubTotal