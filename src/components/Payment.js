import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./context/GlobalState";
import "./payment.css";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "./CurrencyFormat";
import { getBasketTotal } from "./context/AppReducer";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "./axios";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const Payment = ({}) => {
  const { basket, user, dispatch } = useAuth();
  const [clientSecret, setClientSecret] = useState();
  const [error, setError] = useState(null);
  const [disapled, setDisapled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
      return response;
    };
    getClientSecret();
  }, [basket]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        const ref = doc(db, "users", user?.uid, "orders", paymentIntent.id);
        setDoc(ref, {
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        navigate("/orders", { replace: true });
        dispatch({
          type: "EMPTY_BASKET",
        });
      });
  };
  const handleChange = (e) => {
    setDisapled(e.empty);
    setError(error ? error.message : "");
  };
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

          <div className="payment-details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment-priceContainer">
                <p> Order total:</p>
                <CurrencyFormat number={getBasketTotal(basket)} />
              </div>
              <button
                className="buy-btn"
                type="submit"
                disabled={processing || disapled || succeeded}
              >
                <span>{processing ? <p>processing</p> : "Buy Now"}</span>
              </button>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
