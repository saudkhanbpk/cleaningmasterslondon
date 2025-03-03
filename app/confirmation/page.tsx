import React from "react";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const ConfirmationPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      {/* Icon and Title Section */}
      <div className="flex flex-col items-center space-y-4">
        <FaCheckCircle className="text-6xl text-purple-600 animate-bounce" />
        <h1 className="text-4xl font-extrabold tracking-wide text-center">
          Thank You!
        </h1>
        <p className="text-lg text-gray-200 text-center max-w-lg">
        Your request has been submitted successfully. We appreciate your effort 
        and will get back to you as soon as possible. Please check your email; we have sent you a confirmation at your Gmail address.
        </p>
      </div>
      {/* Action Buttons */}
      <div className="mt-10 flex space-x-4">
        <Link href="/" passHref   className="bg-purple-600 hover:bg-purple-700 transition duration-300 px-6 py-3 rounded-full text-lg font-semibold shadow-lg">
            Go to Home
        </Link>

      </div>
    </div>
  );
};

export default ConfirmationPage;