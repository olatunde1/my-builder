import React from 'react';
// import BackGroundImage from "../assets/plain background.png";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
     
    >
      {/* Navbar */}
      <header className="w-full max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-6 top-0 z-10 pt-10">
         <Link to="/quiz">
           <h1 className="text-xl sm:text-2xl font-semibold text-[#144559] cursor-pointer underline italic transform transition-transform duration-300 hover:scale-105">
             Take Quiz
           </h1>
         </Link>
        <img
          src={Logo}
          alt="Quiz Logo"
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
        />
        <nav>
          <a
            href="#about"
            className="text-lg sm:text-2xl font-semibold text-[#144559] underline italic transition hover:text-[#144559] hover:underline"
          >
            About
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
