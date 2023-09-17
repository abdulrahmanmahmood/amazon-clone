import React from "react";
import { useAuth } from "./context/GlobalState";
import "./subTotal.css";
import CurrencyFormat from "./CurrencyFormat";


  const { basket, } = useAuth();
  return (
    <div className="subtotal">
      Subtotal ({basket.length} items):
      <CurrencyFormat price={getBasketTotal(basket)} />
    </div>
  );
};

export default SubTotal;
