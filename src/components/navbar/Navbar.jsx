import React, { useState } from 'react';
import { RiMenuFill, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import ethsdlogo from '../../assets/ethsdlogo.png';
import './navbar.css';

const Menu = () => (
  <> 
  <p><a href="#home">Home</a></p>
  <p><a href="#wgpt3">About</a></p>
  <p><a href="https://www.ethsd.org/events" target="_blank">Events</a></p>
  <p><a href="#footer">Connect</a></p>
  <p><a href="https://link.ethsd.org/" target="_blank">Socials</a></p>
  </>
)

// BEM -> Block Element Modifier (CSS naming convention)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt3__navbar'>
        <div className='gpt3__navbar-links'>
          <div className='gpt3__navbar-links_logo'>
            <img src={ethsdlogo} alt="logo" />
          </div>
          <div className='gpt3__navbar-links_container'>
            <Menu />
          </div>
        </div>
        {/* <div className='gpt3__navbar-sign'>
          <p>Sign in</p>
          <button type='button'>Sign up</button>
        </div> */}
        <div className='gpt3__navbar-menu'>
          {toggleMenu 
            ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenuFill color='#fff' size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className='gpt3__navbar-menu_container scale-up-center'>
              <div className='gpt3__navbar-menu_container-links'>
                <Menu />
              </div>
            </div>
          )}
        </div>
    </div>
  )
}

export default Navbar