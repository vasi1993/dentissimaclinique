import { AiOutlineArrowLeft } from "react-icons/ai";
import React, { useState } from "react";
import "./ImageSlider.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GoDot } from "react-icons/go";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex]})`,
    transition: "translate 300ms ease-in-out",
  };

  const goToPrevious = () => {
    setCurrentIndex((index) => {
      if (index === 0) return slides.length - 1;
      return index - 1;
    });
  };

  const goToNext = () => {
    setCurrentIndex((index) => {
      if (index === slides.length - 1) return 0;
      return index + 1;
    });
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="image-slider">
      <div
        className="image-slider-arrowleft"
        role="button"
        tabIndex="0"
        aria-label="Imaginea anterioară"
        onKeyDown={(e) => e.key === "Enter" && goToPrevious()}
        onClick={goToPrevious}
      >
        <AiOutlineArrowLeft />
      </div>
      <div
        className="image-slider-arrowright"
        onClick={goToNext}
        tabIndex="0"
        aria-label="Imaginea urmatoare"
        onKeyDown={(e) => e.key === "Enter" && goToNext()}
      >
        <AiOutlineArrowRight />
      </div>
      <div
        style={slideStyles}
        role="img"
        aria-label={`Imaginea ${currentIndex + 1}`}
      ></div>
      <div className="image-slider-dots">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            className="image-slider-dot"
            onClick={() => goToSlide(slideIndex)}
            role="button"
            tabIndex="0"
            aria-label={`Selectează imaginea ${slideIndex + 1}`}
            onKeyDown={(e) => e.key === "Enter" && goToSlide(slideIndex)}
          >
            <GoDot />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
