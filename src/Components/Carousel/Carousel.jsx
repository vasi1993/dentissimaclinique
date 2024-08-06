import React, {useEffect, useState} from 'react'
import './Carousel.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

const Carousel = ({picture}) => {
    const[slide, setSlide] = useState(0);
    const[autoPlay, setAutoPlay] = useState(true);
    let timeOut = null;

    useEffect(()=>{                                                 // eslint-disable-next-line
     timeOut = autoPlay && setTimeout(() => {nextSlide()}, 2500);   // eslint-disable-next-line
    })

    const nextSlide = () => {
        setSlide(slide === picture.length - 1 ? 0 : slide + 1)
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? picture.length - 1 : slide - 1)
    }



    
  return (
    <div 
    className='carousel' 
    onMouseEnter={() => {setAutoPlay(false); clearTimeout(timeOut)}} 
    onMouseLeave={() => {setAutoPlay(true);clearTimeout(timeOut)}}
    >
        <div className="carousel-wrapper">
      {picture.map((item, idx) => {
        return <div className={idx === slide ? "carousel-card carousel-card-active" : "carousel-card"} >
         <img src={item.src} alt={item.alt} key={idx} className="card-image"/>
         </div>
      })}
      <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide}/>
      <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>
      <span className='indicators'>
        {picture.map((_, idx) => {
            return <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? "indicator" : "indicator indicator-inactive"}></button>
        })}
      </span>
    </div>
    </div>
  )
}

export default Carousel
