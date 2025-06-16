import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-20 max-w-8xl mx-auto">
      <div>
        {/* Header Section */}
        <div
          className="text-center mb-12 sm:mb-14 md:mb-16"
          data-aos="fade-up"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-[#282722] mb-4 leading-snug sm:leading-snug md:leading-tight">
            Features That Keep You Hooked!
          </h1>
          <p className="text-md md:text-xl text-[#222222] font-medium">
            Meet, Chat, Share - Anytime, Anywhere!
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              icon: '🔥',
              title: 'Seamless Connections',
              desc: 'Stay in touch with friends, family, and like-minded people with just a tap.',
            },
            {
              icon: '📸',
              title: 'Share Your Story',
              desc: "Upload photos, videos, and updates to let the world know what's happening in your life.",
            },
            {
              icon: '💬',
              title: 'Real-Time Chat',
              desc: "Whether it's a DM or a group conversation, connect instantly with smooth, lightning-fast messaging.",
            },
            {
              icon: '🔒',
              title: 'Privacy First',
              desc: 'Your data, your control. We prioritize your privacy with world-class security.',
            },
            {
              icon: '🌍',
              title: 'Discover & Explore',
              desc: 'Find trending content, join communities, and follow pages that match your interests.',
            },
            {
              icon: '💼',
              title: 'Grow Your Business',
              desc: 'Use our platform to market your brand, connect with customers, and build meaningful relationships.',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-7 md:p-8 shadow-sm border border-gray-100 flex flex-col justify-center items-center"
              data-aos="fade-up"
              data-aos-delay={index * 100} // stagger each card
            >
              <div className="flex flex-col items-center gap-3 mb-3 text-center">
                <div className="flex justify-center items-center gap-2">
                  <span className="text-xl sm:text-2xl">{feature.icon}</span>
                  <h3 className="text-[23px]  md:text-xl font-bold text-[#1a293c]">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-md md:text-base text-[#222222] leading-relaxed text-center w-[90%] sm:w-[82%] line-clamp-3 md:h-[4.8rem] overflow-hidden">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
