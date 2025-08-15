import React from 'react';
import Navbar  from "../components/Navbar";
import Carousel from '../components/Carousel';
// For any specific home styling

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="carousel-container">
        <Carousel>
          {/* Your carousel slides here */}
          <div className="slide-content" >
            <h1>First Slide</h1>
          </div>
          <div className="slide-content">
            <h1>Second Slide</h1>
          </div>
          <div className="slide-content">
            <h1>Third Slide</h1>
          </div>
        </Carousel>
      </div>
      {/* Other content of your home page can go here */}
    </div>
  );
};
export default Home;