import React from "react";
import "./About.css";
import TitleItem from "../TitleItem/TitleItem";

import Carousel from "../Carousel/Carousel";
import slides from "../Assets/carouselData.js";

const About = () => {
  return (
    <div className="about" id="about">
      <TitleItem
        subtitle="BUN VENIT LA DENTISSIMA CLINIQUE!"
        title="Despre noi"
        description="Dentissima Clinique este un cabinet stomatologic dedicat sănătății și frumuseții zâmbetului tău. Situat într-o atmosferă primitoare și modernă, cabinetul nostru îmbină expertiza medicală cu cele mai noi tehnologii dentare, oferind o gamă variată de servicii pentru toți pacienții."
      />

      <div className="about-us">
        <div className="about-img">
          <Carousel picture={slides} />
        </div>
        <div className="about-us-description">
          <h1 className="about-us-description-title">
            Un pacient fericit este zâmbetul nostru cel mai de preț!
          </h1>
          <p className="first-paragraph">
            Echipa noastră de medici stomatologi este formată din profesioniști
            experimentați, pasionați de domeniul lor și dedicați să ofere
            tratamente personalizate, adaptate nevoilor fiecărui pacient. Ne
            concentrăm nu doar pe tratamentele curative, ci și pe prevenție,
            educând pacienții cu privire la igiena orală și importanța vizitelor
            regulate la dentist.
          </p>
          <p className="second-paragraph">
            La Dentissima Clinique, ne angajăm să facem fiecare vizită plăcută
            și confortabilă. Folosim tehnologie de vârf și materiale de cea mai
            bună calitate pentru a asigura rezultate durabile și satisfacția
            pacienților noștri. Fie că ai nevoie de o simplă consultație,
            tratamente estetice, ortodonție sau intervenții chirurgicale, suntem
            aici pentru a-ți oferi îngrijire de cea mai bună calitate.
          </p>
          <div className="signature">
            <h3>Dr. Adi Andra</h3>
            <p>Medic specialist Endodonție</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
