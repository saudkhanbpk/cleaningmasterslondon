"use client";
import heroImg from "@/assets/cleaning3.jpg";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function domesticCleaning() {

  const faqs = [
    {
      question: "What types of office cleaning services do you offer?",
      answer: "We offer daily, weekly, and monthly office cleaning, including deep cleaning, sanitization, carpet cleaning, and more.",
    },
    {
      question: "How often can you clean our office?",
      answer: "We offer flexible scheduling, whether you need daily, weekly, or on-demand cleaning services.",
    },
    {
      question: "What makes your cleaning staff qualified?",
      answer: "Our staff is trained, background-checked, and experienced in commercial cleaning techniques.",
    },
    {
      question: "Do you use eco-friendly cleaning products?",
      answer: "Yes, we prioritize green cleaning methods and use non-toxic, eco-friendly products.",
    },
    {
      question: "Are your cleaning services insured and bonded?",
      answer: "Yes, our company is fully insured and bonded for your peace of mind.",
    },
    {
      question: "How do you ensure the quality of your cleaning services?",
      answer: "We perform regular inspections, client feedback assessments, and quality control checks.",
    },
    {
      question: "What happens if I am not satisfied with the cleaning service?",
      answer: "We guarantee satisfaction and will re-clean any area that does not meet your expectations.",
    },
    {
      question: "How do you handle security and confidentiality in office settings?",
      answer: "Our staff follows strict confidentiality agreements and security protocols.",
    },
    {
      question: "Can you handle the cleaning of high-traffic office environments?",
      answer: "Yes, we specialize in high-traffic office spaces, ensuring cleanliness throughout the day.",
    },
    {
      question: "How can I get a quote for office cleaning services?",
      answer: "You can contact us through our website or call us for a free, no-obligation quote.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({
      duration: 1500, 
    });
  }, []);
 
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
          Office Cleaning
        </h1>
      </div>
      <div className=" px-4 mx-auto container py-4">
        <h1 className="text-purple-700 text-2xl mt-80">
        Welcome CleaningMastersLondon, where cleanliness meets professionalism.
        </h1>
        <p className="py-6 text-gray-700">We specialize in providing top-tier commercial and office cleaning services across London, dedicated to maintaining impeccable cleanliness and hygiene in business environments. Our expert team is committed to delivering tailored cleaning solutions that ensure your workspace is not only spotless but also promotes a healthy, productive work atmosphere.</p>

        <ul className="py-4 list-disc pl-8 text-gray-600">
          <li>
            <span className="font-bold">Expert Cleaning Tailored to Your Business:</span> Our services are customized to meet the unique needs of your office or commercial space. We understand that each business has specific requirements, and our flexible scheduling allows us to work around your business hours, minimizing disruption to your operations.
          </li>
          <li>
            <span className="font-bold">Comprehensive Cleaning Solutions: </span>  From daily maintenance to deep cleaning, our comprehensive range of services covers all aspects of commercial and office cleaning. We utilize state-of-the-art equipment and eco-friendly products to deliver superior results that uphold your company’s professional image.
          </li>
          <li>
            <span className="font-bold">Trained and Trustworthy Staff: </span>  Our cleaners are not only trained in the latest cleaning techniques but also background-checked to ensure your peace of mind. We pride ourselves on reliability and discretion, ensuring our staff maintain the highest standards of professionalism.
          </li>
          <li>
            <span className="font-bold">Commitment to Health and Safety: </span> We adhere to strict health and safety protocols, using only non-toxic, environmentally friendly cleaning products that are safe for both people and the planet. Our practices are designed to reduce allergens and pollutants in your workspace, supporting the wellbeing of your employees and clients.
          </li>
        </ul>
        <div className="grid md:grid-cols-2 gap-3">
        {/* Office Cleaning Services */}
       

        {/* Specialized Cleaning Services */}
        <div className="mt-4 mb-4">
          <h2 className="text-2xl font-bold text-purple-700">
            Specialized Cleaning Services
          </h2>
          <p className="text-gray-700 mb-2">
            In addition to our regular cleaning options, we offer specialized services to keep your office in top condition:
          </p>
          <ul className="text-gray-700 space-y-2">
            <li>
              <strong>Upholstery Cleaning:</strong> Our team uses modern equipment and professional techniques to remove stains and grime from office furniture, ensuring your chairs and couches look their best.
            </li>
            <li>
              <strong>Carpet and Rug Cleaning:</strong> With deep steam cleaning, we remove dust mites, dirt, and allergens from carpets, ensuring a healthy environment for your employees.
            </li>
            <li>
              <strong>Window Cleaning:</strong> We’ll keep your office windows clean and sparkling, both inside and out, even for multi-story buildings with our water-fed pole system.
            </li>
          </ul>
        </div>
        <div className="mt-4 mb-4">
          <h2 className="text-2xl font-bold text-purple-700">
            Our Office Cleaning Services Include:
          </h2>
          <ul className="text-gray-700 space-y-2">
            <li>
              <strong>Office Cleaning:</strong> Tailored daily or weekly cleaning programs to keep your office pristine.
            </li>
            <li>
              <strong>Commercial Space Cleaning:</strong> From retail locations to large corporate buildings, we handle all types of commercial cleaning.
            </li>
            <li>
              <strong>Specialized Cleaning Services:</strong> Including carpet cleaning, window cleaning, and high-touch disinfection services.
            </li>
            <li>
              <strong>Post-Construction Cleaning:</strong> Comprehensive cleaning solutions to prepare new offices or renovated spaces for occupancy.
            </li>
          </ul>
        </div>
      </div>
        <div className="pt-4 flex justify-center items-center flex-col">
          <h1 className="text-center font-semibold text-purple-700 pb-2">Scheduling your domestic cleaning service is easy at BOOK NOW!</h1>
          <Link href="/model">
          <button className="font-bold text-xl text-white bg-purple-700 p-3 hover:bg-purple-800 rounded-full">
            <span>Book your Cleaning Today</span>
          </button>
          </Link>
          <p className="text-center text-purple-700 mt-2">
            <span>Just a few clicks and you can arrange for a professional cleaner</span><br />
            <span>to take the stress out of your daily routine, leaving you</span><br />
            <span>with a spotless home to enjoy.</span>
          </p>
        </div>
        <div className="mt-8">
        <h2 className="text-2xl font-bold text-purple-700 mb-6">
          Frequently Asked Questions
        </h2>
        {faqs.map((faq, index) => (
        <div key={index} className="mb-2">
          <button
            className="w-full flex justify-between items-center bg-purple-700 text-white font-medium py-4 px-6 rounded-md focus:outline-none"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            {openIndex === index ? <FaMinus /> : <FaPlus />}
          </button>
          {openIndex === index && (
            <div className="bg-gray-100 text-gray-800 px-6 py-4 border border-teal-300 rounded-b-md">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
          </div>
       
      </div>
    </div>
  );
}
