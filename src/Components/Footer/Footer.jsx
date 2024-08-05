import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo-footer.png'
import facebook_icon from '../Assets/facebook.svg'
import instagram_icon from '../Assets/instagram.svg'
import gmail_icon from '../Assets/gmail.svg'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'
import anpc_sal_image from '../Assets/anpc-sal.png'
import anpc_sol_image from '../Assets/anpc-sol.png'

const Footer = () => {
  return (
    <div className="footer-main">
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p className="footer-logo-description">
            La Dentissima Clinique combinăm cea mai recentă tehnologie cu experiența profesioniștilor noștri, pentru a garanta tratamente eficiente cu rezultate optime.
        </p>
      </div>

      <div className="footer-social">
       <div className="footer-social-icons">
        <a href="https://www.facebook.com/DentissimaClinique" className='footer-social-icon'><img src={facebook_icon} alt="facebook-icon" /></a>
        <a href="https://www.instagram.com/dentissima.clinique/" className='footer-social-icon'><img src={instagram_icon} alt="instagram-icon" /></a>
        <a href="dentissimaclinique@gmail.com" className='footer-social-icon'><img src={gmail_icon} alt="instagram-icon" /></a>
        </div>

        <div className="footer-social-anpc">
            <a href="https://anpc.ro/ce-este-sal/" className='footer-social-anpc-icon'><img src={anpc_sal_image} alt="" /></a>
            <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO" className='footer-social-anpc-icon'><img src={anpc_sol_image} alt="" /></a>
        </div>

      </div>

      <div className="footer-location">
            <div className="footer-location-title">Locație</div>
            <div className="footer-location-street">
                <ImLocation/>     
                <p>Adresa - Str. Lotus, Nr 24, Bl A2, Ap 11, Turda</p>
            </div>
            <div className="footer-location-phone">
                <BsFillTelephoneFill/> 
                <p><a href="tel:(+)40364566544">Telefon - 0364 566 544</a></p>
            </div>
            <div className="footer-location-program">
                <div className="footer-location-orar">
                <div className="footer-location-orar-day">Luni - Joi</div>
                <div className="footer-location-orar-time">09:00 - 20:00</div>
                </div>
                <hr/>

                <div className="footer-location-orar">
                <div className="footer-location-orar-day">Vineri</div>
                <div className="footer-location-orar-time">09:00 - 17:00</div>
                </div>
                <hr/>

                <div className="footer-location-orar">
                <div className="footer-location-orar-day">Sâmbătă</div>
                  <div className="footer-location-orar-time">Închis</div>
                </div>
                <hr/>

                <div className="footer-location-orar">
                <div className="footer-location-orar-day">Duminică</div>
                <div className="footer-location-orar-time">Închis</div>

                </div>
               
            </div>
      </div>

    
    </div>

    <div className="footer-copyright">
      <hr/>
      <p>@vasy. Toate drepturile sunt rezervate</p>
    </div>

    </div>
  )
}

export default Footer
