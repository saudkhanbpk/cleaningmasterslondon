"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Clock, Star, CheckCircle2, Sparkles, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import heroImg from "../assets/Hero.jpg"

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const services = [
    {
      title: "Residential Cleaning",
      description: "Comprehensive home cleaning services tailored to your needs",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Commercial Cleaning",
      description: "Professional cleaning solutions for offices and businesses",
      image: "https://images.unsplash.com/photo-1613323593608-abc90fec84ff?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Deep Cleaning",
      description: "Thorough deep cleaning for a spotless environment",
      image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Specialized Services",
      description: "Window cleaning, carpet cleaning, and more",
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=400",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      comment: "The best cleaning service I've ever used. Professional, thorough, and reliable!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      comment: "Exceptional attention to detail. My office has never looked better.",
      rating: 5,
    },
    {
      name: "Emily Davis",
      role: "Property Manager",
      comment: "Friendly staff and outstanding results. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section id="home" className="relative h-[600px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url(${heroImg.src})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Transforming Spaces, One Clean at a Time</h1>
          <p className="text-xl mb-8">Professional cleaning services for homes and businesses</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Get a Free Quote
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground">
              We offer a comprehensive range of cleaning services to meet all your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground">
              Experience the difference with our professional cleaning services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Eco-Friendly Products", description: "Safe for your family and the environment", icon: <Sparkles className="w-12 h-12 text-primary mb-4" /> },
              { title: "Experienced Team", description: "Trained and trusted professionals", icon: <Users className="w-12 h-12 text-primary mb-4" /> },
              { title: "100% Satisfaction", description: "Guaranteed quality service", icon: <Shield className="w-12 h-12 text-primary mb-4" /> },
            ].map((benefit, index) => (
              <Card key={index} className="text-center p-6">
                <div className="flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground">{testimonial.comment}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              Get in touch with us for a free quote or any questions
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-6">
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
            <Card className="p-6">
              <div className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="h-32"
                />
                <Button className="w-full">Send Message</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}