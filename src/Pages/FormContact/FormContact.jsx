import React, { useEffect, useState } from "react";
import "./FormContact.css";
import emailJs from "@emailjs/browser";
import { validateForm } from "./formValidator";
import cross_icon from "../../Components/Assets/cross_icon.png";
import { useNavigate } from "react-router-dom";

const GRPD_FILE = "http://localhost:3000/form/CV.doc";

const FormContact = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formValidation, setFormValidation] = useState({
    name: "",
    lastname: "",
    phone: "",
    message: "",
    isValid: true,
  });

  const navigate = useNavigate();

  useEffect(() => {
    setFormValidation(validateForm(name, lastname, phone, message));
  }, [name, lastname, phone, message]);

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
  };

  const downloadFile = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <form className="form-contact" onSubmit={handleSubmit}>
      <img
        src={cross_icon}
        alt=""
        className="form-contact-img"
        onClick={() => {
          navigate("/");
        }}
      />
      <h2>Dentissima Clinique</h2>
      <p>Solicită o programare</p>

      <div className="name">
        <input
          type="text"
          placeholder="Nume"
          className={`input-primary ${formValidation.name && "error"}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p className="error-message">{formValidation.name}</p>
        <input
          type="text"
          placeholder="Prenume"
          className={`input-primary ${formValidation.lastname && "error"}`}
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <p className="error-message-lastname">{formValidation.lastname}</p>
      </div>
      <div className="contact">
        <input
          type="phone"
          placeholder="Număr de telefon"
          className={`input-primary ${formValidation.phone && "error"}`}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <p className="error-message">{formValidation.phone}</p>
        <input
          type="email"
          placeholder="Adresa de email"
          className="input-primary"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="info">
        <label htmlFor="">
          Vă rugăm să ne spune-ți problema dumneavoastră și un interval orar{" "}
          <br /> în care a-ți fi disponibil să fiți programat
        </label>
        <textarea
          name="message"
          id=""
          cols={40}
          rows={5}
          className={`input-primary ${formValidation.message && "error"}`}
          placeholder=" "
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <p className="error-message-info">{formValidation.message}</p>
        <div className="grp">
          <input type="checkbox" />
          <a
            onClick={() => {
              downloadFile(GRPD_FILE);
            }}
          >
            {" "}
            Sunt de acord cu politica de confidențialitate a datelor
          </a>
        </div>
        <button
          disabled={!formValidation.isValid}
          type="submit"
          className="button-primary"
        >
          Trimite
        </button>
      </div>
    </form>
  );
};

export default FormContact;
