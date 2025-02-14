"use client";
import axios from "axios";
import { AxiosError } from "axios";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Star,
  CheckCircle2,
  Sparkles,
  Shield,
  Users,
  ArrowRight,
  Building2,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import heroImg from "../assets/Hero.jpg";
import Link from "next/link";
import { toast } from "react-toastify";
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

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState<boolean>(false);

  // 🔹 Field validation function
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

  // 🔹 Validate all fields before submission
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

  // 🔹 Handle form submission
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
  const services = [
    {
      title: "Residential Cleaning",
      description:
        "Comprehensive home cleaning services tailored to your needs",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Commercial Cleaning",
      description: "Professional cleaning solutions for offices and businesses",
      image:
        "https://images.unsplash.com/photo-1613323593608-abc90fec84ff?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Deep Cleaning",
      description: "Thorough deep cleaning for a spotless environment",
      image:
        "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Specialized Services",
      description: "Window cleaning, carpet cleaning, and more",
      image:
        "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=400",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      comment:
        "The best cleaning service I've ever used. Professional, thorough, and reliable!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      comment:
        "Exceptional attention to detail. My office has never looked better.",
      rating: 5,
    },
    {
      name: "Emily Davis",
      role: "Property Manager",
      comment: "Friendly staff and outstanding results. Highly recommended!",
      rating: 5,
    },
  ];

  const features = [
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Insured & Bonded",
      description:
        "Your property is protected with our comprehensive insurance coverage",
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Expert Team",
      description:
        "Professionally trained and background-checked cleaning specialists",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-primary" />,
      title: "Eco-Friendly",
      description:
        "Using sustainable and environmentally safe cleaning products",
    },
    {
      icon: <Building2 className="w-12 h-12 text-primary" />,
      title: "All Properties",
      description: "Services for homes, offices, and commercial spaces",
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Quick Response",
      description: "Fast and reliable service when you need it most",
    },
    {
      icon: <CheckCircle2 className="w-12 h-12 text-primary" />,
      title: "Satisfaction Guaranteed",
      description: "Your complete satisfaction is our top priority",
    },
  ];

  return (
    <div className="bg-background">
      <motion.section
        id="home"
        className="relative h-[600px] flex items-center justify-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: `url(${heroImg.src})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-6">
            Transforming Spaces, One Clean at a Time
          </h1>
          <p className="text-xl mb-8">
            Professional cleaning services for homes and businesses
          </p>
          <Link href="model">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get a Custom Quote
            </Button>
          </Link>
        </motion.div>
      </motion.section>

      {/* Features Grid */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <motion.h2
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              Why Choose CleanPro
            </motion.h2>
            <motion.p
              className="text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              Experience excellence in cleaning services with our professional
              team
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow h-[200px] bg-gray-200 text-gray-800">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground">
              We offer a comprehensive range of cleaning services to meet all
              your needs
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden group bg-gray-200 text-gray-800">
                  <div className="relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400} 
                      height={192}
                      className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <Button
                      variant="outline"
                      className="w-full group bg-gray-100 text-gray-800"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground">
              Do not just take our word for it - hear from our satisfied
              customers
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="p-6  bg-gray-200 text-gray-800">
                  <div className="flex mb-4 ">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400 text-primary"
                      />
                    ))}
                  </div>
                  <p className="mb-4 text-muted-foreground">
                    {testimonial.comment}
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="py-20">
        <div className="container mx-auto">
          <motion.div
            className="max-w-2xl mx-auto text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              Get in touch with us for a free quote or any questions
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="p-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-4 h-[395px]">
                <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                <p className="mb-6 text-lg">
                  We’d love to hear from you! Reach out to us for any queries or
                  assistance.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-primary" />
                    <p>123 Cleaning Street, City, State 12345</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-primary" />
                    <p>contact@cleanpro.com</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-primary" />
                    <p>(555) 123-4567</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="w-6 h-6 text-primary" />
                    <p>Mon-Fri: 8am-6pm, Sat: 9am-4pm</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              className="p-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-4">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <Input
                    placeholder="Your Name"
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
                        className={`p-3 pl-16 border rounded-md w-full ${
                          errors.phoneNumber
                            ? "border-red-500"
                            : "border-gray-300"
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
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    className="h-32"
                    onBlur={() => validateField("message", formData.message)}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}

                  {/* Submit Button */}
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
