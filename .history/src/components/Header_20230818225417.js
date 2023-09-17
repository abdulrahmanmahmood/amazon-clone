import React from 'react';
import { Link }from "react-router-dom";
import Logo from "../images/header-logo.png"

const Header = () => {
  return (
    <div className='header'>

<Link to="/">
<img src=" alt="" className='header-logo'/>
</Link>
    </div>
  )
}

export default Header