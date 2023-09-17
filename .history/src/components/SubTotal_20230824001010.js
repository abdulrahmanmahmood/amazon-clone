import React from "react";
import { useAuth } from "./context/GlobalState";
import "./subTotal.css";
import CurrencyFormat from "./CurrencyFormat";
import { getBasketTotal } from "./context/AppReducer";
import { useNavigate } from "react-router-dom";

const SubTotal = () => {
  const { basket } = useAuth();
  const Navigate = useNavigate();
  return (
    <div className="subtotal">
      <p> Subtotal ({basket.length} items):</p>
      <CurrencyFormat number={(getBasketTotal(basket))} />
      <CurrencyFormat number={1234.56} />
      <button onClick={()=>Navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
};

export default SubTotal;
