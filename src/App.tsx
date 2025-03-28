import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatYoullLearn from "./components/WhatYoullLearn";
import WhoItsFor from "./components/WhoItsFor";
import Examples from "./components/Examples";
import Footer from "./components/Footer";
import PresentationPage from "./components/PresentationPage";
import ErrorBoundary from "./components/ErrorBoundary";

function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main>
        <Hero />
        <WhatYoullLearn />
        <WhoItsFor />
        <Examples />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/presentation" element={<PresentationPage />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
