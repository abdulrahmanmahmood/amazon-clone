import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./context/GlobalState";
import "./payment.css";
import CheckoutProduct from "./CheckoutProduct";

const Payment = ({}) => {
  const { basket, user } = useAuth();
  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          checkout (<Link to="/checkout">{basket.length} items</Link>)
        </h1>
        {/* Delivery address */}
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <p>{user?.email}</p>
            <p>Alexandria , Egypt</p>
          </div>
        </div>
        {/* Review Items */}
        <div>
          <div className="payment-title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment-address">
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        </div>
        {/* payment method */}
        <div className="payment-section">
          <h3>Payment Method</h3>
          
        </div>
      </div>
    </div>
  );
};

export default Payment;
