import React from 'react'
import "./HeroContact.css"
import dental from '../Assets/dental.svg'


const HeroContact = () => {

  
  return (
    <div className='hero-contact'>
      <div className='hero-contact-image'>
       <img src={dental} alt="" />
        </div>
        <h1 className='hero-contact-title'> Programeaza o consultatie cu unul dintre specialistii nostri!</h1>
        <p className='hero-contact-description'>Este necesar sa ai grija de dantura ta! Nu mai sta pe ganduri si programeaza o consultatie in cel mai scurt timp.</p>
        <button className='hero-contact-button'>Suna la 0756999791</button>
      
    </div>
  )
}

export default HeroContact
