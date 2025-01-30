"use client";

import { Check, Clock, Shield, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ResidentialCleaning() {
  const services = [
    {
      title: "Regular Cleaning",
      description: "Weekly or bi-weekly cleaning services to maintain a consistently clean home",
      price: "From $120",
      features: [
        "Dusting and wiping all surfaces",
        "Vacuuming and mopping floors",
        "Bathroom and kitchen cleaning",
        "Making beds and changing linens",
      ],
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Move-In/Move-Out",
      description: "Thorough cleaning service for moving transitions",
      price: "From $250",
      features: [
        "Deep cleaning of all rooms",
        "Inside cabinet cleaning",
        "Window and track cleaning",
        "Appliance cleaning",
      ],
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Spring Cleaning",
      description: "Comprehensive annual deep cleaning service",
      price: "From $300",
      features: [
        "Detailed cleaning of all areas",
        "Window washing",
        "Baseboards and trim cleaning",
        "Organization assistance",
      ],
      image: "https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&q=80&w=400",
    },
  ];

  const benefits = [
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Trusted & Vetted",
      description: "All our cleaners undergo thorough background checks and training",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-primary" />,
      title: "Eco-Friendly",
      description: "We use environmentally safe cleaning products",
    },
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "Flexible Scheduling",
      description: "Choose cleaning times that work for your schedule",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-6">Professional Residential Cleaning Services</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Transform your home into a pristine sanctuary with our expert residential cleaning services
        </p>
        <Button size="lg">Schedule a Cleaning</Button>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-48">
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <p className="text-lg font-semibold mb-4">{service.price}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-6">Book Now</Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-12">Why Choose Our Residential Cleaning</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}