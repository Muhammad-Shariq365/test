import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import mockup2 from '../assets/mockup2.png';
import { FiVideo } from 'react-icons/fi';
import { FaRegBell } from 'react-icons/fa';
import { HiOutlineUserGroup } from 'react-icons/hi';

const Features2 = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-8 max-w-7xl mx-auto">
        {/* Left side - Image */}
        <div
          className="w-full lg:w-1/2 rounded-[2rem] overflow-hidden"
          data-aos="fade-right"
        >
          <img
            src={mockup2}
            alt="Social media app interface"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right side - Content */}
        <div
          className="w-full lg:w-1/2 px-0 sm:px-6 lg:px-10 xl:pl-28 space-y-8"
          data-aos="fade-left"
        >
          <div className="space-y-5">
            <h1 className="text-3xl text-justify sm:text-4xl md:text-5xl font-bold  text-[#3a4245]">
              Where Every Click<br /> Sparks Connection!
            </h1>
            <p className="text-[#636f73] text-md md:text-lg">
              A small act of kindness today can create a lifetime of impact for someone in need. Give from the heart and
              change a life!
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: <FiVideo className="w-6 h-6 text-black" />,
                title: "Short Videos & Reels",
                desc: "Share engaging, bite-sized content that keeps everyone entertained.",
              },
              {
                icon: <FaRegBell className="w-6 h-6 text-yellow-500" />,
                title: "Smart Notifications",
                desc: "Stay updated on what matters without the noise.",
              },
              {
                icon: <HiOutlineUserGroup className="w-6 h-6 text-blue-500" />,
                title: "Interest-Based Communities",
                desc: "Join groups and discussions that match your passion.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-100 shadow-[_-3px_-3px_10px_white,_5px_5px_10px_rgba(0,0,0,0.1)] rounded-[21.3333px] p-4 sm:p-5 md:p-6"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="shrink-0 w-8 h-10 flex items-center justify-start">
                    {feature.icon}
                  </div>
                  <div>
                    <h2 className=" text-[22px] md:text-2xl font-bold text-gray-800 mb-1">
                      {feature.title}
                    </h2>
                    <p className="text-gray-600 text-md md:text-lg leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features2;
