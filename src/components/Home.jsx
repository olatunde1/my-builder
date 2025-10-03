import React, { useEffect, useState } from "react";
import Laptop from "../assets/no-image-background.png";
import QuizImage from "../assets/bulb-image.png";
import { Link } from "react-router-dom";
import Pdf from "../assets/pdf-file 1.png"
import Image1 from "../assets/image 5.png"
import Quiz from "../assets/quiz.png"
import Line1 from "../assets/Line Indicator.png"
import Line2 from "../assets/Line Indicator 2.png"
import ExploreBackground from "../assets/explore background.png"
import Explore from "../assets/explore.png"
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Rating1 from "../assets/Rating.png"
import Discover from "../assets/how-you-are-wired-background.png"
// import Rating from "@/assets/images/rating.png"; // adjust path
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import LogoImage from "../assets/new-logo.png";

import { FaQuoteLeft } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Aos from "aos";
import "aos/dist/aos.css";
import { q } from "framer-motion/client";

const HomePage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

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
       
      >
        {/* HERO SESSION */}

        <div className="hero mt-10 relative px-4 sm:px-6 lg:px-8">
          <div  className="w-full max-w-[1240px] gap-16 mx-auto min-h-screen flex flex-col-1 px-20 bg-no-repeat "
        style={{
          backgroundImage: showBackground ? `url(${Laptop})` : "none",
          backgroundSize: "contain",
          // backgroundColor: "#144559",
          backgroundPosition: "center",
          height: "680px",
        }}>
          <div className="px-4 sm:px-0" data-aos="fade-up">
                <h1 className="text-4xl sm:text-7xl font-bold text-white mb-4 pt-[130px] leading-24">
                  Know Your Builder Type
                  {/* <span className="text-yellow-400">Builder Type</span> */}
                </h1>
                <p className="text-white text-xl pt-4">Discover how you’re wired to think, work, <br /> lead, and contribute.</p>
                {/* <p className="text-lg sm:text-xl text-white mb-6"> 
                  <TypeAnimation
                    sequence={[
                      "Discover how you’re wired to think,",
                      2000,
                      " work,",
                      2000,
                      "lead, and contribute.",
                      2000,
                  
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ display: "inline-block" }}
                  />
                </p> */}
            
          </div>
        <img src={QuizImage} alt="" className="w-[490px] h-[573px]  mt-[97px]" />
          </div>
         <Link
            to="/quiz"
            className="bg-[#AE4815] w-[420px] py-3 sm:py-6 absolute sm:left-32 sm:bottom-5 text-white px-6 rounded-full text-2xl font-semibold flex items-center justify-center gap-2 hover:bg-[#9a3909] transition duration-300"
          >
            Take the Quiz <FaArrowCircleRight className="text-4xl" />
          </Link>

        </div>
      
      {/* Start in Three Steps */}
      <div className="start">
        <div className="max-w-[1240px]  text-center px-4 sm:px-0 py-16">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-[#144559]">
            Start in <span className="text-[#AE4815]">Three</span> Steps
          </h2>
          {/* <p className="text-lg text-gray-600 mt-4">It only takes 10 minutes to get your results</p> */}

          {/* Steps Grid */}
          <div className="grid sm:grid-cols-3 gap-12 mt-12 relative">
            {/* Step 1 */}
            <div
              className="w-full max-w-[255px] mx-auto p-2 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="mb-4">
                <img src={Quiz} alt="Quiz" className="mx-auto w-16 sm:w-20" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 bg-gradient-to-r from-[#003630] to-[#00C896] bg-clip-text text-transparent">
                Take the quiz (3–5 minutes)
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Answer a few quick questions to discover your builder type.
              </p>
            </div>

            {/* Line Connector (hidden on mobile) */}
            <img
              src={Line1}
              alt=""
              className="hidden sm:block absolute top-26 left-1/3 transform -translate-x-1/2 w-24 lg:w-36"
            />

            {/* Step 2 */}
            <div
              className="w-full max-w-[255px] mx-auto p-2 sm:p-0 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="mb-4">
                <img src={Image1} alt="Result" className="mx-auto w-16 sm:w-20" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 bg-gradient-to-r from-[#003630] to-[#00C896] bg-clip-text text-transparent">
                See Your Builder Type Instantly
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Get your Builder Type result instantly.
              </p>
            </div>

            {/* Line Connector (hidden on mobile) */}
            <img
              src={Line2}
              alt=""
              className="hidden sm:block absolute top-26 right-1/3 transform translate-x-1/2 w-24 lg:w-36"
            />

            {/* Step 3 */}
            <div
              className="w-full max-w-[255px] mx-auto  rounded-lg"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="mb-4">
                <img src={Pdf} alt="Blueprint" className="mx-auto w-16 sm:w-20" />
              </div>
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
                      
      {/* EXPLORE SECTION */}
      <section
        className="w-full bg-no-repeat bg-contain "
        style={{
          backgroundImage: showBackground ? `url(${ExploreBackground})` : "none",
        }}
      >
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-36 px-4 sm:px-6 lg:px-10">
          {/* Text Section */}
          <div className="flex-1" data-aos="fade-up">
            <p className="pb-4 bg-gradient-to-r from-[#003630] to-[#00C896] bg-clip-text text-transparent text-sm sm:text-base font-medium tracking-wide">
              → Personality Types
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-snug sm:leading-tight md:leading-[2.5rem] lg:leading-[3rem] text-balance">
              Explore and Understand other Builder Types
            </h1>

            <p className="max-w-[478px] sm:max-w-lg w-full text-sm sm:text-base text-gray-600 md:text-gray-700 leading-relaxed">
              Through our complimentary personality profiles, you'll discover the core
              motivations, sources of inspiration, and concerns that shape each
              personality type, enabling you to form deeper and more authentic connections
              with others.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <button
                aria-label="Explore Builder Types"
                className="bg-[#144559] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full transition-colors duration-300 hover:bg-[#0f3545] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#144559]"
              >
                Explore Types
              </button>

              <button
                aria-label="Take Quiz"
                className="flex items-center gap-2 px-6 py-2 sm:px-8 sm:py-3 border border-[#144559] text-[#144559] rounded-full font-medium transition-colors duration-300 hover:bg-[#144559] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#144559]"
              >
                Take Quiz <FaArrowRightLong className="text-lg mt-1" />
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src={Explore}
              alt="Explore Personality Types"
              className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[480px] h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
    <section className="py-16 md:py-12">
  <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
    {/* Heading */}
    <img src={Rating1} alt="" className="mx-auto w-16 sm:w-20"/>
    <p className="text-sm sm:text-base font-medium tracking-wide text-[#BF8000] mb-2">
      Testimonials
    </p>
    <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold mb-18 text-[#144559]">
      See What Our Users Are Saying
    </h2>

    {/* Swiper */}
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      breakpoints={{
        320: { slidesPerView: 1 }, // mobile
        640: { slidesPerView: 2 }, // small/medium
        1024: { slidesPerView: 3 }, // large screens
      }}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      pagination={{ el: ".swiper-pagination", clickable: true }}
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      className="pb-12"
    >
      {/* Slides */}
      <SwiperSlide>
        <div className="bg-[#F2F2F7] p-8 rounded-2xl shadow text-center cursor-pointer">
          <h4 className="font-semibold text-[#144559] pb-4">Robert Fox</h4>
          <hr className="mb-4 border-t border-[#231F20]" />
          <p className="text-[#303030] text-sm">
            Amazingly accurate and eye-opening — it felt like the test was reading my mind and revealing the parts of me I never say out loud.
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="bg-[#F2F2F7] p-8 rounded-2xl shadow text-center cursor-pointer">
          <h4 className="font-semibold text-[#144559] pb-4">Darrell Steward</h4>
          <hr className="pb-4 border-t border-[#231F20]" />
          <p className="text-[#303030] text-sm">
            I’m amazed! The accuracy was almost scary, but also comforting. It
            felt like true validation — like someone finally understood me.
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="bg-[#F2F2F7] p-8 rounded-2xl shadow text-center cursor-pointer">
          <h4 className="font-semibold text-[#144559] pb-4">Savannah Nguyen</h4>
          <hr className="mb-4 border-t border-[#231F20]" />
          <p className="text-[#303030] text-sm">
            Amazing! Reading my results felt like looking into a crystal-clear reflection of myself. I didn’t think it would be this precise.
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="bg-[#F2F2F7] p-8 rounded-2xl shadow text-center cursor-pointer">
          <h4 className="font-semibold text-[#144559] pb-4">Savah Nguyen</h4>
          <hr className="mb-4 border-t border-[#231F20]" />
          <p className="text-[#303030] text-sm">
            Amazing! Reading my results felt like looking into a crystal-clear reflection of myself. I didn’t think it would be this precise.
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="bg-[#F2F2F7] p-8 rounded-2xl shadow text-center cursor-pointer">
          <h4 className="font-semibold text-[#144559] pb-4">Savah Nguyen</h4>
          <hr className="mb-4 border-t border-[#231F20]" />
          <p className="text-[#303030] text-sm">
            Amazing! Reading my results felt like looking into a crystal-clear reflection of myself. I didn’t think it would be this precise.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>

    {/* Pagination Dots + Navigation Arrows */}
    <div className="flex flex-col items-center mt-6 space-y-3">
      {/* Dots */}
      <div className="swiper-pagination !relative !flex justify-center gap-2"
      style={{ marginBottom: "20px" }}
      />

      {/* Arrows */}
      <div className="flex items-center gap-18">
        <button className="custom-prev bg-[#144559] text-white p-2 rounded-full hover:bg-[#0f3545] transition">
          <FaChevronLeft />
        </button>
        <button className="custom-next bg-[#144559] text-white p-2 rounded-full hover:bg-[#0f3545] transition">
          <FaChevronRight />
        </button>
      </div>
    </div>
  </div>
    </section>

      {/*DISCOVER HOW YOUR'RE WIRED  */}
    <section
      className="w-full bg-contain bg-center bg-no-repeat text-white py-10 px-6"
      style={{ backgroundImage: `url(${Discover})` }}
    >
      {/* Overlay (optional for better readability) */}
      {/* <div className="absolute inset-0 bg-black/50"></div> */}

      <div className=" max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#FFDB51]">
          Discover how you’re wired today
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-8">
          This isn't just a quiz. It's a clarity tool that reveals how you instinctively think,
          work, and build in the world — across relationships, business, leadership, and life.
          The Builder Type Assessment helps you understand your dominant wiring so you can thrive
          in the roles and environments best suited to how you naturally function.
        </p>
        <button className="bg-[#FFDB51] font-bold text-[#0f3340] px-12 py-3 rounded-full hover:bg-[#cfaa14]  transition">
          Take Quiz
        </button>
      </div>
    </section>

      {/* FOOTER */}
    <footer className="w-full bg-white text-[#0f3340] py-2">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-20">
      
      {/* Logo */}
      <div className="flex items-center">
        <img src={LogoImage} alt="Builder Types Logo" className="h-24 w-auto" />
      </div>

      {/* Copyright */}
      <p className="text-sm md:text-base text-center">
        2025 © All rights reserved by <span className="font-semibold">Builder Types</span>
      </p>

      {/* Social Icons */}
      <div className="flex gap-4 text-lg">
        <a href="#" className="hover:text-gray-300">
          <FaFacebookF />
        </a>
        <a href="#" className="hover:text-gray-300">
          <FaInstagram />
        </a>
        <a href="#" className="hover:text-gray-300">
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
