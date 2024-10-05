import "./Home.css";
import React, { useState } from "react";

import About from "../../Components/About/About";

import Header from "../../Components/Header/Header";
import HeroContact from "../../Components/HeroContact/HeroContact";
import Location from "../../Components/Location/Location";
import Medic from "../../Components/Medici/Medic";
import Modal from "../../Components/Modal/Modal";

import Services from "../../Components/Services/Services";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="home">
      <Navbar />
      <Header />
      <About />
      <Services open={openModal} />
      <HeroContact />
      <Medic />
      <Location />
      <Footer />
      <Modal onClose={closeModal} isOpen={isOpen} />
    </div>
  );
};

export default Home;
