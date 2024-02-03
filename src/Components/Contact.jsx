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
  const handleRedirect = (url) => {
    window.open(url, '_blank'); // Open the link in a new tab
  };



 

  return (
    <>
      <div className="parent-container" style={{left:"3.5%"}} >
        <div className="a" style={{ backgroundColor: "#f9f9fa", color: "#162B6F" }}>
          <div className="footer-centered-container" style={{width:"76%"}}>
            <div className="footer-centered-text1" style={{ fontSize: "50px" }}>Contact</div>
        <div className="footer-centered-text">  <img src="	https://i.imgur.com/Njmri3T.png" alt="Image 1"  style={{borderRadius:"0%",width: "25px",height: "25px",cursor:"pointer",    position: "relative", top: "15%",left:"-4%"}} />Dhara Global Solutions, Tirupati, Andhra Pradesh, India</div>
            <div className="footer-centered-text"  style={{cursor:"pointer"}} onClick={()=>handleRedirect('mailto:contact@dharaglobal.in')}>  <img src="https://i.imgur.com/5NZmRvv.png" alt="Image 1"  style={{borderRadius:"0%",width: "25px",height: "25px",cursor:"pointer",    position: "relative", top: "30%",left:"-4%"}}/>contact@dharaglobal.in</div>
            <div className="footer-centered-text">  <img src="https://i.imgur.com/Hxq0Pen.png" alt="Image 1"  style={{borderRadius:"0%",width: "25px",height: "25px",cursor:"pointer", position: "relative", top: "30%",left:"-4%"}} />+91 9030995777</div>
          <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"45px"}}>
      <img src="	https://i.imgur.com/Z6zwnEw.png" alt="Image 1" style={{borderRadius:"0%",width: "25px",height: "25px",cursor:"pointer"}}  onClick={() => handleRedirect('https://www.instagram.com/dharaglobalsolutions/')} className="inter-circle-image" />
      <img src="	https://i.imgur.com/M3PBKwe.png" alt="Image 1" style={{borderRadius:"0%",width: "25px",height: "25px",cursor:"pointer"}} onClick={() => handleRedirect('https://www.linkedin.com/company/dhara-global-solutions/')} className="inter-circle-image" />
      <img src="https://i.imgur.com/fuvvzNy.png" alt="Image 1"  style={{borderRadius:"0%",width: "25px",height: "25px",cursor:"pointer"}}  onClick={() => handleRedirect('mailto:contact@dharaglobal.in.com')} className="inter-circle-image" />
      </div>
   
   
          </div>
        </div>
        <div className="b"  style={{ backgroundColor: "#f9f9fa", color: "#162B6F" }}>
        <img src="https://www.devum.com/hubfs/contact-us.svg
        " alt="Image 1"    />
        </div>
      </div>

      <div className='responsive-map'>
  
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d484.68849716609!2d79.4167357!3d13.6268351!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b5e2275fe2f%3A0xe3b0388a3adb17e1!2sDhara%20Global%20Solutions!5e0!3m2!1sen!2sin!4v1706804475650!5m2!1sen!2sin" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  );
}
