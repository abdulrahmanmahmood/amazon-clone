import {React, useState} from "react";
import { useAuth } from "./context/GlobalState";
import "./subTotal.css";
import formatCurrency from "./FormatCurrency";

const SubTotal = () => {
  const getBasketTotal = (basket) => {
    basket.reduce((amount, item) => {
      return amount + item.price;
    }, 0);
  };
  const { basket } = useAuth();
  return (
    <div className="subtotal">
      Subtotal ({basket.length} items):
      {
      
      }
    </div>
  );
};

export default SubTotal;