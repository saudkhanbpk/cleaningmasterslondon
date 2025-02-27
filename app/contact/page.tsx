"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Mail, Phone, Clock,ArrowRight } from "lucide-react";
import { toast } from "react-toastify";
import axios, { AxiosError } from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface FormData {
  name: string;
  phoneNumber: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phoneNumber?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState<boolean>(false);

  const validateField = (field: keyof FormData, value: string) => {
    setErrors((prevErrors) => {
      const newErrors: FormErrors = { ...prevErrors };

      if (field === "name") {
        newErrors.name = value.trim() ? "" : "Name is required.";
      }

      if (field === "phoneNumber") {
        newErrors.phoneNumber =
          value.length === 10 ? "" : "Phone number must be exactly 10 digits.";
      }

      if (field === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        newErrors.email = emailRegex.test(value) ? "" : "Enter a valid email.";
      }

      if (field === "message") {
        newErrors.message =
          value.length >= 10 ? "" : "Message must be at least 10 characters.";
      }

      return newErrors;
    });
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (formData.phoneNumber.length !== 10)
      newErrors.phoneNumber = "Phone number must be exactly 10 digits.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email.";
    if (formData.message.length < 10)
      newErrors.message = "Message must be at least 10 characters.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/v1/create-contact`,
        formData
      );

      if (response.data.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", phoneNumber: "", email: "", message: "" });
        setErrors({});
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>;
      toast.error(err.response?.data?.message || "Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-2xl text-purple-700 font-bold mb-4">Contact Us</h2>
          <p className="text-gray-800">
            Get in touch with us for a free quote or any questions
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="p-6">
            <Card className="p-4 h-[395px]">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">Get in Touch</h2>
              <p className="mb-6 text-lg text-gray-800">
                We’d love to hear from you! Reach out to us for any queries or
                assistance.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-purple-700" />
                  <p className="text-gray-800">123 Cleaning Street, City, State 12345</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-purple-700" />
                  <p className="text-gray-800">contact@cleanpro.com</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-purple-700" />
                  <p className="text-gray-800">(555) 123-4567</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-purple-700" />
                  <p className="text-gray-800">Mon-Fri: 8am-6pm, Sat: 9am-4pm</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="p-6">
            <Card className="p-4">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <Input
                  placeholder="Your Name"
                  className="rounded-xl border-gray-500"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  onBlur={() => validateField("name", formData.name)}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
                <div className="w-full">
                  <div className="mt-4 relative flex items-center">
                    <span className="absolute left-3 p-3">+44</span>
                    <input
                      type="text"
                     
                      maxLength={10}
                      placeholder="Enter Your Phone Number"
                      className={`p-2 pl-16 border rounded-xl w-full ${
                        errors.phoneNumber
                          ? "border-red-500"
                          : "border-gray-500"
                      }`}
                      value={formData.phoneNumber}
                      onChange={(e) => {
                        let value = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
                        if (value.length <= 10) {
                          setFormData((prev) => ({
                            ...prev,
                            phoneNumber: value,
                          }));
                        }
                      }}
                      onBlur={() =>
                        validateField("phoneNumber", formData.phoneNumber)
                      }
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>

                {/* Email Input */}
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="rounded-xl border-gray-500"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  onBlur={() => validateField("email", formData.email)}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}

                {/* Message Input */}
                <Textarea
                  placeholder="Your Message"
                  className="rounded-xl border-gray-500 h-32"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  
                  onBlur={() => validateField("message", formData.message)}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}

                {/* Submit Button */}
                <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-80 rounded-xl text-white"disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
