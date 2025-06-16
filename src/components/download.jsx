import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Iphonemockup from '../assets/downloadimage1.png';
import Iphonemockup2 from '../assets/downloadimage2.png';

const DownloadSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      className="bg-[#FF5349] rounded-2xl mx-4 md:mx-5 pb-6 md:pb-0 my-12 px-6 md:px-16 pt-12"
      data-aos="fade-up"
    >
      <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-12">
        {/* Left Content */}
        <div
          className="text-white text-center md:text-left max-w-xl"
          data-aos="fade-right"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Join the fun - Download<br />
            MyBindle Now!
          </h2>
          <p className="text-white mt-6 text-md md:text-lg font-medium md:w-[65%]">
            Your Social Network Your Way. Download My Bindle Now and Be a part of a Community that's always Evolving!
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center mt-8 justify-center md:justify-start">
            {/* App Store Button */}
            <button className="flex items-center gap-3 bg-white hover:bg-gray-300 transition-colors duration-200 rounded-full px-4 py-2 min-w-[50px] shadow-[inset_6.6666669845581055px_6.6666669845581055px_13.333333969116211px_0px_rgba(0,0,0,0.10)]">
              <div className="flex-shrink-0">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black"
                >
                  <path
                    d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 21.99C7.78997 22.03 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-600 font-medium tracking-wide">DOWNLOAD ON THE</div>
                <div className="text-lg font-semibold text-black -mt-1">App Store</div>
              </div>
            </button>

            {/* Google Play Button */}
            <button className="flex items-center gap-3 bg-white hover:bg-gray-300 transition-colors duration-200 rounded-full px-6 py-2 min-w-[185px] shadow-[inset_6.6666669845581055px_6.6666669845581055px_13.333333969116211px_0px_rgba(0,0,0,0.10)]">
              <div className="flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.609 1.814L13.792 12L3.609 22.186C3.538 22.257 3.455 22.257 3.384 22.186C3.313 22.115 3.313 22.032 3.384 21.961L13.567 11.775L3.384 1.589C3.313 1.518 3.313 1.435 3.384 1.364C3.455 1.293 3.538 1.293 3.609 1.364V1.814Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M20.683 10.747L16.921 8.866L13.792 12L16.921 15.134L20.683 13.253C21.439 12.875 21.439 11.125 20.683 10.747Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M13.792 12L16.921 8.866L3.609 1.814C3.538 1.743 3.455 1.743 3.384 1.814C3.313 1.885 3.313 1.968 3.384 2.039L13.792 12Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M13.792 12L3.384 21.961C3.313 22.032 3.313 22.115 3.384 22.186C3.455 22.257 3.538 22.257 3.609 22.186L16.921 15.134L13.792 12Z"
                    fill="#34A853"
                  />
                </svg>
              </div>
              
              <div className="text-left">
                <div className="text-xs text-gray-600 font-medium tracking-wide">GET IT ON</div>
                <div className="text-lg font-semibold text-black -mt-1">Google Play</div>
              </div>
            </button>
          </div>
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
          <div className="w-32 sm:w-40 md:w-56 lg:w-72">
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

export default DownloadSection;
