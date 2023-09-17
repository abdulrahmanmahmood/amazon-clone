import React from "react";
import { useAuth } from "./context/GlobalState";
import "./subTotal.css";
import formatCurrency from "./FormatCurrency";

const SubTotal = () => {
  const [state, setstate] = useState(initialState);
  let itotal = 0;
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
        basket.map((item) => {
          itotal += parseFloat(item.price);
          return itotal;
        })
      }
    </div>
  );
};

export default SubTotal;