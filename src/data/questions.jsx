import Q1 from '../assets/q1.png';
import mobileBackground from "../assets/Question 1 Mobile.png"
import mobileBackground2 from "../assets/mobile2.png"
import mobileBackground3 from '../assets/mobile3.png'
import mobileBackground4 from '../assets/mobile 4.png';
import mobileBackground5 from "../assets/mobile 5.png";
import mobileBackground6 from '../assets/mobile 6.png';
import Laptop2 from '../assets/laptop2.png';
import Laptop3 from '../assets/laptop3.png';
import Laptop4 from '../assets/laptop4.png';
// import Laptop5 from '../assets/laptop5.png';
import Laptop6 from '../assets/laptop6.png';


const questions = [
  {
    id: 1,
    question: "  When a bold idea hits you, what do you usually do ?",
    options: [
      { text: "Start talking it out loud, even if it sounds crazy", trait: "Visionary" },
      { text: "Pause and figure out the ripple effects first", trait: "Strategist" },
      { text: "Start sketching how it would actually work", trait: "Architect" },
      { text: "Get moving, build, test, and fix later", trait: "Operator" },
      { text: "Share it with friends to get energy and feedback", trait: "Connector" },
    ],
    style: {
      backgroundImage: Q1,
      mobileBackgroundImage: mobileBackground,
      textColor: "#960018",
      buttonBgColor: "#960018",
      buttonTextColor: "#fff"
      
    }
  },{
    id: 2,
    question: "  Your dream team would be made up of people who ...",
    options: [
      { text: "Aren’t afraid to think wildly big", trait: "Visionary" },
      { text: "Always know what’s going on and stay ahead", trait: "Strategist" },
      { text: " Make messy things make sense", trait: "Architect" },
      { text: "Keep things moving no matter what", trait: "Operator" },
      { text: "Make everyone feel seen and heard", trait: "Connector" },
    ],
    style: {
      backgroundImage: Laptop2,
      mobileBackgroundImage: mobileBackground2,
      textColor: "#12776D",
      buttonBgColor: "#12776D",
      buttonTextColor: "#fff"
    }
  },
      
  {
    id: 3,
    question: "  What frustrates you the most?",
    options: [
      { text: "Playing small when we could go big", trait: "Visionary" },
      { text: "No plan, no logic, just vibes", trait: "Strategist" },
      { text: "Messy setups or things that don’t run right", trait: "Architect" },
      { text: "People who talk but never act", trait: "Operator" },
      { text: "Coldness, disconnection, or disunity", trait: "Connector" },
    ],
      style: {
      backgroundImage: Laptop3,
      mobileBackgroundImage: mobileBackground3,
      textColor: "#4C5A77",
      buttonBgColor: "#4C5A77",
      buttonTextColor: "#fff"
    }
  },
      
  {
    id: 4,
    question: "  What do people usually thank you for?",
    options: [
      { text: "Your inspiring ideas", trait: "Visionary" },
      { text: "You always know what to say and when to say it", trait: "Strategist" },
      { text: "You make things make sense", trait: "Architect" },
      { text: "Your dependability and speed", trait: "Operator" },
      { text: "Your presence and encouragement", trait: "Connector" },
    ],
      style: {
      backgroundImage: Laptop4,
       mobileBackgroundImage: mobileBackground4,
      textColor: "#29557D",
      buttonBgColor: "#29557D",
      buttonTextColor: "#fff"
    }
  },
      
  {
    id: 5,
    question: "  Your ideal weekend project is...",
    options: [
      { text: "Coming up with 10 new ways to solve a problem", trait: "Visionary" },
      { text: "Laying out a plan for where things are headed", trait: "Strategist" },
      { text: "Turning your space or system into something that just works", trait: "Architect" },
      { text: "Building something hands-on or physical", trait: "Operator" },
      { text: "Hosting or connecting with people you care about", trait: "Connector" },
    ],
      style: {
      backgroundImage: Laptop6,
      mobileBackgroundImage: mobileBackground5,
      textColor: "#DA5A1A",
      buttonBgColor: "#DA5A1A",
      buttonTextColor: "#fff"
    }
  },
      
  {
    id: 6,
    question: "  What kind of leader are you?",
    options: [
      { text: "I get people excited about what’s possible and help them believe in the future", trait: "Visionary" },
      { text: " I help everyone get on the same page and turn the plan into action", trait: "Strategist" },
      { text: "I create the systems, steps, or setup that make things run smoothly", trait: "Architect" },
      { text: "I lead by jumping in, getting it done, and showing others how to do it", trait: "Operator" },
      { text: " I lead by being present, building trust, and bringing people together", trait: "Connector" },
    ],
      style: {
      backgroundImage: Q1,
      mobileBackgroundImage: mobileBackground6,
      textColor: "#960018",
      buttonBgColor: "#960018",
      buttonTextColor: "#fff"
    }
  },
      
  {
    id: 7,
    question: "  When people watch how you move through life, what kind of vibe do they pick up ?",
    options: [
      { text: "You carry deep conviction. You say what others are afraid to say. People follow your fire.", trait: "Visionary" },
      { text: "You’re quick to assess the situation and rally people with a plan. Calm, sharp, no fluff.", trait: "Strategist" },
      { text: "You’re always inventing clever workarounds. People say, ‘How did you figure that out?", trait: "Architect" },
      { text: "You’re the one who gets things done while others are still talking. Dependable and fast.", trait: "Operator" },
      { text: "You make people feel seen, understood, and valued. You bring the warmth to any room.", trait: "Connector" },
    ],
      style: {
      backgroundImage: Laptop2,
      mobileBackgroundImage: mobileBackground2,
      textColor: "#12776D",
      buttonBgColor: "#12776D",
      buttonTextColor: "#fff"
    }
  },
      
  {
    id: 8,
    question: "  If your success story were a movie, the surprise outcome would be…",
    options: [
      { text: "Everyone said it was impossible, but you did it", trait: "Visionary" },
      { text: "You predicted it way before it happened", trait: "Strategist" },
      { text: "You solved it when no one else could", trait: "Architect" },
      { text: "You showed up and pulled it off while others froze", trait: "Operator" },
      { text: "You brought the right people together just in time", trait: "Connector" },
    ],
      style: {
      backgroundImage: Laptop3,
      mobileBackgroundImage: mobileBackground3,
      textColor: "#4C5A77",
      buttonBgColor: "#4C5A77",
      buttonTextColor: "#fff"
    }
  },
      
  {
    id: 9,
    question: "  You walk into a messy team situation. What’s your first move?",
    options: [
      { text: "Assess the players and the power dynamics", trait: "Visionary" },
      { text: "Ask “what’s the big goal here?", trait: "Strategist" },
      { text: "Look for the holes in the system or process", trait: "Architect" },
      { text: "Start fixing what’s broken", trait: "Operator" },
      { text: "Pull people aside to hear how they really feel", trait: "Connector" },
    ],
     style: {
      backgroundImage: Laptop4,
      mobileBackgroundImage: mobileBackground4,
      textColor: "#29557D",
      buttonBgColor: "#29557D",
      buttonTextColor: "#fff"
    }
  },
      
  {
    id: 10,
    question: "  When people misunderstand you, it’s often because...",
    options: [
      { text: "You’re dreaming so far ahead, it sounds unrealistic", trait: "Visionary" },
      { text: "You move fast and forget to loop others in", trait: "Strategist" },
      { text: "You process things inwardly before sharing", trait: "Architect" },
      { text: "You’d rather show up and help than talk about it", trait: "Operator" },
      { text: "You’re always there for people—but rarely explain why", trait: "Connector" },
    ],
      style: {
      backgroundImage: Laptop6,
      mobileBackgroundImage: mobileBackground5,
      textColor: "#DA5A1A",
      buttonBgColor: "#DA5A1A",
      buttonTextColor: "#fff"
    }
  },

  {
    id: 11,
    question: "  What do you secretly wish people knew about you?",
    options: [
      { text: "I care deeply about the future", trait: "Visionary" },
      { text: "I’m always tracking what’s really happening", trait: "Strategist" },
      { text: "I’ve already mapped out a better way, I just don’t always say it", trait: "Architect" },
      { text: "I’m working hard behind the scenes", trait: "Operator" },
      { text: " I carry the weight of people more than they know", trait: "Connector" },
    ],
     style: {
      backgroundImage: Q1,
      mobileBackgroundImage: mobileBackground6,
      textColor: "#960018",
      buttonBgColor: "#960018",
      buttonTextColor: "#fff"
    }
  },
  
  //End of questions
];

export default questions;
