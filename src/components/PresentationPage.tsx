import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LeadCaptureModal from "./LeadCaptureModal";

const PresentationPage = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Check if user has already submitted their information
    const hasSubmitted = localStorage.getItem("guideAccess");
    if (hasSubmitted) {
      setHasAccess(true);
      setIsLoading(false);
    } else {
      // Show modal after 2 seconds
      const timer = setTimeout(() => {
        setShowModal(true);
        setIsLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleLeadCaptureSuccess = () => {
    localStorage.setItem("guideAccess", "true");
    setHasAccess(true);
    setShowModal(false);
    setShowSuccess(true);
    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation Bar */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center h-auto py-4 sm:h-16">
            <button
              onClick={() => navigate("/")}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-2 transition-colors duration-200 mb-2 sm:mb-0"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </button>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent order-first sm:order-none w-full sm:w-auto text-center mb-2 sm:mb-0">
              LearnBetterAI
            </span>
            {hasAccess && (
              <button
                onClick={() =>
                  window.open("https://drive.google.com/file/d/1vvFztYS03fYyifCl5OawqxnjYbrRnI8M/view?usp=sharing", "_blank", "noopener,noreferrer")
                }
                className="inline-flex items-center px-4 sm:px-6 py-2 text-sm sm:text-base font-medium rounded-lg shadow-lg text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 hover:scale-105 w-full sm:w-auto justify-center"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <path d="M12 18v-6" />
                  <path d="M8 15l4 4 4-4" />
                </svg>
                Download Guide
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
              Build Websites with AI Guide
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
              Watch the presentation below and access the complete guide
            </p>

            {hasAccess && (
              <motion.div
                className="flex flex-col items-center gap-24 mt-20 mb-24"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.3,
                    },
                  },
                }}
              >
                <motion.div
                  className="flex flex-col items-center gap-6 group cursor-pointer transform transition-all duration-300 hover:scale-105"
                  onClick={() =>
                    window.open("https://drive.google.com/file/d/1vvFztYS03fYyifCl5OawqxnjYbrRnI8M/view?usp=sharing", "_blank", "noopener,noreferrer")
                  }
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <span className="text-2xl font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-700">Download Guide Here</span>
                  <div className="relative">
                    <svg
                      className="w-24 h-24 text-blue-600/20 dark:text-blue-400/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-125"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    </svg>
                    <svg
                      className="w-24 h-24 text-blue-600 dark:text-blue-400 animate-bounce relative"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <path d="M12 18v-6" />
                      <path d="M8 15l4 4 4-4" />
                    </svg>
                  </div>
                </motion.div>
                <motion.div
                  className="flex flex-col items-center gap-6"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <span className="text-2xl font-semibold text-blue-600 dark:text-blue-400">Or Watch Presentation Below</span>
                  <svg
                    className="w-24 h-24 text-blue-600 dark:text-blue-400 animate-bounce"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                </motion.div>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Gamma Presentation Embed */}
            <div
              className={`w-full max-w-6xl rounded-xl shadow-2xl overflow-hidden bg-white dark:bg-gray-800 p-4 transition-all duration-500 ${
                !hasAccess ? "blur-sm pointer-events-none" : ""
              }`}
            >
              <iframe
                src="https://gamma.app/embed/q3cex4nt9iegyr6"
                style={{ width: "100%", height: "600px" }}
                allow="fullscreen"
                title="Build Websites with AI"
                className="rounded-lg"
              />
            </div>

            {/* Bottom Download Button */}
            {hasAccess && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-12 mb-16"
              >
                <button
                  onClick={() =>
                    window.open("https://drive.google.com/file/d/1vvFztYS03fYyifCl5OawqxnjYbrRnI8M/view?usp=sharing", "_blank", "noopener,noreferrer")
                  }
                  className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl shadow-xl text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 hover:scale-105"
                >
                  <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="M12 18v-6" />
                    <path d="M8 15l4 4 4-4" />
                  </svg>
                  Download Complete Guide
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Lead Capture Modal */}
      <LeadCaptureModal
        isOpen={showModal}
        onClose={() => {
          if (!hasAccess) {
            // Only redirect if they haven't submitted the form
            setShowModal(false);
            navigate("/");
          }
        }}
        onSuccess={handleLeadCaptureSuccess}
      />

      {/* Success Notification */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 bg-gradient-to-r from-green-500 to-green-400 text-white px-6 py-3 rounded-lg shadow-lg"
        >
          Success! You now have access to the complete guide.
        </motion.div>
      )}
    </div>
  );
};

export default PresentationPage;
