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
      <small className="subtotal__gift">
        <input type="checkbox" /> This 
      </small>
      <CurrencyFormat number={(getBasketTotal(basket))} />
      <button onClick={()=>Navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
};

export default SubTotal;
