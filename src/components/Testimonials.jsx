import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    logo: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/68516188ef1e08a08cb7adc8_Delaware.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    img: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/68555f938e7a3d5099ea301a_client-03.jpg",
    name: "Liam Cole",
    role: "CEO",
  },
  {
    logo: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/6851618899fe0f81f09d8dc6_Amsterdam.svg",
    text: "Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    img: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/68555f94cf01c11437c2fd63_client-06.jpg",
    name: "Emma Gray",
    role: "CEO",
  },
  {
    logo: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/6851619fb9d10aebcce79c0d_Sweden.svg",
    text: "Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    img: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/68555f93df486cfbc577c5bf_client-02.jpg",
    name: "Emily Hill",
    role: "CEO",
  },
  {
    logo: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/685161920fd24a7acdfd6334_Monaco.svg",
    text: "Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    img: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/68555f93492bd334a12ef84b_client-04.jpg",
    name: "Mia Lane",
    role: "CEO",
  },
  {
    logo: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/685161998c35f2dd232c0474_Springfield.svg",
    text: "Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    img: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/68555f9380ce974d0b84adc6_client-05.jpg",
    name: "Michael Ford",
    role: "CEO",
  },
  {
    logo: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/685161a5822b1ce22b5d1ce5_Umbrella.svg",
    text: "Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    img: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/68555f930b1cf5a2b9462b77_client-01.jpg",
    name: "Noah West",
    role: "CEO",
  },
];

const charVariants = {
  hidden: { y: 50, rotateX: 90, opacity: 0 },
  visible: { y: 0, rotateX: 0, opacity: 1 },
};

const Testimonials = () => {
  const cardsPerView = 3;
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  const nextSlide = () => {
    if (index < testimonials.length - cardsPerView) setIndex(index + 1);
  };
  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };
  const totalSteps = testimonials.length - cardsPerView + 1;

  // Ref for heading inView
  const headingRef = useRef(null);
  const inView = useInView(headingRef, { once: true, amount: 0.4 });

  const headingText = "TESTIMONIALS";

  return (
    <div className="pb-20 px-10 pt-10 bg-[#FEFCF6] relative">
      <h1 className="text-center text-black uppercase inter">Happy Clients</h1>

      {/* TESTIMONIALS HEADING WITH INVIEW ANIMATION */}
      <h1
        ref={headingRef}
        className="text-center leading-none text-[#25211D] text-[180px] md:text-[240px] uppercase mor-n pt-10 flex justify-center"
      >
        {headingText.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={charVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
          >
            {char}
          </motion.span>
        ))}
      </h1>

      <div className="relative flex items-center justify-center pt-10 px-10">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          disabled={index === 0}
          className={`absolute cursor-pointer left-4 z-10 rounded-full shadow-lg p-3 top-1/2 -translate-y-1/2 
            ${index === 0 ? "bg-white cursor-not-allowed" : "bg-white"}`}
        >
          <ChevronLeft size={28} />
        </button>

        {/* Cards */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / cardsPerView)}%)`,
            }}
          >
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="flex-none w-1/3 border border-[#D2D1CB] px-8 py-10 flex flex-col gap-8"
              >
                <img className="w-36" src={item.logo} alt="Logo" />
                <p className="inter text-[#34302B] text-lg leading-snug">
                  "{item.text}"
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <img
                    className="w-14 rounded-full border border-gray-400 p-1"
                    src={item.img}
                    alt={item.name}
                  />
                  <div className="flex flex-col gap-1">
                    <h1 className="text-[#25211D] inter font-bold">{item.name}</h1>
                    <p className="text-[#6F6B61] inter">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          disabled={index >= testimonials.length - cardsPerView}
          className={`absolute cursor-pointer right-4 z-10 rounded-full shadow-lg p-3 top-1/2 -translate-y-1/2 
            ${index >= testimonials.length - cardsPerView ? "bg-white cursor-not-allowed" : "bg-white"}`}
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalSteps }).map((_, stepIndex) => (
          <span
            key={stepIndex}
            className={`w-3 h-3 rounded-full cursor-pointer ${index === stepIndex ? "bg-[#25211D]" : "bg-gray-400"
              }`}
            onClick={() => setIndex(stepIndex)}
          ></span>
        ))}
      </div>

      {/* Bottom Border Animation */}
      <div className="mt-20 flex justify-center px-10">
        <motion.div
          className="border-b border-gray-300"
          initial={{ scaleX: 0, originX: 0.5 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.5 }}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default Testimonials;
