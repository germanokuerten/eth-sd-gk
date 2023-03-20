import React from 'react';
import { useEffect } from "react";

import { Article, Brand, CTA, Feature, Navbar } from './components';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3,  } from './containers';
import './App.css'

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
      </div>
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App