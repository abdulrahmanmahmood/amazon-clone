import React from "react";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "./CurrencyFormat";
import { getBasketTotal } from "./context/AppReducer";
import "./Order.css";

const Order = ({ order }) => {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM DO YYYY h:mma")}</p>
      <p className="order-id">
        <small>payment id = "{order.id} "</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          rating={item.rating}
          image={item.image}
          hiddenButton
        />
      ))}
      {/* <CurrencyFormat number={getBasketTotal(order.data.amount*100)} /> */}
      {  <CurrencyFormat number={(getBasketTotal(order.data.basket))} />}
    </div>
  );
};

export default Order;
