import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/header-logo.png";

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
        </form>
      </div>
    </div>
  );
};

export default Login;
