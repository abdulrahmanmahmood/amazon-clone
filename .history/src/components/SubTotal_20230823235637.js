import React from "react";
import { useAuth } from "./context/GlobalState";
import "./subTotal.css";
import CurrencyFormat from './CurrencyFormat';
import { getBasketTotal } from "./context/AppReducer";

const SubTotal = () => {

  const { basket } = useAuth();
  return (
    <div className="subtotal">
      Subtotal ({basket.length} items):
      <CurrencyFormat number={getBasketTotal(basket)} currency="USD"/>
    
    </div>
  );
};

export default SubTotal;
