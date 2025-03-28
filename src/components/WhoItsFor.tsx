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
    </section>
  );
};

export default WhoItsFor;
