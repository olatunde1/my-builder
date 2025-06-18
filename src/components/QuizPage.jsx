import React, { useState } from 'react';
import questions from '../data/questions';
import Question from './Question';
import Laptop7 from '../assets/laptop7.png'; // Assuming you have a laptop image in assets

const QuizPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    gender: '',
  });

  const handleNext = (selectedOption) => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setShowForm(true); // Show form on last next click
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
    alert("Form submitted successfully!");
  };

  if (showForm) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-10 text-center"
        style={{
            backgroundImage: `url(${Laptop7})`,
            width: "1100px",
            height: "743.48px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
      >
        <h2 className="text-2xl font-bold mb-6 text-[#144559]">Help us know who you are</h2>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md grid gap-6 text-left"
        >
          <div>
            <label className="block font-semibold mb-2 text-black">Name</label>
            <input
              name="name"
              value={userInfo.name}
              onChange={handleFormChange}
              placeholder="Enter your Name here"
              className="w-full px-4 py-4 bg-[#F2F2F7] rounded-md border-none border-b-4 outline-none focus:ring-0 "
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
              className="w-full px-4 py-4 bg-[#F2F2F7] rounded-md border-none border-b-2 outline-none focus:ring-0"
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
               className="w-full px-4 py-4 bg-[#F2F2F7] rounded-md border-none border-b-4"
              required
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

          <button
            type="submit"
            className="bg-[#144559] text-white py-4 px-6 rounded-full font-semibold mt-4 w-[166px] mx-auto transition duration-300 ease-in-out transform hover:scale-105"
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
