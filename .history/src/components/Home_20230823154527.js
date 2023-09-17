import React from 'react'
// import homePage1 from "../images/amazonHome.jpg"
// import homePage2 from "../images/amazonHome2.jpg"
import homePage3 from "../images/amazonHome3.jpg";
import Product from './Product';
import "./"
const Home = () => {
  return (
    <div className='home'>
      <div className='home-container'>
        <img className='home-image' src={homePage3} alt="home-img" style={{width:"100%"}}/>
        <div className="home-row">
          <Product/>
          <Product/>
        </div>
        <div className="home-row">
          <Product/>
          <Product/>
          <Product/>
        </div>  <div className="home-row">
          <Product/>
        </div>
        
      </div>
    </div>
  )
}

export default Home