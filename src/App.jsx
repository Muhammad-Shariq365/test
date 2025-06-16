import React, { useEffect, useState } from 'react';
import Hero from './components/hero';
import Features from './components/features';
import Features2 from './components/features2';
import Install from './components/install';
import Donation from './components/donation';
import Testimonials from './components/testimonials';
import DownloadSection from './components/download';


const App = () => {
 

  return (
    <>
      
      <main className="bg-gray-100 overflow-hidden ">
        <Hero />
        <Features />
        <Features2 />
        <Install />
        <Donation />
        <Testimonials />
        <DownloadSection />
      </main>
    </>
  );
};

export default App;
