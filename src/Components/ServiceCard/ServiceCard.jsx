import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Modal from "../Modal/Modal";

import "./ServiceCard.css";

const ServiceCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="service-card">
        <div className="service-icon">{props.image}</div>
        <h1 className="service-card-name">{props.name}</h1>
        <p className="service-card-description">{props.description}</p>
        <hr />
        <button onClick={() => setIsOpen(true)} className="service-button">
          Detalii <AiOutlineArrowRight />{" "}
        </button>
      </div>
      <Modal
        name={props.name}
        /* image={props.modalimage}
        modaldoctor={props.modaldoctor}       */
        desc={props.modaldescription}
        phone={props.phone}
        onClose={closeModal}
        isOpen={isOpen}
        modalprogramare={props.modalprogramare}
      />
    </>
  );
};

export default ServiceCard;
