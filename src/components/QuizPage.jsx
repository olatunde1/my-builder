// QuizPage.jsx
import React, { useState } from 'react';
import questions from '../data/questions';
import Question from './Question';
import SubmitLaptop from '../assets/submit laptop.png';
import { send } from 'emailjs-com';
import ResultPage from './Result';
import builderResults from './builderResults';


const QuizPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [allAnswers, setAllAnswers] = useState([]);
  const [userInfo, setUserInfo] = useState({ name: '', email: '', gender: '' });
  const [dominantTrait, setDominantTrait] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

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
  };

  const calculateResult = (answers) => {
    const count = {};
    answers.forEach(trait => {
      count[trait] = (count[trait] || 0) + 1;
    });
    const sorted = Object.entries(count).sort((a, b) => b[1] - a[1]);
    return sorted[0][0];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultTrait = calculateResult(allAnswers);
    setDominantTrait(resultTrait);

    const emailParams = {
      name: userInfo.name,
      email: userInfo.email,
      gender: userInfo.gender,
      results: resultTrait,
    };


    send('service_2rwyzs2', 'template_h9dvkvd', emailParams, '9qtOtPERVwY1uiSOH')
      .then(() => {
        setUserInfo({ name: '', email: '', gender: '' });
        setSuccessMessage('Submission successful! Check your email for your full result.');
        setTimeout(() => {
          setShowForm(false);
          setShowResult(true);
        }, 1500);
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        setSuccessMessage('Something went wrong. Please try again.');
      });
  };

  if (showResult) {
    return (
      <ResultPage
        name={userInfo.name}
        builderType={dominantTrait}
        result={builderResults[dominantTrait] || {}}
      />
    );
  }

  if (showForm) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center mx-auto px-4 py-10 text-center"
        style={{
          backgroundImage: `url(${SubmitLaptop})`,
          width: "1100px",
          height: "743.48px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-2xl font-bold mb-6 text-[#144559]">Help us know who you are</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-md grid gap-6 text-left">
          <div>
            <label className="block font-semibold mb-2 text-black">Name</label>
            <input
              name="name"
              value={userInfo.name}
              onChange={handleFormChange}
              placeholder="Enter your Name here"
              className="w-full px-4 py-4 bg-[#F2F2F7] rounded-t-2xl border-none border-b-4 outline-none focus:ring-0"
              required
              style={{
                borderImage: 'linear-gradient(90deg, #00796B 0%, #009688 35%, #FF7043 70%, #FFAB91 100%) 1',
                borderBottomStyle: 'solid',
                borderBottomWidth: '2px'
              }}
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 text-black">Email</label>
            <input
              name="email"
              type="email"
              value={userInfo.email}
              onChange={handleFormChange}
              placeholder="Enter your Email here"
              className="w-full px-4 py-4 bg-[#F2F2F7] rounded-t-2xl border-none border-b-2 outline-none focus:ring-0"
              required
              style={{
                borderImage: 'linear-gradient(90deg, #00796B 0%, #009688 35%, #FF7043 70%, #FFAB91 100%) 1',
                borderBottomStyle: 'solid',
                borderBottomWidth: '2px'
              }}
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 text-black">Gender</label>
            <select
              name="gender"
              value={userInfo.gender}
              onChange={handleFormChange}
              required
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
          </div>

          {successMessage && <p className="text-green-600 text-sm font-semibold text-center">{successMessage}</p>}

          <button
            type="submit"
            className="btn bg-[#144559] text-white py-4 px-6 rounded-full font-semibold mt-4 w-[166px] mx-auto transition duration-300 ease-in-out transform hover:scale-105"
          >
            Submit
          </button>
        </form>
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
    />
  );
};

export default QuizPage;
