import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const OurValues = () => {
  const [hovered, setHovered] = useState(false);

  const images = [
    "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/685160358a973978e2743583_Frame%206.jpg",
    "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/6851603575b55252b361cbf5_Frame%208.jpg",
    "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/6851603416b3f621bf1d007f_Frame%202.jpg",
    "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/68516035f83aceb423b038d8_Frame%203.jpg",
    "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/6851603436b47c85ae2e2ab6_Frame%205.jpg",
    "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/685160359e227e272b42d98d_Frame%204.jpg",
    "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/68516035eb0233ad4acd2496_Frame%201.jpg",
    "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/68516035a3b863be972db6d3_Frame%2010.jpg"
  ];

  // Ref & inView for heading animation
  const headingRef = useRef(null);
  const inView = useInView(headingRef, { once: true, amount: 0.4 });

  const headingText = "Let's Design";

  const charVariants = {
    hidden: { y: 50, rotateX: 90, opacity: 0 },
    visible: { y: 0, rotateX: 0, opacity: 1 },
  };

  return (
    <div className="bg-[#FEFCF6] pb-20 px-10">
      <h1 className="text-center text-black inter uppercase">Start Building</h1>

      {/* Let's Design Heading with inView animation */}
      <h1
        ref={headingRef}
        className="uppercase mor-n font-bold text-center leading-none text-[240px] pt-6 flex justify-center"
      >
        {headingText.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={charVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
          >
            {char}
          </motion.span>
        ))}
      </h1>

      <p className="inter text-center text-[#34302B] max-w-3xl mx-auto mt-6">
        Ready to bring your vision to life? Whether it’s a home, a workspace, or
        a public space, we’re here to design environments that inspire,
        function, and endure. Let’s start your project together.
      </p>

      {/* CTA Button */}
      <div className="flex justify-center mt-10">
        <div
          className="rounded-full border border-slate-500"
          style={{ width: "220px", height: "60px", padding: "2px" }}
        >
          <motion.div
            className="bg-[#25211D] w-full h-full rounded-full flex items-center justify-center uppercase text-white text-lg overflow-hidden cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            animate={{ scale: hovered ? 0.96 : 1 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={hovered ? "hover" : "normal"}
                initial={{ rotate: 12, y: -40, opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1 }}
                exit={{ rotate: -12, y: -10, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                START A PROJECT
              </motion.span>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Circle of Images */}
      <div className="relative flex justify-center items-center mt-20 pt-20 overflow-hidden h-[400px]">
        <motion.div
          className="relative w-[600px] h-[600px] rounded-full translate-y-40"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          {images.map((src, i) => {
            const angle = (i / images.length) * 2 * Math.PI;
            const radius = 250;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const rotation = (angle * 180) / Math.PI + 90;

            return (
              <img
                key={i}
                src={src}
                alt={`Frame ${i + 1}`}
                className="w-52 absolute"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${rotation}deg)`,
                }}
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default OurValues;
