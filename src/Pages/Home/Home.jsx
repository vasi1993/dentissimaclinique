import "./Home.css";
import React from "react";

import About from "../../Components/About/About";

import Header from "../../Components/Header/Header";
import HeroContact from "../../Components/HeroContact/HeroContact";
import Location from "../../Components/Location/Location";
import Medic from "../../Components/Medici/Medic";

import Services from "../../Components/Services/Services";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

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
    </div>
  );
};

export default Home;
