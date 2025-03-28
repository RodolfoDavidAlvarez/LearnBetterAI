import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const exampleWebsites = [
  {
    title: "Zone 9 Solar Solutions",
    description: "A professional solar company website with modern design and clear value proposition.",
    image: "/images/zone9-example.jpg",
    features: ["Clean UI", "Clear Pricing", "Professional Branding"],
  },
  {
    title: "Nurturing Nature",
    description: "An eco-friendly plant shop with beautiful imagery and sustainable focus.",
    image: "/images/nurturing-nature-example.jpg",
    features: ["Nature-inspired Design", "Product Showcase", "Sustainability Focus"],
  },
  {
    title: "Fun Things Apparel",
    description: "A custom clothing store with personalization features and modern e-commerce.",
    image: "/images/fun-things-example.jpg",
    features: ["Custom Design Tool", "E-commerce", "Modern UI"],
  },
];

const PresentationPage = () => {
  const navigate = useNavigate();

  const handleViewGuide = () => {
    window.open("https://drive.google.com/file/d/1vvFztYS03fYyifCl5OawqxnjYbrRnI8M/view?usp=sharing", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation Bar */}
      <nav className="bg-white dark:bg-gray-900 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button onClick={() => navigate("/")} className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
              ← Back to Home
            </button>
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">LearnBetterAI</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Build Websites with AI Guide</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Watch the presentation below and access the complete guide</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center space-y-8"
          >
            {/* Gamma Presentation Embed */}
            <div className="w-full max-w-6xl rounded-lg shadow-xl overflow-hidden bg-white dark:bg-gray-800 p-4">
              <iframe
                src="https://gamma.app/embed/q3cex4nt9iegyr6"
                style={{ width: "100%", height: "600px" }}
                allow="fullscreen"
                title="Build Websites with AI"
                className="rounded-lg"
              />
            </div>

            {/* Download Guide Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 mb-16"
            >
              <button
                onClick={handleViewGuide}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Complete Guide
              </button>
            </motion.div>

            {/* Example Websites Section */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="w-full">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Example Websites Built with This Guide</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {exampleWebsites.map((website, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 * index }}
                    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                  >
                    <div className="aspect-w-16 aspect-h-9">
                      <img src={website.image} alt={website.title} className="object-cover w-full h-full" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{website.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{website.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {website.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PresentationPage;
