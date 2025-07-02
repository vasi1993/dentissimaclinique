import React from "react";
import "./YouKnow.css";
import { Helmet } from "react-helmet-async";

const YouKnow = () => {
  return (
    <>
      <Helmet>
        <title>Știați că? | Informații utile de la Dentissima Clinique</title>
        <meta
          name="description"
          content="Curiozități și informații interesante din domeniul stomatologiei oferite de Dentissima Clinique."
        />
        <meta
          name="keywords"
          content="stiati ca, informatii stomatologice, curiozitati dinti"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://dentissimaclinique.ro/stiati-ca" />
      </Helmet>

      <div className="youknow">
        <h1>Știați că?</h1>
        <p>Informații utile și curiozități despre zâmbetul tău.</p>
        {/* Poți adăuga aici conținut informativ */}
      </div>
    </>
  );
};

export default YouKnow;
