import React, { useState } from "react";
import { Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import "./About.css";

const AboutUs = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="bg-[#FEFCF6] py-20 px-10">
      {/* ===== TITLE SECTION ===== */}
      <h1 className="text-center text-black uppercase inter">Design Vision</h1>

      <div className="flex items-center justify-between pt-10">
        <div className="flex items-start flex-col leading-none">
          <div className="flex items-center">
            <p className="text-[#6F6B61] text-8xl">+</p>
            <h1 className="mor-n text-[192px] leading-none tracking-wider">15</h1>
          </div>
          <p className="inter font-normal text-[#25211D]">Years Of Experience</p>
        </div>

        <h1 className="mor-n text-[240px] leading-none uppercase text-[#25211D] font-bold">Modern</h1>

        <div className="flex items-start flex-col leading-none">
          <div className="flex items-center">
            <h1 className="mor-n text-[192px] leading-none tracking-wide">98</h1>
            <p className="text-[#6F6B61] text-8xl">+</p>
          </div>
          <p className="inter font-normal text-[#25211D]">Successful Projects</p>
        </div>
      </div>

      <h1 className="mor-n text-[240px] leading-none uppercase text-[#25211D] font-bold text-center -mt-8">
        Architecture
      </h1>

      <div className="flex items-center justify-between pt-4">
        <p className="max-w-md flex items-start inter text-[#34302B]">
          We create architecture that balances form, function, and context. Our spaces reflect a deep respect for people, place, and purpose — shaped with care, vision, and lasting intent.
        </p>
        <p className="max-w-md flex text-end justify-end inter text-[#34302B]">
          Every project is an opportunity to connect design with meaning. Through timeless forms and details, we create environments that inspire and serve those who live, work and gather there.
        </p>
      </div>

      {/* ===== BUTTON WITH BORDER FRAME ===== */}
      <div className="flex justify-center mt-10">
        {/* Outer fixed border */}
        <div
          className="rounded-full border border-slate-500"
          style={{
            width: "180px",
            height: "60px",
            padding: "2px" // space for scaling content
          }}
        >
          {/* Inner scaling content */}
          <motion.div
            className="bg-[#25211D] w-full h-full rounded-full flex items-center justify-center uppercase text-white text-lg overflow-hidden cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            animate={{ scale: hovered ? 0.96 : 1 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <AnimatePresence mode="wait">
              {!hovered ? (
                <motion.span
                  key="about"
                  initial={{ rotate: 12, y: -40, opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1 }}
                  exit={{ rotate: -12, y: -10, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  ABOUT US
                </motion.span>
              ) : (
                <motion.span
                  key="learn"
                  initial={{ rotate: 12, y: -40, opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1 }}
                  exit={{ rotate: -12, y: -10, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  ABOUT US
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* ===== SOCIAL ICONS ===== */}
      <div className="flex items-center justify-center gap-6 mt-10">
        <div className="about-item bg-[#25211D] text-white p-3 rounded-full cursor-pointer">
          <span><Instagram size={20} /></span>
          <span><Instagram size={20} /></span>
        </div>
        <div className="about-item bg-[#25211D] text-white p-3 rounded-full cursor-pointer">
          <span><Twitter size={20} /></span>
          <span><Twitter size={20} /></span>
        </div>
        <div className="about-item bg-[#25211D] text-white p-3 rounded-full cursor-pointer">
          <span><Linkedin size={20} /></span>
          <span><Linkedin size={20} /></span>
        </div>
        <div className="about-item bg-[#25211D] text-white p-3 rounded-full cursor-pointer">
          <span><Facebook size={20} /></span>
          <span><Facebook size={20} /></span>
        </div>
      </div>

      <div className="mt-20 flex justify-center px-10">
        <div className="border-b border-gray-300 w-full"></div>
      </div>
    </div>
  );
};

export default AboutUs;
