import React from 'react'
import ethsdlogo from '../../assets/ethsdlogo.png'
import './footer.css'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>
          Ready to get involved?
        </h1>
      </div>

      <div className='gpt3__footer-btn'>
        <p>Subscribe</p>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={ethsdlogo} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Footer