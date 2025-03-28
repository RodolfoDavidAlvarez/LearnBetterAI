import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import DownloadForm from "./DownloadForm";

const Hero = () => {
  const [showExamples, setShowExamples] = useState(false);

  const handleDownloadSuccess = () => {
    setShowExamples(true);
    // Trigger download of the PDF
    const link = document.createElement("a");
    link.href = "/guide.pdf"; // Make sure to add your PDF file to the public folder
    link.download = "Website-Building-Guide.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Build a Stunning AI Website From Scratch—No Coding Needed
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Learn how to create a fully functional, AI-powered app using the latest tools, even if you've never written a single line of code.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <a
              href="#download-section"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get the Free PDF Guide
            </a>
          </motion.div>
        </div>
      </div>

      {/* Download Form */}
      <div className="mt-12">
        <DownloadForm onSuccess={handleDownloadSuccess} />
      </div>

      {/* Website Examples Grid - Only shown after form submission */}
      {showExamples && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Website Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Website",
                image: "/images/ecommerce-example.jpg",
                description: "Modern online store with AI-powered product recommendations",
              },
              {
                title: "Portfolio Site",
                image: "/images/portfolio-example.jpg",
                description: "Professional portfolio showcasing creative work",
              },
              {
                title: "Business Landing Page",
                image: "/images/business-example.jpg",
                description: "Clean and conversion-focused business website",
              },
            ].map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img src={example.image} alt={example.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{example.title}</h3>
                  <p className="text-gray-600">{example.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Background Decorations */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-indigo-50/50 to-transparent -z-10"></div>
      <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute -top-4 -left-4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </section>
  );
};

export default Hero;
