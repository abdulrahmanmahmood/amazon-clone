import React from "react";
import { useAuth } from "./context/GlobalState";
import "./subTotal.css";
import formatCurrency from './FormatCurrency';
import { getBasketTotal } from "./context/AppReducer";

const SubTotal = () => {

  const { basket } = useAuth();
  return (
    <div className="subtotal">
      Subtotal ({basket.length} items):
      {formatCurrency(
          basket.reduce((acc,curr)=>{
            return basket.acc + (basket.curr?.price ||0 )
          },0)
        )}
    </div>
  );
};

export default SubTotal;
