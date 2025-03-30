import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatYoullLearn from "./components/WhatYoullLearn";
import WhoItsFor from "./components/WhoItsFor";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import LearnAI from "./pages/LearnAI";
import Login from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ArticleView from "./components/ArticleView";
import AdminRoute from "./pages/admin/AdminRoute";

const LandingPage: React.FC = () => (
  <>
    <Hero />
    <WhatYoullLearn />
    <WhoItsFor />
  </>
);

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          <Navbar />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/learn" element={<LearnAI />} />
              <Route path="/article/:id" element={<ArticleView />} />
              <Route path="/admin/login" element={<Login />} />
              <Route
                path="/admin/*"
                element={
                  <AdminRoute>
                    <AdminDashboard />
                  </AdminRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
