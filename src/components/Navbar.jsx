import React, { useState } from 'react';
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="relative w-full z-50">
      <header className="w-full max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-6 pt-10">
        
        {/* Take Quiz (Left) - only visible on md+ */}
        <Link
          to="/quiz"
          className="hidden md:block text-xl sm:text-2xl font-semibold text-[#144559] cursor-pointer underline italic transform transition-transform duration-300 hover:scale-105"
        >
          Take Quiz
        </Link>

        {/* Logo (Center always) */}
        <Link to="/">
          <img
            src={Logo}
            alt="Quiz Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
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
          className="md:hidden text-3xl text-[#144559]"
          onClick={toggleMenu}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </header>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pt-2 pb-4 space-y-3 shadow-md border-t">
          <Link
            to="/quiz"
            onClick={toggleMenu}
            className="block text-lg font-semibold text-[#144559] underline italic"
          >
            Take Quiz
          </Link>
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
