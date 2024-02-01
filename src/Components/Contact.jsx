import React, { useState } from 'react';
import Lottie from 'react-lottie';
import "../style/Map.css";
import animationData from '../lotties/contact';

export default function Contact() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };



 

  return (
    <>
      <div className="parent-container" >
        <div className="a" style={{ backgroundColor: "#f9f9fa", color: "#162B6F" }}>
          <div className="footer-centered-container">
            <div className="footer-centered-text1" style={{ fontSize: "50px" }}>Contact</div>
            <div className="footer-centered-text">Tirupati, Andhra Pradesh, India</div>
            <div className="footer-centered-text">dharaglobalsolutions@gmail.com</div>
            <div className="footer-centered-text">+91 9030995777</div>
          </div>
        </div>
        <div className="b"  style={{ backgroundColor: "#f9f9fa", color: "#162B6F" }}>
          <Lottie
            options={defaultOptions}
          />
        </div>
      </div>

      <div className='responsive-map'>
  
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7704.675490637281!2d79.41777904346146!3d13.62785316420569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b0f4f05c2f5%3A0x9b1c48f98dc7401a!2sTirupathi!5e0!3m2!1sen!2sin!4v1706685811892!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  );
}
