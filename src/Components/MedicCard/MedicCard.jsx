import React from 'react'
import './MedicCard.css'


const MedicCard = (props) => {
  return (
    <div className='medic-card'>
      <div className="medic-card-img">
        <img src={props.image} alt="image-medic" />
      </div>
      <div className="medic-card-name"> {props.name}</div>
      <div className="medic-card-profession">{props.profession}</div>   
    </div>
  )
}

export default MedicCard
