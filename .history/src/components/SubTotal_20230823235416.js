import React from "react";
import { useAuth } from "./context/GlobalState";
import "./subTotal.css";
import formatCurrency from './FormatCurrency';
import CurrencyFormat from './CurrencyFormat';import { getBasketTotal } from "./context/AppReducer";

const SubTotal = () => {

  const { basket } = useAuth();
  return (
    <div className="subtotal">
      Subtotal ({basket.length} items):
      <CurrencyFormat value=""/>
    
    </div>
  );
};

export default SubTotal;
