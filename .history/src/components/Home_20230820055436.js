import React from "react";
import homeImg1 from "../images/amazonHome.jpg";
import homeImg2 from "../images/amazonHome2.jpg";
import "./Home.css";

const Home = () => {
  
  
  
  return (
  
    <div className="home">
        $(document).ready(function() {
      $('.carousel').carousel({
        interval: 3000,
      })
    })
      <div className="home-container">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={homeImg1} alt="First slide" />
            </div>
            <div class="carousel-item">
              <img
                className="home-image d-block w-100"
                src={homeImg2}
                alt="home-img Second slide"
              />
            </div>
            {/* <div class="carousel-item">
              <img
                className="home-image d-block w-100"
                src=""
                alt="home-img Third slide"
              />
            </div> */}
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
