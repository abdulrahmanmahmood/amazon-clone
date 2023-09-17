import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/login-logo.png";
import "./login.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "./context/GlobalState";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then((auth)=>{
      if(auth){
        navigate("/")
      }
    }).catch((e))
  };
  console.log(user);
  return (
    <div className="login">
      <Link to="/">
        <img src={Logo} alt="logo-img" className="login-logo" />
      </Link>
      <div className="login-container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-signInBtn" type="submit">
            Sign in
          </button>
          <p>
            By continuing, you are agree to Amazon's Fake Clone Conditions of
            Uses and Privacy Notice.
          </p>
          <button className="login-registerBtn" onClick={register}>
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
