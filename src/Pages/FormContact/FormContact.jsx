import React, { useEffect, useState } from "react";
import "./FormContact.css";
import emailJs from "@emailjs/browser";
import { validateForm } from "./formValidator";
import close_icon from "../../Components/Assets/close_icon.svg";
import { useNavigate } from "react-router-dom";
import GDRP from "../../Components/Assets/GDRP.pdf";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormContact = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [gdpr, setGdpr] = useState(false);
  const [formValidation, setFormValidation] = useState({
    name: "",
    lastname: "",
    phone: "",
    message: "",
    gdpr: true,
    isValid: true,
  });

  const navigate = useNavigate();
  const notify = () => toast("Solicitare trimisa!");

  useEffect(() => {
    setFormValidation(validateForm(name, lastname, phone, message, gdpr));
  }, [name, lastname, phone, message, gdpr]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_ex5glaf";
    const templateId = "template_r4dzfjj";
    const publicKey = "v3iPSQeqKO5-Q7y3_";

    const templateParams = {
      from_name: name + " " + lastname,
      to_name: "Dentissima Clinique",
      message: message + ". Telefon: " + phone + " Email: " + email,
    };

    emailJs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("emailt sent", response);
        setName("");
        setLastname("");
        setMessage("");
        setPhone("");
        setEmail(" ");
      })
      .catch((error) => {
        console.error("error", error);
      });
    notify();
  };

  return (
    <form className="form-contact" onSubmit={handleSubmit}>
      <img
        src={close_icon}
        aria-label="Închide fereastra"
        alt="close"
        className="form-contact-img"
        onClick={() => {
          navigate("/");
        }}
      />
      <h2>Dentissima Clinique</h2>
      <p>Solicită o programare</p>

      <div className="name">
        <div className="name-input">
          <input
            type="text"
            aria-label="numele"
            aria-describedby="name-error"
            placeholder="Nume"
            className="input-primary"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p id="name-error" className="error-message">
            {formValidation.name}
          </p>
        </div>
        <div className="name-input-last">
          <input
            type="text"
            aria-label="prenumele"
            aria-describedby="lastname-error"
            placeholder="Prenume"
            className="input-primary"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <p id="lastname-error" className="error-message-lastname">
            {formValidation.lastname}
          </p>
        </div>
      </div>
      <div className="contact">
        <div className="contact-phone">
          <input
            type="tel"
            aria-label="telefon"
            aria-describedby="phone-error"
            placeholder="Număr de telefon"
            className="input-primary"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <p id="phone-error" className="error-message">
            {formValidation.phone}
          </p>
        </div>
        <div className="contact-email">
          <input
            type="email"
            aria-label="email"
            aria-describedby="email-error"
            placeholder="Adresa de email"
            className="input-primary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p id="email-error" className="error-message"></p>
        </div>
      </div>

      <div className="info">
        <label htmlFor="">
          Vă rugăm să ne spune-ți problema dumneavoastră și un interval orar{" "}
          <br /> în care a-ți fi disponibil să fiți programat
        </label>
        <textarea
          aria-label="mesajul utilizatorului"
          name="message"
          id=""
          cols={40}
          rows={5}
          className="input-primary"
          placeholder=" "
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-describedby="message-error"
        ></textarea>
        <p id="message-error" className="error-message-info">
          {formValidation.message}
        </p>
        <div className="grp">
          <input
            type="checkbox"
            value={gdpr}
            onChange={(e) => setGdpr(e.target.checked)}
            aria-label="Accept politica GDPR"
          />
          <label>
            {" "}
            Sunt de acord cu politica de confidențialitate a datelor.{" "}
            <a href={GDRP} download="GDRP" className="grp-span">
              Click aici
            </a>
          </label>
        </div>
        <button
          disabled={!formValidation.isValid}
          type="submit"
          className="button-primary"
          aria-label="trimite formular"
        >
          Trimite
        </button>
        <ToastContainer />
      </div>
    </form>
  );
};

export default FormContact;
