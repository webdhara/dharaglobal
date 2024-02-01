import React from 'react'
import "../style/Service.css";
export default function Services() {
 
  return (
    <>
    <div className="home-outer-container"style={{backgroundColor:"white"}}  >
    <div className="home-centered-text" style={{marginBottom: "64px"}}>Services We Offer<p>Personalized Guidance Every Step of the Way</p></div>
    <div className="home-inner-container" >
      <div className="home-inner-item"  style={{backgroundColor:"#f9f9fa"}}>
        <img src="https://static.wixstatic.com/media/11062b_c6bc32f2c19442218910bedce64ca872~mv2_d_6009_3546_s_4_2.jpg/v1/fill/w_558,h_281,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_c6bc32f2c19442218910bedce64ca872~mv2_d_6009_3546_s_4_2.jpg" alt="Image 1" className="service-image" />
        <p className="home-image-name">College Intership</p>
        <p className="home-image-description" style={{marginBottom:"40px"}}>Professional learning experience that offers meaningfull,practice work related to a student's field of study or career interest.</p>
      </div>
      <div className="home-inner-item" style={{backgroundColor:"#f9f9fa"}}>
        <img src="https://static.wixstatic.com/media/11062b_78134d5be79b47c69ab7a9d034104c44~mv2_d_3949_2633_s_4_2.jpg/v1/fill/w_558,h_281,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_78134d5be79b47c69ab7a9d034104c44~mv2_d_3949_2633_s_4_2.jpg" alt="Image 2" className="service-image" />
        <p className="home-image-name">Industrial Training</p>
        <p className="home-image-description" style={{marginBottom:"40px"}}>The essential system to open understudies to genuine work life circumstancs and to outfit them with the vital abilities.</p>
      </div>
      <div className="home-inner-item" style={{backgroundColor:"#f9f9fa"}}>
        <img src="https://static.wixstatic.com/media/11062b_d597d0d6cf784815a5da80628721a74f~mv2_d_3504_2336_s_2.jpg/v1/fill/w_558,h_281,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_d597d0d6cf784815a5da80628721a74f~mv2_d_3504_2336_s_2.jpg" alt="Image 3" className="service-image"  />
        <p className="home-image-name">Research Guidance</p>
        <p className="home-image-description" style={{marginBottom:"40px"}}>We offer PhD assistance and research guidance services for PhD experts will help you in completing your research at every PhD stage.</p>
      </div>
    </div>
  </div>
  </>
  )
}
