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
      result: resultTrait,
    };

    send('service_2rwyzs2', 'template_h9dvkvd', emailParams, '9qtOtPERVwY1uiSOH')
      .then(() => {
        setShowForm(false);
        setShowResult(true);
      })
      .catch((err) => console.error('EmailJS Error:', err));
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
      <div
        className="w-full min-h-screen flex flex-col items-center justify-center mx-auto px-4 py-10 text-center"
        style={{
          backgroundImage: `url(${SubmitLaptop})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h2 className="text-2xl font-bold mb-6 text-[#144559]">Help us know who you are</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-md grid gap-6 text-left">
          <input name="name" value={userInfo.name} onChange={handleFormChange} required placeholder="Enter your Name here" className="input" />
          <input name="email" value={userInfo.email} onChange={handleFormChange} type="email" required placeholder="Enter your Email here" className="input" />
          <select name="gender" value={userInfo.gender} onChange={handleFormChange} required className="input">
            <option value="">Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <button type="submit" className="btn">Submit</button>
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
