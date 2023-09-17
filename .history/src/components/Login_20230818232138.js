import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login'>
            <Link to="/">
        <img src={Logo} alt="logo-img" className="header-logo" />
      </Link>
    </div>
  )
}

export default Login