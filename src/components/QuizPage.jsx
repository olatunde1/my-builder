import React, { useState, useCallback, useEffect } from 'react';
import questions from '../data/questions';
import Question from './Question';
import SubmitLaptop from '../assets/submit laptop.png';
import SubmitMobile from '../assets/mobile2.png'; 
import { send } from 'emailjs-com';
import ResultPage from './Result';
import builderResults from './builderResults';

const EMAILJS_CONFIG = {
  serviceId: 'service_0rrj39h',
  templateId: 'template_iiayum8',
  userId: '7HdPKeyASopVKsTig'
};

const builderPdfLinks = {
  Visionary: 'https://drive.google.com/uc?export=download&id=12n3WJdY9stBaT_pj6q-xVyluPbOzYC_b',
  Architect: 'https://drive.google.com/uc?export=download&id=1scRTY8opo24YE9ke7PIJKWEgLqWLeRL7',
  Strategist: 'https://drive.google.com/uc?export=download&id=19WoYZqE8yxkm1UlYZG4gchOA3LUnqyXV',
  Connector: 'https://drive.google.com/uc?export=download&id=1BYdf1zifKozVTFp_N4GYoqzkA2GdtwQa',
  Operator: 'https://drive.google.com/uc?export=download&id=1BXVhedNl9TP6Mn5ewtEOCeKsdY_zZN07',
};

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const useResultCalculator = () =>
  useCallback((answers) => {
    const count = answers.reduce((acc, trait) => {
      acc[trait] = (acc[trait] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(count).sort((a, b) => b[1] - a[1])[0]?.[0] || null;
  }, []);

const QuizPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [allAnswers, setAllAnswers] = useState([]);
  const [userInfo, setUserInfo] = useState({ name: '', email: '', gender: '' });
  const [dominantTrait, setDominantTrait] = useState(null);
  const [status, setStatus] = useState({ loading: false, error: null, success: null });
  const [formErrors, setFormErrors] = useState({});
  const calculateResult = useResultCalculator();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('quizProgress');
    if (saved) {
      const { index, answers } = JSON.parse(saved);
      setCurrentIndex(index);
      setAllAnswers(answers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('quizProgress', JSON.stringify({
      index: currentIndex,
      answers: allAnswers
    }));
  }, [currentIndex, allAnswers]);

  const handleNext = (selectedOption) => {
    if (!selectedOption) return;
    setAllAnswers((prev) => [...prev, selectedOption]);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setShowForm(true);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setAllAnswers((prev) => prev.slice(0, -1));
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!userInfo.name.trim()) errors.name = 'Name is required';
    if (!userInfo.email) errors.email = 'Email is required';
    else if (!validateEmail(userInfo.email)) errors.email = 'Please enter a valid email';
    // if (!userInfo.gender) errors.gender = 'Please select your gender';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = async (params) => {
    const resultData = builderResults[params.trait];
    const pdfLink = builderPdfLinks[params.trait];

    try {
      await send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          name: params.name,
          email: params.email,
          results: resultData?.header || "Unknown",
          emailBody: resultData?.emailBody || "",
          emailBody2: resultData?.emailBody2 || "",
          header2: resultData?.header2 || "",
          descriptionHeader2: resultData?.descriptionHeader2 || "",
          header3: resultData?.header3 || "",
          emailBody3: resultData?.emailBody3 || "",
          header4: resultData?.header4 || "",
          emailBody4: resultData?.emailBody4 || "",
          header5: resultData?.header5 || "",
          emailBody5: resultData?.emailBody5 || "",
          header6: resultData?.header6 || "",
          emailBody6: resultData?.emailBody6 || "",
          header7: resultData?.header7 || "",
          emailBody7: resultData?.emailBody7 || "",
          header8: resultData?.header8 || "",
          emailBody8: resultData?.emailBody8 || "",
          pdfLink: pdfLink || "Not available"
        },
        EMAILJS_CONFIG.userId
      );
      return true;
    } catch (error) {
      console.error('EmailJS Error:', error);
      throw new Error('Failed to send email');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setStatus({ loading: true, error: null, success: null });

    try {
      const resultTrait = calculateResult(allAnswers);
      setDominantTrait(resultTrait);

      await sendEmail({
        name: userInfo.name,
        email: userInfo.email,
        // gender: userInfo.gender,
        trait: resultTrait,
        resultText: builderResults[resultTrait]?.description || "No detailed result available."
      });

      // Send to Google Sheet via SheetDB
    await fetch('https://sheetdb.io/api/v1/mib913r4s0ude', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: {
          name: userInfo.name,
          email: userInfo.email,
          builderType: resultTrait,
          // gender: userInfo.gender,
          submittedAt: new Date().toLocaleString()
        }
      })
    });


      setStatus({ loading: false, error: null, success: true });

      setTimeout(() => {
        setShowForm(false);
        setShowResult(true);
        localStorage.removeItem('quizProgress');
      }, 1500);
    } catch {
      setStatus({ loading: false, error: 'Something went wrong. Please try again.', success: null });
    }
  };

  if (showResult) {
    return (
      <ResultPage
        name={userInfo.name}
        builderType={dominantTrait}
        result={builderResults[dominantTrait] || {}}
        onRestart={() => {
          setCurrentIndex(0);
          setAllAnswers([]);
          setShowResult(false);
          setUserInfo({ name: '', email: '', gender: '' });
        }}
      />
    );
  }

  if (showForm) {
    return (
    <div
  className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center bg-[#f9fafb]"
>
  {/* Left Side Image (only visible on large screens) */}
  {/* <div className="hidden lg:flex w-1/2 h-full items-center justify-center bg-[#eaf3f6]">
    <img
      src={SubmitLaptop}
      alt="Builder Laptop Illustration"
      className="max-w-[80%] h-auto object-contain"
    />
  </div> */}

  {/* Right Side Form */}
  <div
    className="flex flex-col justify-center items-center w-full lg:w-1/2 px-8 sm:px-10 py-10 text-center bg-cover bg-center"
    style={{
      backgroundImage: isMobile ? `url(${SubmitMobile})` : "none",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="bg-white shadow-xl rounded-2xl p-8 sm:p-10 w-full max-w-lg">
      <h1 className="sm:text-2xl font-bold mb-4 text-[#144559]">
        Your Builder Type is almost ready…
      </h1>
      <p className="text-gray-700 mb-8">
        Enter your email to see your results and unlock your free Builder Blueprint.
      </p>

      <form onSubmit={handleSubmit} className="w-full grid gap-6 text-left">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block font-semibold mb-2 text-black">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={userInfo.name}
            onChange={handleFormChange}
            placeholder="Enter your Name"
            className="w-full px-4 py-3 bg-[#F2F2F7] rounded-xl outline-none border border-[#d1d5db] focus:border-[#00796B]"
            maxLength={50}
          />
          {formErrors.name && (
            <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-semibold mb-2 text-black">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={userInfo.email}
            onChange={handleFormChange}
            placeholder="Enter your Email"
            className="w-full px-4 py-3 bg-[#F2F2F7] rounded-xl outline-none border border-[#d1d5db] focus:border-[#00796B]"
          />
          {formErrors.email && (
            <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
          )}
        </div>

        {/* Status Feedback */}
        {status.error && (
          <p className="text-red-600 text-sm font-semibold text-center">
            {status.error}
          </p>
        )}
        {status.success && (
          <p className="text-green-600 text-sm font-semibold text-center">
            Submission successful! Check your email for your full test result.
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status.loading}
          className="bg-[#144559] text-white py-4 rounded-full font-semibold mt-4 w-full transition duration-300 hover:scale-105"
        >
          {status.loading ? 'Submitting...' : 'Unlock My Result'}
        </button>

        {/* Bonus Section */}
        <h2 className=" sm:text-2xl font-bold mb-2 mt-6 text-[#144559]">
          Your free Builder Blueprint includes:
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>A full breakdown of your Builder Type (traits, strengths, and blind spots).</li>
          <li>How you’re wired to think, work, lead, and collaborate.</li>
          <li>Real-world examples and growth strategies.</li>
          <li>A simple action plan to get unstuck and build with confidence.</li>
        </ul>

        <p className="italic mt-4 text-gray-700">
          Your privacy is protected. No spam. Just your results and your free PDF.
        </p>

        <p className="mt-2 text-gray-600">
          You’ll also receive a quick follow-up to share your feedback — it’ll help shape the future of this experience.
        </p>
      </form>
    </div>
  </div>
</div>

    );
  }

  return (
    <Question
      questionData={questions[currentIndex]}
      currentPage={currentIndex + 1}
      totalPages={questions.length}
      onNext={handleNext}
      onPrevious={handlePrevious}
      selectedAnswer={allAnswers[currentIndex]}
      setAnswer={(trait) => {
        const updated = [...allAnswers];
        updated[currentIndex] = trait;
        setAllAnswers(updated);
      }}
    />
  );
};

export default QuizPage;
