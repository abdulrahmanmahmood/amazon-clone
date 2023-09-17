import {React, useState} from "react";
import { useAuth } from "./context/GlobalState";
import "./subTotal.css";
import formatCurrency from "./FormatCurrency";

const SubTotal = () => {

  const { basket } = useAuth();
  return (
    <div className="subtotal">
      Subtotal ({basket.length} items):
      <formatCurrency number={basket.item.price}/>
        
      
    </div>
  );}

export default SubTotal;
