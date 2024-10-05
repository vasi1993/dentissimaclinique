import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo1 from "../Assets/logo1.jpg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  const navigate = useNavigate();

  return (
    <nav className="nav">
      <div className="navbar">
        <div className="nav-logo">
          <a href="/">
            <img onClick={() => navigate("/")} src={logo1} alt="logo" />
          </a>
        </div>
        <RiMenu3Line onClick={openMenu} className="nav-mob-open" />
        <ul ref={menuRef} className="nav-menu">
          <RiCloseLine onClick={closeMenu} className="nav-mob-close" />
          <li onClick={closeMenu}>
            <AnchorLink className="anchor-link" href="#home">
              <p onClick={() => setMenu("home")}>Acasă</p>
            </AnchorLink>
          </li>
          <li onClick={closeMenu}>
            <AnchorLink className="anchor-link" offset={50} href="#about">
              <p onClick={() => setMenu("about")}>Despre Noi</p>
            </AnchorLink>
          </li>
          <li onClick={closeMenu}>
            <AnchorLink className="anchor-link" offset={50} href="#service">
              <p onClick={() => setMenu("service")}>Servicii</p>
            </AnchorLink>
          </li>
          <li onClick={closeMenu}>
            <AnchorLink className="anchor-link" offset={50} href="#medic">
              <p onClick={() => setMenu("medic")}>Medici</p>
            </AnchorLink>
          </li>
          <li onClick={closeMenu}>
            <AnchorLink className="anchor-link" offset={50} href="#location">
              <p onClick={() => setMenu("location")}>Locație</p>
            </AnchorLink>
          </li>
        </ul>

        <div className="nav-programare">
          <p onClick={() => navigate("/form")}>PROGRAMEAZĂ-TE</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
