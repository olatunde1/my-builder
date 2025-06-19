import React from 'react';
import builderResults from './builderResults';
import facebook from '../assets/facebook.png';
import linkedin from '../assets/linkdeln.png';
import instagram from '../assets/instagram.png';

const ResultPage = ({ builderType }) => {
  const result = builderResults[builderType];

  const bgColorMap = {
    Visionary: '#9C1C2F',
    Strategist: '#12776D',
    Architect: '#4C5A77',
    Operator: '#29557D',
    Connector: '#DA5A1A',
  };

  const backgroundColor = bgColorMap[builderType] || '#000'; // fallback color

  if (!result) {
    return (
      <div className="text-center p-10">
        <h2 className="text-2xl font-bold text-[#9C1C2F]">Oops! Unknown Builder Type</h2>
        <p>Please retake the quiz or check your result.</p>
      </div>
    );
  }

  return (
    <div
      className="w-full min-h-screen text-white px-6 md:px-20 py-16 flex flex-col lg:flex-row gap-10 animate-fade-in"
      style={{ backgroundColor }}
    >
      {/* LEFT CONTENT */}
      <div className="flex-1 space-y-5 w-[550px]">
        <h1 className="text-3xl md:text-5xl font-bold">{result.title}</h1>
        <h2 className="text-xl font-semibold">{result.subtitle}</h2>
        <blockquote className="italic text-lg">{result.quote}</blockquote>

        <p className="text-xl font-semibold mt-8">{result.tagline}</p>
        <p className="text-base whitespace-pre-line leading-relaxed">{result.description}</p>

        <p className="text-xl font-semibold mt-8">{result.tagline2}</p>
        <div
          className="text-sm whitespace-pre-line leading-relaxed"
          dangerouslySetInnerHTML={{ __html: result.details }}
        />

        {/* Identity Share Box */}
        <div
          className="mt-8 p-5 rounded-2xl shadow-xl"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.25), rgba(224,224,224,0.1))',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
          }}
        >
          <p className="text-lg font-bold">Share Your Builder Identity?</p>
          <p className="text-sm mt-2">
            I’m a {builderType} Builder. Purpose-driven, fast-thinking, and full of ideas. This quiz NAILED me. What’s your Builder Type?
          </p>
          <blockquote className="italic text-xs text-gray-200 mt-2">{result.hashtags}</blockquote>

          <div className="flex items-center gap-3 mt-4">
            <img src={facebook} alt="Facebook" className="w-6 h-6 hover:scale-110 transition" />
            <img src={instagram} alt="Instagram" className="w-6 h-6 hover:scale-110 transition" />
            <img src={linkedin} alt="LinkedIn" className="w-6 h-6 hover:scale-110 transition" />
          </div>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex-1 flex flex-col items-start w-[640px]">
        <img
          src={result.image}
          alt={result.title}
          className="w-full max-w-[640px] h-auto rounded-xl shadow-lg mb-6 object-cover"
        />

        <div className="bg-white text-black py-6 px-6 rounded-xl shadow-lg w-full">
          <div className="flex gap-4 items-start">
            {/* Placeholder Icon Box */}
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
              style={{ backgroundColor }}
            >
              <span>i</span>
            </div>

            <div className="flex flex-col">
              <p className="font-bold mb-1" style={{ color: backgroundColor }}>
                {result.buttonLabel}
              </p>
              <p className="text-[#303030] text-[16px] leading-relaxed">
                {result.cta} This exclusive 10+ page guide will help you make smarter moves,
                avoid common traps, and build with confidence.
                <span>
                  {' '}
                  <a href="#" className="underline hover:opacity-80 transition" style={{ color: backgroundColor }}>
                    Click here
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
