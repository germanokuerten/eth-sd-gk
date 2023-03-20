import React from 'react'
import Feature from '../../components/feature/Feature';
import './whatgpt3.css'

const WhatGPT3 = () => {
  return (
    <>
    <br/><br/><br/><br/>
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        
        <Feature title="Our Purpose" text="Our vision is to turn San Diego into one of the largest Web3 Hubs across the Nation.
Our mission is to accelerate the growth of Web3 in San Diego through community building, education, and hyper-local support. ‍ETH San Diego fundamentally believes in the power of community and education to help shape the new internet." /> 
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>Our Impact</h1>
        <p><a href="https://www.ethsd.org/events" target="_blank">Explore Our events</a></p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="400+" text="Members" />
        <Feature title="30+" text="Total Events" />
        <Feature title="1" text="Hacker House" />
        <Feature title="1" text="Solidity Bootcamp" />
      </div>
    </div>
    <br/><br/><br/><br/>
    </>
  )
}

export default WhatGPT3