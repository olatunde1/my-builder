import React, { useEffect, useState } from "react";
import Laptop from "../assets/laptop.png";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const HomePage = () => {
  const [showBackground, setShowBackground] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowBackground(window.innerWidth >= 640);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <main
        className="w-full max-w-[1300px] mx-auto min-h-screen flex flex-col items-center sm:justify-center text-center pb-20 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: showBackground ? `url(${Laptop})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "743.48px",
        }}
      >
        <h2 className="text-[42px] md:text-8xl font-extrabold mb-4 sm:mb-8 mt-24 sm:mt-4">
          <TypeAnimation
            sequence={[
              "Discover Your",
              500,
              
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="bg-clip-text text-transparent font-fredoka"
            style={{
              display: "inline-block",
              backgroundImage:
                "linear-gradient(90deg, #FFAB00 0%, #FF8F00 35%, #2E7D32 70%, #66BB6A 100%)",
              fontWeight: 800,
            }}
          />
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #FFAB00 0%, #FF8F00 35%, #2E7D32 70%, #66BB6A 100%)",
            }}
          >
            Builder Type
          </span>
        </h2>

        <p className="text-1xl sm:text-4xl text-[#FF7201] px-1 font-black mb-10 sm:mb-16">
          Unlock Your True Potential
        </p>
        
        <p className=" max-w-xl font-medium text-[#144559] mb-8">
          Gain clarity about how you’re wired to build and thrive in the world.
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
