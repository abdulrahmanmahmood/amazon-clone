import React from "react";
import { useAuth } from "./context/GlobalState";
import "./subTotal.css";
import formatCurrency from "./CurrencyFormat";
import { getBasketTotal } from "./context/AppReducer";

const SubTotal = () => {

  const { basket } = useAuth();
  return (
    <div className="subtotal">
      Subtotal ({basket.length} items):
      {
        basket.item
      }
      <CurrencyFormat number={basket.item} />
    </div>
  );
};

export default SubTotal;
