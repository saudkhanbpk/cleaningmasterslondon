"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { XIcon } from "@heroicons/react/solid";

export default function ModelPage() {
  const [isFirstModalOpen, setFirstModalOpen] = useState(true);
  const [isSecondModalOpen, setSecondModalOpen] = useState(false);
  const [isThirdModalOpen, setThirdModalOpen] = useState(false);
  const [isFourthModalOpen, setFourthModalOpen] = useState(false);

  const openSecondModal = () => {
    setFirstModalOpen(false);
    setSecondModalOpen(true);
  };

  const goBackToFirstModal = () => {
    setSecondModalOpen(false);
    setFirstModalOpen(true);
  };

  const openThirdModal = () => {
    setSecondModalOpen(false);
    setThirdModalOpen(true);
  };

  const goBackToSecondModal = () => {
    setThirdModalOpen(false);
    setSecondModalOpen(true);
  };

  const openFourthModal = () => {
    setThirdModalOpen(false);
    setFourthModalOpen(true);
  };

  const goBackToThirdModal = () => {
    setFourthModalOpen(false);
    setThirdModalOpen(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* First Modal */}
      {isFirstModalOpen && (
        <Dialog.Root open={isFirstModalOpen}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
            <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 sm:p-8 rounded-lg shadow-lg w-11/12 max-w-md sm:max-w-lg md:max-w-xl h-auto">
              <div className="flex justify-evenly items-center mb-6">
                <div className="w-1/2 bg-gray-200 h-3 rounded">
                  <div className="bg-blue-500 h-3 w-1/2" />
                </div>
                <Dialog.Close asChild>
                  <button className="text-gray-600 hover:text-gray-800">
                    <XIcon className="h-6 w-6" />
                  </button>
                </Dialog.Close>
              </div>
              <div className="text-center space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Your number is safe with us
                </h2>
                <p className="text-sm text-gray-600">
                  Please provide the necessary information to receive a custom
                  quote.
                </p>
                <input
                  type="text"
                  placeholder="Your details"
                  className="mt-4 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mt-8 flex justify-between space-x-4">
                <Dialog.Close asChild>
                  <button className="px-6 py-3 bg-gray-300 rounded-md text-gray-700 hover:bg-gray-400 transition-all">
                    Back
                  </button>
                </Dialog.Close>
                <button
                  className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
                  onClick={openSecondModal}
                >
                  Continue
                </button>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      )}

      {/* Second Modal */}
      {isSecondModalOpen && (
        <Dialog.Root open={isSecondModalOpen}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
            <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 sm:p-8 rounded-lg shadow-lg w-11/12 max-w-md sm:max-w-lg md:max-w-xl h-auto">
              <div className="flex justify-evenly items-center mb-6">
                <div className="w-1/2 bg-gray-200 h-3 rounded">
                  <div className="bg-blue-500 h-3 w-1/2" />
                </div>
                <Dialog.Close asChild>
                  <button className="text-gray-600 hover:text-gray-800">
                    <XIcon className="h-6 w-6" />
                  </button>
                </Dialog.Close>
              </div>
              <div className="text-center space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  What is Your name?
                </h2>
                <p className="text-sm text-gray-600">
                  Please tell us your name to proceed.
                </p>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-4 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex items-center space-x-2 mt-4">
                  <input
                    type="checkbox"
                    id="agree"
                    className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                  />
                  <label htmlFor="agree" className="text-sm text-gray-600">
                    I agree to the terms and conditions
                  </label>
                </div>
              </div>
              <div className="mt-8 flex justify-between space-x-4">
                <button
                  className="px-6 py-3 bg-gray-300 rounded-md text-gray-700 hover:bg-gray-400 transition-all"
                  onClick={goBackToFirstModal}
                >
                  Back
                </button>
                <button
                  className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
                  onClick={openThirdModal}
                >
                  Continue
                </button>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      )}

      {/* Third Modal */}
      {isThirdModalOpen && (
        <Dialog.Root open={isThirdModalOpen}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
            <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 sm:p-8 rounded-lg shadow-lg w-11/12 max-w-md sm:max-w-lg md:max-w-xl h-auto">
              <div className="flex justify-evenly items-center mb-6">
              <div className="w-1/2 bg-gray-200 h-3 rounded">
              <div className="bg-blue-500 h-3 w-1/2" />
                </div>
                <Dialog.Close asChild>
                  <button className="text-gray-600 hover:text-gray-800">
                    <XIcon className="h-6 w-6" />
                  </button>
                </Dialog.Close>
              </div>
              <div className="text-center space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Verify do you need cleaner
                </h2>
                <p className="text-sm text-gray-600">
                  Please verify your information before submitting.
                </p>
                <input
                  type="text"
                  placeholder="Your confirmation details"
                  className="mt-4 p-3 border-b-2 border-gray-400 w-full focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mt-8 flex justify-between space-x-4">
                <button
                  className="px-6 py-3 bg-gray-300 rounded-md text-gray-700 hover:bg-gray-400 transition-all"
                  onClick={goBackToSecondModal}
                >
                  Back
                </button>
                <button
                  className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
                  onClick={openFourthModal}
                >
                  Continue
                </button>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      )}

      {/* Fourth Modal */}
      {isFourthModalOpen && (
  <Dialog.Root open={isFourthModalOpen}>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
      <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 sm:p-8 rounded-lg shadow-lg w-11/12 max-w-md sm:max-w-lg md:max-w-xl h-auto">
        <div className="flex justify-evenly items-center mb-6">
          <div className="w-1/2 bg-gray-200 h-3 rounded">
            <div className="bg-blue-500 h-3 w-1/2" />
          </div>
          <Dialog.Close asChild>
            <button className="text-gray-600 hover:text-gray-800">
              <XIcon className="h-6 w-6" />
            </button>
          </Dialog.Close>
        </div>
        <div className="text-center space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Confirm Your Phone Number
          </h2>
          <p className="text-sm text-gray-600">
            Please enter the code we just sent to your phone.
          </p>

          {/* OTP Input Boxes */}
          <div className="flex justify-center space-x-2 mt-4">
            {[...Array(4)].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="w-12 h-12 text-center text-xl border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>

          {/* Additional Text */}
          <p className="text-sm text-gray-600 mt-4">
            Didn't receive a code? 
            <span className="text-blue-500 cursor-pointer hover:underline">
              Resend
            </span> or  
            <span className="text-blue-500 cursor-pointer hover:underline">
              Change Number
            </span>
          </p>
        </div>
        <div className="mt-8 flex justify-between space-x-4">
          <button
            className="px-6 py-3 bg-gray-300 rounded-md text-gray-700 hover:bg-gray-400 transition-all"
            onClick={goBackToThirdModal}
          >
            Back
          </button>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all">
            Confirm
          </button>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)}


    </div>
  );
}

