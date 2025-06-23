import React, { useState, useCallback, useEffect } from 'react';
import questions from '../data/questions';
import Question from './Question';
import SubmitLaptop from '../assets/submit laptop.png';
import { send } from 'emailjs-com';
import ResultPage from './Result';
import builderResults from './builderResults';

const EMAILJS_CONFIG = {
  serviceId: 'service_2rwyzs2',
  templateId: 'template_h9dvkvd',
  userId: '9qtOtPERVwY1uiSOH'
};

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const useResultCalculator = () => {
  return useCallback((answers) => {
    const count = answers.reduce((acc, trait) => {
      acc[trait] = (acc[trait] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(count).sort((a, b) => b[1] - a[1])[0]?.[0] || null;
  }, []);
};

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

  useEffect(() => {
    const savedProgress = localStorage.getItem('quizProgress');
    if (savedProgress) {
      const { index, answers } = JSON.parse(savedProgress);
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
      setFormErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!userInfo.name.trim()) {
      errors.name = 'Name is required';
    } else if (userInfo.name.length > 50) {
      errors.name = 'Name must be less than 50 characters';
    }
    if (!userInfo.email) {
      errors.email = 'Email is required';
    } else if (!validateEmail(userInfo.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!userInfo.gender) {
      errors.gender = 'Please select your gender';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

 const sendEmail = async (params) => {
  const resultData = builderResults[params.trait];
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
        descriptionHeader2:  resultData?.descriptionHeader2 || "",
        header3:  resultData?.header3 || "",
        emailBody3: resultData?.emailBody3 || "",
        header4:  resultData?.header4 || "",
        emailBody4: resultData?.emailBody4|| "",
        header5:  resultData?.header5 || "",
        emailBody5: resultData?.emailBody5 || "",
        header6:  resultData?.header6 || "",
        emailBody6:  resultData?.emailBody6 || "",
        header7:  resultData?.header7 || "",
        emailBody7: resultData?.emailBody7 || "",
        header8:  resultData?.header8 || "",
        emailBody8:  resultData?.emailBody8 || "",
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
      setStatus({ loading: false, error: null, success: true });
      setTimeout(() => {
        setShowForm(false);
        setShowResult(true);
        localStorage.removeItem('quizProgress');
      }, 1500);
    } catch (err) {
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
        className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-10 text-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${SubmitLaptop})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="bg-opacity-90 p-6 sm:p-8 rounded-xl max-w-md w-full">
          <h2 className="text-2xl md:text-2xl font-bold mb-4 sm:mb-6 pt-10 pb-3 text-[#144559]">
            Help us know who you are
          </h2>
          <form onSubmit={handleSubmit} className="w-full grid gap-6 sm:gap-6 text-left">
            <div>
              <label htmlFor="name" className="block font-semibold mb-2 text-black">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={userInfo.name}
                onChange={handleFormChange}
                placeholder="Enter your Name here"
                className="w-full px-4 py-4 bg-[#F2F2F7] rounded-t-2xl border-none border-b-4 outline-none focus:ring-0"
                style={{
                  borderImage: 'linear-gradient(90deg, #00796B 0%, #009688 35%, #FF7043 70%, #FFAB91 100%) 1',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '2px'
                }}
                maxLength={50}
              />
              {formErrors.name && (
                <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
              )}
            </div>

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
                placeholder="Enter your Email here"
                className="w-full px-4 py-4 bg-[#F2F2F7] rounded-t-2xl border-none border-b-2 outline-none focus:ring-0"
                style={{
                  borderImage: 'linear-gradient(90deg, #00796B 0%, #009688 35%, #FF7043 70%, #FFAB91 100%) 1',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '2px'
                }}
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
              )}
            </div>

            <div className="relative">
              <label htmlFor="gender" className="block font-semibold mb-2 text-black">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={userInfo.gender}
                onChange={handleFormChange}
                className="w-full px-4 py-4 bg-[#F2F2F7] rounded-t-2xl border-none border-b-4 outline-none appearance-none pr-10"
                style={{
                  borderImage: 'linear-gradient(90deg, #00796B 0%, #009688 35%, #FF7043 70%, #FFAB91 100%) 1',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '2px'
                }}
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {formErrors.gender && (
                <p className="text-red-500 text-sm mt-1">{formErrors.gender}</p>
              )}
            </div>

            {status.error && (
              <p className="text-red-600 text-sm font-semibold text-center">
                {status.error}
              </p>
            )}
            {status.success && (
              <p className="text-green-600 text-sm font-semibold text-center">
                Submission successful! Check your email for your full result.
              </p>
            )}

            <button
              type="submit"
              disabled={status.loading}
              className="bg-[#144559] text-white py-4 px-6 mb-16 rounded-full font-semibold mt-4 w-full sm:w-40 mx-auto transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
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
  selectedAnswer={allAnswers[currentIndex]} // ✅ added
  setAnswer={(trait) => {
    const updated = [...allAnswers];
    updated[currentIndex] = trait;
    setAllAnswers(updated);
  }} // ✅ added
    />
  );
};

export default QuizPage;
