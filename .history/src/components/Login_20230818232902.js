import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/header-logo.png";
import login

const Login = () => {
  return (
    <div className="login">
      <Link to="/">
        <img src={Logo} alt="logo-img" className="header-logo" />
      </Link>
      <div className="login-container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input type="email" required value="" />
          <h5>Password</h5>
          <input type="password" required value="" />
          <button className="login-signInBtn" type="submit">
            Sign in
          </button>
          <p>
            By continuing, you are agree to Amazon's Fake Clone Conditions of
            Uses and Privacy Notice.
          </p>
          <button className="login-registerBtn">Create your Amazon Account</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
