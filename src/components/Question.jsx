import React, { useState, useEffect } from 'react';
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
    <svg height={radius * 2} width={radius * 2} className="absolute top-24 left-52 z-10">
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
  const [shuffledOptions, setShuffledOptions] = useState([]);

  // Fisher-Yates Shuffle
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Reset selection & shuffle options when question changes
  useEffect(() => {
    setSelectedOption(null);
    if (questionData?.options) {
      setShuffledOptions(shuffleArray(questionData.options));
    }
  }, [questionData]);

  useEffect(() => {
    AOS.init();
  }, []);

  if (!questionData) return null;

  const {
    backgroundImage,
    textColor = "#000",
    buttonBgColor = "#960018",
    buttonTextColor = "#fff"
  } = questionData.style || {};

  return (
    <div
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-10 mt-21"
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
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-xl font-semibold mb-5" style={{ color: textColor }}>
          Question {currentPage}/{totalPages}
        </h2>
        <h1
          className="text-2xl sm:text-2xl font-bold mt-2 w-[400px] mb-7"
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
      <form className="w-full max-w-[466px] grid gap-3 text-left mb-16">
        {shuffledOptions.map((option, index) => (
          <label
            key={index}
            className="flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer shadow-md border w-full"
            style={{
              backgroundColor:
                selectedOption === option.trait ? buttonBgColor : 'white',
              color:
                selectedOption === option.trait ? buttonTextColor : textColor,
              borderColor: textColor
            }}
          >
            <input
              type="radio"
              name="answer"
              value={option.trait}
              checked={selectedOption === option.trait}
              onChange={() => setSelectedOption(option.trait)}
              className="accent-[#8E8E93]"
            />
            <span className="font-medium">{option.text}</span>
          </label>
        ))}
      </form>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center w-full max-w-[788px] top-[520px] absolute px-4">
        <button
          onClick={onPrevious}
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
    </div>
  );
};

export default Question;
