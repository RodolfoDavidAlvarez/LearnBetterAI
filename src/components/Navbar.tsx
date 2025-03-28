import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-indigo-600">
              AI Website Builder
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => {
                const form = document.getElementById("register-form");
                form?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Get Free Guide
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
