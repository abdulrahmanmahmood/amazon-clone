import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/login-logo.png";
import login from "./login.css"

const Login = () => {
  const register = (e)=>{
    e.preventDef
  }
  return (
    <div className="login">
      <Link to="/">
        <img src={Logo} alt="logo-img" className="login-logo" />
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
          <button className="login-registerBtn" onClick={register}>Create your Amazon Account</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
