import React from "react";
import "./Header.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header" id="home">
      <div className="header-image">
        <div className="header-main">
          <h1>DENTISSIMA CLINIQUE</h1>
          <p>zâmbetul te definește</p>
          <div className="header-main-service">
            <button className="header-main-button">
              <AnchorLink href="#service" className="header-ancor">
                VEZI SERVICIILE OFERITE
              </AnchorLink>
            </button>
            <button
              className="header-mobile-button header-ancor"
              onClick={() => navigate("/form")}
            >
              PROGRAMEAZĂ-TE
            </button>
          </div>
        </div>
      </div>
      <div className="header-container">
        <div className="header-container-programare">
          <h1>Programează o consultație</h1>
          <p>
            Suntem aici pentru a transforma fiecare vizită la dentist într-o
            experiență pozitivă, ajutându-te să îți păstrezi zâmbetul
            strălucitor și sănătos pe termen lung.
          </p>
          <button
            onClick={() => navigate("/form")}
            type="button"
            className="header-btn"
          >
            Vreau o programare
            <FaArrowRightLong className="arrow-btn" />
          </button>
        </div>

        <div className="header-container-orar">
          <h1>Program</h1>
          <div className="days">
            <div className="day">
              <p>Luni - Joi</p>
            </div>
            <div className="time">
              <p>09:00 - 20:00</p>
            </div>
          </div>
          <hr />
          <div className="days">
            <div className="day">
              <p>Vineri</p>
            </div>
            <div className="time">
              <p>09:00 - 20:00</p>
            </div>
          </div>
          <hr />
          <div className="days">
            <div className="day">
              <p>Sâmbătă</p>
            </div>
            <div className="time">
              <p>Închis</p>
            </div>
          </div>
          <hr />
          <div className="days">
            <div className="day">
              <p>Duminică</p>
            </div>
            <div className="time">
              <p>Închis</p>
            </div>
          </div>
        </div>

        <div className="header-container-contact">
          <h1>Contactează-ne</h1>
          <a href="tel:(+)40364566544">
            {" "}
            <FaPhoneAlt /> 0364566554
          </a>
          <p>
            Dentissima Clinique – Îngrijire avansată pentru un zâmbet de durată.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
