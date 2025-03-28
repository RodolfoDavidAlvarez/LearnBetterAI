import React, { useState } from "react";
import { motion, AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
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
    <div className="relative bg-white dark:bg-gray-900 overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white dark:bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block">Build Your Dream Website</span>
                <span className="block text-blue-600">With AI-Powered Tools</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Learn how to create professional websites using cutting-edge AI tools. No coding experience required. Get started today with our
                comprehensive guide.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-3">
                <Link
                  to="/presentation"
                  className="w-full sm:w-auto px-8 py-4 text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105 animate-pulse"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  GET YOUR FREE GUIDE NOW!
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
          <div className="w-full max-w-4xl px-4">
            <div className="relative">
              {/* Navigation Buttons */}
              <button
                onClick={prevWebsite}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white dark:bg-gray-700 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextWebsite}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white dark:bg-gray-700 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Computer Frame */}
              <div className="relative bg-gray-800 rounded-lg p-4 shadow-2xl">
                {/* Screen Bezel */}
                <div className="relative bg-gray-900 rounded-lg overflow-hidden">
                  {/* Browser Chrome */}
                  <div className="bg-gray-700 h-10 flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="ml-4 flex-1 text-center text-sm text-gray-400 truncate">{websites[currentIndex].title}</div>
                  </div>
                  {/* Website Preview */}
                  <div className="aspect-w-16 aspect-h-9">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full"
                    >
                      <img src={websites[currentIndex].image} alt={websites[currentIndex].title} className="object-cover w-full h-full" />
                    </motion.div>
                  </div>
                </div>
                {/* Computer Stand */}
                <div className="h-6 bg-gray-700 rounded-b-lg mt-4"></div>
              </div>

              {/* Website Info */}
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{websites[currentIndex].title}</h3>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">{websites[currentIndex].description}</p>
                <Link
                  to={websites[currentIndex].link}
                  className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Details →
                </Link>
              </div>

              {/* Dots Navigation */}
              <div className="flex justify-center mt-6 space-x-2">
                {websites.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
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
