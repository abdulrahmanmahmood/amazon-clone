import React from "react";
import { useAuth } from "./context/GlobalState";
import "./subTotal.css";
import formatCurrency from './FormatCurrency';

const SubTotal = () => {

  const { basket } = useAuth();
  return (
    <div className="subtotal">
      Subtotal ({basket.length} items):
      {basket? formatCurrency(
        getBasketTotal(basket)
        ) : 0}
    </div>
  );
};

export default SubTotal;
