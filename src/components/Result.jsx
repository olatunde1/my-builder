// src/components/ResultPage.jsx
import React from 'react';
import builderResults from './builderResults';
import facebook from '../assets/facebook.png';
import linkedin from '../assets/linkdeln.png';
import instagram from '../assets/instagram.png';

const ResultPage = ({ builderType }) => {
  const result = builderResults[builderType];

  if (!result) {
    return (
      <div className="text-center p-10">
        <h2 className="text-2xl font-bold text-red-500">Oops! Unknown Builder Type</h2>
        <p>Please retake the quiz or check your result.</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#9C1C2F] text-white px-6 md:px-20 py-16 flex flex-col lg:flex-row gap-10 animate-fade-in">
      
      {/* LEFT CONTENT */}
      <div className="flex-1 space-y-5">
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
            background: "linear-gradient(135deg, rgba(255,255,255,0.25), rgba(224,224,224,0.1))",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.3)"
          }}
        >
          <p className="text-lg font-bold">Share Your Builder Identity?</p>
          <p className="text-sm mt-2">
            I’m a Visionary Builder. Purpose-driven, fast-thinking, and full of ideas. This quiz NAILED me. What’s your Builder Type?
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
      <div className="flex-1 flex flex-col items-start">
        <img
          src={result.image}
          alt={result.title}
          className="w-full max-w-[600px] h-auto rounded-xl shadow-lg mb-6 object-cover"
        />
        <p className="text-sm text-gray-300 mb-4">{result.hashtags}</p>
        <button className="bg-[#144559] text-white py-3 px-6 rounded-full font-semibold shadow-md hover:scale-105 transition">
          {result.buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default ResultPage;
