"use client"
import company1 from "@/assets/window/comp1.png"
import company2 from "@/assets/window/comp2.png"
import company3 from "@/assets/window/comp3.png"
import company4 from "@/assets/window/comp4.png"
import company5 from "@/assets/window/comp5.png"
import company6 from "@/assets/window/comp6.png"
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { motion } from "framer-motion";

const CompaniesBrands = () => {
  const companies = [
    company1,
    company2,
    company3,
    company4,
    company5,
    company6
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="overflow-x-hidden p-4 border rounded-xl relative bg-white shadow-md">
      <h2 className="text-center md:text-3xl text-lg font-bold text-purple-600 mt-3">
        Cleaning Brands that We Love & Use
      </h2>

      {/* ✅ Simplified Motion Component */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isMobile ? "-300%" : "-100%" }}
        transition={{ duration: isMobile ? 20 : 20, repeat: Infinity, ease: "linear" }}
        className="flex py-12"
      >
        {[...companies, ...companies].map((company, index) => (
          <Image
            src={company}
            alt={`Company ${index + 1}`} // Corrected template literal for alt text
            key={index}
            width={140}
            height={48}
            className="h-auto w-auto pr-5 md:pr-20 object-contain"
          />
        ))}
      </motion.div>
    </section>
  );
}

export default CompaniesBrands;