import React from 'react'
import './brand.css'
import { ethereumfoundationlogo, polygonlogo, alchemylogo, chainlinklogo, discologo, edgelogo } from './imports'

const Brand = () => {
  return (
    <>
      <br/><br/><br/><br/>
      <div className='gpt3__brand gpt3__brand-content section__padding'>
        <h1 className='gradient__text'>Our Partners</h1>
      </div>
      
      <div className='partners'>
        <div className='gpt3__brand'>
          <div>
            <img src={ethereumfoundationlogo} alt="ethereumfoundationlogo" />
          </div>
          <div>
            <img src={polygonlogo} alt="polygonlogo" />
          </div>
          <div>
            <img src={alchemylogo} alt="alchemylogo" />
          </div>
          <div>
            <img src={chainlinklogo} alt="chainlinklogo" />
          </div>
          <div>
            <img src={discologo} alt="discologo" />
          </div>
          <div>
            <img src={edgelogo} alt="edgelogo" />
          </div>
        </div>
      </div>

    </>
  )
}

export default Brand