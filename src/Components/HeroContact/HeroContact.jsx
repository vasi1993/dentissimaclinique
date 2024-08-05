import React from 'react'
import "./HeroContact.css"
import dental from '../Assets/dental.svg'


const HeroContact = () => {

  
  return (
    <div className='hero-contact'>
      <div className='hero-contact-image'>
       <img src={dental} alt="" />
        </div>
        <h1 className='hero-contact-title'> Programează o consultație cu unul dintre specialiștii noștri!</h1>
        <p className='hero-contact-description'>Este necesar să ai grijă de dantura ta! Nu mai sta pe gânduri și programează o consultație în cel mai scurt timp.</p>
        <button className='hero-contact-button'><a href="tel:(+)40364566544">Sună la 0364566544</a></button>
      
    </div>
  )
}

export default HeroContact
