import React from 'react'
import "../style/Footer.css"
export default function Footer() {
    const handleRedirect = (url) => {
        window.open(url, '_blank'); // Open the link in a new tab
      };
  return (
    <>
    <div className="footer-centered-container">
    <div className="footer-centered-text1">Dhara Global Solutions</div>
    <div className="footer-centered-text">dharaglobalsolutions@gmail.com</div>
    <div className="footer-icons-container">
    <div className="footer-icon" onClick={() => handleRedirect('https://www.linkedin.com/company/dhara-global-solutions/')}>
      <img src='	https://i.imgur.com/SiElpuu.png' alt="LinkedIn Icon" />
    </div>
    <div className="footer-icon" onClick={() => handleRedirect('https://mail.google.com/mail/u/0/#inbox')}>
      <img src='https://i.imgur.com/VBT5TuL.png' alt="External Link Icon" />
    </div>
    <div className="footer-icon" onClick={() => handleRedirect('https://www.instagram.com/dharaglobalsolutions/')}>
      <img src='https://i.imgur.com/kjUx4vW.png' alt="Instagram Icon" />
    </div>
  </div>
    <div className="footer-centered-text">©2023 by Dhara Global Solutions.</div>
  </div>
    </>
  )
}
