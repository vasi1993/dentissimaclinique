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

// Utilizare lazy loading pentru Chatbot pentru performanță
const Chatbot = React.lazy(() => import("../../Components/Chatbot/Chatbot"));

const Home = () => {
  return (
    <div className="home">
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
