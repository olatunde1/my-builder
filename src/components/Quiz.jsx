// components/Quiz.js
import React, { useState } from "react";
import questions from "../data/questions";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleOptionSelect = (questionId, trait) => {
    setAnswers((prev) => ({ ...prev, [questionId]: trait }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < questions.length) {
      alert("Please answer all questions");
      return;
    }

    const email = prompt("Enter your email to see your result:");
    if (!email) return;

    // Save to localStorage (since no backend)
    localStorage.setItem("quizAnswers", JSON.stringify(answers));
    localStorage.setItem("userEmail", email);

    navigate("/result");
  };

  return (
    <div>
      <h2>Personality Quiz</h2>
      {questions.map((q) => (
        <div key={q.id}>
          <h4>{q.question}</h4>
          {q.options.map((opt, idx) => (
            <label key={idx}>
              <input
                type="radio"
                name={`question-${q.id}`}
                onChange={() => handleOptionSelect(q.id, opt.trait)}
              />
              {opt.text}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Quiz;
