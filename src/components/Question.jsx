import React, { useState, useEffect, useMemo } from 'react';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CircularProgress = ({ current, total, color = "#960018" }) => {
  const radius = 30;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const progress = current / total;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <svg
      height={radius * 2}
      width={radius * 2}
      className="absolute top-26 sm:top-32 left-1 sm:left-42 z-1 block sm:block mt-2"
    >
      <circle stroke="#ccc" fill="transparent" strokeWidth={stroke} r={normalizedRadius} cx={radius} cy={radius} />
      <circle
        stroke={color}
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.5s ease' }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <text x="50%" y="54%" textAnchor="middle" fill={color} fontSize="12px" fontWeight="bold">
        {current}/{total}
      </text>
    </svg>
  );
};

const Question = ({
  questionData,
  currentPage,
  totalPages,
  onNext,
  onPrevious
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    setSelectedOption(selectedAnswers[currentPage] || null);
  }, [currentPage]);

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const shuffledOptions = useMemo(() => {
    if (questionData?.options) {
      return shuffleArray(questionData.options);
    }
    return [];
  }, [questionData?.question]);

  if (!questionData) return null;

  const {
    backgroundImage,
    textColor = "#000",
    buttonBgColor = "#960018",
    buttonTextColor = "#fff"
  } = questionData.style || {};

  const handleOptionSelect = (trait) => {
    setSelectedOption(trait);
    setSelectedAnswers((prev) => ({ ...prev, [currentPage]: trait }));

    if (window.innerWidth < 640) {
      setTimeout(() => {
        onNext(trait);
      }, 300);
    }
  };

  return (
    <div
      className="relative w-full sm-block min-h-screen h-[832px] flex flex-col items-center justify-center px-4 sm:px-6 py-10 pb-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Circular Progress */}
      <CircularProgress current={currentPage} total={totalPages} color={textColor} />

      {/* Question Header */}
      <div
        className="flex flex-col items-center justify-center text-center pt-24 sm:pt-16 pb-6 sm:pb-10 px-4 sm:px-6 w-full max-w-[788px] mx-auto"
        style={{ minHeight: 120 }}
      >
        <h2 className="text-xl font-semibold mb-3 sm:mb-5" style={{ color: textColor }}>
          Question {currentPage}/{totalPages}
        </h2>
        <h1
          className="text-1xl sm:text-2xl font-bold sm:w-[500px] px-4 text-center"
          style={{ color: textColor }}
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1000"
        >
          {questionData.question}
        </h1>
      </div>

      {/* Options */}
      <form className="w-full max-w-[466px] grid gap-3 sm:gap-4 text-left mb-20 px-2 sm:px-0">
  {shuffledOptions.map((option, index) => (
    <label
      key={index}
      className={`flex items-center gap-3 px-4 py-3 sm:py-4 rounded-lg cursor-pointer shadow-sm sm:shadow-md border transition duration-200 w-full min-h-[56px] sm:min-h-[64px] ${
        selectedOption === option.trait ? 'active:scale-[0.98]' : 'active:scale-[0.99]'
      }`}
      style={{
        backgroundColor: selectedOption === option.trait ? buttonBgColor : 'white',
        color: selectedOption === option.trait ? buttonTextColor : textColor,
        borderColor: selectedOption === option.trait ? buttonBgColor : textColor,
        boxShadow: selectedOption === option.trait 
          ? `0 4px 6px -1px ${buttonBgColor}33, 0 2px 4px -2px ${buttonBgColor}33`
          : 'none'
      }}
    >
      <input
        type="radio"
        name="answer"
        value={option.trait}
        checked={selectedOption === option.trait}
        onChange={() => handleOptionSelect(option.trait)}
        className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 accent-[#8E8E93]"
      />
      <span className="font-medium text-sm sm:text-base break-words line-clamp-2 w-full">
        {option.text}
      </span>
    </label>
  ))}
</form>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex justify-between items-center sm:mb-10 w-full max-w-[788px] px-4 absolute sm:bottom-28">
        <button
          onClick={() => {
            onPrevious();
          }}
          disabled={currentPage === 1}
          className="w-12 h-12 flex items-center justify-center rounded-full disabled:opacity-50 text-2xl"
          style={{
            backgroundColor: buttonBgColor,
            color: buttonTextColor
          }}
        >
          <HiChevronLeft />
        </button>
        <button
          onClick={() => onNext(selectedOption)}
          disabled={!selectedOption}
          className="w-12 h-12 flex items-center justify-center rounded-full text-2xl disabled:opacity-50"
          style={{
            backgroundColor: buttonBgColor,
            color: buttonTextColor
          }}
        >
          <HiChevronRight />
        </button>
      </div>

      {/* Mobile Navigation Fixed */}
      <div className="sm:hidden absolute bottom-38 left-0 right-0 flex justify-center z-50">
        <div className="flex justify-between items-center w-full max-w-xs px-6">
          <button
            onClick={() => {
              onPrevious();
            }}
            disabled={currentPage === 1}
            className="w-10 h-10 flex items-center justify-center rounded-full disabled:opacity-50 text-xl"
            style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
          >
            <HiChevronLeft />
          </button>
          <button
            onClick={() => onNext(selectedOption)}
            disabled={!selectedOption}
            className="w-10 h-10 flex items-center justify-center rounded-full text-xl disabled:opacity-50"
            style={{ backgroundColor: selectedOption ? buttonBgColor : '#ccc', color: buttonTextColor }}
          >
            <HiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
