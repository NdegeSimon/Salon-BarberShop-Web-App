// Carousel.jsx
import React, { useState, useEffect } from 'react';
import './Carousel.css';
 // Assuming you have a CSS file for styling

const Carousel = ({ children, autoSlide = true, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = React.Children.toArray(children);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!autoSlide) return;
    const timer = setTimeout(nextSlide, interval);
    return () => clearTimeout(timer);
  }, [currentIndex, autoSlide, interval]);

  return (
    <div className="carousel">
      <div 
        className="slides-container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div 
            key={index} 
            className="slide"
          >
            {item}
          </div>
        ))}
      </div>
      
      <button className="prev-btn" onClick={prevSlide}>&#10094;</button>
      <button className="next-btn" onClick={nextSlide}>&#10095;</button>
      
      <div className="indicators">
        {items.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;