import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatYoullLearn from "./components/WhatYoullLearn";
import WhoItsFor from "./components/WhoItsFor";
import Examples from "./components/Examples";
import DownloadForm from "./components/DownloadForm";
import Footer from "./components/Footer";
import PresentationPage from "./components/PresentationPage";

function LandingPage() {
  const [showExamples, setShowExamples] = useState(false);
  const navigate = useNavigate();

  const handleDownloadSuccess = () => {
    setShowExamples(true);
    // Navigate to presentation page after a delay that matches the DownloadForm
    setTimeout(() => {
      navigate("/presentation");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main>
        <Hero />
        <WhatYoullLearn />
        <WhoItsFor />
        {showExamples && <Examples />}
        <DownloadForm onSuccess={handleDownloadSuccess} />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/presentation" element={<PresentationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
