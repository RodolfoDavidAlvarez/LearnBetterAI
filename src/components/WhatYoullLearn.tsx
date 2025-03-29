import React from "react";
import { motion } from "framer-motion";
import { RocketLaunchIcon, CommandLineIcon, PaintBrushIcon, GlobeAltIcon, CurrencyDollarIcon, ServerIcon } from "@heroicons/react/24/outline";

const learningPoints = [
  {
    title: "Zero to AI Web App",
    description: "How to go from zero to a fully functional AI web app",
    icon: RocketLaunchIcon,
  },
  {
    title: "Step-by-Step Tools",
    description: "Which tools to use and how to use them—step-by-step",
    icon: CommandLineIcon,
  },
  {
    title: "Clean & Modern Design",
    description: "Tips for making your site look clean, modern, and professional",
    icon: PaintBrushIcon,
  },
  {
    title: "Publish & Share",
    description: "How to publish your app and share it with the world",
    icon: GlobeAltIcon,
  },
  {
    title: "AI Platform Pricing",
    description: "Best AI platforms to use, with pricing breakdowns",
    icon: CurrencyDollarIcon,
  },
  {
    title: "Domain Connection",
    description: "How to connect your website to a real domain (e.g., mybrandstudio.com)",
    icon: ServerIcon,
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
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-300"
          >
            This guide was made for real beginners. You don't need any background in tech.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-gray-900 dark:text-white mb-4">
                <point.icon className="h-8 w-8" />
              </div>
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
