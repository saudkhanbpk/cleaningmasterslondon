"use client";

import { Check, Sparkles, Shield, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DeepCleaning() {
  const features = [
    {
      title: "Thorough Surface Cleaning",
      description: "Every surface is meticulously cleaned and sanitized",
      items: [
        "Detailed dusting of all surfaces",
        "Deep cleaning of light fixtures",
        "Window tracks and sills",
        "Door frames and baseboards",
      ],
      image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Kitchen Deep Clean",
      description: "Comprehensive kitchen cleaning and sanitization",
      items: [
        "Inside and outside of appliances",
        "Cabinet fronts and handles",
        "Countertop sanitization",
        "Sink and fixture detailing",
      ],
      image: "https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Bathroom Transformation",
      description: "Detailed cleaning of all bathroom surfaces",
      items: [
        "Tile and grout scrubbing",
        "Shower/tub deep cleaning",
        "Toilet sanitization",
        "Exhaust fan cleaning",
      ],
      image: "https://images.unsplash.com/photo-1613323593608-abc90fec84ff?auto=format&fit=crop&q=80&w=400",
    },
  ];

  const process = [
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Initial Assessment",
      description: "We evaluate your space and create a customized cleaning plan",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-primary" />,
      title: "Deep Clean Execution",
      description: "Our team performs a thorough deep cleaning of your space",
    },
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "Final Inspection",
      description: "Quality check to ensure everything meets our high standards",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-6">Professional Deep Cleaning Services</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Experience the difference with our comprehensive deep cleaning service
        </p>
        <Button size="lg">Schedule Deep Cleaning</Button>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-48">
              <img
                src={feature.image}
                alt={feature.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>

      {/* Process Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-12">Our Deep Cleaning Process</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {process.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <Card className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready for a Deep Clean?</h2>
        <p className="text-muted-foreground mb-6">
          Transform your space with our professional deep cleaning service
        </p>
        <Button size="lg">Get a Free Quote</Button>
      </Card>
    </div>
  );
}