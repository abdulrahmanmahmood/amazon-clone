import React from "react";
import { useAuth } from "./context/GlobalState";
import "./subTotal.css";
import CurrencyFormat from "./CurrencyFormat";

const SubTotal = () => {
  const getBasketTotal = (arr) => {
    arr.reduce((item) => {});
  };
  const { basket } = useAuth();
  return (
    <div className="subtotal">
      Subtotal ({basket.length} items):
      <CurrencyFormat price={getBasketToal(basket)} />
    </div>
  );
};

export default SubTotal;
