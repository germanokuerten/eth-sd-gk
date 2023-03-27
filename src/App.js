import React from 'react';
import { useEffect } from "react";

import { Article, Brand, Cta, Feature, Navbar } from './components';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3,  } from './containers';
import './App.css'

import OceanWave from './components/waves/Oceanwave';

const App = () => {

  useEffect(() => {
    function handleScroll(event) {
      event.preventDefault();
      // your scroll handling code
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
        <Brand />
        <WhatGPT3 />
      </div>
      {/* <Features />
      <Possibility />
      <Cta />
      <Blog /> */}
      <Footer />
    </div>
  )
}

export default App