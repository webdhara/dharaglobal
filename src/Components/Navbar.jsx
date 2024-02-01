import React, { useState } from "react";
import "../style/navbar.css";
import {NavLink} from 'react-router-dom';

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  
  const handleNav = () => {
    console.log("NavLink clicked!");
    setActive("nav__menu");
    setIcon("nav__toggler");
  };
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else{  
      setActive("nav__menu")};

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
     
    } else {
      setIcon("nav__toggler")};
  };
  const handleRedirect = (url) => {
    window.open(url, '_blank'); // Open the link in a new tab

  };
  return (
    <nav className="nav">
      <a href="/" className="nav__brand">
        Dhara Global Solutions
      </a>
      <div className="footer-icon" onClick={() => handleRedirect('https://www.linkedin.com/company/dhara-global-solutions/')}>
      <img src='https://i.imgur.com/aNQWKg0.png' alt="LinkedIn Icon" />
    </div>
    <div className="footer-icon" onClick={() => handleRedirect('mailto:dharaglobalsolutions@gmail.com')}>
      <img src='https://i.imgur.com/UGUaRt4.png' alt="External Link Icon" />
    </div>
    <div className="footer-icon" onClick={() => handleRedirect('https://www.instagram.com/dharaglobalsolutions/')}>
      <img src='https://i.imgur.com/LrQqS09.png' alt="Instagram Icon" />
    </div>
      <ul className={active}>
        <li className="nav__item">
        <NavLink to="/" className="nav__link" onClick={handleNav} >Home</NavLink> 
        </li>
        <li className="nav__item">
        <NavLink to="/about" className="nav__link" onClick={handleNav} >About</NavLink> 
        </li>
        <li className="nav__item">
        <li className="nav__item">
        <NavLink to="/contact" className="nav__link"  onClick={handleNav} >Contact</NavLink> 
        </li>
        </li>
        <li className="nav__item">
        <li className="nav__item">
        <NavLink to="/services" className="nav__link"  onClick={handleNav} >Services</NavLink> 
        </li>
        </li>
        <li className="nav__item">
        <li className="nav__item">
        <NavLink to="/testimonials" className="nav__link"  onClick={handleNav} >Testimonials</NavLink> 
        </li>
        
        </li>
        <li className="nav__item">
        <li className="nav__item">
        <NavLink to="/verify" className="nav__link"  onClick={handleNav}>Verification</NavLink> 
        </li>
        
        </li>
        <li className="nav__item">
        <li className="nav__item">
        <NavLink to="/reg" className="nav__link"  onClick={handleNav} >IntershipReg</NavLink> 
        </li>
        </li>
        <li className="nav__item">
        <li className="nav__item">
        <NavLink to="/book" className="nav__link" onClick={handleNav} >Book</NavLink> 
        </li>
        </li>
      
       
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;