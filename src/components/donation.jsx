import React, { useEffect } from 'react';
import Iphonemockup from '../assets/iphone1.png';
import Iphonemockup2 from '../assets/iphone2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DonationSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-[#FF5349] rounded-2xl mx-4 md:mx-5 pb-6 md:pb-0 my-12 px-6 md:px-16 pt-12">
      <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-12">
        {/* Left Content */}
        <div
          className="text-white text-center md:text-left max-w-xl"
          data-aos="fade-right"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Be the Reason<br />
            Someone Smiles Today!
          </h2>
          <p className="text-white mt-6 text-md md:text-lg font-medium">
            Your generosity can change lives. Every donation brings hope,
            support, and a brighter future. Give today and make a difference!
          </p>
        </div>

        {/* Right Images */}
        <div
          className="flex items-end justify-center gap-6 w-full"
          data-aos="fade-left"
        >
          <div className="w-32 sm:w-40 md:w-56 lg:w-72">
            <img
              src={Iphonemockup2}
              alt="Mobile 1"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
          <div className="w-32 sm:w-40 md:w-56 lg:w-72"
          >
            <img
              src={Iphonemockup}
              alt="Mobile 2"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
