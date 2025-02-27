"use client";
import heroImg from "@/assets/tenancyClening/hero.jpg";
import Link from "next/link";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What is included in an end of tenancy cleaning?",
    answer:
      "Our end of tenancy cleaning includes a deep clean of all rooms, appliances, carpets, windows (interior), and surfaces to meet landlord and agency standards.",
  },
  {
    question: "How long does an end of tenancy cleaning take?",
    answer:
      "The duration depends on the size and condition of the property. Typically, it takes between 3 to 6 hours for a standard property.",
  },
  {
    question: "Do I need to provide cleaning supplies?",
    answer:
      "No, our professional cleaners bring all necessary cleaning supplies and equipment.",
  },
  {
    question: "Is there a guarantee with your end of tenancy cleaning?",
    answer:
      "Yes, we offer a 48-hour re-clean guarantee to ensure your satisfaction and help with deposit return.",
  },
  {
    question: "Do I need to be present during the cleaning?",
    answer:
      "No, as long as we have access to the property, you do not need to be present.",
  },
  {
    question: "Can end of tenancy cleaning help with getting my deposit back?",
    answer:
      "Yes, our thorough cleaning increases your chances of getting your full deposit back.",
  },
  {
    question: "How much does end of tenancy cleaning cost?",
    answer:
      "Prices vary based on the size and condition of the property. Contact us for a free quote.",
  },
  {
    question: "What do I need to prepare before the cleaning team arrives?",
    answer:
      "Ensure the property is empty of personal belongings and that we have access to all areas needing cleaning.",
  },
  {
    question: "Can you clean on the day I move out?",
    answer:
      "Yes, we offer same-day and next-day cleaning services, depending on availability.",
  },
  {
    question:
      "Do you also offer services for landlords who need to clean a property before a new tenant moves in?",
    answer:
      "Yes, we offer pre-tenancy cleaning services to ensure the property is spotless before new tenants move in.",
  },
];

export default function tenancyCleaning() {

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const pricingData = [
    {
      title: "Bedroom House Cleaning",
      prices: [
        { desc: "1 Bedroom House: 2 Expert Cleaners", price: "£247.50", duration: "4.5h" },
        { desc: "2 Bedrooms House 1 Bathroom: 2 Expert Cleaners", price: "£302.50", duration: "5.5h" },
        { desc: "3 Bedrooms House 1 Bathroom: 3 Expert Cleaners", price: "£412.50", duration: "5h" },
        { desc: "4 Bedrooms House 1 Bathroom: 3 Expert Cleaners", price: "£495.00", duration: "6h" },
        { desc: "5 Bedrooms House 1 Bathroom: 3 Expert Cleaners", price: "£536.25", duration: "6.5h" },
        { desc: "Extra Bathroom*", price: "£35" },
      ],
    },
    {
      title: "Bedroom Flat Cleaning",
      prices: [
        { desc: "1 Bedroom Flat: 2 Expert Cleaners", price: "£192.50", duration: "3.5h" },
        { desc: "2 Bedrooms Flat: 2 Expert Cleaners", price: "£275.00", duration: "5h" },
        { desc: "2 Bedrooms 2 Bathroom Flat: 2 Expert Cleaners", price: "£302.50", duration: "5.5h" },
        { desc: "3 Bedrooms Flat 1 Bathroom: 3 Expert Cleaners", price: "£371.25", duration: "4.5h" },
        { desc: "4 Bedrooms Flat 1 Bathroom: 3 Expert Cleaners", price: "£412.50", duration: "5h" },
        { desc: "5 Bedrooms Flat 1 Bathroom: 3 Expert Cleaners", price: "£495.00", duration: "6h" },
        { desc: "Extra Bathroom*", price: "£35" },
      ],
    },

    {
      title: "Additional Services",
      prices: [
        { desc: "Carpet Clean", price: "£40 per carpet/hallway/stairs", note: "Minimum £120 for call-out" },
        { desc: "Curtain Steam", price: "£75 per curtain", duration: "30m" },
        { desc: "1-seater sofa steam clean", price: "£45 per sofa", duration: "15m" },
        { desc: "2-seater sofa steam clean", price: "£85 per sofa", duration: "20m" },
        { desc: "3-seater sofa steam clean", price: "£105 per sofa", duration: "30m" },
        { desc: "Mattress steam", price: "£45 per mattress", duration: "30m" },
        { desc: "Windows clean", price: "£80 per window", duration: "60m" },
        { desc: "Keys collection and return", price: "£25" },
        { desc: "London Congestion Charge", price: "£15" },
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
        <h1 className="absolute inset-0 flex justify-center mt-32 items-center text-white text-3xl md:text-5xl  z-10" data-aos="fade-right">
          End of Tenancy
        </h1>
      </div>
      <div className=" px-4 mx-auto container py-4">
        <h1 className="text-purple-700 text-2xl mt-80">
          Looking for reliable end of tenancy cleaning services in London?
        </h1>
        <p className="py-6">At CityHousekeeping, we specialize in providing top-notch end of tenancy cleaning to ensure your rental property is in pristine condition for your landlord's inspection. Whether you're a tenant aiming to secure your full deposit return, or a landlord preparing to welcome new tenants, our dedicated team delivers exceptional cleaning results every time.</p>

        <h1 className="text-purple-700 text-2xl">
          Why Choose Us for Your End of Tenancy Cleaning?
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
            <span className="font-bold">Thorough Coverage:</span> Our expert cleaners cover every nook and cranny, from the kitchen and bathrooms to living areas and bedrooms, ensuring a comprehensive clean that meets the strictest standards.
          </li>
          <li>
            <span className="font-bold">Experienced Professionals:</span> With years of experience in London's competitive rental market, our cleaners know exactly what landlords and estate agents look for during inspections.
          </li>
          <li>
            <span className="font-bold">Flexible Scheduling:</span> We understand the importance of timely service, which is why we offer flexible scheduling to fit your busy moving schedule.
          </li>
          <li>
            <span className="font-bold">Affordable Rates:</span> Get the best cleaning service in London without breaking the bank. Our transparent pricing means no hidden fees, just honest and straightforward quotes.
          </li>

        </ul>
        <h1 className="text-purple-700 text-2xl">
          Our End of Tenancy Cleaning Services
        </h1>
        <h1 className="text text-gray-700 text-lg">
          We understand the pressure of moving out or moving in and aim to make it easier for you. Our end of tenancy cleaning ensures the property is left in immaculate condition, ready for inspection by landlords or new tenants. With our satisfaction guarantee, you can be sure the job will meet high standards every time.
        </h1>
        <ul className="pb-4 list-disc pl-8 text-gray-700">
          <li>
            <span className="font-bold">Customizable Service:</span> Whether you need a full cleaning or focus on specific areas like carpets or kitchen appliances, we can adapt to your needs.
          </li>
          <li>
            <span className="font-bold">Quick Turnaround:</span> In most cases, we can accommodate same-day cleaning to help meet tight deadlines.
          </li>
          <li>
            <span className="font-bold">Deep Cleaning:</span> Kitchens, bathrooms, living rooms, and bedrooms are deep cleaned, including appliances, cabinets, floors, and surfaces.
          </li>
          <li>
            <span className="font-bold">Carpet Cleaning:</span> Optional steam cleaning services for carpets to remove stains and odours.
          </li>
          <li>
            <span className="font-bold">Window Cleaning:</span> Interior window cleaning to let in more light and improve the overall appearance of your property.
          </li>
          <li>
            <span className="font-bold">Special Requests:</span> Accommodating any specific cleaning requests you or your landlord might have.
          </li>
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
        <div className="flex flex-col md:flex-row items-start gap-3">
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
                      <td className="p-3 font-bold text-gray-900">
                        {item.price} {item.duration && <span className="text-sm text-gray-500">({item.duration})</span>}
                        {item.note && <span className="text-xs text-gray-500 block">{item.note}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
        <div className="pt-10 flex justify-center items-center flex-col">
          <h1 className="text-center font-semibold text-purple-700 pb-2">Ready to book your end of tenancy cleaning in London?</h1>
          <Link href="/booknow">
            <button className="font-bold text-xl text-white bg-purple-700 p-3 hover:bg-purple-800 rounded-full">
              <span>Book your End of Tenancy cleaning Today</span>
            </button>
          </Link>
          <p className="text-center text-purple-700 mt-2">
            <span>Just a few clicks and you can arrange for a professional cleaner</span><br />
            <span>to take the stress out of your daily routine, leaving you</span><br />
            <span>with a spotless home to enjoy.</span>
          </p>
        </div>
        <div>
        <h2 className="text-2xl font-bold text-purple-700 mb-6">
          Frequently Asked Questions
        </h2>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-2">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center bg-purple-700 text-white p-4 rounded-lg focus:outline-none"
            >
              <span>{faq.question}</span>
              {openIndex === index ? <FaMinus /> : <FaPlus />}
            </button>
            {openIndex === index && (
              <div className="bg-gray-100 p-4 border border-gray-300 rounded-b-lg">
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
