"use client";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface phoneFormData {
  phoneNumber: string;
  verificationCode: string;
}

interface FormDataType {
  name: string;
  location: string;
  emailAddress: string;
  phoneNumber: string;
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

  const [phoneFormData, setphoneFormData] = useState<phoneFormData>({
    phoneNumber: "",
    verificationCode: "",
  });

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    location: "",
    emailAddress: "",
    phoneNumber: "",
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
      | "emailAddress"
      | "phoneNumber"
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
      | "emailAddress"
      | "phoneNumber"
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
    field: "name" | "location" | "emailAddress" | "phoneNumber",
    value: string
  ): void => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlephoneInput = (field: "phoneNumber", value: string): void => {
    setphoneFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const handleVerificationCode = (index: number, value: string): void => {
    setphoneFormData((prev) => {
      let codeArray = prev.verificationCode.split("");

      // If value is empty, remove the character
      if (value === "") {
        codeArray[index] = "";
      } else if (/^\d$/.test(value)) {
        // Allow only single digits
        codeArray[index] = value;
      }

      return { ...prev, verificationCode: codeArray.join("") };
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
      | "emailAddress"
      | "phoneNumber"
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
      formDataToSubmit.append("emailAddress", formData.emailAddress);
      formDataToSubmit.append("phoneNumber", phoneFormData.phoneNumber);
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
        toast.success("Form submitted successfully!");
        router.push("/");
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
      const response = await axios.post(`${API_BASE_URL}/api/v1/create-user`, {
        phoneNumber: phoneFormData.phoneNumber,
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
    if (step == 4) {
      try {
        setLoading(true);
        const response = await axios.post(
          `${API_BASE_URL}/api/v1/create-user`,
          {
            phoneNumber: phoneFormData.phoneNumber,
          }
        );

        if (response.data.success) {
          toast.success(response.data.message);
          setLoading(false);
          setErrors({});
          setStep(5)
        }
      } catch (error) {
        setLoading(false);
        const err = error as AxiosError<{ message?: string }>;
        console.error("Error sending OTP:", err);
        toast.error(
          err.response?.data?.message || "An error occurred while sending OTP."
        );
      }
    } else if (step === 5) {
      if (!isVerified) {
        if (phoneFormData.verificationCode.length !== 4) {
          toast.error("Please enter a valid 4-digit OTP.");
          return;
        }
        try {
          setLoading(true);
          const response = await axios.post(
            `${API_BASE_URL}/api/v1/verify-otp`,
            {
              phoneNumber: phoneFormData.phoneNumber,
              otp: phoneFormData.verificationCode,
            }
          );

          if (response.data.success) {
            toast.success(response.data.message);
            setisVerified(true); // Mark as verified
            setStep(6);
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
        // If already verified, just proceed
        setStep(6);
      }
    } else {
      setStep((prev) => Math.min(prev + 1, 15));
    }
  };

  const prevStep = () => setStep((prev) => prev - 1);
  return (
    <div className="flex justify-center items-center min-h-screen mt-16">
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
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
          <Dialog.Content
            className="fixed top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 sm:p-8 rounded-lg shadow-lg w-11/12 max-w-md sm:max-w-lg md:max-w-xl"
            onPointerDownOutside={(e) => e.preventDefault()}
            onInteractOutside={(e) => e.preventDefault()}
          >
            <div className="flex justify-between items-center mb-6">
              <div className="w-full bg-gray-200 h-3 rounded-full text-center">
                <div
                  className="bg-blue-500 h-3 border border-blue-700"
                  style={{ width: `${(step / 15) * 100}%` }}
                />
              </div>
              <Dialog.Close asChild>
                <button
                  className="text-gray-600 hover:text-gray-800"
                  onClick={goToRoot}
                >
                  <XIcon className="h-6 w-6" />
                </button>
              </Dialog.Close>
            </div>
            {step === 1 && (
              <>
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
                    className={`p-3 border rounded-md w-full ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    value={formData.name}
                    onChange={(e) => handleBasicInput("name", e.target.value)}
                  />
                </div>
              </>
            )}

            {step === 2 && (
              <>
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
                    placeholder="Your Address"
                    className={`p-3 border rounded-md w-full ${
                      errors.location ? "border-red-500" : "border-gray-300"
                    }`}
                    value={formData.location}
                    onChange={(e) =>
                      handleBasicInput("location", e.target.value)
                    }
                  />
                </div>
              </>
            )}
            {step === 3 && (
              <>
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
                    className={`p-3 border rounded-md w-full ${
                      errors.emailAddress ? "border-red-500" : "border-gray-300"
                    }`}
                    value={formData.emailAddress}
                    onChange={(e) =>
                      handleBasicInput("emailAddress", e.target.value)
                    }
                  />
                </div>
              </>
            )}

            {step === 4 && (
              <>
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
                  <input
                    type="text"
                    required
                    placeholder="Enter Your Phone Number"
                    className={`p-3 border rounded-md w-full ${
                      errors.phoneNumber ? "border-red-500" : "border-gray-300"
                    }`}
                    value={phoneFormData.phoneNumber}
                    onChange={(e) =>
                      handlephoneInput("phoneNumber", e.target.value)
                    }
                  />
                </div>
              </>
            )}
            {step === 5 && (
              <>
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                  Confirm Your Phone Number
                </h2>
                <p className="text-sm text-gray-600 text-center">
                  {isVerified
                    ? "Phone number verified ✅"
                    : `Enter the OTP sent to ${phoneFormData.phoneNumber}`}
                </p>

                <div className="flex justify-center space-x-2 mt-4">
                  {[...Array(4)].map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength={1}
                      required
                      className="w-12 h-12 text-center border-2 border-gray-300 rounded-md bg-gray-100"
                      value={phoneFormData.verificationCode[index] || ""}
                      onChange={(e) =>
                        handleVerificationCode(index, e.target.value)
                      }
                      disabled={isVerified} // Disable if already verified
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
                      Change Number
                    </span>
                  </p>
                )}
              </>
            )}

            {step === 6 && (
              <>
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                  How many reception rooms need cleaning?
                </h2>
                <p className="text-sm text-gray-600 text-center">
                  Includes lounge or dining room.
                </p>

                <div className="flex flex-col items-start gap-4 mt-4">
                  {errors.receptionRooms && (
                    <p className="text-red-500 text-sm mb-1">
                      {errors.receptionRooms}
                    </p>
                  )}

                  {["0", "1", "2", "3", "4+"].map((option, index) => (
                    <label key={index} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        className={`h-4 w-4 text-blue-500 border-2 rounded-full appearance-none checked:bg-blue-500 ${
                          errors.receptionRooms
                            ? "border-red-500"
                            : "border-gray-400"
                        }`}
                        checked={formData.receptionRooms.selected === option}
                        onChange={() =>
                          handleOptionSelect("receptionRooms", option)
                        }
                      />
                      <span className="text-sm text-gray-600">{option}</span>
                    </label>
                  ))}

                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-500 border-2 rounded-full appearance-none checked:bg-blue-500"
                      checked={formData.receptionRooms.showOther}
                      onChange={() =>
                        handleOtherCheckboxChange("receptionRooms")
                      }
                    />
                    <span className="text-sm text-gray-600">Other</span>
                  </label>

                  {formData.receptionRooms.showOther && (
                    <input
                      type="text"
                      placeholder="Please specify"
                      className={`mt-2 p-2 border rounded-md w-full ${
                        errors.receptionRooms
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      value={formData.receptionRooms.other}
                      onChange={(e) =>
                        handleOtherInput("receptionRooms", e.target.value)
                      }
                    />
                  )}
                </div>
              </>
            )}

            {step === 7 && (
              <>
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                  How Often do you need cleaning
                </h2>

                <p className="text-sm text-gray-600 text-center">
                  Please select how often you need cleaning services.
                </p>

                <div className="mt-4 w-full">
                  {/* Show Error Message */}
                  {errors.cleaningFrequency && (
                    <p className="text-red-500 text-sm mb-1">
                      {errors.cleaningFrequency}
                    </p>
                  )}

                  <div className="flex flex-col items-start gap-4 mt-4">
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
                          type="radio" // Radio button for single select
                          required
                          className="h-4 w-4 text-blue-500"
                          checked={
                            formData.cleaningFrequency.selected === option
                          } // Check if the option is selected
                          onChange={() =>
                            handleOptionSelect("cleaningFrequency", option)
                          } // Handle single select
                        />
                        <span className="text-sm text-gray-600">{option}</span>
                      </label>
                    ))}

                    {/* "Other" Radio Button */}
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio" // Radio button for "Other"
                        required
                        className="h-4 w-4 text-blue-500"
                        checked={
                          formData.cleaningFrequency.selected === "other"
                        }
                        onChange={() =>
                          handleOtherCheckboxChange("cleaningFrequency")
                        }
                      />
                      <span className="text-sm text-gray-600">Other</span>
                    </label>

                    {/* "Other" Input Field */}
                    {formData.cleaningFrequency.showOther && (
                      <input
                        type="text"
                        required
                        placeholder="Please specify"
                        className={`mt-2 p-2 border rounded-md w-full ${
                          errors.cleaningFrequency
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        value={formData.cleaningFrequency.other}
                        onChange={(e) =>
                          handleOtherInput("cleaningFrequency", e.target.value)
                        }
                      />
                    )}
                  </div>
                </div>
              </>
            )}

            {step === 8 && (
              <>
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
              </>
            )}

            {step === 9 && (
              <>
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                  How many bedroom(s) need cleaning?
                </h2>
                <p className="text-sm text-gray-600 text-center">
                  Includes lounge or dining room.
                </p>

                <div className="mt-4 w-full">
                  {/* Show Error Message */}
                  {errors.bedrooms && (
                    <p className="text-red-500 text-sm mb-1 text-center">
                      {errors.bedrooms}
                    </p>
                  )}

                  <div className="flex flex-col items-start gap-4 mt-4">
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
                          type="radio" // Use radio for single selection
                          required
                          className="h-4 w-4 text-blue-500"
                          checked={formData.bedrooms.selected === option}
                          onChange={() =>
                            handleOptionSelect("bedrooms", option)
                          } // Handle selection
                        />
                        <span className="text-sm text-gray-600">{option}</span>
                      </label>
                    ))}

                    {/* "Other" Checkbox */}
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio" // Checkbox for "Other" option
                        required
                        className="h-4 w-4 text-blue-500"
                        checked={formData.bedrooms.showOther}
                        onChange={() => handleOtherCheckboxChange("bedrooms")}
                      />
                      <span className="text-sm text-gray-600">Other</span>
                    </label>

                    {/* "Other" Input Field */}
                    {formData.bedrooms.showOther && (
                      <input
                        type="text"
                        required
                        placeholder="Please specify"
                        className={`mt-2 p-2 border rounded-md w-full ${
                          errors.bedrooms ? "border-red-500" : "border-gray-300"
                        }`}
                        value={formData.bedrooms.other}
                        onChange={(e) =>
                          handleOtherInput("bedrooms", e.target.value)
                        }
                      />
                    )}
                  </div>
                </div>
              </>
            )}

            {step === 10 && (
              <>
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                  What type of property needs cleaning?
                </h2>

                {/* Show Error Message */}
                {errors.propertyType && (
                  <p className="text-red-500 text-sm mb-1 text-center">
                    {errors.propertyType}
                  </p>
                )}

                <div className="flex flex-col items-start gap-4 mt-4">
                  {[
                    "Bungalow",
                    "Commercial property",
                    "Flat or Apartment",
                    "House",
                  ].map((option, index) => (
                    <label key={index} className="flex items-center space-x-2">
                      <input
                        type="radio" // Use radio for single selection
                        required
                        className="h-4 w-4 text-blue-500"
                        checked={formData.propertyType.selected === option} // Check if the option is selected
                        onChange={() =>
                          handleOptionSelect("propertyType", option)
                        }
                      />
                      <span className="text-sm text-gray-600">{option}</span>
                    </label>
                  ))}

                  {/* "Other" Checkbox */}
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio" // Checkbox for "Other" option
                      className="h-4 w-4 text-blue-500"
                      checked={formData.propertyType.showOther}
                      onChange={() => handleOtherCheckboxChange("propertyType")}
                    />
                    <span className="text-sm text-gray-600">Other</span>
                  </label>

                  {/* "Other" Input Field */}
                  {formData.propertyType.showOther && (
                    <input
                      type="text"
                      placeholder="Please specify"
                      className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                      value={formData.propertyType.other}
                      onChange={(e) =>
                        handleOtherInput("propertyType", e.target.value)
                      }
                    />
                  )}
                </div>
              </>
            )}

            {step === 11 && (
              <>
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                  How Likely are you to make a hiring decision?
                </h2>

                {/* Show Error Message */}
                {errors.hiringDecision && (
                  <p className="text-red-500 text-sm mb-1 text-center">
                    {errors.hiringDecision}
                  </p>
                )}

                <div className="flex flex-col items-start gap-4 mt-4">
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
                        onChange={() =>
                          handleOptionSelect("hiringDecision", option)
                        }
                      />
                      <span className="text-sm text-gray-600">{option}</span>
                    </label>
                  ))}

                  {/* "Other" Option */}
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      required
                      className="h-4 w-4 text-blue-500"
                      checked={formData.hiringDecision.selected === "other"}
                      onChange={() =>
                        handleOtherCheckboxChange("hiringDecision")
                      }
                    />
                    <span className="text-sm text-gray-600">Other</span>
                  </label>

                  {/* "Other" Input Field */}
                  {formData.hiringDecision.showOther && (
                    <input
                      type="text"
                      placeholder="Please specify"
                      className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                      value={formData.hiringDecision.other}
                      onChange={(e) =>
                        handleOtherInput("hiringDecision", e.target.value)
                      }
                    />
                  )}
                </div>
              </>
            )}

            {step === 12 && (
              <>
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                  Will you be supplying cleaning materials/equipment?
                </h2>

                {/* Show Error Message */}
                {errors.cleaningMaterials && (
                  <p className="text-red-500 text-sm mb-1 text-center">
                    {errors.cleaningMaterials}
                  </p>
                )}

                <div className="flex flex-col items-start gap-4 mt-4">
                  {[
                    "Yes - Cleaning materials and equipment",
                    "Yes - Cleaning materials only",
                    "No",
                  ].map((option, index) => (
                    <label key={index} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        required
                        className="h-4 w-4 text-blue-500"
                        checked={formData.cleaningMaterials.selected === option}
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
                      type="radio" // Ensure "Other" is a single selection
                      required
                      className="h-4 w-4 text-blue-500"
                      checked={formData.cleaningMaterials.selected === "other"}
                      onChange={() =>
                        handleOtherCheckboxChange("cleaningMaterials")
                      }
                    />
                    <span className="text-sm text-gray-600">Other</span>
                  </label>

                  {/* Show Input Field if "Other" is Selected */}
                  {formData.cleaningMaterials.showOther && (
                    <input
                      type="text"
                      required
                      placeholder="Please specify"
                      className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                      value={formData.cleaningMaterials.other}
                      onChange={(e) =>
                        handleOtherInput("cleaningMaterials", e.target.value)
                      }
                    />
                  )}
                </div>
              </>
            )}

            {step === 13 && (
              <>
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                  Do you currently have a cleaner?
                </h2>

                {/* Show Error Message */}
                {errors.currentCleaner && (
                  <p className="text-red-500 text-sm mb-1 text-center">
                    {errors.currentCleaner}
                  </p>
                )}

                <div className="flex flex-col items-start gap-4 mt-4">
                  {[
                    "Yes, replacing a current cleaner",
                    "No, previously had a cleaner",
                    "No, never had a cleaner",
                  ].map((option, index) => (
                    <label key={index} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        required
                        className="h-4 w-4 text-blue-500"
                        checked={formData.currentCleaner.selected === option}
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
                      onChange={() =>
                        handleOtherCheckboxChange("currentCleaner")
                      }
                    />
                    <span className="text-sm text-gray-600">Other</span>
                  </label>

                  {/* Show Input Field if "Other" is Selected */}
                  {formData.currentCleaner.showOther && (
                    <input
                      type="text"
                      placeholder="Please specify"
                      className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                      value={formData.currentCleaner.other}
                      onChange={(e) =>
                        handleOtherInput("currentCleaner", e.target.value)
                      }
                    />
                  )}
                </div>
              </>
            )}

            {step === 14 && (
              <>
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                  What type of cleaning would you like?
                </h2>

                {/* Show Error Message */}
                {errors.cleaningType && (
                  <p className="text-red-500 text-sm mb-1 text-center">
                    {errors.cleaningType}
                  </p>
                )}

                <div className="flex flex-col items-start gap-4 mt-4">
                  {[
                    "Standard cleaning",
                    "Deep cleaning",
                    "Move-out cleaning",
                  ].map((option, index) => (
                    <label key={index} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        required
                        className="h-4 w-4 text-blue-500"
                        checked={formData.cleaningType.selected === option}
                        onChange={() =>
                          handleOptionSelect("cleaningType", option)
                        }
                      />
                      <span className="text-sm text-gray-600">{option}</span>
                    </label>
                  ))}

                  {/* "Other" Option */}
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      required
                      className="h-4 w-4 text-blue-500"
                      checked={formData.cleaningType.selected === "other"}
                      onChange={() => handleOtherCheckboxChange("cleaningType")}
                    />
                    <span className="text-sm text-gray-600">Other</span>
                  </label>

                  {formData.cleaningType.showOther && (
                    <input
                      type="text"
                      placeholder="Please specify"
                      className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                      value={formData.cleaningType.other}
                      onChange={(e) =>
                        handleOtherInput("cleaningType", e.target.value)
                      }
                    />
                  )}
                </div>
              </>
            )}

            {step === 15 && (
              <>
                <p className="text-center text-green-600">
                  We have posted your request
                </p>
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                  Describe your request in detail
                </h2>
                <p className="text-center text-gray-600">
                  Add more details to get faster and more accurate quotes
                </p>

                {/* Textarea for description */}
                <textarea
                  className="mt-2 p-2 w-full h-32 border border-gray-300 rounded-md"
                  placeholder="What would be helpful for the professional to know?"
                  value={formData.additionalDetails.description}
                  onChange={(e) =>
                    handleAdditionalDetails("description", e.target.value)
                  }
                />

                {/* File Upload */}
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-600">
                    Upload an image (optional)
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    className="mt-2 block w-full text-sm text-gray-600
          file:mr-4 file:py-2 file:px-4
          file:rounded-md file:border-0
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
                      width={100} // Set the width (adjust as needed)
                      height={100} // Set the height (adjust as needed)
                      className="mt-2 max-w-full h-auto rounded-md border"
                    />
                  </div>
                )}
              </>
            )}
            <div className="mt-8 flex justify-between space-x-4">
              {step > 1 ? (
                <button
                  className="px-6 py-3 bg-gray-300 rounded-md text-gray-700 hover:bg-gray-400"
                  onClick={prevStep}
                  disabled={loading}
                >
                  Back
                </button>
              ) : (
                <button
                  className="px-6 py-3 bg-gray-300 rounded-md text-gray-700 cursor-not-allowed opacity-50"
                  disabled
                >
                  Back
                </button>
              )}

              {step === 5 ? (
                <button
                  className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-4"
                  onClick={nextStep}
                  disabled={loading}
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
                  className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center justify-center"
                  onClick={nextStep}
                  disabled={loading}
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
                  className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600"
                  onClick={handleSubmitForm}
                  disabled={loading}
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
