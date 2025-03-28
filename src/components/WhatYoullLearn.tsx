import React from "react";
import { motion } from "framer-motion";

const learningPoints = [
  {
    title: "Build Complete Websites",
    description: "Learn how to create fully functional, AI-powered websites from scratch using modern tools and techniques.",
    icon: "🌐",
  },
  {
    title: "Modern Design & Automation",
    description: "Master the art of creating beautiful, responsive designs and implementing powerful automation features.",
    icon: "🎨",
  },
  {
    title: "Deploy & Launch",
    description: "Get step-by-step guidance on deploying your first app and making it publicly accessible.",
    icon: "🚀",
  },
  {
    title: "AI Workflows",
    description: "Discover how to leverage the latest AI tools to streamline your development process.",
    icon: "🤖",
  },
];

const WhatYoullLearn = () => {
  return (
    <section id="what-youll-learn" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl"
          >
            What You'll Learn
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {learningPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{point.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearn;
