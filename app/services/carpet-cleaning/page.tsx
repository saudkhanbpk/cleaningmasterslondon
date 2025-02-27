"use client";
import heroImg from "@/assets/carpet/hero.jpeg";
import Link from "next/link";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function domesticCleaning() {


  useEffect(() => {
    AOS.init({
      duration: 1500, 
    });
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What method do you use for carpet cleaning?",
      answer: "We use hot water extraction (steam cleaning) as our primary carpet cleaning method, ensuring deep cleaning and removal of dirt, stains, and allergens.",
    },
    {
      question: "How often should I have my carpets professionally cleaned?",
      answer: "For households with pets or children, we recommend cleaning every 6-12 months. Otherwise, once a year is usually sufficient to maintain freshness.",
    },
    {
      question: "How long will it take for my carpets to dry after cleaning?",
      answer: "It typically takes 4-6 hours for carpets to dry completely, but this may vary depending on humidity and airflow in the room.",
    },
    {
      question: "Will carpet cleaning remove stains and odors?",
      answer: "Yes, our deep cleaning process removes most stains and odors. However, some deep-set stains may require specialized treatment.",
    },
    {
      question: "Are the chemicals used in carpet cleaning safe for pets and children?",
      answer: "Absolutely! We use eco-friendly, non-toxic cleaning solutions that are safe for pets and children.",
    },
    {
      question: "Do I need to vacuum before the carpet cleaning crew arrives?",
      answer: "It's not necessary, but a light vacuum before our arrival can help improve results. We also pre-vacuum high-traffic areas as part of our service.",
    },
    {
      question: "What do I need to do to prepare my home for carpet cleaning?",
      answer: "Please remove small furniture, toys, and fragile items from the area to be cleaned. Our team will handle the rest.",
    },
    {
      question: "Can you guarantee the removal of all spots or stains?",
      answer: "While we can remove most stains, some may be permanent due to chemical reactions with the carpet fibers. We will do our best to achieve the best results.",
    },
    {
      question: "Do you offer any kind of satisfaction guarantee?",
      answer: "Yes! We stand by our work and offer a satisfaction guarantee. If you’re not happy with the results, we’ll re-clean the area free of charge.",
    },
    {
      question: "How do I schedule a carpet cleaning appointment?",
      answer: "You can schedule an appointment by calling us, visiting our website, or sending us a message through our contact form.",
    },
  ];
  

  const pricingData = [
    {
      title: "Prices for Carpet Cleaning & Rug Cleaning",
      note: "Note: Our minimum order is £80.00",
      prices: [
        { desc: "1 Bedroom", price: "£40" },
        { desc: "2 Bedrooms", price: "£80" },
        { desc: "3 Bedrooms", price: "£120" },
        { desc: "4 Bedrooms", price: "£160" },
        { desc: "5 Bedrooms", price: "£200" },
        { desc: "1 Living Room", price: "£40" },
        { desc: "Landing - Stairs", price: "£30" },
      ],
    },
    {
      title: "Prices for Professional Upholstery Cleaning Services",
      prices: [
        { desc: "Dining Chair", price: "£10" },
        { desc: "Armchair", price: "£35" },
        { desc: "Two Seater Sofa", price: "£65" },
        { desc: "Three Seater Sofa", price: "£95" },
        { desc: "Mattress (Single/Double-King)", price: "£30/£45" },
        { desc: "Steam Curtains", price: "£75" },
      ],
    },
    {
      title: "Prices for Cleaning Extras",
      prices: [
        { desc: "Keys collection and return", price: "£20" },
        { desc: "London Congestion Charge", price: "£15" },
        { desc: "Parking fees", price: "TBA" },
      ],
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
          Carpet Cleaning
        </h1>
      </div>
      <div className=" px-4 mx-auto container py-4">
        <h1 className="text-purple-700 text-2xl mt-80">
        Current Offer:
        </h1>
        <p className="py-2 text-gray-600 text-xl">1. Book Now and Get Free Carpet Cleaning for 1 Room <br/> 
        2. When you book and pay for a minimum of 3 carpets. </p>

        <h1 className="text-purple-700 text-2xl">
        Just a few clicks and you can arrange for a professional cleaner to take the stress out of your daily routine, leaving you with a spotless home to enjoy.
        </h1>
      <div className="mt-12">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Column - Why Choose Us */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-purple-700 mb-4">
            Why Choose Our Steam Cleaning Solutions
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>Advanced Steam Cleaning Technology:</strong> We use the
              latest in steam cleaning technology to penetrate deep into the
              fibers of carpets, upholstery, and mattresses, removing dirt,
              bacteria, and allergens that traditional cleaning methods cannot
              reach.
            </li>
            <li>
              <strong>Expertise in Fabric Care:</strong> Our team of
              professionals is highly trained in the care of all types of
              fabrics and materials. Whether it’s a delicate silk sofa or a
              sturdy wool carpet, we adjust our cleaning methods to suit each
              material, ensuring safe and effective results every time.
            </li>
            <li>
              <strong>Eco-Friendly and Safe:</strong> Health and safety are
              paramount in our work. Our steam cleaning processes use minimal
              chemicals, making it an eco-friendly option that is safe for
              children, pets, and individuals with allergies.
            </li>
            <li>
              <strong>Fast Drying Times:</strong> Our efficient steam cleaning
              techniques ensure that your carpets, upholstery, and mattresses
              dry quickly, reducing disruption to your daily routine and
              preventing mold growth.
            </li>
          </ul>
        </div>

        {/* Right Column - Our Services */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-purple-700 mb-4">
            Our Services
          </h2>
          <ul className="space-y-4 text-gray-600">
            <li>
              <strong>Carpet Steam Cleaning:</strong> Revive your carpets with
              our thorough steam cleaning service. Perfect for removing stains,
              dirt, and allergens, our method leaves your carpets looking and
              feeling fresh, enhancing the comfort and appearance of your home
              or office.
            </li>
            <li>
              <strong>Upholstery Sofa Steaming:</strong> Refresh your sofas and
              chairs with our specialized upholstery steaming services. We
              tackle everything from simple refreshes to deep stains, bringing
              new life to your furniture.
            </li>
            <li>
              <strong>Mattress Steaming:</strong> Ensure a good night’s sleep
              with our mattress steaming service. We eliminate dust mites,
              bacteria, and odors, providing you with a hygienic and
              allergen-free sleeping environment.
            </li>
            <li>
              <strong>Sofa Steam Cleaning:</strong> Extend the life of your
              living room centerpiece with our sofa steam cleaning. Ideal for
              regular maintenance or one-off deep cleans, our service helps
              preserve your sofa’s beauty and comfort.
            </li>
          </ul>
        </div>
      </div>
      </div>
      
        {/* <h1 className="text-purple-700 text-2xl">
        Ready to Transform Your Home?
        </h1>
        <p className="text-gray-700 text-xl py-4">
        If you’re looking for top-notch steam carpet cleaning, upholstery sofa steaming, or mattress steaming services, look no further. Contact CityHousekeeping today to schedule a service or learn more about how we can help you maintain a clean and healthy environment in your home or office. Our commitment to quality and customer satisfaction ensures that your fabrics are in good hands.
        </p> */}

        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
        Our Cleaning Prices
      </h1>
      <div className="flex flex-col md:flex-row gap-3 items-start">
          {pricingData.map((category, index) => (
            <div key={index} className="bg-gray-100 shadow-lg rounded-lg overflow-hidden w-full md:w-1/3 flex flex-col">
              <h2 className="text-xl font-bold text-purple-700 text-center p-4">{category.title}</h2>
              <table className="w-full border-collapse flex-1">
                <thead>
                  <tr className="bg-purple-500 text-white">
                    <th className="p-3 text-left">Service</th>
                    <th className="p-3 text-left">Prices</th>
                  </tr>
                </thead>
                <tbody>
                  {category.prices.map((item, idx) => (
                    <tr key={idx} className="border-b">
                      <td className="p-3 text-gray-700">{item.desc}</td>
                      <td className="p-3 text-gray-700">
                      {item.price}
                        {/* {item.price} {item.duration && <span className="text-sm text-gray-500">({item.duration})</span>}
                        {item.note && <span className="text-xs text-gray-500 block">{item.note}</span>} */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
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
        <div className=" px-4 mx-auto container py-4">
       <h2 className="text-2xl font-bold text-purple-700 mb-6">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-2">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center bg-purple-700 text-white text-lg font-medium p-4 rounded-md shadow-md"
          >
            {faq.question}
            {openIndex === index ? <FaMinus /> : <FaPlus />}
          </button>
          {openIndex === index && (
            <div className="bg-gray-100 text-gray-800 p-4 border-l-4 border-teal-500 rounded-md mt-2">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
       </div>
    </div>
  );
}
