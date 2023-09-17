import React from 'react'
import homePage1 from "../images/amazonHome.jpg"
import homePage2 from "../images/amazonHome2.jpg"
const Home = () => {
  return (
    <div className='home'>
      <div className='home-container'>
        <img className='home-image' src={homePage1} alt="home-img" />
        
      </div>
    </div>
  )
}

export default Home