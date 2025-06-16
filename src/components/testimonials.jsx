import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const testimonials = [
    {
      id: 1,
      quote: "This platform changed the way I stay in touch with my friends and family. The interface is smooth, and I love how easy it is to share my moments!",
      author: "Emily R",
      location: "USA",
      rating: "★★★★★",
      avatar: "https://randomuser.me/api/portraits/women/43.jpg"
    },
    {
      id: 2,
      quote: "Running my small business has never been easier! This platform helped me connect with customers, promote my products, and grow my brand",
      author: "Javier L",
      location: "Spain",
      rating: "★★★★★",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      quote: "This platform brings people closer in the best way possible! From reconnecting with old friends to making new ones, every moment!",
      author: "Amit K",
      location: "India",
      rating: "★★★★★",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      id: 4,
      quote: "Finally, a social network that understands what I need! The privacy features are a game-changer, and I feel safer sharing my life online",
      author: "Lucas T",
      location: "Brazil",
      rating: "★★★★★",
      avatar: "https://randomuser.me/api/portraits/men/65.jpg"
    },
    {
      id: 5,
      quote: "The perfect blend of fun and functionality! Whether I want to go live, discover trending content, or just catch up with friends, everything is right here!",
      author: "Sophie M",
      location: "UK",
      rating: "★★★★★",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      id: 6,
      quote: "I joined just to explore, but now I can't imagine my day without it. The real-time chat and engaging communities make every interaction special!",
      author: "Nora S",
      location: "Canada",
      rating: "★★★★★",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg"
    }
  ];

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl text-center font-bold text-[#282722] mb-4 leading-snug sm:leading-snug md:leading-tight">
            What Our Users Say 
          </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.id}
              className="flex flex-col p-6 bg-gray-100 shadow-[_-3px_-3px_10px_white,_5px_5px_10px_rgba(0,0,0,0.1)] rounded-[21.3333px]"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Rating */}
              <div className="text-yellow-400 text-xl mb-4">{testimonial.rating}</div>

              {/* Quote */}
              <p className="text-gray-600 mb-6 flex-grow text-md md:text-base">{testimonial.quote}</p>

              {/* Author */}
              <div className="flex items-center mt-auto">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-900">{testimonial.author}</span>
                  <span className="text-gray-500 text-sm">{testimonial.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center mt-12" data-aos="fade-up">
          <button className="bg-gray-100 shadow-[_-3px_-3px_10px_white,_5px_5px_10px_rgba(0,0,0,0.1)] hover:bg-[#FF5349] text-[#FF5349] px-12 py-3 rounded-md text-lg font-bold hover:text-gray-100 transition duration-300">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
