import Visionary from '../assets/visionary.png';
import Strategist from "../assets/Strategist.png";
import Architect from "../assets/Architect.png";
import Operator from "../assets/Operator.png";
import Connector from "../assets/Connector.png";
import { head, header } from 'framer-motion/client';

const builderResults = {
  Visionary: {
    title: "You’re a Visionary",
    subtitle: "The bold, future-focused Builder who leads with purpose and possibility.",
    quote: "“You don’t just see the future — you feel pulled toward it.”",
    tagline: "What That Means:",
    description: `
      You’re the spark. The one with ideas that can’t be ignored. You think in possibilities, feel deeply motivated by purpose,
      and often sense when change is needed—before anyone else does.
      
      That can feel thrilling. But also... isolating.
      
      People may have called you “too much,” “distracted,” or “scattered.”
      But the truth is: you’re just ahead of the curve. You think fast, move fast, and dream big.

      You’re not wrong. You’re just wired differently—and the world needs that.`,

    tagline2: "Your Full Results Are in Your Inbox 📩",
    details: `    Inside, you’ll find:

        * A deeper look at how you’re wired
        * What helps (and hurts) your energy
        * Who you naturally build well with
        * A sneak peek at a tool made to support how you build `,

    hashtags: "#VisionaryBuilder #IAmABuilder #BuilderType",
    cta: "Discover the proven strategies, challenges, and growth paths unique to a Visionary like you.",
    buttonLabel: "Go Deeper Into Your Builder Blueprint",
    subject: "You’re a Visionary — Here’s your full Builder profile",
    header: "You’re a Visionary",
    descriptionHeader: "Here’s your full Builder profile—and how to move with it.",
    emailBody: `
      You’re a Visionary Builder—someone who feels pulled toward possibility, progress, and
      purpose. Whether you’re leading a team or simply trying to lead yourself into a more aligned life,
      one thing is clear:
    `,
    emailBody2: `
      You’re here to create something that matters.
    `,
    header2: "What That Means:",
    descriptionHeader2: `
      You’re the spark.
      You think fast, feel deeply, and often sense change before others do. You don’t always know
      how you’ll get there—but you know you’re meant for more.

      At times, that’s thrilling.
      At others? It’s overwhelming, frustrating, even lonely.

      You may have been told:

      “You’re too much.”
      “You never finish anything.”
      “You’ve got so many ideas but no follow-through.”

      But none of that is the full story.

      The truth is: your brain is generative, not chaotic.
      Your energy is visionary, not unfocused.

      You just need tools and support that match the way you build.
    `,
    header3: "your builder snapshot",
    emailBody3: `
     
      1.  Primary Trait: Vision-Casting.
      2.  Superpower: Turning ideas into movements.
      3.  Motivated By: Purpose, possibility, and momentum.
      4.  Watch Out For: Overcommitting, burnout, chasing novelty.
      5.  What You Need: A rhythm and team that helps you finish what you start.
    
    `,
    header4: "Strengths",
    emailBody4: `
      1.  You energize others with bold, infectious ideas.
      2.  You see potential where others see limits.
      3.  You move before the world gives you permission.
      4.  You carry purpose in everything you do.
    `,
    header5: "What to Watch For",
    emailBody5: `
      1.  You burn out from trying to do it all alone.
      2.  You lose steam when things get repetitive.
      3.  You struggle with building long-term systems.
      4.  You’re hardest on yourself when you’re not moving fast.
          `,
    header6: "You Build Best With:",
    emailBody6: ``,
    header7: "Your Avatar",
    emailBody7: ``,
    header8: "Want to Go Deeper?",
    emailBody8: `
      We created something to help you take the next step:
      Your Visionary Builder Blueprint — a 15+ page, personalized guide available for $7.

    Inside, you’ll learn how to:
    
      1.  Channel your ideas into grounded action
      2.  Avoid burnout and “start-and-stall” cycles
      3.  Identify exactly who you need on your team
      4.  Build in a way that finally feels like you
  

   Get My Visionary Blueprint – $7

   It’s for people like you—builders, dreamers, leaders, and seekers—who are ready to make real progress without pretending to be someone else.

     Whatever your next step looks like, just know this:
      You’re not lost. You’re just early.
      You don’t need to do everything—just the thing you feel called to do next.

   Keep building boldly.
    —The Builder Team
    `,

    image: Visionary
  },
  Strategist: {
    title: "You’re a Strategist",
    subtitle: "The precise, pattern-seeking Builder who turns vision into action.",
    quote: "“You don’t just see what’s possible—you map out how to get there.”",
    tagline: "What That Means:",
    description: `
      You’re a thinker, a planner, a calm presence in the chaos. You have a unique ability to step
      back, assess the situation, and spot the path forward—long before others do.
      
      You’re likely the person friends or coworkers turn to when it’s time to “figure it out.”.
      
      That doesn’t mean you always have it all together. In fact, it can feel exhausting to be the one
      who’s always expected to make the plan.

      You’re not just the planner. You’re the quiet builder who sees structure as power.`,

    tagline2: "Your Full Results Are in Your Inbox 📩",
    details: `    Inside, you’ll find:

        * A deeper look at how you’re wired
        * What helps (and hurts) your energy
        * Who you naturally build well with
        * A sneak peek at a tool made to support how you build `,

    hashtags: "#VisionaryBuilder #IAmABuilder #BuilderType",
    cta: "Discover the proven strategies, challenges, and growth paths unique to a Visionary like you.",
    buttonLabel: "Go Deeper Into Your Builder Blueprint",
    image: Strategist
  },
  Architect: {
    title: "You’re a Architect",
    subtitle: "The systems-minded Builder who turns complexity into clarity.",
    quote: "“You don’t just build—you build things that last.”",
    tagline: "What That Means:",
    description: `
      You’re the designer behind the scenes. Thoughtful, thorough, and intentional. You don’t chase
      quick wins—you build frameworks, foundations, and solutions that stand the test of time.
      
      People may not always see how much you’re holding—but you’re often the one holding it all
      together.
      
      You value integrity, structure, and depth. You thrive in environments where planning and
      excellence are respected—not rushed.

      You don’t need to be loud to be powerful. You lead by building things that work.`,

    tagline2: "Your Full Results Are in Your Inbox 📩",
    details: `    Inside, you’ll find:

        * A deeper look at how you’re wired
        * What helps (and hurts) your energy
        * Who you naturally build well with
        * A sneak peek at a tool made to support how you build `,

    hashtags: "#VisionaryBuilder #IAmABuilder #BuilderType",
    cta: "Discover the proven strategies, challenges, and growth paths unique to a Visionary like you.",
    buttonLabel: "Go Deeper Into Your Builder Blueprint",
    image: Architect
  },
  Operator: {
    title: "You’re a Operator",
    subtitle: "The grounded Builder who brings consistency, structure, and momentum.",
    quote: "“You don’t just get it done. You keep everything going.”",
    tagline: "What That Means:",
    description: `
      You’re steady. Practical. Clear under pressure. While others are off chasing shiny ideas, you’re
      the one who gets things across the finish line again and again..
      
      You're not always the loudest voice in the room, but you're often the one people trust to get it
      done right.
      
      You thrive in environments where clarity and reliability matter—and where your contribution isn’t
      just recognized, but relied on.

      You bring the follow-through that dreams need to become real.`,

    tagline2: "Your Full Results Are in Your Inbox 📩",
    details: `    Inside, you’ll find:

        * A deeper look at how you’re wired
        * What helps (and hurts) your energy
        * Who you naturally build well with
        * A sneak peek at a tool made to support how you build `,

    hashtags: "#VisionaryBuilder #IAmABuilder #BuilderType",
    cta: "Discover the proven strategies, challenges, and growth paths unique to a Visionary like you.",
    buttonLabel: "Go Deeper Into Your Builder Blueprint",
    image: Operator
  },
  Connector: {
    title: "You’re a Connector",
    subtitle: "The relational Builder who thrives through people, purpose, and presence.",
    quote: "“You don’t just build systems—you build trust.”",
    tagline: "What That Means:",
    description: `
      You’re the bridge. The glue. The person who brings energy into the room and connection into
      the process.
      
     People open up around you. They feel seen, heard, and supported. And while others build
     frameworks or momentum, you build the relationships that make it all work.
      
      Sometimes your gift is loud and expressive. Other times it’s quiet, steady, and behind the
      scenes. Either way—it’s vital.

      You build belonging, and that’s what makes everything else possible.`,

    tagline2: "Your Full Results Are in Your Inbox 📩",
    details: `    Inside, you’ll find:

        * A deeper look at how you’re wired
        * What helps (and hurts) your energy
        * Who you naturally build well with
        * A sneak peek at a tool made to support how you build `,

    hashtags: "#VisionaryBuilder #IAmABuilder #BuilderType",
    cta: "Discover the proven strategies, challenges, and growth paths unique to a Visionary like you.",
    buttonLabel: "Go Deeper Into Your Builder Blueprint",
    image: Connector
  },
  // Add more types: Operator, Connector, Strategist...
};

export default builderResults;
