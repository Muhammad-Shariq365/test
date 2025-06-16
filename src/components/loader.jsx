import React from 'react';
import logo from '../assets/logo1.png'; // Adjust this path to your logo

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
      <div
        className="w-28 h-28 rounded-full border-8 border-t-[#FF5349] border-b-[#FF5349] border-l-transparent border-r-transparent flex items-center justify-center"
        style={{
          animation: 'spin 1.2s linear infinite',
        }}
      >
        <img
          src={logo}
          alt="Logo"
          className="w-28 h-28 object-contain"
        />
      </div>

      {/* Inline animation styles */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
