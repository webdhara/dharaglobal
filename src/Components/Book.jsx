import React from 'react'
import "../style/Book.css";
export default function Book() {
  
  return (
    <div className="iframe-container">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSf2uD_tPz30S9iC2_aasaiExlGKjDP0HavE_6R2FixPDucLAg/viewform?embedded=true"
        width="640"
        height="1411"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Book Form"
        allowFullScreen
        loading="lazy"
      >
        Loading…
      </iframe>
    </div>

  )
}
