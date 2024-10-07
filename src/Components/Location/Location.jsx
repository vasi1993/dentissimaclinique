import React from "react";
import "./Location.css";
import TitleItem from "../TitleItem/TitleItem";

import { ImLocation } from "react-icons/im";

const Location = () => {
  return (
    <div className="location" id="location">
      <div className="location-title">
        <TitleItem
          subtitle="TE ASTEPTĂM LA DENTISSIMA CLINIQUE"
          title="Unde ne găsești?"
        />
      </div>
      <div className="location-street">
        <div className="street">
          <ImLocation />
          <p>Adresa - Str. Lotus, Nr 24, Bl A2, Ap 11, Turda</p>
        </div>
        {/*      <div className="phone">
                <BsFillTelephoneFill/> 
                <a href="tel:(+)40756999791"><p>Telefon - 0364 566 544</p></a>
            </div>

            */}
      </div>
      <div className="location-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2743.581790644449!2d23.813542476034133!3d46.5559591599369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47496647d014e50f%3A0x115de0e04e1f11ef!2sbl%20A2%2C%20ap%2011%2C%20Strada%20Lotus%2024%2C%20Turda%20401043!5e0!3m2!1sro!2sro!4v1721810236863!5m2!1sro!2sro"
          width="1200"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Responsive Google Maps"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
