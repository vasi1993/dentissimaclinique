import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

import './ServiceCard.css'

const ServiceCard = (props) => {

  return (
    <div className='service-card'> 
        <div className="service-icon">{props.image}</div>
        <h1 className='service-card-name'>{props.name}</h1>
        <p className='service-card-description'>{props.description}</p>
        <hr/>
        <button onClick={props.open} className='service-button'>Detalii <AiOutlineArrowRight/> </button>
      
    </div>
  )
}

export default ServiceCard
