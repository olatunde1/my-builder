// components/Result.js
import { useNavigate } from "react-router-dom";

const traitDescriptions = {
  Visionary: "You are energetic and enjoy movement.",
  Strategist: "You love interacting with others.",
  Architect: "You value peace and serenity.",
  Operator: "You feel things deeply.",
  Connector: "You prefer to avoid stress rather than confront it.",
};

const Result = () => {
  const answers = JSON.parse(localStorage.getItem("quizAnswers"));
  const email = localStorage.getItem("userEmail");

  const traitCount = {};
  Object.values(answers).forEach((trait) => {
    traitCount[trait] = (traitCount[trait] || 0) + 1;
  });

  const sortedTraits = Object.entries(traitCount).sort((a, b) => b[1] - a[1]);
  const topTrait = sortedTraits[0]?.[0];

  return (
    <div>
      <h2>Hi, {email}!</h2>
      <h3>Your personality type is: {topTrait?.toUpperCase()}</h3>
      <p>{traitDescriptions[topTrait]}</p>
    </div>
  );
};

export default Result;
