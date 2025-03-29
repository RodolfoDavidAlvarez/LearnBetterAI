import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const websites = [
    {
      id: 1,
      title: "Fun Things Apparel Boutique",
      description: "A modern e-commerce website for a boutique clothing store",
      image: "/images/Fun Things Apparel Boutique Website.jpeg",
      link: "/showcase/fun-things",
    },
    {
      id: 2,
      title: "Nurturing Nature",
      description: "A beautiful website for a nature conservation organization",
      image: "/images/Nurturing Nature Website.jpeg",
      link: "/showcase/nurturing-nature",
    },
    {
      id: 3,
      title: "Zone 9 Solar",
      description: "A professional website for a solar energy company",
      image: "/images/Zone 9 Solar Website.jpeg",
      link: "/showcase/zone9-solar",
    },
  ];

  const nextWebsite = () => {
    setCurrentIndex((prev) => (prev + 1) % websites.length);
  };

  const prevWebsite = () => {
    setCurrentIndex((prev) => (prev - 1 + websites.length) % websites.length);
  };

  return (
    <div className="relative bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row min-h-[80vh] py-16">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="max-w-xl w-full text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                <span className="block">Want to Build a Website</span>
                <span className="block text-blue-600">With AI—Fast and Easy?</span>
                <span className="block text-blue-600">Here's How.</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-gray-500 dark:text-gray-400">
                Launch your own website in minutes with AI. No code. No stress. Just a clear, simple guide to get you started today.
              </p>
              <div className="mt-6 flex justify-center lg:justify-start">
                <Link
                  to="/presentation"
                  className="inline-flex items-center px-6 py-3 text-base sm:text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  GET YOUR FREE GUIDE NOW!
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Website Showcase */}
          <div className="w-full lg:w-1/2 bg-gray-50 dark:bg-gray-800 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="relative w-full max-w-lg">
              {/* Navigation Buttons */}
              <button
                onClick={prevWebsite}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-gray-700 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextWebsite}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-gray-700 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Computer Frame */}
              <div className="relative bg-gray-800 rounded-lg p-3 shadow-2xl mx-auto">
                {/* Screen Bezel */}
                <div className="relative bg-gray-900 rounded-lg overflow-hidden">
                  {/* Browser Chrome */}
                  <div className="bg-gray-700 h-8 flex items-center px-3">
                    <div className="flex space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                    <div className="ml-3 flex-1 text-center text-xs text-gray-400 truncate">{websites[currentIndex].title}</div>
                  </div>
                  {/* Website Preview */}
                  <div className="relative w-full" style={{ paddingBottom: "60%" }}>
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <img src={websites[currentIndex].image} alt={websites[currentIndex].title} className="w-full h-full object-cover" />
                    </motion.div>
                  </div>
                </div>
                {/* Computer Stand */}
                <div className="h-6 bg-gray-700 rounded-b-lg mt-3 mx-auto w-1/4"></div>
              </div>

              {/* Website Info */}
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{websites[currentIndex].title}</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">{websites[currentIndex].description}</p>
              </div>

              {/* Dots Navigation */}
              <div className="flex justify-center mt-4 space-x-2 mb-8">
                {websites.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentIndex ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
