"use client"
import { motion } from "framer-motion";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useEffect } from "react";
import Blog from "@/app/home-blogs/page";
import {
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
import heroImg from "@/assets/Hero.jpg";
import Client1 from "@/assets/Client1.jpeg";
import Client2 from "@/assets/Client2.jpg";
import Client3 from "@/assets/Client3.jpeg";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from "next/navigation";
import bubbleimage from "@/assets/buble.png";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const router = useRouter();
  const services = [
    {
      title: "Domestic Cleaning",
      slug: "domestic-cleaning",
      description:
        "Keep your home spotless with expert cleaning services. We handle dusting, deep cleaning, and sanitation to create a fresh, hygienic living space. Enjoy a cleaner, healthier home without hassle.",
      image: require("@/assets/domesticCleaning.jpg"),
    },
    {
      title: "End of Tenancy",
      slug: "end-of-tenancy",
      description:
        "Moving out? We ensure your place looks new with thorough scrubbing, sanitizing, and polishing. Get top-quality cleaning to secure your deposit and leave your home spotless and stress-free.",
      image: require("@/assets/tenancyClening/hero.jpg"),
    },
    {
      title: "Carpet Cleaning",
      slug: "carpet-cleaning",
      description:
        "Refresh your carpets with deep-cleaning solutions. We remove stains, dirt, and allergens using eco-friendly methods. Restores carpet softness, beauty, and ensures a healthy environment",
      image: require("@/assets/carpet/hero.jpeg"),
    },
    {
      title: "Office Cleaning",
      slug: "office-cleaning",
      description:
        "A clean office boosts productivity and professionalism. Our service keeps workspaces sanitized and tidy. From desks to common areas, we create a spotless, inviting environment for employees and clients.",
      image: require("@/assets/cleaning3.jpg"),
    },
    {
      title: "Window Cleaning",
      slug: "window-cleaning",
      description:
        "Let sunshine in with professional window cleaning. We eliminate dirt, streaks, and smudges for crystal-clear glass. Enjoy brighter, cleaner windows with our safe, efficient, and streak-free cleaning techniques.",
      image: require("@/assets/window/hero.jpg"),
    },
    {
      title: "Gardening Cleaning",
      slug: "gardening",
      description:
        "Enhance your garden with expert cleaning. We remove debris, trim overgrowth, and restore outdoor spaces. A well-kept garden boosts relaxation, aesthetics, and curb appeal. Enjoy a fresh, tidy landscape.",
      image: require("@/assets/gardening/hero.jpg"),
    },
  ];



  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      image: Client1,
      name: "Sarah Johnson",
      role: "Homeowner",

      comment:
        "The best cleaning service I've ever used. Professional.",
      rating: 5,
    },
    {
      id: 2,
      image: Client2,
      name: "Michael Chen",
      role: "Business Owner",
      comment:
        "Exceptional attention to detail. My office has never looked better.",
      rating: 5,
    },
    {
      id: 3,
      image: Client3,
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
    <div className="bg-background overflow-hidden mx-auto">
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
          className="relative z-10 text-center max-w-4xl px-4"
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
          <div className="flex justify-center space-x-4">

            <Link href="/model">
            <button className="font-bold text-base text-white p-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-80 rounded-full"
              // data-aos="fade-right"
            >
            Get a Quote
          </button>

            </Link>
            <Link href="/contact">
            <button className="font-bold text-base text-white p-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-80 rounded-full"
            // data-aos="fade-left"
            >
            Contact US
          </button>
            </Link>
          </div>
        </motion.div>
      </motion.section>
      <section id="services" className="py-10">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-purple-700">Our Services</h2>
            <p className="text-gray-600">
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
                    <h3 className="text-xl font-semibold text-purple-700 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <Button
                      variant="outline"
                      className="w-full group bg-purple-700 hover:bg-purple-800 text-white hover:text-white"
                      onClick={() => router.push(`/services/${service.slug}`)}
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

      <section className="py-10 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <motion.h2
              className="text-3xl text-purple-700 font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              Why Choose CleanPro
            </motion.h2>
            <motion.p
              className="text-gray-600"
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
      <Card
        className="p-6 hover:shadow-lg transition-all duration-300 h-[200px] bg-gradient-to-r from-purple-500 to-blue-500 text-white transform hover:translate-y-[-8px] hover:scale-105"
      >
        <div className="flex flex-col items-center text-center">
          <div className="text-yellow-400">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      </Card>
    </motion.div>
  ))}
</div>

        </div>
      </section>
      <section className="container  mx-auto mb-4">
        <div className=" text-center max-w-2xl mx-auto">
          <h1 className="font-bold text-3xl text-purple-700">Three Steps to a Cleaner Home</h1>
          <p className="text-gray-700 text-2xl">…easy as 1-2-3</p></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-center px-4 md:px-4 py-10">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <img src={bubbleimage.src} alt="Step 1" className="w-32 h-32" />
              <span className="absolute inset-0 flex items-center justify-center text-purple-700 text-6xl font-bold">1</span>
            </div>
            <h3 className="text-purple-700 font-bold mt-4 text-xl">Book in Seconds</h3>
            <p className="text-gray-700 text-sm">Quick and easy online scheduling.</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <img src={bubbleimage.src} alt="Step 2" className="w-32 h-32" />
              <span className="absolute inset-0 flex items-center justify-center text-purple-700 text-6xl font-bold">2</span>
            </div>
            <h3 className="text-purple-700 font-bold mt-4 text-xl">Expert Care, Every Time</h3>
            <p className="text-gray-700 text-sm">We clean with precision and eco-friendly products.</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <img src={bubbleimage.src} alt="Step 3" className="w-32 h-32" />
              <span className="absolute inset-0 flex items-center justify-center text-purple-700 text-6xl font-bold">3</span>
            </div>
            <h3 className="text-purple-700 font-bold mt-4 text-xl">Relax in a Spotless Home</h3>
            <p className="text-gray-700 text-sm">Enjoy a clean space without lifting a finger.</p>
          </div>
        </div>
      </section>


      <Link href="/booknow" className=" flex justify-center">
        <button className="font-bold text-xl text-white p-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-80 rounded-full">
          Book Cleaning Today
        </button>
      </Link>

      <div className="border-t border-gray-300 mt-4 mx-8"></div>

      <div className="container mx-auto">
        <Blog />
      </div>

      <section id="testimonials" className="py-10 bg-secondary/20">
  <div className="px-4 container mx-auto">
    <motion.div
      className="mx-auto text-center container mb-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl text-purple-700 font-bold mb-4">What Our Clients Say</h2>
      <p className="text-gray-600">
        Do not just take our word for it - hear from our satisfied customers
      </p>
    </motion.div>

    <Slider {...sliderSettings}>
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.id}
          className="p-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg rounded-xl flex flex-col items-center text-center"
          whileHover={{
            scale: 1.05, // This creates the zoom-in effect
            transition: { type: "spring", stiffness: 300, damping: 20 } // Smooth zoom-in effect with spring transition
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          <div className="flex justify-center mb-4">
            <Image
              src={testimonial.image}
              alt={`Customer ${testimonial.name}`}
              className="object-cover rounded-full border-4 border-purple-700 w-20 h-20"
            />
          </div>
          <div className="flex mb-4 justify-center">
            {[...Array(testimonial.rating)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 w-5 h-5" />
            ))}
          </div>
          <p className="mb-4">{testimonial.comment}</p>
          <div className="font-bold">
            <p className="pt-2">{testimonial.role}</p>
            <p className="pt-2">{testimonial.name}</p>
          </div>
        </motion.div>
      ))}
    </Slider>
  </div>
</section>



      <div className="py-6 text-gray-100 text-center">
        <Link href="/booknow">
          <button className="font-bold text-xl text-white p-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-80 rounded-full">
            Book Cleaning Today
          </button>
        </Link>
        <div className="mt-2 text-sm text-gray-100">
          <p className="text-gray-700 container px-10 lg:px-40 mx-auto">We’re your trusted local cleaning experts, dedicated to providing thorough and reliable service every time.
            Call for a Free Estimate today! CityHousekeeping is ready to make your home shine: 020-33-22-23-23.</p>
        </div>
      </div>
    </div>


  );
}

