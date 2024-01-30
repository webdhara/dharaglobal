import React from 'react'
import "../style/Verification.css";
import db from './firebase';
import { useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
const Verification=() =>{
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const [message, setMessage] = useState('');
  const [certificateData, setCertificateData] = useState(null);
  const [certificateDetails, setCertificateDetails] = useState(true)
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const [borderColor, setborderColor] = useState('borderAnimation');

  const [showDiv1, setShowDiv1] = useState(false);
  const [showDiv2, setShowDiv2] = useState(false);
  const verify = async () => {
    const certificatesRef = db.collection('verify');
    const querySnapshot = await certificatesRef.where('certificateId', '==', message).get();
    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        setCertificateData(data);
        setCertificateDetails(false);
        setShowDiv2(false)
        setShowDiv1(true);
        setborderColor("borderAnimation2");
      });
    } else {

      setCertificateDetails(false);
      setShowDiv1(false);
      setShowDiv2(true);
      setborderColor("borderAnimation1");
      console.log('Certificate not found.');
    }
  }

  return (
    <>
    <motion.div className='animated-div'  style={{ scale: scale }} >
    <div className='box'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      
    </div>
    <div style={{ color: "white", display: "flex", justifyContent: "center" }}>
      <div style={{ textAlign: "center",position:"absolute",top:"35%" }}><h1>Verification of Certificates</h1><h2>Fast.Secure.Trusted</h2></div></div>
  </motion.div>
  <div   className="verify-parent-container"  >
  <div className="verify-a"  style={{animation: `${borderColor} 2s linear infinite`}}> 
  <h2 className='h-style' > CERTIFICATE DETAILS</h2>
  {certificateDetails && (<><div className='certificate-container' >
  <p className='p-animate'  > Enter Your Certificate Id </p>
</div>
<div className ="arrow"> <img src="https://i.imgur.com/9JgRHOI.gif" alt="gif"/></div>  
</>)}
  {showDiv1 && (
    <div>
      {<p className='p-status' style={{ color: "#fff;", textAlign: "left" }}>&nbsp;&nbsp;<b>Name :</b>&nbsp;&nbsp;{certificateData['Name']} <br />&nbsp;&nbsp;<b>Roll No :</b>&nbsp;&nbsp; {certificateData['RollNo']} <br />&nbsp;&nbsp;<b>Domain :</b>&nbsp;&nbsp; {certificateData['Domain']} <br />&nbsp;&nbsp;<b>From Date :</b>&nbsp;&nbsp;{certificateData['from']}<br />&nbsp;&nbsp;<b>To Date :</b>&nbsp;&nbsp;{certificateData['todate']}<br />&nbsp;&nbsp;<b>Certificate ID :</b>&nbsp;&nbsp;{certificateData['certificateId']}</p>}

    </div>
  )}
  {showDiv2 && (
    <div className='showdiv2'>
      {<p className='p-status1' style={{ color: "#fff", textAlign: "center" }}>INVALID CODE  <br /> PLEASE TRY AGAIN</p>}

    </div>
  )}
  </div>
  <div className="verify-b">
  
  <div className='verify-container'>
  <label className='label'>Unique Certificate Code:*</label>
  <input type="text" className='input' name='message' id="message" onChange={handleChange} value={message}></input>
  <button className='button' onClick={verify}>Verify</button>

</div>
  </div>
</div>

<div className="home-outer-container"  >
<div className="home-centered-text">Verification</div>
<p className="verify-description">This page allows you to verify whether the certificates you have been presented by one of our students are authentic. Every certificate includes an individual verification number in the bottom right corner of the page.
For every electronic certificate that is generated, a record is created and saved in our database. After you have entered the number, the database will verify whether such a record exists. . If it does, you will receive a confirmation of the following information: Student Name, Domain, Certificate ID.</p>
</div>
    </>
  )
}
export default Verification;
