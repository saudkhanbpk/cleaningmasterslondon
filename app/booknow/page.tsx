"use client";
import axios from "axios";
import { useState } from "react";
import { Calendar, CheckCircle2, Leaf, Briefcase, Sparkles, Home } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function BookNow() {
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

  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Custom validation messages for all fields
    if (!formData.name) newErrors.name = "Please enter your name.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email address.";
    if (!formData.phone || formData.phone.length !== 10) newErrors.phone = "Please enter a valid phone number (10 digits).";
    if (!formData.address) newErrors.address = "Please provide a valid address.";
    if (!formData.serviceType) newErrors.serviceType = "Please select a service type.";
    if (!formData.propertyType) newErrors.propertyType = "Please select a property type.";
    if (!formData.squareFootage) newErrors.squareFootage = "Please enter the square footage of your property.";
    if (!formData.preferredDate) newErrors.preferredDate = "Please select a preferred date.";
    if (!formData.preferredTime) newErrors.preferredTime = "Please select a preferred time.";
    if (!formData.specialRequests) newErrors.specialRequests = "Please let us know any special requests or notes.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const validateField = (field: string, value: string) => {
    const newErrors = { ...errors };

    if (field === "email" && !/\S+@\S+\.\S+/.test(value)) {
      newErrors.email = "Please enter a valid email address.";
    } else if (field === "phone" && value.length !== 10) {
      newErrors.phone = "Please enter a valid phone number (10 digits).";
    } else {
      delete newErrors[field];
    }

    setErrors(newErrors);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return; // Stop submission if there are errors
    }
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/api/v1/booking-service`, formData);
      if (response.data.success) {
        router.push("/confirmation");
        toast.success("Your request has been submitted successfully!");
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
            Tell us about your cleaning needs and we will provide a customized quote.
          </p>
        </div>

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
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    className="w-full border border-gray-500 text-gray-800 rounded-xl px-3 py-2"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g John Doe"
                    onBlur={() => validateField("name", formData.name)}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
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
                    onBlur={() => validateField("email", formData.email)}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
               <div>
               <Label htmlFor="phone">Phone Number</Label>
               <div className="relative">
                
                  <span className="absolute mt-3 text-gray-700 left-3 text-sm">+44</span>
                  <Input
                    id="phone" 
                    type="phone"
                    maxLength={10}
                    className="w-full border border-gray-500 text-gray-800 rounded-xl px-10 py-2"
                    value={formData.phone}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9]/g, ""); 
                      setFormData({ ...formData, phone: value });
                    }}
                    placeholder="e.g 7654 123456"
                    onBlur={() => validateField("phone", formData.phone)}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
               </div>
              
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="address">Property Address</Label>
                  <Input
                    id="address"
                    className="w-full border border-gray-500 text-gray-800 rounded-xl px-3 py-2"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="e.g 123 Main St"
                    onBlur={() => validateField("address", formData.address)}
                  />
                  {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                </div>
                <div>
                  <Label htmlFor="propertyType">Property Type</Label>
                  <select
                    id="propertyType"
                    className="w-full border border-gray-500 text-gray-800 rounded-xl px-3 py-2"
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    onBlur={() => validateField("propertyType", formData.propertyType)}
                  >
                    <option value="">Select Property Type</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="office">Office</option>
                  </select>
                  {errors.propertyType && <p className="text-red-500 text-sm mt-1">{errors.propertyType}</p>}
                </div>
                <div>
                  <Label htmlFor="squareFootage">Square Footage</Label>
                  <Input
                    id="squareFootage"
                    className="w-full border border-gray-500 text-gray-800 rounded-xl px-3 py-2"
                    value={formData.squareFootage}
                    onChange={(e) => setFormData({ ...formData, squareFootage: e.target.value })}
                    placeholder="e.g 1000"
                    onBlur={() => validateField("squareFootage", formData.squareFootage)}
                  />
                  {errors.squareFootage && <p className="text-red-500 text-sm mt-1">{errors.squareFootage}</p>}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="serviceType">Service Type</Label>
                <select
                  id="serviceType"
                  className="w-full border border-gray-500 text-gray-800 rounded-xl px-3 py-2"
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  onBlur={() => validateField("serviceType", formData.serviceType)}
                >
                  <option value="">Select Service Type</option>
                  <option value="domestic-cleaning">Domestic Cleaning</option>
                  <option value="end-of-tenancy">End of Tenancy</option>
                  <option value="carpet-cleaning">Carpet Cleaning</option>
                  <option value="office-cleaning">Office Cleaning</option>
                  <option value="window-cleaning">Window Cleaning</option>
                  <option value="gardening">Gardening</option>
                </select>
                {errors.serviceType && <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>}
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
                    onBlur={() => validateField("preferredDate", formData.preferredDate)}
                  />
                  {errors.preferredDate && <p className="text-red-500 text-sm mt-1">{errors.preferredDate}</p>}
                </div>
                <div>
                  <Label htmlFor="preferredTime">Preferred Time</Label>
                  <select
                    id="preferredTime"
                    className="w-full border border-gray-500 text-gray-800 rounded-xl px-3 py-2"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    onBlur={() => validateField("preferredTime", formData.preferredTime)}
                  >
                    <option value="">Select Time</option>
                    <option value="morning">Morning (8AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                    <option value="evening">Evening (4PM - 8PM)</option>
                  </select>
                  {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
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
                  onBlur={() => validateField("specialRequests", formData.specialRequests)}
                />
                {errors.specialRequests && <p className="text-red-500 text-sm mt-1">{errors.specialRequests}</p>}
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-80 rounded-xl text-white p-3"
              disabled={loading}
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
