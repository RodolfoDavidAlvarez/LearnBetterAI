import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatYoullLearn from "./components/WhatYoullLearn";
import WhoItsFor from "./components/WhoItsFor";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import LearnAI from "./pages/LearnAI";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ArticleView from "./components/ArticleView";
import AdminRoute from "./pages/admin/AdminRoute";
import PresentationPage from "./components/PresentationPage";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import AuthForm from "./components/AuthForm";
import AdminLogin from "./pages/admin/Login";

const LandingPage: React.FC = () => (
  <>
    <Hero />
    <WhatYoullLearn />
    <WhoItsFor />
  </>
);

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { currentUser } = useAuth();
  return currentUser ? <>{children}</> : <Navigate to="/login" />;
}

const App: React.FC = () => {
  return (
    <Router>
      <ErrorBoundary>
        <AuthProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900">
            <Navbar />
            <main className="flex-grow pt-16">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/learn" element={<LearnAI />} />
                <Route path="/presentation" element={<PresentationPage />} />
                <Route path="/article/:id" element={<ArticleView />} />
                <Route path="/login" element={<AuthForm />} />
                <Route path="/signup" element={<AuthForm />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route
                  path="/admin/*"
                  element={
                    <PrivateRoute>
                      <AdminRoute>
                        <AdminDashboard />
                      </AdminRoute>
                    </PrivateRoute>
                  }
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
