"use client";
import axios from "axios";

import { useState } from "react";
import { Calendar, Clock, Home, Building2, Sparkles, CheckCircle2, Leaf, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "react-toastify"
import { useRouter } from "next/navigation";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function bookNow() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    serviceType: "",
    propertyType: "",
    squareFootage: "",
    preferredDate: "",
    preferredTime: "",
    specialRequests: "",
  });

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${API_BASE_URL}/api/v1/booking-service`, formData);
      if (response.data.success) {
        router.push("/confrimation");
        toast.success("your request submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          serviceType: "",
          propertyType: "",
          squareFootage: "",
          preferredDate: "",
          preferredTime: "",
          specialRequests: "",
        });

      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };


  const services = [
    {
      title: "Domestic Cleaning",
      price: "From €100",
      features: [
        "General home cleaning",
        "Kitchen & bathroom sanitation",
        "Dusting & vacuuming",
        "Mopping floors",
        "Trash removal",
      ],
      icon: <Sparkles className="w-6 h-6 text-purple-700" />,
    },
    {
      title: "End of Tenancy Cleaning",
      price: "From €250",
      features: [
        "Deep cleaning of entire property",
        "Appliance cleaning",
        "Carpet & upholstery cleaning",
        "Wall & surface washing",
        "Deposit return guarantee",
      ],
      icon: <CheckCircle2 className="w-6 h-6 text-purple-700" />,
    },
    {
      title: "Carpet Cleaning",
      price: "From €150",
      features: [
        "Deep stain removal",
        "Steam cleaning",
        "Odor treatment",
        "Eco-friendly solutions",
        "Pet-friendly services",
      ],
      icon: <Home className="w-6 h-6 text-purple-700" />,
    },
    {
      title: "Window Cleaning",
      price: "From €80",
      features: [
        "Interior & exterior glass cleaning",
        "Streak-free finish",
        "Frame & sill wipe down",
        "High-reach window cleaning",
        "Eco-friendly products",
      ],
      icon: <Calendar className="w-6 h-6 text-purple-700" />,
    },
    {
      title: "Gardening Cleaning",
      price: "From €120",
      features: [
        "Lawn mowing & edging",
        "Weed removal",
        "Hedge trimming",
        "Garden waste disposal",
        "Seasonal cleanups",
      ],
      icon: <Leaf className="w-6 h-6 text-purple-700" />,
    },
    {
      title: "Office Cleaning",
      price: "From €200",
      features: [
        "Workstation & desk cleaning",
        "Restroom sanitation",
        "Breakroom cleaning",
        "Trash & recycling removal",
        "After-hours availability",
      ],
      icon: <Briefcase className="w-6 h-6 text-purple-700" />,
    },
  ];


  return (
    <div className="px-4 py-20 container mx-auto">
      <div className=" mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-purple-700">Book Your Cleaning Today!</h1>
          <p className="text-xl text-gray-800">
            Tell us about your cleaning needs and we will provide a customized quote
          </p>
        </div>

        {/* Service Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="p-3 rounded-xl justify-items-center">
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-purple-700 mb-2">{service.title}</h3>
              <p className="text-xl font-bold text-purple-700 mb-4">{service.price}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-purple-700" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <Card className="p-6 rounded-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    className="w-full border border-gray-500 text-gray-800 rounded-xl px-3 py-2"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g John Doe"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    className="w-full border border-gray-500 text-gray-800 rounded-xl px-3 py-2"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g john@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    className="w-full border border-gray-500 text-gray-800 rounded-xl px-3 py-2"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g (555) 123-4567"
                  />
                </div>
              </div>

              {/* Property Information */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="address">Property Address</Label>
                  <Input
                    id="address"
                    className="w-full border border-gray-500 text-gray-800 rounded-xl px-3 py-2"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="e.g 123 Main St"
                  />
                </div>
                <div>
                  <Label htmlFor="propertyType">Property Type</Label>
                  <select
                    id="propertyType"
                    className="w-full border border-gray-500 text-gray-800 rounded-xl px-3 py-2"
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  >
                    <option value="">Select Property Type</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="office">Office</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="squareFootage">Square Footage</Label>
                  <Input
                    id="squareFootage"
                    className="w-full border border-gray-500 text-gray-800 rounded-xl px-3 py-2"
                    value={formData.squareFootage}
                    onChange={(e) => setFormData({ ...formData, squareFootage: e.target.value })}
                    placeholder="e.g 1000"
                  />
                </div>
              </div>
            </div>

            {/* Service Details */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="serviceType">Service Type</Label>
                <select
                  id="serviceType"
                  className="w-full border border-gray-500 text-gray-800 rounded-xl px-3 py-2"
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                >
                  <option value="">Select Service Type</option>
                  <option value="domestic-cleaning">Domestic Cleaning</option>
                  <option value="end-of-tenancy">End of Tenancy</option>
                  <option value="carpet-cleaning">Carpet Cleaning</option>
                  <option value="office-cleaning">Office Cleaning</option>
                  <option value="window-cleaning">Window Cleaning</option>
                  <option value="gardening">Gardening</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="preferredDate">Preferred Date</Label>
                  <Input
                    id="preferredDate"
                    type="date"
                    className="w-full border border-gray-500 text-gray-800 rounded-xl px-3 py-2"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="preferredTime">Preferred Time</Label>
                  <select
                    id="preferredTime"
                    className="w-full border border-gray-500 text-gray-800 rounded-xl px-3 py-2"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  >
                    <option value="">Select Time</option>
                    <option value="morning">Morning (8AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                    <option value="evening">Evening (4PM - 8PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="specialRequests">Special Requests or Notes</Label>
                <Textarea
                  id="specialRequests"
                  className="w-full border border-gray-500 text-gray-800 rounded-xl px-3 py-2"
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  placeholder="Any specific areas that need attention or special instructions..."
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-80 rounded-xl text-white p-3"
              disabled={loading} // Disable the button while loading
            >
              {loading ? (
                <span className="flex justify-center items-center">
                  <span className="spinner-border animate-spin h-5 w-5 border-4 border-t-transparent border-solid rounded-full"></span>
                  <span className="ml-2">Sending...</span>
                </span>
              ) : (
                "Book Now"
              )}
            </Button>

          </form>
        </Card>

      </div>
    </div>
  );
}