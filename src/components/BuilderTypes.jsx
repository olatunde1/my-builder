import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Visionary from "../assets/visionary.png";
// import Strategist from "../assets/strategist.png";
import Architect from "../assets/architect.png";
import Operator from "../assets/operator.png";
import Connector from "../assets/connector.png";

const builderData = [
  {
    title: "The Visionary",
    image: Visionary,
    path: "/pages/visionary",
    description:
      "The bold, future-focused Builder who leads with purpose and possibility.",
  },
  {
    title: "The Strategist",
    image: Strategist,
    path: "/pages/strategist",
    description:
      "The precise, pattern-seeking Builder who turns vision into action.",
  },
  {
    title: "The Architect",
    image: Architect,
    path: "/pages/architect",
    description:
      "The systems-minded Builder who turns complexity into clarity.",
  },
  {
    title: "The Operator",
    image: Operator,
    path: "/pages/operator",
    description:
      "The grounded Builder who brings consistency, structure, and momentum.",
  },
  {
    title: "The Connector",
    image: Connector,
    path: "/pages/connector",
    description:
      "The relational Builder who thrives through people, purpose, and presence.",
  },
];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2, // staggered delay for each card
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function BuilderTypes() {
     const navigate = useNavigate();
  return (
    <section className="w-full py-8 ">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[#BF8000] text-lg font-extrabold mb-2"
        >
          Builder Types
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold text-[#144559] mb-12"
        >
          Explore and Understand all the builder types
        </motion.h1>

        {/* Builder Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {builderData.map((builder, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white shadow-lg rounded-2xl p-4 lg:p-2 flex flex-col justify-between hover:shadow-xl transition-all"
            >
              <div>
                <img
                  src={builder.image}
                  alt={builder.title}
                  className="mx-auto mb-4"
                />
                <h2 className="text-xl text-left ml-2 font-semibold text-gray-800 mb-3">
                  {builder.title}
                </h2>
                <p className="text-gray-600 text-left ml-2 text-sm leading-relaxed mb-6">
                  {builder.description}
                </p>
              </div>
              <button
              onClick={() => navigate(builder.path)}
              className="mt-auto mb-5 ml-2 text-left text-[#144559] font-medium hover:underline transition-all">
                View More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
