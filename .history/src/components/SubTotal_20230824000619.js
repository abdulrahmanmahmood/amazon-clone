import React from "react";
import { useAuth } from "./context/GlobalState";
import "./subTotal.css";
import CurrencyFormat from './CurrencyFormat';
import { getBasketTotal } from "./context/AppReducer";

const SubTotal = () => {

  const { basket } = useAuth();
  return (
    <div className="subtotal">
<p></p>
      <CurrencyFormat number={getBasketTotal(basket)} />
      <CurrencyFormat number={1234.56}  />

    
    </div>
  );
};

export default SubTotal;
