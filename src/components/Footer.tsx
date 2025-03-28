import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">LearnBetterAI</span>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Building the future of web development with AI</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <a href="mailto:contact@learnbetterai.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-4">
              contact@learnbetterai.com
            </a>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                Terms of Use
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">© {new Date().getFullYear()} LearnBetterAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
