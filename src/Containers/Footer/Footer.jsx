import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='sectionpadding gpt__footer'>
      <div className="gpt3__footer-heading">
        <h1 className='gradient_text'>Do you want to step in to the future before others?</h1>
      </div>
      <div className='gpt3__footer-button'>
        <p>Request Early access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <div className="logo">GPT-3</div>
          <p>All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get In Touch</h4>
          <p>Cretyhpipo</p>
          <p>0209-0912-09</p>
          <p>info@mwangi.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copy">
        <p>&copy; 2024 Copyright All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
