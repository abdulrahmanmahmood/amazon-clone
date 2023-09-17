import React from 'react';
import { Link }from "react-router-dom";

const Header = () => {
  return (
    <div className='header'>

<Link to="/">
<img src="../images/header-logo.png" alt="" className='header-logo'/>
</Link>
    </div>
  )
}

export default Header