import Q1 from '../assets/q1.png';
import Laptop2 from '../assets/laptop2.png';
import Laptop3 from '../assets/laptop3.png';
import Laptop4 from '../assets/laptop4.png';
// import Laptop5 from '../assets/laptop5.png';
import Laptop6 from '../assets/laptop6.png';


const questions = [
  {
    id: 1,
    question: "When a bold idea hits you, what do you usually do ?",
    options: [
      { text: "Start talking it out loud, even if it sounds crazy", trait: "Visionary" },
      { text: "Pause and figure out the ripple effects first", trait: "Strategist" },
      { text: "Start sketching how it would actually work", trait: "Architect" },
      { text: "Get moving — build, test, and fix later", trait: "Operator" },
      { text: "Share it with friends to get energy and feedback", trait: "Connector" },
    ],
    style: {
      backgroundImage: Q1,
      textColor: "#960018",
      buttonBgColor: "#960018",
      buttonTextColor: "#fff"
    }
  },{
    id: 2,
    question: "Your dream team would be made up of people who ...",
    options: [
      { text: "Aren’t afraid to think wildly big", trait: "Visionary" },
      { text: "Always know what’s going on and stay ahead", trait: "Strategist" },
      { text: "Turn chaos into clarity", trait: "Architect" },
      { text: "Keep things moving no matter what", trait: "Operator" },
      { text: "Make everyone feel seen and heard", trait: "Connector" },
    ],
    style: {
      backgroundImage: Laptop2,
      textColor: "#12776D",
      buttonBgColor: "#12776D",
      buttonTextColor: "#fff"
    }
  },
      
  {
    id: 3,
    question: "What frustrates you the most?",
    options: [
      { text: "Playing small when we could go big", trait: "Visionary" },
      { text: "Lack of planning or foresight", trait: "Strategist" },
      { text: "Sloppy execution or broken systems", trait: "Architect" },
      { text: "People who talk but never act", trait: "Operator" },
      { text: "Coldness, disconnection, or disunity", trait: "Connector" },
    ],
      style: {
      backgroundImage: Laptop3,
      textColor: "#4C5A77",
      buttonBgColor: "#4C5A77",
      buttonTextColor: "#fff"
    }
  },
      
  {
    id: 4,
    question: "What do people usually thank you for?",
    options: [
      { text: "Your inspiring ideas", trait: "Visionary" },
      { text: "Your clarity and timing", trait: "Strategist" },
      { text: "Your structure and logic", trait: "Architect" },
      { text: "Your dependability and speed", trait: "Operator" },
      { text: "Your presence and encouragement", trait: "Connector" },
    ],
      style: {
      backgroundImage: Laptop4,
      textColor: "#29557D",
      buttonBgColor: "##29557D",
      buttonTextColor: "#fff"
    }
  },
      
  {
    id: 5,
    question: "Your ideal weekend project is...",
    options: [
      { text: "Brainstorming 10 new ways to solve a problem", trait: "Visionary" },
      { text: "Mapping out your 5-year plan or goals", trait: "Strategist" },
      { text: "Organizing your space or system", trait: "Architect" },
      { text: "Building something hands-on or physical", trait: "Operator" },
      { text: "Hosting or connecting with people you care about", trait: "Connector" },
    ],
      style: {
      backgroundImage: Laptop6,
      textColor: "#DA5A1A",
      buttonBgColor: "#DA5A1A",
      buttonTextColor: "#fff"
    }
  },
      
  {
    id: 6,
    question: "What kind of leader are you?",
    options: [
      { text: "Vision-caster — get people excited about what’s next", trait: "Visionary" },
      { text: "Strategist — align everyone and guide execution", trait: "Strategist" },
      { text: "Builder — set up the structure and tools", trait: "Architect" },
      { text: "Executor — lead by doing", trait: "Operator" },
      { text: "Unifier — lead through presence and connection", trait: "Connector" },
    ],
      style: {
      backgroundImage: Q1,
      textColor: "#960018",
      buttonBgColor: "#960018",
      buttonTextColor: "#fff"
    }
  },
      
  {
    id: 7,
    question: "Which fictional character feels most like you?",
    options: [
      { text: "Tony Stark", trait: "Visionary" },
      { text: "Batman", trait: "Strategist" },
      { text: "Shuri from Black Panther", trait: "Architect" },
      { text: "Katniss Everdeen", trait: "Operator" },
      { text: "Ted Lasso", trait: "Connector" },
    ],
      style: {
      backgroundImage: Laptop2,
      textColor: "#12776D",
      buttonBgColor: "#12776D",
      buttonTextColor: "#fff"
    }
  },
      
  {
    id: 8,
    question: "If your success were a movie, the plot twist would be...",
    options: [
      { text: "Everyone said it was impossible — but you did it", trait: "Visionary" },
      { text: "You predicted it way before it happened", trait: "Strategist" },
      { text: "You solved it when no one else could", trait: "Architect" },
      { text: "You showed up and pulled it off while others froze", trait: "Operator" },
      { text: "You brought the right people together just in time", trait: "Connector" },
    ],
      style: {
      backgroundImage: Laptop3,
      textColor: "#4C5A77",
      buttonBgColor: "#4C5A77",
      buttonTextColor: "#fff"
    }
  },
      
  {
    id: 9,
    question: "You walk into a messy team situation. What’s your first move?",
    options: [
      { text: "Ask “what’s the big goal here?” ", trait: "Visionary" },
      { text: "Assess the players and the power dynamics", trait: "Strategist" },
      { text: "Look for the holes in the system or process", trait: "Architect" },
      { text: "Start fixing what’s broken", trait: "Operator" },
      { text: "Pull people aside to hear how they really feel", trait: "Connector" },
    ],
     style: {
      backgroundImage: Laptop4,
      textColor: "#29557D",
      buttonBgColor: "##29557D",
      buttonTextColor: "#fff"
    }
  },
      
  {
    id: 10,
    question: "When people misunderstand you, it’s often because...",
    options: [
      { text: "You’re already thinking 10 steps ahead", trait: "Visionary" },
      { text: "You keep things close to the chest", trait: "Strategist" },
      { text: "You prefer building over explaining", trait: "Architect" },
      { text: "You don’t have time to explain — you're doing it", trait: "Operator" },
      { text: "You care more than you let on", trait: "Connector" },
    ],
      style: {
      backgroundImage: Laptop6,
      textColor: "#DA5A1A",
      buttonBgColor: "#DA5A1A",
      buttonTextColor: "#fff"
    }
  },

  {
    id: 11,
    question: "What do you secretly wish people knew about you?",
    options: [
      { text: "You’re already thinking 10 steps ahead", trait: "Visionary" },
      { text: "You keep things close to the chest", trait: "Strategist" },
      { text: "You prefer building over explaining", trait: "Architect" },
      { text: "You don’t have time to explain — you're doing it", trait: "Operator" },
      { text: "You care more than you let on", trait: "Connector" },
    ],
     style: {
      backgroundImage: Q1,
      textColor: "#960018",
      buttonBgColor: "#960018",
      buttonTextColor: "#fff"
    }
  },
  
  //End of questions
];

export default questions;
