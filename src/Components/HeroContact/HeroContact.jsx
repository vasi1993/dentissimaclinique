import React from "react";
import "./HeroContact.css";
import dental from "../Assets/dental.svg";
import { useNavigate } from "react-router-dom";

const HeroContact = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-contact">
      <div className="hero-contact-image">
        <img src={dental} alt="" />
      </div>
      <h1 className="hero-contact-title">
        {" "}
        Programează o consultație cu unul dintre specialiștii noștri!
      </h1>
      <p className="hero-contact-description">
        Nu aștepta! Programează o consultație și lasă-ne să avem grijă de
        zâmbetul tău!
      </p>
      {/* <button className='hero-contact-button'><a href="tel:(+)40364566544">Sună la 0364566544</a></button>   */}
      <button onClick={() => navigate("/form")} className="hero-contact-button">
        Programează-te
      </button>
    </div>
  );
};

export default HeroContact;
