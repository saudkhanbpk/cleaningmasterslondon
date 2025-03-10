"use client";
import { useState } from "react";
import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import * as Dialog from "@radix-ui/react-dialog";
import { XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import bgimage from "../../assets/cleaning2.jpeg"
import { motion } from 'framer-motion';
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
interface emailFormData {
  emailAddress: string;
  verificationCode: string[];
}

interface FormDataType {
  name: string;
  location: string;
  phoneNumber: string;
  emailAddress: string;
  receptionRooms: { selected: string; other: string; showOther: boolean };
  cleaningFrequency: { selected: string; other: string; showOther: boolean };
  preferredDays: { selected: string[]; other: string; showOther: boolean };
  bedrooms: { selected: string; other: string; showOther: boolean };
  propertyType: { selected: string; other: string; showOther: boolean };
  hiringDecision: { selected: string; other: string; showOther: boolean };
  cleaningMaterials: { selected: string; other: string; showOther: boolean };
  currentCleaner: { selected: string; other: string; showOther: boolean };
  cleaningType: { selected: string; other: string; showOther: boolean };
  additionalDetails: { description: string; image: File | null };
}

export default function ModelPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isVerified, setisVerified] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [emailFormData, setemailFormData] = useState<emailFormData>({
    emailAddress: "",
    verificationCode: ["", "", "", ""],
  });



  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    location: "",
    phoneNumber: "",
    emailAddress: "",
    receptionRooms: { selected: "", other: "", showOther: false },
    cleaningFrequency: { selected: "", other: "", showOther: false },
    preferredDays: { selected: [], other: "", showOther: false },
    bedrooms: { selected: "", other: "", showOther: false },
    propertyType: { selected: "", other: "", showOther: false },
    hiringDecision: { selected: "", other: "", showOther: false },
    cleaningMaterials: { selected: "", other: "", showOther: false },
    currentCleaner: { selected: "", other: "", showOther: false },
    cleaningType: { selected: "", other: "", showOther: false },
    additionalDetails: { description: "", image: null },
  });

  useEffect(() => {
    AOS.init();
  }, []);

  const handleMultipleSelect = (
    section: keyof Pick<FormDataType, "preferredDays">,
    value: string
  ): void => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        selected: prev[section].selected.includes(value)
          ? prev[section].selected.filter((item) => item !== value)
          : [...prev[section].selected, value],
      },
    }));
  };

  const handleOptionSelect = (
    section: keyof Omit<
      FormDataType,
      | "name"
      | "location"
      | "phoneNumber"
      | "emailAddress"
      | "additionalDetails"
      | "preferredDays"
    >,
    value: string
  ): void => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        selected: value,
        showOther: value === "other" ? true : false,
      },
    }));
  };

  const handleOtherInput = (
    section: keyof Omit<
      FormDataType,
      | "name"
      | "location"
      | "phoneNumber"
      | "emailAddress"
      | "preferredDays"
      | "additionalDetails"
    >,
    value: string
  ): void => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        other: value,
      },
    }));
  };

  const handleBasicInput = (
    field: "name" | "location" | "phoneNumber" | "emailAddress",
    value: string
  ): void => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleEmailInput = (field: "emailAddress", value: string): void => {
    setemailFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };


  const handleVerificationCode = (index: number, value: string) => {
    setemailFormData((prev) => {
      const codeArray = [...prev.verificationCode];

      if (/^\d$/.test(value)) {
        codeArray[index] = value;

        if (index < 3 && value !== "") {
          const nextInput = document.getElementById(`otp-${index + 1}`) as HTMLInputElement | null;
          nextInput?.focus();
        }
      } else if (value === "") {
        codeArray[index] = "";
      }

      return { ...prev, verificationCode: codeArray };
    });
  };




  const handleAdditionalDetails = (
    field: keyof FormDataType["additionalDetails"],
    value: string | File | null
  ): void => {
    setFormData((prev) => ({
      ...prev,
      additionalDetails: {
        ...prev.additionalDetails,
        [field]: value,
      },
    }));
  };

  const handleOtherCheckboxChange = (
    section: keyof Omit<
      FormDataType,
      | "name"
      | "location"
      | "phoneNumber"
      | "emailAddress"
      | "verificationCode"
      | "additionalDetails"
    >
  ): void => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        selected: "other",
        showOther: true,
      },
    }));
  };
  const router = useRouter();

  const goToRoot = () => {
    setStep(0);
    router.push("/");
  };

  const handleSubmitForm = async () => {
    try {
      setLoading(true);

      const formDataToSubmit = new FormData();
      formDataToSubmit.append("name", formData.name);
      formDataToSubmit.append("location", formData.location);
      formDataToSubmit.append("phoneNumber", formData.phoneNumber);
      formDataToSubmit.append("emailAddress", emailFormData.emailAddress);
      const fields = [
        "receptionRooms",
        "cleaningFrequency",
        "preferredDays",
        "bedrooms",
        "propertyType",
        "hiringDecision",
        "cleaningMaterials",
        "currentCleaner",
        "cleaningType",
      ];

      fields.forEach((field) => {
        const section = formData[field as keyof FormDataType] as any;

        if (section.selected === "other") {
          formDataToSubmit.append(`${field}[selected]`, "other");
          formDataToSubmit.append(`${field}[other]`, section.other || "");
        } else {
          formDataToSubmit.append(`${field}[selected]`, section.selected);
        }
      });

      formDataToSubmit.append(
        "additionalDetails[description]",
        formData.additionalDetails.description
      );

      if (formData.additionalDetails.image) {
        formDataToSubmit.append("image", formData.additionalDetails.image);
      }

      const response = await axios.post(
        `${API_BASE_URL}/api/v1/submit-multiforms`,
        formDataToSubmit,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      if (response.data.success) {
        router.push('/confirmation');
        toast.success("Form submitted successfully!");
      } else {
        toast.error(response.data.message || "An error occurred.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };
  const resendOtp = async () => {
    try {
      setLoading(true);
      setemailFormData((prev) => ({
        ...prev,
        verificationCode: ["", "", "", ""],
      }));
      const response = await axios.post(`${API_BASE_URL}/api/v1/create-user`, {
        emailAddress: emailFormData.emailAddress,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        setLoading(false);
        setErrors({});
      }
    } catch (error) {
      setLoading(false);
      const err = error as AxiosError<{ message?: string }>;
      console.error("Error sending OTP:", err);
      toast.error(
        err.response?.data?.message || "An error occurred while sending OTP."
      );
    }
  };

  const nextStep = async () => {
    const newErrors: { [key: string]: string } = {};
    if (step === 1) {
      if (formData.name.trim().length < 3) {
        newErrors.name = "Name must be at least 3 characters long.";
        setErrors(newErrors);
        return;
      } else setStep(2);
    } else if (step === 2) {
      if (formData.location.trim().length < 3) {
        newErrors.location = "Location must be at least 3 characters long.";
        setErrors(newErrors);
        return;
      } else setStep(3);
    } else if (step === 3) {
      if (formData.phoneNumber.length < 10) {
        newErrors.phoneNumber = "Phone number must be 10 digits long.";
        setErrors(newErrors);
        return;
      } else {
        setStep(4);
      }
    } else if (step == 4) {
      const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
      if (!emailFormData.emailAddress.trim()) {
        setErrors({ emailAddress: "Email is required." });
        return;
      } else if (!validateEmail(emailFormData.emailAddress)) {
        setErrors({ emailAddress: "Please enter a valid email address." });
        return;
      }
      if (!isVerified) {
        try {
          setLoading(true);
          const response = await axios.post(
            `${API_BASE_URL}/api/v1/create-user`,
            {
              emailAddress: emailFormData.emailAddress,
            }
          );

          if (response.data.success) {
            toast.success(response.data.message);
            setLoading(false);

            setErrors({});
            setStep(5);
          }
        } catch (error) {
          setLoading(false);
          const err = error as AxiosError<{ message?: string }>;
          console.error("Error sending OTP:", err);
          toast.error(
            err.response?.data?.message ||
            "An error occurred while sending OTP."
          );
        }
      }
      setErrors({});
      setStep(5);
    } else if (step === 5) {
      if (!isVerified) {
        if (emailFormData.verificationCode.some((digit) => digit === "")) {
          toast.error("Please enter a valid 4-digit OTP.");
          return;
        }

        try {
          setLoading(true);

          const response = await axios.post(
            `${API_BASE_URL}/api/v1/verify-otp`,
            {
              emailAddress: emailFormData.emailAddress,
              otp: emailFormData.verificationCode.join(""), // Convert array to string
            }
          );

          if (response.data.success) {
            toast.success(response.data.message);
            setisVerified(true);
            setStep(6);
            setisVerified(true);
          }
        } catch (error) {
          const err = error as AxiosError<{ message?: string }>;
          toast.error(
            err.response?.data?.message || "OTP verification failed."
          );
        } finally {
          setLoading(false);
        }
      } else {
        setStep(6);
      }
    } else if (step === 6) {
      if (
        !formData.receptionRooms.selected &&
        !formData.receptionRooms.showOther
      ) {
        setErrors({ receptionRooms: "Please select at least one option." });
        return;
      }

      if (formData.receptionRooms.showOther) {
        if (
          !formData.receptionRooms.other.trim() ||
          formData.receptionRooms.other.trim().length < 4
        ) {
          setErrors({
            receptionRoomsOther: "Please enter at least 4 characters.",
          });
          return;
        }
      }

      setErrors({});
      setStep(7);
    } else if (step === 7) {
      if (
        !formData.cleaningFrequency.selected &&
        !formData.cleaningFrequency.showOther
      ) {
        setErrors({ cleaningFrequency: "Please select at least one option." });
        return;
      }

      if (formData.cleaningFrequency.showOther) {
        if (
          !formData.cleaningFrequency.other.trim() ||
          formData.cleaningFrequency.other.trim().length < 4
        ) {
          setErrors({
            cleaningFrequencyOther: "Please enter at least 4 characters.",
          });
          return;
        }
      }

      setErrors({});
      setStep(8);
    } else if (step === 8) {
      if (formData.preferredDays.selected.length === 0) {
        setErrors({ preferredDays: "Please select at least one day." });
        return;
      }

      setErrors({});
      setStep(9); // Move to next step
    } else if (step === 9) {
      if (!formData.bedrooms.selected && !formData.bedrooms.showOther) {
        setErrors({ bedrooms: "Please select at least one option." });
        return;
      }

      if (formData.bedrooms.showOther) {
        if (
          !formData.bedrooms.other.trim() ||
          formData.bedrooms.other.trim().length < 4
        ) {
          setErrors({ bedroomsOther: "Please enter at least 4 characters." });
          return;
        }
      }

      setErrors({});
      setStep(10);
    } else if (step === 10) {
      if (!formData.propertyType.selected && !formData.propertyType.showOther) {
        setErrors({ propertyType: "Please select at least one option." });
        return;
      }

      if (formData.propertyType.showOther) {
        if (
          !formData.propertyType.other.trim() ||
          formData.propertyType.other.trim().length < 4
        ) {
          setErrors({
            propertyTypeOther: "Please enter at least 4 characters.",
          });
          return;
        }
      }

      setErrors({});
      setStep(11);
    } else if (step === 11) {
      if (
        !formData.hiringDecision.selected &&
        !formData.hiringDecision.showOther
      ) {
        setErrors({ hiringDecision: "Please select at least one option." });
        return;
      }

      if (formData.hiringDecision.showOther) {
        if (
          !formData.hiringDecision.other.trim() ||
          formData.hiringDecision.other.trim().length < 4
        ) {
          setErrors({
            hiringDecisionOther: "Please enter at least 4 characters.",
          });
          return;
        }
      }

      setErrors({});
      setStep(12);
    } else if (step === 12) {
      if (
        !formData.cleaningMaterials.selected &&
        !formData.cleaningMaterials.showOther
      ) {
        setErrors({ cleaningMaterials: "Please select at least one option." });
        return;
      }

      if (formData.cleaningMaterials.showOther) {
        if (
          !formData.cleaningMaterials.other.trim() ||
          formData.cleaningMaterials.other.trim().length < 4
        ) {
          setErrors({
            cleaningMaterialsOther: "Please enter at least 4 characters.",
          });
          return;
        }
      }

      setErrors({});
      setStep(13); // Move to next step
    } else if (step === 13) {
      if (
        !formData.currentCleaner.selected &&
        !formData.currentCleaner.showOther
      ) {
        setErrors({ currentCleaner: "Please select at least one option." });
        return;
      }

      if (formData.currentCleaner.showOther) {
        if (
          !formData.currentCleaner.other.trim() ||
          formData.currentCleaner.other.trim().length < 4
        ) {
          setErrors({
            currentCleanerOther: "Please enter at least 4 characters.",
          });
          return;
        }
      }

      setErrors({});
      setStep(14); // Move to next step
    } else if (step === 14) {
      if (!formData.cleaningType.selected && !formData.cleaningType.showOther) {
        setErrors({ cleaningType: "Please select at least one option." });
        return;
      }

      if (formData.cleaningType.showOther) {
        if (
          !formData.cleaningType.other.trim() ||
          formData.cleaningType.other.trim().length < 4
        ) {
          setErrors({
            cleaningTypeOther: "Please enter at least 4 characters.",
          });
          return;
        }
      }

      setErrors({});
      setStep(15); // Move to next step
    } else {
      setStep((prev) => Math.min(prev + 1, 15));
    }
  };


  const [open, setOpen] = useState(false);

  const prevStep = () => setStep((prev) => prev - 1);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Dialog.Root
        open={step > 0}
        modal={true}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            setStep(0);
          }
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0" style={{ backgroundImage: `url(${bgimage.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <Dialog.Content
            className="fixed top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-xl shadow-lg w-11/12 max-w-md sm:max-w-lg md:max-w-xl max-h-[530px] overflow-y-auto"
            onPointerDownOutside={(e) => e.preventDefault()}
            onInteractOutside={(e) => e.preventDefault()}
          >
            <div className="flex justify-between items-center mb-6">
              <div className="w-full bg-gray-200 h-2 rounded-full text-center">
                <div
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-80 h-2 border"
                  style={{ width: `${(step / 15) * 100}%` }}
                />
              </div>
              <button
                className="text-gray-600 hover:text-gray-800"

                onClick={() => setOpen(true)}
              >
                <XIcon className="h-6 w-6" />
              </button>
            </div>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="absolute z-50 md:ml-16 max-w-lg border border-gray-200 shadow-lg flex flex-col gap-4 items-center justify-center bg-gray-100 py-8 px-6 rounded-xl"
              >
                <h2 className="text-2xl text-gray-800 font-semibold mb-4">Are you sure want to close?</h2>

                <div className="space-x-4">
                  <button
                    className="bg-red-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-red-700 transition-all duration-300 ease-in-out transform hover:scale-105"
                    onClick={goToRoot}
                  >
                    Yes
                  </button>
                  <button
                    className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-green-700 transition-all duration-300 ease-in-out transform hover:scale-105"
                    onClick={() => setOpen(false)}
                  >
                    No
                  </button>
                </div>
              </motion.div>
            )}




            {step === 1 && (
              <div data-aos="flip-left" data-aos-duration="1500">
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                  What is Your Name?
                </h2>
                <p className="text-sm text-gray-600 text-center">
                  Please tell us your name to proceed.
                </p>

                <div className="mt-4 w-full">
                  {errors.name && (
                    <p className="text-red-500 text-sm mb-1">{errors.name}</p>
                  )}

                  <input
                    type="text"
                    required
                    placeholder="Please Enter Your Name"
                    className={`p-3 border rounded-xl w-full ${errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                    value={formData.name}
                    onClick={() => {
                      setErrors((prev) => ({ ...prev, name: "" }));
                    }}
                    onChange={(e) => handleBasicInput("name", e.target.value)}
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div data-aos="flip-left" data-aos-duration="1500">
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                  Where do you need the cleaner?
                </h2>
                <p className="text-sm text-gray-600 text-center">
                  The postal or town for the address where you want the cleaner.
                </p>
                <div className="mt-4 w-full">
                  {errors.location && (
                    <p className="text-red-500 text-sm mb-1">
                      {errors.location}
                    </p>
                  )}

                  <input
                    type="text"
                    required
                    placeholder="Please enter Your Address"
                    className={`p-3 border rounded-xl w-full ${errors.location ? "border-red-500" : "border-gray-300"
                      }`}
                    value={formData.location}
                    onClick={() => {
                      setErrors((prev) => ({ ...prev, location: "" }));
                    }}
                    onChange={(e) =>
                      handleBasicInput("location", e.target.value)
                    }
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div data-aos="flip-left" data-aos-duration="1500">
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                  Your number is safe with us
                </h2>
                <p className="text-sm text-gray-600 text-center">
                  Provide your number for a custom quote.
                </p>

                <div className="mt-4 w-full">
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm mb-1">
                      {errors.phoneNumber}
                    </p>
                  )}

                  <div className="relative flex items-center">
                    <span className="absolute left-3 p-3">+44</span>
                    <input
                      type="text"
                      maxLength={10}
                      required
                      placeholder="Pleae Enter Your Phone Number"
                      className={`p-3 pl-16 border rounded-xl w-full ${errors.phoneNumber
                        ? "border-red-500"
                        : "border-gray-300"
                        }`}
                      value={formData.phoneNumber}
                      onClick={() => {
                        setErrors((prev) => ({ ...prev, phoneNumber: "" }));
                      }}
                      onChange={(e) => {
                        // Remove non-numeric characters and restrict to 10 digits
                        let value = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
                        if (value.length <= 10) {
                          setFormData((prev) => ({
                            ...prev,
                            phoneNumber: value,
                          }));
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
            {step === 4 && (
              <div data-aos="flip-left" data-aos-duration="1500">
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                  What is Your Email Address?
                </h2>
                <p className="text-sm text-gray-600 text-center">
                  Your Email is safe with us
                </p>

                <div className="mt-4 w-full">
                  {errors.emailAddress && (
                    <p className="text-red-500 text-sm mb-1">
                      {errors.emailAddress}
                    </p>
                  )}

                  <input
                    type="text"
                    required
                    placeholder="Enter your Email Address"
                    className={`p-3 border rounded-xl w-full ${errors.emailAddress ? "border-red-500" : "border-gray-300"
                      }`}
                    value={emailFormData.emailAddress}
                    onClick={() => {
                      setErrors((prev) => ({ ...prev, emailAddress: "" }));
                    }}
                    onChange={(e) =>
                      handleEmailInput("emailAddress", e.target.value)
                    }
                    readOnly={isVerified}
                  />
                </div>
              </div>
            )}
            {step === 5 && (
              <div data-aos="flip-left" data-aos-duration="1500">
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                  Confirm Your Phone Number
                </h2>
                <p className="text-sm text-gray-600 mb-3 text-center">
                  {isVerified
                    ? "Phone number verified ✅"
                    : `Enter the OTP sent to ${emailFormData.emailAddress}`}
                </p>
                <div className="flex gap-2 justify-center">
                  {[0, 1, 2, 3].map((index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength={1}
                      className="w-12 h-12 text-center text-lg border border-gray-400 rounded-xl"
                      value={emailFormData.verificationCode[index] || ""}
                      onChange={(e) => handleVerificationCode(index, e.target.value)}
                      id={`otp-${index}`}
                      readOnly={isVerified}
                    />
                  ))}
                </div>

                {!isVerified && (
                  <p className="text-sm text-gray-600 text-center mt-4">
                    Did not receive a code?{" "}
                    <span
                      onClick={resendOtp}
                      className="text-blue-500 cursor-pointer hover:underline"
                    >
                      Resend
                    </span>{" "}
                    or{" "}
                    <span
                      className="text-blue-500 cursor-pointer hover:underline"
                      onClick={() => setStep(4)}
                    >
                      Change Email
                    </span>
                  </p>
                )}
              </div>
            )}


            {step === 6 && (
              <div data-aos="flip-left" data-aos-duration="1500">
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                  How many reception rooms need cleaning?
                </h2>
                <p className="text-sm text-gray-600 text-center">
                  Includes lounge or dining room.
                </p>

                {/* Show Error at the Top for Selection or Other Input Validation */}
                {(errors.receptionRooms || errors.receptionRoomsOther) && (
                  <p className="text-red-500 text-sm text-center mt-2">
                    {errors.receptionRooms || errors.receptionRoomsOther}
                  </p>
                )}

                <div className="flex flex-col items-start gap-4 mt-4">
                  {/* Radio Button Options */}
                  {["0", "1", "2", "3", "4+"].map((option, index) => (
                    <label key={index} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        className="h-4 w-4 text-blue-500"
                        checked={formData.receptionRooms.selected === option}
                        onClick={() => setErrors({})} // Clear errors when selecting any option
                        onChange={() =>
                          handleOptionSelect("receptionRooms", option)
                        }
                      />
                      <span className="text-sm text-gray-600">{option}</span>
                    </label>
                  ))}

                  {/* Other Option */}
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      className="h-4 w-4 text-blue-500"
                      checked={formData.receptionRooms.showOther}
                      onClick={() => setErrors({})} // Clear errors when selecting "Other"
                      onChange={() =>
                        handleOtherCheckboxChange("receptionRooms")
                      }
                    />
                    <span className="text-sm text-gray-600">Other</span>
                  </label>

                  {/* Other Text Field - Only Highlights in Red if Invalid */}
                  {formData.receptionRooms.showOther && (
                    <input
                      type="text"
                      placeholder="Please specify"
                      className={`p-2 border rounded-md w-full ${errors.receptionRoomsOther
                        ? "border-red-500"
                        : "border-gray-300"
                        }`}
                      value={formData.receptionRooms.other}
                      onClick={() =>
                        setErrors((prev) => ({
                          ...prev,
                          receptionRoomsOther: "",
                        }))
                      } 
                      onChange={(e) =>
                        handleOtherInput("receptionRooms", e.target.value)
                      }
                    />
                  )}
                </div>
              </div>
            )}

            {step === 7 && (
              <div data-aos="flip-left" data-aos-duration="1500">
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                  How Often do you need cleaning?
                </h2>

                <p className="text-sm text-gray-600 text-center">
                  Please select how often you need cleaning services.
                </p>

                {/* Show Error at the Top for Selection or Other Input Validation */}
                {(errors.cleaningFrequency ||
                  errors.cleaningFrequencyOther) && (
                    <p className="text-red-500 text-sm text-center mt-2">
                      {errors.cleaningFrequency || errors.cleaningFrequencyOther}
                    </p>
                  )}

                <div className="mt-4 w-full">
                  <div className="flex flex-col items-start gap-4 mt-4">
                    {/* Radio Button Options */}
                    {[
                      "Daily",
                      "Twice a Week",
                      "Weekly",
                      "Every other week",
                      "Once a month",
                      "One-time-clean",
                    ].map((option, index) => (
                      <label
                        key={index}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="radio"
                          className="h-4 w-4 text-blue-500"
                          checked={
                            formData.cleaningFrequency.selected === option
                          }
                          onClick={() => setErrors({})} // Clear errors when selecting an option
                          onChange={() =>
                            handleOptionSelect("cleaningFrequency", option)
                          }
                        />
                        <span className="text-sm text-gray-600">{option}</span>
                      </label>
                    ))}

                    {/* Other Option */}
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        className="h-4 w-4 text-blue-500"
                        checked={formData.cleaningFrequency.showOther}
                        onClick={() => setErrors({})} // Clear errors when selecting "Other"
                        onChange={() =>
                          handleOtherCheckboxChange("cleaningFrequency")
                        }
                      />
                      <span className="text-sm text-gray-600">Other</span>
                    </label>

                    {/* Other Text Field - Only Highlights in Red if Invalid */}
                    {formData.cleaningFrequency.showOther && (
                      <input
                        type="text"
                        placeholder="Please specify"
                        className={`p-2 border rounded-md w-full ${errors.cleaningFrequencyOther
                          ? "border-red-500"
                          : "border-gray-300"
                          }`}
                        value={formData.cleaningFrequency.other}
                        onClick={() =>
                          setErrors((prev) => ({
                            ...prev,
                            cleaningFrequencyOther: "",
                          }))
                        } // Remove error on click
                        onChange={(e) =>
                          handleOtherInput("cleaningFrequency", e.target.value)
                        }
                      />
                    )}
                  </div>
                </div>
              </div>
            )}

            {step === 8 && (
              <div data-aos="flip-left" data-aos-duration="1500">
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                  When are the best days for cleaning?
                </h2>

                <p className="text-sm text-gray-600 text-center">
                  Please select the days you prefer for cleaning.
                </p>

                <div className="mt-4 w-full">
                  {/* Show Error Message */}
                  {errors.preferredDays && (
                    <p className="text-red-500 text-sm mb-1 text-center">
                      {errors.preferredDays}
                    </p>
                  )}

                  <div className="flex flex-col items-start gap-4 mt-4">
                    {[
                      "Any",
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                      "Sunday",
                    ].map((option, index) => (
                      <label
                        key={index}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          required
                          className="h-4 w-4 text-blue-500"
                          checked={formData.preferredDays.selected.includes(
                            option
                          )}
                          onChange={() =>
                            handleMultipleSelect("preferredDays", option)
                          }
                        />
                        <span className="text-sm text-gray-600">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 9 && (
              <div data-aos="flip-left" data-aos-duration="1500">
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                  How many bedroom(s) need cleaning?
                </h2>
                <p className="text-sm text-gray-600 text-center">
                  Includes lounge or dining room.
                </p>

                {/* Show Error at the Top for Selection or Other Input Validation */}
                {(errors.bedrooms || errors.bedroomsOther) && (
                  <p className="text-red-500 text-sm text-center mt-2">
                    {errors.bedrooms || errors.bedroomsOther}
                  </p>
                )}

                <div className="mt-4 w-full">
                  <div className="flex flex-col items-start gap-4 mt-4">
                    {/* Radio Button Options */}
                    {[
                      "0 bedroom",
                      "1 bedroom",
                      "2 bedrooms",
                      "3 bedrooms",
                      "4 bedrooms",
                      "5+ bedrooms",
                      "Studio",
                    ].map((option, index) => (
                      <label
                        key={index}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="radio"
                          className="h-4 w-4 text-blue-500"
                          checked={formData.bedrooms.selected === option}
                          onClick={() => setErrors({})} // Clear errors when selecting an option
                          onChange={() =>
                            handleOptionSelect("bedrooms", option)
                          }
                        />
                        <span className="text-sm text-gray-600">{option}</span>
                      </label>
                    ))}

                    {/* Other Option */}
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        className="h-4 w-4 text-blue-500"
                        checked={formData.bedrooms.showOther}
                        onClick={() => setErrors({})} // Clear errors when selecting "Other"
                        onChange={() => handleOtherCheckboxChange("bedrooms")}
                      />
                      <span className="text-sm text-gray-600">Other</span>
                    </label>

                    {/* Other Text Field - Only Highlights in Red if Invalid */}
                    {formData.bedrooms.showOther && (
                      <input
                        type="text"
                        placeholder="Please specify"
                        className={`p-2 border rounded-md w-full ${errors.bedroomsOther
                          ? "border-red-500"
                          : "border-gray-300"
                          }`}
                        value={formData.bedrooms.other}
                        onClick={() =>
                          setErrors((prev) => ({ ...prev, bedroomsOther: "" }))
                        } // Remove error on click
                        onChange={(e) =>
                          handleOtherInput("bedrooms", e.target.value)
                        }
                      />
                    )}
                  </div>
                </div>
              </div>
            )}

            {step === 10 && (
              <div data-aos="flip-left" data-aos-duration="1500">
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                  What type of property needs cleaning?
                </h2>

                {/* Show Error at the Top for Selection or Other Input Validation */}
                {(errors.propertyType || errors.propertyTypeOther) && (
                  <p className="text-red-500 text-sm text-center mt-2">
                    {errors.propertyType || errors.propertyTypeOther}
                  </p>
                )}

                <div className="flex flex-col items-start gap-4 mt-4">
                  {/* Radio Button Options */}
                  {[
                    "Bungalow",
                    "Commercial property",
                    "Flat or Apartment",
                    "House",
                  ].map((option, index) => (
                    <label key={index} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        className="h-4 w-4 text-blue-500"
                        checked={formData.propertyType.selected === option}
                        onClick={() => setErrors({})} // Clear errors when selecting an option
                        onChange={() =>
                          handleOptionSelect("propertyType", option)
                        }
                      />
                      <span className="text-sm text-gray-600">{option}</span>
                    </label>
                  ))}

                  {/* Other Option */}
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      className="h-4 w-4 text-blue-500"
                      checked={formData.propertyType.showOther}
                      onClick={() => setErrors({})} // Clear errors when selecting "Other"
                      onChange={() => handleOtherCheckboxChange("propertyType")}
                    />
                    <span className="text-sm text-gray-600">Other</span>
                  </label>


                  {formData.propertyType.showOther && (
                    <input
                      type="text"
                      placeholder="Please specify"
                      className={`p-2 border rounded-md w-full ${errors.propertyTypeOther
                        ? "border-red-500"
                        : "border-gray-300"
                        }`}
                      value={formData.propertyType.other}
                      onClick={() =>
                        setErrors((prev) => ({
                          ...prev,
                          propertyTypeOther: "",
                        }))
                      } // Remove error on click
                      onChange={(e) =>
                        handleOtherInput("propertyType", e.target.value)
                      }
                    />
                  )}
                </div>
              </div>
            )}

            {step === 11 && (
              <div data-aos="flip-left" data-aos-duration="1500">
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                  How Likely are you to make a hiring decision?
                </h2>

                {/* Show Error at the Top for Selection or Other Input Validation */}
                {(errors.hiringDecision || errors.hiringDecisionOther) && (
                  <p className="text-red-500 text-sm text-center mt-2">
                    {errors.hiringDecision || errors.hiringDecisionOther}
                  </p>
                )}

                <div className="flex flex-col items-start gap-4 mt-4">
                  {/* Radio Button Options */}
                  {[
                    "I am ready to hire now",
                    "I am definitely going to hire someone",
                    "I am likely to hire someone",
                    "I will possibly hire someone",
                    "I am planning and researching",
                  ].map((option, index) => (
                    <label key={index} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        className="h-4 w-4 text-blue-500"
                        checked={formData.hiringDecision.selected === option}
                        onClick={() => setErrors({})} // Clear errors when selecting an option
                        onChange={() =>
                          handleOptionSelect("hiringDecision", option)
                        }
                      />
                      <span className="text-sm text-gray-600">{option}</span>
                    </label>
                  ))}

                  {/* Other Option */}
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      className="h-4 w-4 text-blue-500"
                      checked={formData.hiringDecision.showOther}
                      onClick={() => setErrors({})} // Clear errors when selecting "Other"
                      onChange={() =>
                        handleOtherCheckboxChange("hiringDecision")
                      }
                    />
                    <span className="text-sm text-gray-600">Other</span>
                  </label>

                  {/* Other Text Field - Only Highlights in Red if Invalid */}
                  {formData.hiringDecision.showOther && (
                    <input
                      type="text"
                      placeholder="Please specify"
                      className={`p-2 border rounded-md w-full ${errors.hiringDecisionOther
                        ? "border-red-500"
                        : "border-gray-300"
                        }`}
                      value={formData.hiringDecision.other}
                      onClick={() =>
                        setErrors((prev) => ({
                          ...prev,
                          hiringDecisionOther: "",
                        }))
                      } // Remove error on click
                      onChange={(e) =>
                        handleOtherInput("hiringDecision", e.target.value)
                      }
                    />
                  )}
                </div>
              </div>
            )}

            {step === 12 && (
              <div data-aos="flip-left" data-aos-duration="1500">
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                  Will you be supplying cleaning materials/equipment?
                </h2>

                {/* Show Error at the Top for Selection or Other Input Validation */}
                {(errors.cleaningMaterials ||
                  errors.cleaningMaterialsOther) && (
                    <p className="text-red-500 text-sm text-center mt-2">
                      {errors.cleaningMaterials || errors.cleaningMaterialsOther}
                    </p>
                  )}

                <div className="flex flex-col items-start gap-4 mt-4">
                  {/* Radio Button Options */}
                  {[
                    "Yes - Cleaning materials and equipment",
                    "Yes - Cleaning materials only",
                    "No",
                  ].map((option, index) => (
                    <label key={index} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        className="h-4 w-4 text-blue-500"
                        checked={formData.cleaningMaterials.selected === option}
                        onClick={() => setErrors({})} // Clear errors when selecting any option
                        onChange={() =>
                          handleOptionSelect("cleaningMaterials", option)
                        }
                      />
                      <span className="text-sm text-gray-600">{option}</span>
                    </label>
                  ))}

                  {/* "Other" Option */}
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      className="h-4 w-4 text-blue-500"
                      checked={formData.cleaningMaterials.selected === "other"}
                      onClick={() => setErrors({})} // Clear errors when selecting "Other"
                      onChange={() =>
                        handleOtherCheckboxChange("cleaningMaterials")
                      }
                    />
                    <span className="text-sm text-gray-600">Other</span>
                  </label>

                  {/* "Other" Text Field - Only Highlights in Red if Invalid */}
                  {formData.cleaningMaterials.showOther && (
                    <input
                      type="text"
                      placeholder="Please specify"
                      className={`p-2 border rounded-md w-full ${errors.cleaningMaterialsOther
                        ? "border-red-500"
                        : "border-gray-300"
                        }`}
                      value={formData.cleaningMaterials.other}
                      onClick={() =>
                        setErrors((prev) => ({
                          ...prev,
                          cleaningMaterialsOther: "",
                        }))
                      } // Remove error on click
                      onChange={(e) =>
                        handleOtherInput("cleaningMaterials", e.target.value)
                      }
                    />
                  )}
                </div>
              </div>
            )}

            {step === 13 && (
              <div data-aos="flip-left" data-aos-duration="1500">
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                  Do you currently have a cleaner?
                </h2>

                {/* Show Error at the Top for Selection or Other Input Validation */}
                {(errors.currentCleaner || errors.currentCleanerOther) && (
                  <p className="text-red-500 text-sm text-center mt-2">
                    {errors.currentCleaner || errors.currentCleanerOther}
                  </p>
                )}

                <div className="flex flex-col items-start gap-4 mt-4">
                  {/* Radio Button Options */}
                  {[
                    "Yes, replacing a current cleaner",
                    "No, previously had a cleaner",
                    "No, never had a cleaner",
                  ].map((option, index) => (
                    <label key={index} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        className="h-4 w-4 text-blue-500"
                        checked={formData.currentCleaner.selected === option}
                        onClick={() => setErrors({})} // Clear errors when selecting any option
                        onChange={() =>
                          handleOptionSelect("currentCleaner", option)
                        }
                      />
                      <span className="text-sm text-gray-600">{option}</span>
                    </label>
                  ))}

                  {/* "Other" Option */}
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      className="h-4 w-4 text-blue-500"
                      checked={formData.currentCleaner.selected === "other"}
                      onClick={() => setErrors({})} // Clear errors when selecting "Other"
                      onChange={() =>
                        handleOtherCheckboxChange("currentCleaner")
                      }
                    />
                    <span className="text-sm text-gray-600">Other</span>
                  </label>

                  {/* "Other" Text Field - Only Highlights in Red if Invalid */}
                  {formData.currentCleaner.showOther && (
                    <input
                      type="text"
                      placeholder="Please specify"
                      className={`p-2 border rounded-md w-full ${errors.currentCleanerOther
                        ? "border-red-500"
                        : "border-gray-300"
                        }`}
                      value={formData.currentCleaner.other}
                      onClick={() =>
                        setErrors((prev) => ({
                          ...prev,
                          currentCleanerOther: "",
                        }))
                      } // Remove error on click
                      onChange={(e) =>
                        handleOtherInput("currentCleaner", e.target.value)
                      }
                    />
                  )}
                </div>
              </div>
            )}

            {step === 14 && (
              <div data-aos="flip-left" data-aos-duration="1500">
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                  What type of cleaning would you like?
                </h2>

                {/* Show Error at the Top for Selection or Other Input Validation */}
                {(errors.cleaningType || errors.cleaningTypeOther) && (
                  <p className="text-red-500 text-sm text-center mt-2">
                    {errors.cleaningType || errors.cleaningTypeOther}
                  </p>
                )}

                <div className="flex flex-col items-start gap-4 mt-4">
                  {/* Radio Button Options */}
                  {[
                    "Domestic cleaning",
                    "End of cleaning",
                    "Carpet cleaning",
                    "Office cleaning",
                    "Window cleaning",
                    "Gardening",

                  ].map((option, index) => (
                    <label key={index} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        className="h-4 w-4 text-blue-500"
                        checked={formData.cleaningType.selected === option}
                        onClick={() => setErrors({})}
                        onChange={() =>
                          handleOptionSelect("cleaningType", option)
                        }
                      />
                      <span className="text-sm text-gray-600">{option}</span>
                    </label>
                  ))}

                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      className="h-4 w-4 text-blue-500"
                      checked={formData.cleaningType.selected === "other"}
                      onClick={() => setErrors({})} // Clear errors when selecting "Other"
                      onChange={() => handleOtherCheckboxChange("cleaningType")}
                    />
                    <span className="text-sm text-gray-600">Other</span>
                  </label>

                  {/* "Other" Text Field - Only Highlights in Red if Invalid */}
                  {formData.cleaningType.showOther && (
                    <input
                      type="text"
                      placeholder="Please specify"
                      className={`p-2 border rounded-md w-full ${errors.cleaningTypeOther
                        ? "border-red-500"
                        : "border-gray-300"
                        }`}
                      value={formData.cleaningType.other}
                      onClick={() =>
                        setErrors((prev) => ({
                          ...prev,
                          cleaningTypeOther: "",
                        }))
                      } // Remove error on click
                      onChange={(e) =>
                        handleOtherInput("cleaningType", e.target.value)
                      }
                    />
                  )}
                </div>
              </div>
            )}

            {step === 15 && (
              <div data-aos="flip-left" data-aos-duration="1500">
                <p className="text-center text-green-600">
                  We have posted your request
                </p>
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                  Describe your request in detail
                </h2>
                <p className="text-center text-gray-600">
                  Add more details to get faster and more accurate quotes
                </p>

                <textarea
                  className="mt-2 p-2 w-full h-16 border border-gray-300 rounded-xl"
                  placeholder="What would be helpful for the professional to know?"
                  value={formData.additionalDetails.description}
                  onChange={(e) =>
                    handleAdditionalDetails("description", e.target.value)
                  }
                />

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-600">
                    Upload an image (optional)
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    className="mt-2 block w-full rounded-xl  text-sm text-gray-600
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-green-600 file:text-white
          hover:file:bg-green-700"
                    onChange={(e) =>
                      handleAdditionalDetails(
                        "image",
                        e.target.files ? e.target.files[0] : null
                      )
                    }
                  />
                </div>

                {/* Image Preview with Next.js Image */}
                {formData.additionalDetails.image && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">Preview:</p>
                    <Image
                      src={URL.createObjectURL(
                        formData.additionalDetails.image
                      )}
                      alt="Uploaded preview"
                      width={100}
                      height={100}
                      className="mt-2 max-w-full h-auto rounded-md border"
                    />
                  </div>
                )}
              </div>
            )}
            <div className="mt-8 flex justify-between space-x-4">
              {step > 1 ? (
                <button
                  className="px-6 py-3 rounded-xl bg-gray-300  text-gray-700 hover:bg-gray-400"
                  onClick={prevStep}
                  disabled={open || loading}
                >
                  Back
                </button>
              ) : (
                <button
                  className="px-6 py-3 bg-gray-300 rounded-xl text-gray-700 cursor-not-allowed opacity-50"
                  disabled
                >
                  Back
                </button>
              )}

              {step === 5 ? (
                <button
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-80 text-white mt-4"
                  onClick={nextStep}
                  disabled={open || loading}
                >
                  {loading ? (
                    <div className="flex items-center">
                      <svg
                        className="animate-spin h-5 w-5 mr-2 text-white"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        ></path>
                      </svg>
                      Confirming...
                    </div>
                  ) : isVerified ? (
                    "Continue"
                  ) : (
                    "Confirm"
                  )}
                </button>
              ) : step < 15 ? (
                <button
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-80 text-white rounded-xl  flex items-center justify-center"
                  onClick={nextStep}
                  disabled={open || loading}
                >
                  {loading ? (
                    <div className="flex items-center">
                      <svg
                        className="animate-spin h-5 w-5 mr-2 text-white"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        ></path>
                      </svg>
                      Processing...
                    </div>
                  ) : (
                    "Continue"
                  )}
                </button>
              ) : (
                <button
                  className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700"
                  onClick={handleSubmitForm}
                  disabled={open || loading}
                >
                  {loading ? (
                    <div className="flex items-center">
                      <svg
                        className="animate-spin h-5 w-5 mr-2 text-white"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        ></path>
                      </svg>
                      Submitting...
                    </div>
                  ) : (
                    "Submit"
                  )}
                </button>
              )}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
