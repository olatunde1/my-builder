import React from "react";
// import BackGroundImage from "../assets/plain background.png";
import Laptop from "../assets/laptop.png";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div
     
    >
      {/* Navbar
      <header className="container w-[1238px] mx-auto flex justify-between items-center px-6 py-4  top-0 z-10 pt-10">
        <h1 className="text-2xl font-semibold text-[#144559] underline italic">Take Quiz</h1>
        <img src={Logo} alt="Logo" className="w-12 h-12" />
        <nav className="space-x-4">
          <a href="#about" className="text-2xl font-semibold text-[#144559] underline italic transition">
            About
          </a>
        </nav>
      </header> */}

  {/* Hero Section */}
  <main className="w-[1300px] h-[832px] max-w-full mx-auto min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center px- pb-20"
   style={{
    backgroundImage: `url(${Laptop})`,
    width: "1100px",
    height: "743.48px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
  >
  <h2 className="text-4xl sm:text-8xl font-extrabold mb-[34px] mt-18">
  <span
    className="bg-clip-text text-transparent"
    style={{
      backgroundImage: "linear-gradient(90deg, #FFAB00 0%, #FF8F00 35%, #2E7D32 70%, #66BB6A 100%)",
    }}
  >
    Discover Your
  </span>{" "}
   <br /> 
    <span
    className="bg-clip-text text-transparent"
    style={{
      backgroundImage: "linear-gradient(90deg, #FFAB00 0%, #FF8F00 35%, #2E7D32 70%, #66BB6A 100%)",
    }}
  >
      Builder Type
  </span>{" "}
 
</h2>

    <p className="text-4xl text-[#FF7201] font-black mb-15">
      Unlock Your True Potential
    </p>
    <p className="max-w-xl font-medium text-[#144559] mb-8">
      Gain clarity about how you’re wired to build and thrive in the <br />world.
    </p>
    <Link
      to="/quiz"
      className="px-11 py-3 bg-[#144559] hover:bg-[#537786] text-white text-lg font-medium rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
    >
      Take Quiz
    </Link>
   
  </main>
    </div>

  );
};

export default HomePage;
