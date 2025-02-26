"use client";
import heroImg from "@/assets/gardening/hero.jpg";
import hero1 from "@/assets/gardening/hero1.jpg";
import hero2 from "@/assets/gardening/hero2.jpg";
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
                    Gardening
                </h1>
            </div>
            <div className="container px-10 py-4">
                <div className="mt-80 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <p className="text-gray-700 mb-4">
                            Taking care of your garden requires time, expertise, and dedication. At CleaningMastersLondon, our professional gardening team is here to help you maintain a beautiful, healthy outdoor space throughout the year. Whether you need regular maintenance or specialized care, we provide a wide range of services tailored to meet your garden’s specific needs.
                        </p>
                        <h2 className="text-purple-700 text-2xl font-bold mb-4">
                            Why Choose CleaningMastersLondon Gardening Services?
                        </h2>
                        <ul className="text-gray-700 space-y-3">
                            <li>
                                <strong>Eco-Friendly Solutions</strong><br />
                                We are committed to using environmentally friendly products and techniques. Our eco-conscious approach ensures your garden remains healthy while reducing the impact on the environment. From organic fertilizers to sustainable practices, we care about both your garden and the planet.
                            </li>
                            <li>
                                <strong>5-Star Gardening Team</strong><br />
                                Our team of gardening professionals has the expertise to handle everything from simple lawn mowing to complex landscaping projects. With years of experience across North, South, East, and West London, we guarantee that your garden will receive the attention and care it deserves. Our services extend throughout London and beyond, ensuring gardens of all types are maintained to the highest standards.
                            </li>
                            <li>
                                <strong>Cost-Effective Rates</strong><br />
                                We believe that professional gardening services should be accessible. That’s why we offer competitive, transparent pricing. Our full-service packages and year-round maintenance plans are designed to fit within your budget, giving you the peace of mind that your garden is in good hands without hidden costs.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <Image
                            src={hero1}
                            alt="Gardening Tools and Flowers"
                            className="rounded-lg shadow-lg object-cover"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-10 mb-10">
                    {/* Image Section */}
                    <div>
                        <img
                            src={hero2.src}
                            alt="Gardening Services"
                            className="w-full rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Text Section */}
                    <div>
                        <h2 className="text-purple-700 text-2xl font-bold mb-4">
                            How Our Gardening Services Can Help You
                        </h2>
                        <p className="text-gray-700 mb-4">
                            Maintaining a garden can be time-consuming and exhausting, but it doesn’t have to be. Whether you need assistance with trimming, leaf collection, hedge cutting, or landscaping, our experts can save you valuable time and effort.
                        </p>
                        <p className="text-gray-700 mb-4">
                            By choosing City Housekeeping, you can be confident that your garden will look its best, allowing you to enjoy your outdoor space without the hassle. Our services are designed to bring out the full potential of your garden, whether you’re looking to improve the aesthetics, boost the health of your plants, or simply keep things tidy.
                        </p>
                        <p className="text-gray-700 mb-6">
                            We are dedicated to making sure that every aspect of your garden is cared for with precision and expertise.
                        </p>

                        <h3 className="text-purple-700 text-xl font-bold mb-3">Your Garden, Your Way</h3>
                        <p className="text-gray-700 mb-6">
                            At City Housekeeping, we understand that every garden is unique. That’s why we offer flexible service options, allowing you to decide what areas need attention and when. Whether you need a one-time cleanup or regular maintenance, we will work around your schedule to ensure your garden is always in top shape.
                        </p>

                        <h3 className="text-purple-700 text-xl font-bold mb-3">Get in Touch Today!</h3>
                        <p className="text-gray-700">
                            Looking for reliable gardening services in London? Contact us today to find out how we can help transform your garden. Our professional team is ready to assist with any of your gardening needs, and we guarantee 100% satisfaction.
                        </p>
                        <p className="text-gray-700 font-bold mt-2">
                            Call us on <span className="text-purple-600">+44 770 1325857</span> to schedule your first gardening service!
                        </p>
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

            </div>
        </div>
    );
}
