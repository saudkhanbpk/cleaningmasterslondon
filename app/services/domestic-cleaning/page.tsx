"use client";
import heroImg from "@/assets/domesticCleaning.jpg";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function domesticCleaning() {

  useEffect(() => {
    AOS.init({
      duration: 1500, 
    });
  }, []);
  const services = [
    {
      title: "One-Off Cleaning",
      price: "Starting from £19.85/hour",
      description: "Perfect for spring cleaning or preparing your home for guests, this service provides a thorough clean, customized to your needs. No hidden fees and professional results every time.",
      image: require("../../../assets/deepCleaning/1.jpg"),
    },
    {
      title: "Regular Cleaning",
      price: "Starting from £27.85/hour",
      description: "Whether you need weekly, fortnightly, or monthly cleaning, we’ll assign the same cleaner every time, so they get to know your preferences and deliver consistent results.",
      image: require("../../../assets/deepCleaning/2.jpg"),
    },
    {
      title: "End of Tenancy Cleaning",
      price: "Starting from £22.50/hour",
      description: "Ensure your property is in top condition before moving out. Our experienced team will arrive quickly and get the job done, ensuring you meet your landlord’s cleaning expectations.",
      image: require("../../../assets/deepCleaning/3.jpg"),
    },
    {
      title: "Deep Cleaning",
      price: "Starting from £25.50/hour",
      description: "Need a more thorough clean? Our deep cleaning service tackles those hard-to-reach places and ensures your home feels fresh and spotless.",
      image: require("../../../assets/deepCleaning/4.jpg"),
    },
    {
      title: "After Party Cleaning",
      price: "Starting from £28/hour",
      description: "Had a big night? Don’t worry—our after-party cleaning specialists will have your place back to normal in no time. Let us take care of the mess while you relax.",
      image: require("../../../assets/deepCleaning/5.jpg"),
    },
    {
      title: "Ironing Service",
      price: "Starting from £24.50/hour",
      description: "We not only clean your home but also offer professional ironing services to keep your wardrobe looking sharp. Our dependable staff ensures your clothes are well taken care of.",
      image: require("../../../assets/deepCleaning/7.jpg"),
    },
  ];
  return (
    <div>
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url(${heroImg.src})`,
            height: "300px",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <h1 className="absolute inset-0 flex justify-center mt-32 items-center text-white text-3xl md:text-5xl z-10"  data-aos="fade-right">
          Domestic Cleaning
        </h1>
      </div>
      <div className=" px-4 mx-auto container py-4">
        <h1 className="text-purple-700 text-2xl mt-80">
          Book Now and Get a 10% Discount on your first domestic cleaning, when you book regular cleaning (Weekly, Fortnightly, or Monthly). (First booking only)
        </h1>
        <p className="py-6">At City Housekeeping, we understand that a clean home is a happy home. That's why our domestic cleaning services are designed to meet your every need, ensuring a pristine environment without the hassle. Our experienced and trustworthy cleaners specialize in delivering top-notch home cleaning services that not only meet but exceed your expectations.</p>

        <h1 className="text-purple-700 text-2xl">
          Why Choose cleaningMasterLondon for Domestic Cleaning?
        </h1>

        {/* Bullet Points for Benefits */}
        <ul className="py-6 list-disc pl-8 text-gray-600">
          <li>
            <span className="font-bold">Professional and Experienced Cleaners:</span> Our trained professionals have extensive housekeeping experience to ensure your home is in safe hands.
          </li>
          <li>
            <span className="font-bold">Vetted and Insured Cleaning Providers:</span> For your peace of mind, all our cleaners come with valid insurance and full background checks.
          </li>
          <li>
            <span className="font-bold">We Provide Everything:</span> Our cleaners bring their own cleaning equipment and products, so you don’t need to worry about a thing.
          </li>
          <li>
            <span className="font-bold">London-Wide Service:</span> No matter where you are in London, we’ve got you covered.
          </li>
          <li>
            <span className="font-bold">Tailored Cleaning Plans:</span> Whether you need a one-time deep clean or regular maintenance, our flexible cleaning plans are designed around your schedule and specific cleaning preferences.
          </li>
          <li>
            <span className="font-bold">Trusted Professionals:</span> Our team of domestic cleaners are thoroughly vetted and trained to the highest standards to ensure your home is treated with care and respect.
          </li>
          <li>
            <span className="font-bold">Eco-Friendly Products:</span> We use environmentally friendly cleaning products that are safe for your family and pets, providing a thorough clean that doesn’t compromise on health or quality.
          </li>
        </ul>
        <h1 className="text-purple-700 text-2xl">
          Comprehensive Cleaning Coverage: Our domestic cleaning services cover every corner of your home.
        </h1>
        <h1 className="text-gray-700 text-xl py-4">
          From dusting and vacuuming to more detailed tasks like window cleaning and appliance cleaning, we ensure every surface shines. Our services include, but are not limited to:
        </h1>
        <ul className=" pb-4 list-disc pl-8 text-gray-700">
          <li>Kitchen cleaning</li>
          <li>Bathroom sanitization</li>
          <li>Living room and bedroom tidying</li>
          <li>Floor cleaning and mopping</li>
          <li>Dusting all surfaces</li>
          <li>And much more!</li>
        </ul>
        <h1 className="text-purple-700 text-3xl mb-4">Why Regular Cleaning is Important</h1>
        <h1 className="text-gray-700 text-xl py-4">
          Keeping your home regularly cleaned is essential to maintaining a healthy and happy living environment. Here’s why we encourage our clients to schedule regular cleaning services:
        </h1>
        <ul className="list-disc pl-8 pb-4 text-gray-700">
          <li><span className="font-bold">Reduces Viruses & Allergens:</span> Regular cleaning reduces the buildup of dust, bacteria, and allergens, improving your family’s health.</li>
          <li><span className="font-bold">Improves Air Quality:</span> A clean home ensures fresher air and a more pleasant living environment.</li>
          <li><span className="font-bold">Prevents Dirt Buildup:</span> Regular cleaning prevents dirt and grime from accumulating, saving you time in the long run.</li>
          <li><span className="font-bold">Peace of Mind:</span> Enjoy a clean and tidy home without the stress of cleaning it yourself.</li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-10 mb-10">
            {services.map((service, index) => (
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
                  <div className="text-center p-4">
                    <h1 className="text-2xl font-semibold text-purple-700 mb-2">
                      {service.title}
                    </h1>
                    <h3 className="text-xl font-semibold text-purple-700 mb-2">
                      {service.price}
                    </h3>

                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                  </div>
                </Card>
            ))}
          </div>
        <div className="pt-4 flex justify-center items-center flex-col">
          <h1 className="text-center font-semibold text-purple-700 pb-2">Scheduling your domestic cleaning service is easy at BOOK NOW!</h1>
          <Link href="/booknow">
          <button className="font-bold text-xl text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-50 p-3 rounded-full">
            <span>Book your Cleaning Today</span>
          </button>
          </Link>
          <p className="text-center text-purple-700 mt-2">
            <span>Just a few clicks and you can arrange for a professional cleaner</span><br />
            <span>to take the stress out of your daily routine, leaving you</span><br />
            <span>with a spotless home to enjoy.</span>
          </p>
        </div>

      </div>
    </div>
  );
}
