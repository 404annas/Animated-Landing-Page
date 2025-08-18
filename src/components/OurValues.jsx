import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OurValues = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="bg-[#FEFCF6] pb-20 px-10">
      <h1 className="text-center text-black inter uppercase">Start Building</h1>
      <h1 className="uppercase mor-n font-bold text-center leading-none text-[240px] pt-6">
        Let's Design
      </h1>
      <p className="inter text-center text-[#34302B] max-w-3xl mx-auto">
        Ready to bring your vision to life? Whether it’s a home, a workspace, or
        a public space, we’re here to design environments that inspire,
        function, and endure. Let’s start your project together.
      </p>
      <div className="flex justify-center mt-10">
        {/* Outer fixed border */}
        <div
          className="rounded-full border border-slate-500"
          style={{
            width: "220px",
            height: "60px",
            padding: "2px", // space for scaling content
          }}
        >
          {/* Inner scaling content */}
          <motion.div
            className="bg-[#25211D] w-full h-full rounded-full flex items-center justify-center uppercase text-white text-lg overflow-hidden cursor-pointer text-md"
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
                  START A PROJECT
                </motion.span>
              ) : (
                <motion.span
                  key="learn"
                  initial={{ rotate: 12, y: -40, opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1 }}
                  exit={{ rotate: -12, y: -10, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  START A PROJECT
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
