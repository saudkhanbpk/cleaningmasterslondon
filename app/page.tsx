"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import {
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
import { Card } from "@/components/ui/card";
import heroImg from "../assets/Hero.jpg";
import Link from "next/link";

export default function Home() {
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
      description: "Comprehensive home cleaning services tailored to your needs",
      image:
        "https://images.unsplash.com/photo-1613323593608-abc90fec84ff?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Deep Cleaning",
      description: "Comprehensive home cleaning services tailored to your needs",
      image:
        "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Specialized Services",
      description:  "Comprehensive home cleaning services tailored to your needs",
      image:
        "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=400",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      comment:
        "The best cleaning service I've ever used. Professional.",
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
            <Button size="lg" className="bg-purple-700 hover:bg-purple-800 text-white">
              Get a Custom Quote
            </Button>
          </Link>
        </motion.div>
      </motion.section>
      <section className="py-10 bg-secondary/10">
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
      <section id="services" className="py-10">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden group text-black">
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
                      className="w-full group bg-purple-700 hover:bg-purple-800 text-white hover:text-white"
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
      <section id="testimonials" className="py-10 bg-secondary/20">
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
    </div>
  );
}

