
import { AiOutlineArrowLeft } from "react-icons/ai"; 
import React, { useState } from 'react'
import './ImageSlider.css'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { GoDot } from "react-icons/go";




const ImageSlider = ({slides} ) => {
    const[currentIndex, setCurrentIndex] = useState(0);

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex]})`,
        transition: 'translate 300ms ease-in-out'
    }
    
    const goToPrevious = () => {
        setCurrentIndex(index => {
            if (index === 0) return slides.lenght - 1
            return index - 1
        })
    }

    const goToNext = () => {
        setCurrentIndex(index => {
            if (index === slides.lenght - 1) return 0
            return index + 1
        })
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

  return (
    <div className='image-slider'>
        <div className='image-slider-arrowleft' onClick={goToPrevious}> <AiOutlineArrowLeft /> </div>
        <div className='image-slider-arrowright' onClick={goToNext}><AiOutlineArrowRight/>  </div>
        <div style={slideStyles}> </div>
        <div className="image-slider-dots">
            {slides.map((slide, slideIndex) => (
                <div key={slideIndex} 
                className="image-slider-dot" 
                onClick={() => goToSlide(slideIndex)}> 
                <GoDot /> 
                </div>
            ))}
        </div>

      
    </div>
  )
}

export default ImageSlider
