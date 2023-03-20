import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ethsdlogo from '../../assets/ethsdlogo.png'
import ai from '../../assets/ai.png'
import ethsdpeople from '../../assets/ethsdpeople.jpg'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
        <div className='gpt3__header-content'>
          <h1 className='gradient__text'>Ethereum San Diego</h1>
          <p>Learn, Network, and Build with San Diego’s Only Ethereum Community</p> <br />

          <div className='gpt3__header-content__people'>
            <img src={people} alt="people" />
            <p>Ready to get involved?</p>
          </div>
          <div className='gpt3__header-content__input'>
            <input type="email" placeholder='Enter yout email' />
            <button type='button'>Subscribe</button>
          </div>
          

        </div>
        <div className='gpt3__header-image'>
          <img src={ethsdpeople} alt="ai" />
        </div>
    </div>
  )
}

export default Header