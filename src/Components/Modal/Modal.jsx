import React, { useState, useEffect } from "react";
import "./Modal.css";
import CloseIcon from "../Assets/close_icon.svg";
import { FaPhoneAlt } from "react-icons/fa";

const Modal = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    if (props.onClose) {
      props.onClose();
    }
  };

  useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

  return (
    <div className={`${isOpen ? "modal-wrapper" : "modal-hiden"}`}>
      <div className="modal-content">
        <div className="modal-card">
          <div onClick={closeModal} className="close-button">
            <img src={CloseIcon} alt="close" />
          </div>
          <h1>{props.name}</h1>
          <p className="modal-card-desc">{props.desc}</p>
          {/* <img src={props.image} alt="" />
          <p className="modal-card-doctor">{props.modaldoctor}</p>   */}
          <p className="modal-card-programare">{props.modalprogramare}</p>
          <a href="tel:(+)40364566544" className="modal-card-phone">
            {" "}
            <FaPhoneAlt /> {props.phone}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
