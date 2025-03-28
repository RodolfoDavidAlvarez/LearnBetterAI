import React from "react";
import RegisterForm from "../components/RegisterForm";

const RegisterDownload: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Register to Download</h2>
          <p className="mt-2 text-sm text-gray-600">Fill out the form below to access our resources</p>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterDownload;
