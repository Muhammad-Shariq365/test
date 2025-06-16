import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Install = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Download',
      description: 'Open Play Store or App Store',
    },
    {
      number: '02',
      title: 'Install App',
      description: 'The app will install automatically.',
    },
    {
      number: '03',
      title: 'Ready to Use',
      description: 'Sign up or log in to start exploring!',
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-12 sm:py-14 md:py-16 px-4 sm:px-6">
      {/* Heading */}
      <div className="text-center mb-10 sm:mb-12" data-aos="fade-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#222222] mb-4 leading-snug">
          How to Install Our App
        </h1>
        <p className="text-md md:text-xl text-[#222222] max-w-3xl mx-auto">
          Getting started is quick and easy! Follow these simple steps to install and start using MyBindle today.
        </p>
      </div>

      {/* Step Indicator */}
      <div
        className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 overflow-x-auto whitespace-nowrap"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center shrink-0">
            <span className={`text-3xl sm:text-4xl font-bold ${index === 0 ? 'text-[#ff5349]' : 'text-[#222222]'}`}>
              {step.number}
            </span>
            {index < steps.length - 1 && (
              <div className="mx-3 sm:mx-4 w-12 sm:w-20 md:w-32 lg:w-80 h-px bg-neutral-400"></div>
            )}
          </div>
        ))}
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-7xl mx-auto px-2 sm:px-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex-1 bg-zinc-100 rounded-3xl shadow-[5px_5px_10px_rgba(0,0,0,0.1),-3px_-3px_10px_rgba(255,255,255,1)] px-6 py-8 text-center flex flex-col justify-center items-center"
            data-aos="zoom-in-up"
            data-aos-delay={index * 150}
          >
            <h3 className="text-[22px] md:text-3xl font-semibold text-neutral-800 mb-3">
              {step.title}
            </h3>
            <p className="text-md md:text-xl font-semibold text-neutral-800 max-w-xs sm:max-w-sm">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Install;
