import "./Home.css";
import React, { Suspense } from "react";

import About from "../../Components/About/About";

import Header from "../../Components/Header/Header";
import HeroContact from "../../Components/HeroContact/HeroContact";
import Location from "../../Components/Location/Location";
import Medic from "../../Components/Medici/Medic";

import Services from "../../Components/Services/Services";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import { Helmet } from "react-helmet-async";

// Utilizare lazy loading pentru Chatbot pentru performanță
const Chatbot = React.lazy(() => import("../../Components/Chatbot/Chatbot"));

const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <title>Clinică Stomatologică Cluj | Dentissima Clinique</title>
        <meta
          name="description"
          content="Dentissima Clinique din Cluj oferă tratamente stomatologice moderne, echipamente performante și medici cu experiență. Zâmbetul tău este prioritatea noastră."
        />
        <meta
          name="keywords"
          content="clinica stomatologică Cluj, dentist Cluj, tratamente dentare, albire dinți, aparat dentar"
        />
        <meta name="author" content="Dentissima Clinique" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://dentissimaclinique.ro/" />
      </Helmet>

      <Navbar />

      <Header />
      <About />
      <Services />
      <HeroContact />
      <Medic />
      <Location />
      <Footer />
      <Suspense fallback={<div>Loading...</div>}>
        <Chatbot />
      </Suspense>
    </div>
  );
};

export default Home;
