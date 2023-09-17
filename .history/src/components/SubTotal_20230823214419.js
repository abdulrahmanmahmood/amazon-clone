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
          cartItems.reduce((total,cartItem)=>{
            const item = storeditems.find((i)=>i.id===cartItem.id);
            return total + (item?.price ||0 ) * cartItem.quantity;
          },0)
        )}
    </div>
  );
};

export default SubTotal;
