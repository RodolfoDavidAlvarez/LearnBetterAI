import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

const AuthButtons: React.FC = () => {
  const { user, signOut } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <>
      {user ? (
        <div className="flex items-center gap-4">
          <span className="text-gray-700 dark:text-gray-300">{user.email}</span>
          <button onClick={handleSignOut} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            Sign Out
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <button onClick={() => setShowLoginModal(true)} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            Sign In
          </button>
          <button
            onClick={() => setShowSignUpModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign Up
          </button>
        </div>
      )}

      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToSignUp={() => {
          setShowLoginModal(false);
          setShowSignUpModal(true);
        }}
      />

      <SignUpModal
        isOpen={showSignUpModal}
        onClose={() => setShowSignUpModal(false)}
        onSwitchToLogin={() => {
          setShowSignUpModal(false);
          setShowLoginModal(true);
        }}
      />
    </>
  );
};

export default AuthButtons;
