import { motion } from "framer-motion";

export default function BuilderTypePage({
  title,
  subtitle,
  quote,
  image,
  bgColor = "#F5E8EA",
  borderColor = "#BF8000",
  accentColor = "#144559",
  mainColor = "#BB2109",
  description,
  snapshotItems = [],
}) {
  return (
    <section className={`w-full py-15`} style={{ backgroundColor: bgColor }}>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen">
        
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 px-6 md:px-12 py-12 lg:py-0"
        >
          <div className="max-w-xl mx-auto lg:mx-0">
            <h1 className={`text-4xl font-bold mb-2`} style={{ color: mainColor }}>
              {title}
            </h1>
            <p className="text-lg text-[#00060C] italic mb-4">{subtitle}</p>
            <p className="text-[#00060C] font-semibold mb-8">“{quote}”</p>

            {/* Description */}
            <div className="text-gray-700 text-base leading-relaxed space-y-4">
              <h2 className="text-2xl font-bold text-[#00060C] mb-3">
                What That Means:
              </h2>
              {description?.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Snapshot */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className={`bg-white shadow-lg rounded-2xl mt-12 p-8 border-t-4`}
              style={{ borderColor }}
            >
              <h3 className={`text-2xl font-bold mb-6`} style={{ color: accentColor }}>
                Your Builder Snapshot
              </h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-base">
                {snapshotItems.map((item, i) => (
                  <li key={i}>
                    <span
                      className="font-semibold"
                      style={{ color: accentColor }}
                    >
                      {item.label}:
                    </span>{" "}
                    {item.value}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 w-full h-[50vh] sm:h-[60vh] lg:h-screen"
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover lg:rounded-l-[3rem]"
          />
        </motion.div>
      </div>
    </section>
  );
}
