"use client";
import heroImg from "@/assets/window/hero.jpg";
import heroimg1 from "@/assets/window/hero1.jpg";
import company1 from "@/assets/window/comp1.png"
import company2 from "@/assets/window/comp2.png"
import company3 from "@/assets/window/comp3.png"
import company4 from "@/assets/window/comp4.png"
import company5 from "@/assets/window/comp5.png"
import company6 from "@/assets/window/comp6.png"
import Link from "next/link";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

import Image from "next/image";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const faqData = [
    { question: "What types of properties do you service for window cleaning?", answer: "We clean residential, commercial, and high-rise properties." },
    { question: "How do you ensure safety when cleaning windows on higher floors?", answer: "Our team uses safety harnesses, professional-grade equipment, and follows industry standards to ensure safety." },
    { question: "What cleaning methods do you use?", answer: "We use purified water, eco-friendly cleaning solutions, and advanced techniques to achieve streak-free results." },
    { question: "How often should I have my windows cleaned?", answer: "For residential properties, we recommend cleaning every 3-6 months, while commercial properties benefit from monthly or bi-weekly cleaning." },
    { question: "Can you clean windows in any weather?", answer: "We can clean in most weather conditions, but heavy rain or storms may require rescheduling for safety reasons." },
    { question: "Do you use environmentally friendly cleaning products?", answer: "Yes, we use eco-friendly and biodegradable cleaning solutions to ensure safety for you and the environment." },
    { question: "What is your pricing structure?", answer: "Our pricing is based on the number of windows, property size, and level of difficulty. Contact us for a quote." },
    { question: "Do I need to be present during the window cleaning service?", answer: "No, as long as we have access to the windows, you do not need to be present." },
    { question: "How do I schedule a service?", answer: "You can schedule a service by calling us, visiting our website, or booking through our online portal." },
    { question: "What is your cancellation or rescheduling policy?", answer: "We require a 24-hour notice for cancellations or rescheduling to avoid any fees." },
];
export default function windowCleaning() {

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
                <h1 className="absolute inset-0 flex justify-center mt-32 items-center text-white text-5xl z-10" data-aos="fade-right">
                    Window Cleaning
                </h1>
            </div>
            <div className="container px-10 py-4">

                <div className="grid md:grid-cols-2 gap-8 items-center mt-80">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-purple-700 text-2xl font-bold">
                            Professional Window Cleaning Services in London
                        </h2>
                        <p className="mt-4 text-gray-700">
                            Welcome to CityHousekeeping, where sparkling clean windows are just a service call away!
                            Specializing in both residential and commercial window cleaning, our skilled team is equipped
                            to bring clarity and shine to your property’s windows, all the way up to the 4th floor. Whether
                            you’re a homeowner or a business, our services are designed to offer maximum visual appeal
                            and enhanced light entry through spotlessly clean windows.
                        </p>

                        <h3 className="text-purple-700 text-xl font-bold mt-6">
                            Our Window Cleaning Process
                        </h3>
                        <p className="font-semibold">Our process is thorough and efficient:</p>

                        <ul className="mt-3 text-gray-700 space-y-2">
                            <li><strong>1. Assessment:</strong> We start with a complete evaluation of your windows to determine the best cleaning method.</li>
                            <li><strong>2. Setup:</strong> We set up our equipment with the utmost care to protect your property and ensure efficient access.</li>
                            <li><strong>3. Cleaning:</strong> Using purified water and professional cleaning solutions, we thoroughly wash the windows, paying close attention to removing all dirt, stains, and blemishes.</li>
                            <li><strong>4. Drying and Polishing:</strong> After washing, we dry the windows to prevent any streaks and give them a final polish for a sparkling finish.</li>
                        </ul>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center">
                        <img
                            src={heroimg1.src}
                            alt="Professional window cleaner"
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                </div>
                <h2 className="text-purple-700 text-2xl font-bold mb-4 mt-6">
                    Why Choose CleaningMastersLondon for Your Window Cleaning?
                </h2>
                <ul className="text-gray-700 mb-6 space-y-3">
                    <li>
                        <strong>Safety and Professionalism:</strong> Our technicians are fully trained to safely clean windows up to the 4th floor using the latest equipment, including ladders, water-fed poles, and squeegees. We comply with all health and safety regulations to ensure a risk-free service for both our clients and staff.
                    </li>
                    <li>
                        <strong>Advanced Cleaning Technology:</strong> We use high-quality, eco-friendly cleaning solutions and the latest in window cleaning technology to ensure streak-free results. Our water-fed pole system allows us to reach high windows safely from the ground, reducing disturbance to your property and maintaining privacy.
                    </li>
                    <li>
                        <strong>Customized Cleaning Schedules:</strong> We understand that your cleaning needs may vary. That’s why we offer flexible scheduling options that can be customized to fit your timetable. Whether it’s a one-time cleaning or regular maintenance, we’re here to fit seamlessly into your routine.
                    </li>
                </ul>

                <h3 className="text-purple-700 text-xl font-bold mb-3">
                    Our services cater to all types of windows, including:
                </h3>
                <ul className="text-gray-700 list-disc list-inside mb-4 space-y-2">
                    <li>Sliding windows</li>
                    <li>Bay windows</li>
                    <li>Skylights</li>
                    <li>French doors</li>
                    <li>Shopfronts</li>
                    <li>Office windows</li>
                </ul>

                <p className="text-gray-700">
                    We are committed to providing a detailed cleaning that covers every corner, ensuring that no smudges or dirt remain.
                </p>
                <h1 className="text-purple-700 text-2xl mt-10 font-bold">
                    Cleaning Brands that We Love & Use
                </h1>
                <div className="flex flex-wrap justify-center items-center gap-10 py-4">
                    <Image src={company1} alt="company1" width={150} height={100} />
                    <Image src={company2} alt="company2" width={150} height={100} />
                    <Image src={company3} alt="company3" width={150} height={100} />
                    <Image src={company4} alt="company4" width={150} height={100} />
                    <Image src={company5} alt="company5" width={150} height={100} />
                    <Image src={company6} alt="company6" width={150} height={100} />
                </div>
                <div className="pt-6 flex justify-center items-center flex-col">
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
                <div className="mt-10">
                    <h2 className="text-purple-700 text-2xl font-bold mb-4">Our Window Cleaning</h2>
                    <div>
                        {faqData.map((faq, index) => (
                            <div key={index} className="border-b border-gray-300">
                                <button
                                    className="w-full text-left p-4 bg-purple-700 text-white font-semibold flex justify-between items-center"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    {faq.question}
                                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                                </button>
                                {openIndex === index && (
                                    <div className="p-4 bg-gray-100 text-gray-700">{faq.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
               
            </div>
        </div>
    );
}
