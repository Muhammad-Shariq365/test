import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../assets/logo.png';
import mobilemockup from '../assets/mobileImage.png';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-[#FF5349] min-h-screen flex flex-col">
      {/* Logo */}
      <div className="flex justify-center items-center py-8" data-aos="fade-down">
        <img
          src={logo}
          alt="Company Logo"
          className="h-12 md:h-14 lg:h-16"
        />
      </div>

      {/* Hero Content */}
      <div className="flex flex-col-reverse lg:flex-row items-start pb-6 md:pb-0 justify-between px-6 md:px-12 lg:px-20 gap-12 flex-grow">
        {/* Text Section */}
        <div
          className="text-center lg:text-left max-w-xl"
          data-aos="fade-right"
        >
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Stay Connected
            <br />
            Stay Social
            <br />
            Stay You!
          </h2>
          <p className="text-white mt-6 text-md md:text-lg font-medium">
            A place where friendships grow, communities thrive, and moments turn into unforgettable experiences.
            Whether you're looking to reconnect with old friends, build new relationships, or share what matters
            most to you — MyBindle is your home on the internet.
          </p>
          <button className="mt-8 bg-white text-[#ff5349] px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all">
            Get Started
          </button>
        </div>

        {/* Image Section */}
        <div
          className="w-full max-w-sm sm:max-w-md md:max-w-lg"
          data-aos="fade-left"
        >
          <img
            src={mobilemockup}
            alt="Mobile"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
