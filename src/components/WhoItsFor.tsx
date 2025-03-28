import React from "react";
import { motion } from "framer-motion";

const targetAudience = [
  {
    title: "Aspiring Developers",
    description: "Start your journey into web development with AI-powered tools, even with no prior experience.",
    icon: "👨‍💻",
  },
  {
    title: "Freelancers",
    description: "Create stunning portfolio websites to showcase your work and attract new clients.",
    icon: "🎨",
  },
  {
    title: "Entrepreneurs",
    description: "Launch your business website quickly and professionally to reach more customers.",
    icon: "💼",
  },
  {
    title: "Professionals",
    description: "Build your personal brand with a modern, AI-enhanced website that stands out.",
    icon: "👔",
  },
];

const WhoItsFor = () => {
  return (
    <section id="who-its-for" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4"
          >
            Who It's For
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Whether you're a freelancer, entrepreneur, or professional, LearnBetterAI will give you the tools to create your perfect
            website—beautifully, easily, and fast.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {targetAudience.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{audience.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{audience.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{audience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Social Media Button */}
      <div className="mt-12 text-center">
        <a
          href="https://bettersystems.ai/founders-social"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 text-lg font-bold text-blue-600 bg-white hover:bg-gray-50 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
            />
          </svg>
          Connect with Us on Social
        </a>
      </div>
    </section>
  );
};

export default WhoItsFor;
