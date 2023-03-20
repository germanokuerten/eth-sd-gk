import React from 'react'
import ethsdlogo from '../../assets/ethsdlogo.png'
import OceanWave from '../../components/waves/Oceanwave'
import './footer.css'

const Footer = () => {
  return (
    <>
    <div className='gpt3__footer section__padding' id='footer'>
      <div className='gpt3__footer-heading'>
      <OceanWave />
        <h1 className='gradient__text'>
          Ready to get involved?
        </h1>
      </div>

      <div className='gpt3__footer-btn'>
        <p><a href="#home">Subscribe</a></p>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={ethsdlogo} alt="logo" />
          <p></p>
        </div>
        <div className='gpt3__footer-links_div'>
          
          <p><a href="mailto:chad@ethsd.org">Email</a></p>
          <p><a href="https://www.instagram.com/ethsandiego/">Instagram</a></p>
          <p><a href="https://twitter.com/ethsandiego">Twitter</a></p>
          <p><a href="https://discord.gg/7Y6VRA8VWb">Discord</a></p>
          <p><a href="https://ethsd.substack.com/">Substack</a></p>
        </div>
      </div>

      <div className='gpt3__footer-copyright'>
        <p>© 2023 ETH San Diego. All rights reserved.</p>
      </div>
    </div>
    </>
  )
}

export default Footer