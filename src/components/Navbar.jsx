import React, { useState, useRef, useEffect } from 'react';
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    if (menuOpen && dropdownRef.current) {
      dropdownRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [menuOpen]);

  return (
    <div className="relative w-full z-50 bg-[#EDF2F7] lg:bg-transparent lg:shadow-none lg:border-none shadow-md border-b border-gray-200">
      <header className="w-full max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-6 sm:py-6">
        {/* Take Quiz (Left) - only visible on md+ */}
       <Link
         to="/quiz"
         onClick={() => {
           localStorage.removeItem("quizAnswers"); // clear previous answers
         }}
         className=" px-6 py-2 md:px-11 md:py-3 bg-[#144559] hover:bg-[#537786] text-white text-lg font-medium rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
       >
         Take Quiz
       </Link>

        {/* Logo (Center always) */}
        <Link to="/">
          <img
            src={Logo}
            alt="Quiz Logo"
            className="w-8 h-8 sm:w-12 sm:h-12 object-contain"
          />
        </Link>

        {/* About (Right) - only visible on md+ */}
        <a
          href="#about"
          className="hidden md:block text-lg sm:text-2xl font-semibold text-[#144559] underline italic transition hover:text-[#144559] hover:underline"
        >
          About
        </a>

        {/* Hamburger Icon (only on small screens) */}
        <button
          className="md:hidden text-3xl text-[#144559] bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors duration-300"
          onClick={toggleMenu}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </header>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          ref={dropdownRef}
          className="md:hidden bg-white px-6 pt-2 pb-4 space-y-3 shadow-md border-t"
        >
          {/* <Link
            to="/quiz"
            onClick={() => {
              localStorage.removeItem("quizAnswers"); // clear previous answers
            }}
            className="px-11 py-3 bg-[#144559] hover:bg-[#537786] text-white text-lg font-medium rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Take Quiz
          </Link> */}
          <a
            href="#about"
            onClick={toggleMenu}
            className="block text-lg font-semibold text-[#144559] underline italic"
          >
            About
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
