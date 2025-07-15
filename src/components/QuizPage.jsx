// QuizPage.jsx (updated with better ConvertKit error handling)
import React, { useState, useCallback, useEffect } from 'react';
import questions from '../data/questions';
import Question from './Question';
import SubmitLaptop from '../assets/submit laptop.png';
import SubmitMobile from '../assets/mobile2.png';
import ResultPage from './Result';
import builderResults from './builderResults';

const CONVERTKIT_CONFIG = {
  apiKey: '0Uf8FCUN2GjOchtXoAFiEA',
  formId: {
    Visionary: '3973346',
    Architect: '3976309',
    Strategist: '3976254',
    Connector: '3976924',
    Operator: '3976896'
  },
  apiUrl: 'https://api.convertkit.com/v3'
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
    localStorage.removeItem('quizProgress');
  }, []);

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
    else if (!validateEmail(userInfo.email)) errors.email = 'Invalid email';
    if (!userInfo.gender) errors.gender = 'Gender is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const subscribeToConvertKit = async (userData, resultTrait) => {
    const formId = CONVERTKIT_CONFIG.formId[resultTrait];
    
    // Debug logging
    console.log('Attempting ConvertKit subscription:', {
      resultTrait,
      formId,
      userData: { ...userData, email: 'HIDDEN' }
    });
    
    if (!formId) {
      throw new Error(`No form ID configured for trait: ${resultTrait}`);
    }

    const url = `${CONVERTKIT_CONFIG.apiUrl}/forms/${formId}/subscribe`;

    const body = {
      api_key: CONVERTKIT_CONFIG.apiKey,
      email: userData.email,
      first_name: userData.name,
      fields: {
        gender: userData.gender,
        quiz_result: resultTrait,
        builder_type: resultTrait
      },
      tags: [
        'quiz-completed',
        `builder-${resultTrait.toLowerCase()}`,
        `gender-${userData.gender.toLowerCase()}`
      ]
    };

    console.log('ConvertKit request URL:', url);
    console.log('ConvertKit request body:', { ...body, api_key: 'HIDDEN', email: 'HIDDEN' });
    console.log("Subscribing to ConvertKit:");
    console.log("Form ID:", formId);
    console.log("URL:", url);
    console.log("Payload:", JSON.stringify(body, null, 2));


    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(body)
      });

      const responseData = await res.json();
      console.log('ConvertKit response:', responseData);

      if (!res.ok) {
        // Handle specific ConvertKit error messages
        if (responseData.message?.includes('entity you were trying to find doesn\'t exist')) {
          throw new Error(`ConvertKit form not found. Please check if form ID "${formId}" exists for "${resultTrait}".`);
        }
        if (responseData.message?.includes('Invalid API key')) {
          throw new Error('ConvertKit API key is invalid. Please check your configuration.');
        }
        throw new Error(responseData.message || `ConvertKit error: ${res.status} ${res.statusText}`);
      }

      return responseData;
    } catch (fetchError) {
      console.error('ConvertKit fetch error:', fetchError);
      if (fetchError.message.includes('fetch')) {
        throw new Error('Network error. Please check your internet connection and try again.');
      }
      throw fetchError;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setStatus({ loading: true, error: null, success: null });

    try {
      const resultTrait = calculateResult(allAnswers);
      console.log('Calculated result trait:', resultTrait);
      
      setDominantTrait(resultTrait);
      
      // Attempt ConvertKit subscription
      await subscribeToConvertKit(userInfo, resultTrait);
      
      setStatus({ loading: false, error: null, success: true });
      setTimeout(() => {
        setShowForm(false);
        setShowResult(true);
      }, 1500);
    } catch (err) {
      console.error('Submission error:', err);
      setStatus({ 
        loading: false, 
        error: err.message || 'Something went wrong. Please try again.', 
        success: null 
      });
    }
  };

  // Enhanced restart function to clear all data
  const handleRestart = () => {
    setCurrentIndex(0);
    setAllAnswers([]);
    setShowResult(false);
    setShowForm(false);
    setUserInfo({ name: '', email: '', gender: '' });
    setDominantTrait(null);
    setStatus({ loading: false, error: null, success: null });
    setFormErrors({});
    localStorage.removeItem('quizProgress');
  };

  if (showResult) {
    return (
      <ResultPage
        name={userInfo.name}
        builderType={dominantTrait}
        result={builderResults[dominantTrait] || {}}
        onRestart={handleRestart}
      />
    );
  }

  if (showForm) {
    return (
      <div
        className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-5 text-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${isMobile ? SubmitMobile : SubmitLaptop})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="bg-white bg-opacity-90 p-6 rounded-xl max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-[#144559]">Tell us about you</h2>
          <form onSubmit={handleSubmit} className="grid gap-5 text-left">
            <div>
              <label className="font-semibold text-black">Name</label>
              <input
                name="name"
                value={userInfo.name}
                onChange={handleFormChange}
                className="w-full px-4 py-3 bg-gray-100 rounded"
                placeholder="Your Name"
              />
              {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
            </div>

            <div>
              <label className="font-semibold text-black">Email</label>
              <input
                name="email"
                type="email"
                value={userInfo.email}
                onChange={handleFormChange}
                className="w-full px-4 py-3 bg-gray-100 rounded"
                placeholder="Your Email"
              />
              {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
            </div>

            <div>
              <label className="font-semibold text-black">Gender</label>
              <select
                name="gender"
                value={userInfo.gender}
                onChange={handleFormChange}
                className="w-full px-4 py-3 bg-gray-100 rounded"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {formErrors.gender && <p className="text-red-500 text-sm">{formErrors.gender}</p>}
            </div>

            {status.error && <p className="text-red-600 text-sm font-semibold">{status.error}</p>}
            {status.success && <p className="text-green-600 text-sm font-semibold">Submission successful!</p>}

            <button
              type="submit"
              disabled={status.loading}
              className="bg-[#144559] text-white py-3 rounded-full font-semibold hover:opacity-90 disabled:opacity-50"
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