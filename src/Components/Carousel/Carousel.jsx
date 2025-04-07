import React, { useEffect, useState } from "react";
import "./Carousel.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Carousel = ({ picture }) => {
  const [slide, setSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut = // eslint-disable-next-line
      autoPlay && // eslint-disable-next-line
      setTimeout(() => {
        // eslint-disable-next-line
        nextSlide(); // eslint-disable-next-line
      }, 2500); // eslint-disable-next-line
  });

  const nextSlide = () => {
    setSlide(slide === picture.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? picture.length - 1 : slide - 1);
  };

  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
        clearTimeout(timeOut);
      }}
      aria-live="polite"
    >
      <div className="carousel-wrapper">
        {picture.map((item, idx) => {
          return (
            <div
              className={
                idx === slide
                  ? "carousel-card carousel-card-active"
                  : "carousel-card"
              }
            >
              <img
                src={item.src}
                alt={item.alt}
                key={idx}
                className="card-image"
                loading="lazy" // Lazy loading pentru performanță
              />
            </div>
          );
        })}
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={prevSlide}
          aria-label="Slide anterior"
        />
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={nextSlide}
          aria-label="Slide următor"
        />
        <span className="indicators">
          {picture.map((_, idx) => {
            return (
              <button
                key={idx}
                onClick={() => setSlide(idx)}
                className={
                  slide === idx ? "indicator" : "indicator indicator-inactive"
                }
                aria-label={`Navigare la slide ${idx + 1}`}
              ></button>
            );
          })}
        </span>
      </div>
    </div>
  );
};

export default Carousel;
