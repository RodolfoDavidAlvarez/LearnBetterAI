import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-600">
          <p className="text-sm">© {new Date().getFullYear()} AI Website Builder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
