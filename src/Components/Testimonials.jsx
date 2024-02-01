import React from 'react'

export default function Testimonials() {
  return (
    <>
    <div className="home-outer-container1" style={{marginBottom:"25px"}}>
    <div className="home-centered-text">Testimonials</div>
    <div className="home-inner-container">
      <div className="home-inner-item">
        <p className="home-image-description">"Good service, customized projects available for any domains, Trainings is well organized, Intership opportunities also available."</p>
        <span>Prasanth Y</span>
        </div>
        <div className="home-inner-item">
        <p className="home-image-description">"The classes were said and we learned about arduino, this online class will be useful for us in the future."</p>
        <br></br>
        <span>Harmeed S</span>
      </div>
      <div className="home-inner-item">
        <p className="home-image-description">"This whole experience was good .I have learnt plenty of stuff during the intership program."</p>
        <br></br>
        <span>Kiran K</span>
        </div>
    </div>
  </div>
  <div className='animated-div'  style={{height:"0%", marginBottom:"30px"}} >
 
  <img src="https://static.wixstatic.com/media/11062b_c6bc32f2c19442218910bedce64ca872~mv2_d_6009_3546_s_4_2.jpg/v1/fill/w_1899,h_520,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_c6bc32f2c19442218910bedce64ca872~mv2_d_6009_3546_s_4_2.jpg" alt="Image 1"style={{width: "100%",height: "100%",
  objectFit: "cover"}} />
  </div>
    </>
  )
}
