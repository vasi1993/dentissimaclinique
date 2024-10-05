import React from "react";
import "./Header.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
  return (
    <div className="header" id="home">
      <div className="header-image">
        <div className="header-main">
          <h1>DENTISSIMA CLINIQUE</h1>
          <p>zâmbetul te definește</p>
          <AnchorLink href="#service" className="header-main-button">
            <p>VEZI SERVICIILE OFERITE</p>
          </AnchorLink>
        </div>
      </div>
      <div className="header-container">
        <div className="header-container-programare">
          <h1>Programează o consultație</h1>
          <p>
            La Dentissima combinăm cea mai recentă tehnologie cu experiența
            profesioniștilor noștri, pentru a garanta tratamente eficiente cu
            rezultate optime.
          </p>
          <button type="button" className="header-btn">
            <a href="tel:(+)40364566544">Vreau o programare </a>
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
              <p>09:00 - 17:00</p>
            </div>
          </div>
          <hr />
          <div className="days">
            <div className="day">
              <p>Sâmbătă</p>
            </div>
            <div className="time">
              <p>Inchis</p>
            </div>
          </div>
          <hr />
          <div className="days">
            <div className="day">
              <p>Duminică</p>
            </div>
            <div className="time">
              <p>Inchis</p>
            </div>
          </div>
        </div>

        <div className="header-container-contact">
          <h1>Contactează-ne</h1>
          <a href="tel:(+)40364566544">
            {" "}
            <FaPhoneAlt /> 0756999791
          </a>
          <p>
            Noi suntem specialiști în realizarea zâmbetelor perfecte, oferind
            ingrijire profesionala dentara.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
