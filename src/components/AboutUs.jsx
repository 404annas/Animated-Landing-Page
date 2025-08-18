import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Twitter, Instagram, Linkedin, Facebook } from "lucide-react";
import "./About.css";

// Scroll counter with animation on mount
const ScrollCounter = ({ number, height = 192, duration = 2000 }) => {
  const digits = String(number).split("");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // trigger animation after mount
    setAnimate(true);
  }, []);

  return (
    <div className="flex">
      {digits.map((digit, idx) => (
        <div
          key={idx}
          className="overflow-hidden relative"
          style={{ height: `${height}px`, width: "50px" }}
        >
          <div
            style={{
              transform: animate ? `translateY(-${digit * height}px)` : `translateY(0)`,
              transition: `transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`,
            }}
          >
            {[...Array(10).keys()].map((n) => (
              <div
                key={n}
                style={{
                  height: `${height}px`,
                  fontSize: `${height}px`,
                  fontWeight: "bold",
                  color: "#25211D",
                  textAlign: "center",
                  lineHeight: 1, // remove extra spacing
                }}
              >
                {n}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="bg-[#FEFCF6] py-20 px-10">
      <h1 className="text-center text-black uppercase inter">Design Vision</h1>

      <div className="flex items-center justify-between pt-10">
        {/* LEFT COUNTER */}
        <div className="flex items-start flex-col leading-none">
          <div className="flex items-center mor-n">
            <p className="text-[#6F6B61] text-8xl">+</p>
            <ScrollCounter number={15} duration={2500} />
          </div>
          <p className="inter font-normal text-[#25211D]">Years Of Experience</p>
        </div>

        <h1 className="mor-n text-[240px] leading-none uppercase text-[#25211D] font-bold">
          Modern
        </h1>

        {/* RIGHT COUNTER */}
        <div className="flex items-end flex-col leading-none">
          <div className="flex items-center mor-n">
            <ScrollCounter number={98} duration={3000} />
            <p className="text-[#6F6B61] text-8xl">+</p>
          </div>
          <p className="inter font-normal text-[#25211D] text-right">Successful Projects</p>
        </div>
      </div>

      <h1 className="mor-n text-[240px] leading-none uppercase text-[#25211D] font-bold text-center -mt-8">
        Architecture
      </h1>

      <div className="flex items-center justify-between pt-4">
        <p className="max-w-md flex items-start inter text-[#34302B]">
          We create architecture that balances form, function, and context. Our
          spaces reflect a deep respect for people, place, and purpose — shaped
          with care, vision, and lasting intent.
        </p>
        <p className="max-w-md flex text-end justify-end inter text-[#34302B]">
          Every project is an opportunity to connect design with meaning.
          Through timeless forms and details, we create environments that
          inspire and serve those who live, work and gather there.
        </p>
      </div>

      {/* SOCIAL ICONS */}
      <div className="flex items-center justify-center gap-6 mt-10 pb-20"> <div className="about-item bg-[#25211D] text-white p-3 rounded-full cursor-pointer"> <span> <Instagram size={20} /> </span> <span> <Instagram size={20} /> </span> </div> <div className="about-item bg-[#25211D] text-white p-3 rounded-full cursor-pointer"> <span> <Twitter size={20} /> </span> <span> <Twitter size={20} /> </span> </div> <div className="about-item bg-[#25211D] text-white p-3 rounded-full cursor-pointer"> <span> <Linkedin size={20} /> </span> <span> <Linkedin size={20} /> </span> </div> <div className="about-item bg-[#25211D] text-white p-3 rounded-full cursor-pointer"> <span> <Facebook size={20} /> </span> <span> <Facebook size={20} /> </span> </div> </div>

      <div className="flex justify-center">
        <motion.div
          className="border-b border-gray-300"
          initial={{ scaleX: 0, originX: 0.5 }} // start from center
          whileInView={{ scaleX: 1 }} // expand fully
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.5 }} // animate only when in view
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default AboutUs;
