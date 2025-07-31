import React, { useState, useCallback, useEffect } from 'react';
import questions from '../data/questions';
import Question from './Question';
import SubmitLaptop from '../assets/submit laptop.png';
import SubmitMobile from '../assets/mobile2.png'; 
import { send } from 'emailjs-com';
import ResultPage from './Result';
import builderResults from './builderResults';

const EMAILJS_CONFIG = {
  serviceId: 'service_2rwyzs2',
  templateId: 'template_h9dvkvd',
  userId: '9qtOtPERVwY1uiSOH'
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
    if (!userInfo.gender) errors.gender = 'Please select your gender';
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
        gender: userInfo.gender,
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
          gender: userInfo.gender,
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
        className="w-full min-h-screen flex flex-col items-center sm:justify-center px-4 py-5 sm:py-10 text-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${isMobile ? SubmitMobile : SubmitLaptop})`,
          backgroundSize: isMobile ? 'cover' : 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="bg-opacity-90 p-6 sm:p-8 rounded-xl max-w-md w-full">
          <h2 className="text-[20px] sm:text-2xl font-bold mb-8 sm:mb-6 text-[#144559]">
            Help us know who you are
          </h2>
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
                className="w-full px-4 py-4 bg-[#F2F2F7] rounded-t-2xl border-none border-b-2 outline-none"
                style={{ borderBottom: '2px solid #00796B' }}
                maxLength={50}
              />
              {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
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
                className="w-full px-4 py-4 bg-[#F2F2F7] rounded-t-2xl border-none border-b-2 outline-none"
                style={{ borderBottom: '2px solid #00796B' }}
              />
              {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
            </div>

            {/* Gender */}
            <div>
              <label htmlFor="gender" className="block font-semibold mb-2 text-black">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={userInfo.gender}
                onChange={handleFormChange}
                className="w-full px-4 py-4 bg-[#fefefe] rounded-t-2xl border-none border-b-2 outline-none"
                style={{ borderBottom: '2px solid #00796B' }}
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {formErrors.gender && <p className="text-red-500 text-sm mt-1">{formErrors.gender}</p>}
            </div>

            {/* Submission Feedback */}
            {status.error && <p className="text-red-600 text-sm font-semibold text-center">{status.error}</p>}
            {status.success && <p className="text-green-600 text-sm font-semibold text-center">Submission successful! Check your email for your full test result.</p>}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status.loading}
              className="bg-[#144559] text-white py-4 rounded-full mx-auto font-semibold mt-4 w-full sm:w-1/2 transition duration-300 hover:scale-105"
            >
              {status.loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
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
