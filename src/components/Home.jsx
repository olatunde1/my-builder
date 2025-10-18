import React, { useEffect, useState } from "react";
import Laptop from "../assets/no-image-background.png";
import QuizImage from "../assets/bulb-image.png";
import { Link } from "react-router-dom";
import Pdf from "../assets/complete-lg.svg";
import Image1 from "../assets/potential-lg.svg";
import Quiz from "../assets/results-lg.svg";
import Line1 from "../assets/Line Indicator.png";
import Line2 from "../assets/Line Indicator 2.png";
import ExploreBackground from "../assets/explore background.png";
import Explore from "../assets/explore.png";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Rating1 from "./../assets/rating.png";
import Discover from "../assets/how-you-are-wired-background.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import LogoImage from "../assets/new-logo.png";
import { FaQuoteLeft } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative">
      <main>
        {/* ✅ HERO SECTION */}
        <div className="bg-[#144559]  lg:bg-white hero relative px-0 sm:px-6 lg:px-8">
          <div
            className="w-full max-w-[1240px] gap-10 lg:gap-16 mx-auto lg:min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-10 lg:px-20 bg-no-repeat"
            style={{
              backgroundImage: `url(${Laptop})`,
              backgroundSize: isMobile ? "cover" : "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "680px",
            }}
          >
            {/* Text Section */}
            <div
              className="text-center lg:text-left px-2 sm:px-0 flex-1"
              // data-aos="fade-up"
            >
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-2 pt-2 lg:pt-[0px] leading-snug">
                Know Your Builder Type
              </h1>
              <p className="text-white text-base sm:text-lg lg:text-xl pt-2 lg:pb-20 sm:pt-4 leading-relaxed">
                Discover how you’re wired to think, work,
                <br className="hidden sm:block" /> lead, and contribute.
              </p>
            </div>

            {/* Image Section */}
            <div className="flex justify-center lg:justify-end w-full mt-2 lg:mt-[78px] flex-1">
              <img
                src={QuizImage}
                alt="Quiz"
                className="w-[490px] sm:w-[360px] md:w-[420px] lg:w-[490px] h-[400px] lg:h-auto object-contain"
              />
            </div>
          </div>

          {/* Take Quiz Button */}
          <Link
            to="/quiz"
            className="bg-[#AE4815] w-[90%] sm:w-[420px] py-3 sm:py-6 bottom-10 left-5 absolute lg:left-32 lg:translate-x-0 lg:bottom-5 text-white rounded-xl sm:rounded-full text-lg sm:text-2xl font-semibold flex items-center justify-center gap-2 hover:bg-[#9a3909] transition duration-300"
          >
            Take the Quiz <FaArrowCircleRight className="text-2xl sm:text-4xl" />
          </Link>
        </div>

        {/* ✅ START IN THREE STEPS */}
        <div className="start">
          <div className="max-w-[1240px] text-center px-4 sm:px-0 py-16 mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#144559]">
              How it <span className="text-[#AE4815]">Works</span>
            </h2>

            <div className="grid sm:grid-cols-3 gap-12 mt-12 relative">
              {/* Step 1 */}
            <div className="relative w-full flex-col-reverse max-w-[355px] mx-auto p-6 rounded-lg shadow-xl border-t-4 border-[#AE4815] cursor-pointer overflow-hidden">
  {/* Half-curve background vector */}
  <div className="absolute -top-10 -right-16 w-100 h-40 bg-gradient-to-br from-[#FFD7B5] to-[#FFB07C] rounded-full opacity-40 blur-2xl"></div>

  <img
    src={Quiz}
    alt="Quiz"
    className="w-16 sm:w-20 mb-4 mx-auto lg:mx-0 lg:ml-auto relative z-10"
  />

  <div className="relative z-10">
    <h3 className="text-lg sm:text-xl font-semibold mb-2 bg-gradient-to-r from-[#003630] to-[#00C896] bg-clip-text text-transparent">
      Take the quiz (3–5 minutes)
    </h3>
    <p className="text-gray-600 text-sm sm:text-base">
      Answer a few quick questions to discover your builder type.
    </p>
  </div>
</div>


              {/* <img
                src={Line1}
                alt=""
                className="hidden sm:block absolute top-26 left-1/3 transform -translate-x-1/2 w-24 lg:w-36"
              /> */}

              {/* Step 2 */}
              <div className="relative w-full flex-col-reverse max-w-[355px] mx-auto p-6 rounded-lg shadow-xl border-t-4 border-[#027D5F] cursor-pointer overflow-hidden">
  {/* Half-curve background vector */}
  <div className="absolute -top-10 -right-16 w-100 h-40 bg-gradient-to-br from-[#027D5F] to-[#9de0cf] rounded-full opacity-40 blur-2xl"></div>
                <img src={Image1} alt="Result" className="w-16 sm:w-20 mb-4 mx-auto lg:mx-0 lg:ml-auto" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 bg-gradient-to-r from-[#003630] to-[#00C896] bg-clip-text text-transparent">
                  See Your Builder Type Instantly
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Get your Builder Type result instantly.
                </p>
              </div>

              {/* <img
                src={Line2}
                alt=""
                className="hidden sm:block absolute top-26 right-1/3 transform translate-x-1/2 w-24 lg:w-36"
              /> */}

              {/* Step 3 */}
              <div className="relative w-full flex-col-reverse max-w-[355px] mx-auto p-6 rounded-lg shadow-xl border-t-4 border-[#FFDB51] cursor-pointer overflow-hidden">
  {/* Half-curve background vector */}
  <div className="absolute -top-10 -right-16 w-100 h-40 bg-gradient-to-br from-[#FFDB51] to-[#f5e6ad] rounded-full opacity-40 blur-2xl"></div>
                <img src={Pdf} alt="Blueprint" className="w-16 sm:w-20 mb-4 mx-auto lg:mx-0 lg:ml-auto" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 bg-gradient-to-r from-[#003630] to-[#00C896] bg-clip-text text-transparent">
                  Unlock Your Free In-Depth Builder Blueprint
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Unlock your free in-depth Builder Blueprint (Valued at $15).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ EXPLORE SECTION */}
       <section
  className="w-full bg-no-repeat bg-cover pb-10 lg:pb-0"
  style={{ backgroundImage: `url(${ExploreBackground})` }}
>
  <div className="max-w-[1440px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-36 px-4 sm:px-6 lg:px-10 py-0">
    {/* Text */}
    <div className="flex-1 text-center lg:text-left" >
      <p className="pb-4 bg-gradient-to-r from-[#003630] to-[#00C896] bg-clip-text text-transparent text-sm sm:text-base font-medium tracking-wide">
        → Builder Types
      </p>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-snug text-balance">
        Explore and Understand the Builder Types
      </h1>
      <p className="max-w-[478px] text-sm sm:text-base text-gray-600 md:text-gray-700 leading-relaxed">
        This isn't just a quiz. It's a clarity tool that reveals how you instinctively think, work, and build in
        the world across relationships, business, leadership, and life. The Builder Type Assessment
        helps you understand your dominant wiring so you can thrive in the roles and environments
        best suited to how you naturally function.
      </p>
      <div className="flex gap-4 mt-6 mx-auto md:mx-0 justify-center lg:justify-start">
        <Link to="/builder-types">
            <button className="bg-[#144559] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full hover:bg-[#0f3545] transition">
              Explore Types
            </button>
        </Link>
        <Link to="/quiz">
        <button className="flex items-center gap-2 px-6 py-2 sm:px-8 sm:py-3 border border-[#144559] text-[#144559] rounded-full hover:bg-[#144559] hover:text-white transition">
          Take Quiz <FaArrowRightLong className="text-lg mt-1" />
        </button>
        </Link>
       
      </div>
    </div>

    {/* Image */}
    <div className="flex-1 flex justify-center md:justify-end">
      <img
        src={Explore}
        alt="Explore"
        className="w-full max-w-[480px] h-auto object-contain"
      />
    </div>
  </div>
        </section>


        {/* ✅ TESTIMONIALS SECTION */}
       {/* <section className="py-16 md:py-12"> */}
        {/* <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <img src={Rating1} alt="Rating" className="mx-auto w-16 sm:w-20" />
          <p className="text-sm sm:text-base font-medium tracking-wide text-[#BF8000] mb-2">
            Testimonials
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold mb-8 text-[#144559]">
            See What Our Users Are Saying
          </h2> */}

          {/* <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            className="pb-12"
          > */}
            {/* {["Robert Fox", "Darrell Steward", "Savannah Nguyen"].map((name, i) => (
              <SwiperSlide key={i}>
                <div className="bg-[#F2F2F7] p-8 rounded-2xl shadow text-center cursor-pointer">
                  <h4 className="font-semibold text-[#144559] pb-4">{name}</h4>
                  <hr className="mb-4 border-t border-[#231F20]" />
                  <p className="text-[#303030] text-sm">
                    Amazing! Reading my results felt like looking into a crystal-clear
                    reflection of myself. I didn’t think it would be this precise.
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper> */}

          {/* ✅ Pagination visible on all screens */}
          {/* <div className="flex flex-col items-center mt-6 space-y-3">
            <div
              className="swiper-pagination !relative !flex justify-center gap-2"
              style={{ marginBottom: "20px" }}
            /> */}

            {/* ✅ Arrows visible ONLY on large screens */}
            {/* <div className="hidden lg:flex items-center gap-6">
              <button className="custom-prev bg-[#144559] text-white p-3 rounded-full hover:bg-[#0f3545] transition">
                <FaChevronLeft />
              </button>
              <button className="custom-next bg-[#144559] text-white p-3 rounded-full hover:bg-[#0f3545] transition">
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div> */}
      {/* </section> */}


        {/* ✅ DISCOVER SECTION */}
        <section
          className="w-full lg:bg-contain bg-center bg-no-repeat text-white py-20 px-6"
          style={{ backgroundImage: `url(${Discover})` }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#FFDB51]">
              Discover how you’re wired today
            </h2>
            <p className="text-[16px] leading-relaxed mb-8">
             Builder Types reveal the unique way you’re designed to think, lead, and create impact.
            </p>
            <Link to="/quiz">
              <button className="bg-[#FFDB51] font-bold text-[#0f3340] px-12 py-3 rounded-full hover:bg-[#cfaa14] transition">
              Take Quiz
              </button>
            </Link>
          </div>
        </section>

        {/* ✅ FOOTER */}
        <footer className="w-full bg-white text-[#0f3340] py-4">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-8 md:px-20">
            <img src={LogoImage} alt="Logo" className="h-20 w-auto" />
            <p className="text-sm md:text-base text-center">
              2025 © All rights reserved by{" "}
              <span className="font-semibold">Builder Types</span>
            </p>
            <div className="flex gap-4 text-lg">
              <a href="#" className="hover:text-gray-400">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaTwitter />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default HomePage;
