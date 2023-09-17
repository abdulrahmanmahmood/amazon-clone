import React from "react";
import homeImg1 from "../images/amazonHome.jpg";
import homeImg2 from "../images/amazonHome2.jpg";
import "./Home.css";

const Home = () => {
  
  
  
  return (
  
    <div className="home">
                    {/* <img class="d-block w-100" src={homeImg1} alt="First slide" /> */}

      <div className="home-container">
      <div>
        <input type="radio" name="fancy" autofocus defaultValue="clubs" id="clubs" />
        <input type="radio" name="fancy" defaultValue="hearts" id="hearts" />
        <input type="radio" name="fancy" defaultValue="spades" id="spades" />
        <input type="radio" name="fancy" defaultValue="diamonds" id="diamonds" />			
        <label htmlFor="clubs">
        <img class="d-block w-100" src={homeImg1} alt="First slide" />
          
        </label><label htmlFor="hearts">
        <img class="d-block w-100" src={homeImg1} alt="First slide" />
          </label><label htmlFor="spades">♠ Spades</label><label htmlFor="diamonds">♦ Diamonds</label>
        <div className="keys">Use left and right keys to navigate</div>
      </div>
      </div>
    </div>
  );
};

export default Home;
