import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    monthYear: "Nov 2024 - Present",
    title: "Public Relations Professional OSAN Ability (Registered NDIS Provider)",
    points: [
      "● Developed and implemented comprehensive business development strategies to identify new opportunities and drive revenue growth for OSAN Ability through digital platforms.",
      "● Managed the production and distribution of digital media campaigns on multi-channel (SEO, SEM, paid / organic social, and events).",
      "● Collaborated with internal teams and external vendors to develop new marketing collateral, including updated branding materials, presentations, and digital assets to support sales and marketing efforts.",
      "● Featured OSAN Ability in global publications such as Forbes, Wikipedia and CIO Magazine to strengthen brand reputation.",
      "● Proficient in CRMs including HubSpot, ShiftCare, and Visual Care.",
    ],
  },
  {
    monthYear: "Feb 2020 - Feb 2023",
    title: "Public Relations Professional | Planning & Development Punjab Govt",
    points: [
      "● Headed and implemented 13 comprehensive social media campaigns aligned with government policies on Facebook, Twitter, and other platforms.",
      "● Conceived and orchestrated workshops and knowledge-sharing events, fostering collaboration with foreign donors and the press (40,000+ viewership).",
      "● Facilitated two high-level strategic sessions to optimize KPIs and communication performance.",
      "● Achieved a 70% increase in public awareness via impactful social media campaigns.",
      "● Managed all advocacy campaigns during COVID, ensuring resilience and effective crisis communication.",
    ],
  },
  {
    monthYear: "Oct 2015 - Jan 2020",
    title: "Public Relations Officer | Directorate General Public Relations",
    points: [
      "● Led high-impact campaigns for the Minister of Livestock, influencing 30,000+ individuals.",
      "● Pioneered Punjab Government's first social media strategy, achieving 70% surge in engagement.",
      "● Improved KPIs with a 50% increase in consumer engagement.",
      "● Created content that boosted social media followers by 70% in 2 years.",
      "● Secured 10+ international press mentions showcasing Punjab Govt globally.",
    ],
  },
  {
    monthYear: "Feb 2013 - Apr 2014",
    title: "Public Relations Officer | HKC Entertainment PVT Limited",
    points: [
      "● Led strategic image-building for celebrity clients, influencing 17+ newspapers and websites.",
      "● Secured 156+ positive media features and interviews, amplifying brand reach.",
      "● Acted as crisis manager, reversing negative coverage into positive sentiment.",
      "● Drafted press releases and statements, increasing public perception positively by 70%.",
    ],
  },
];

const charVariants = {
  hidden: { y: 50, rotateX: 90, opacity: 0 },
  visible: { y: 0, rotateX: 0, opacity: 1 },
};

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // Tablet
      } else {
        setCardsPerView(2); // Large Desktop (changed from 3 → 2)
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const nextSlide = () => {
    if (index < testimonials.length - cardsPerView) setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  const totalSteps = testimonials.length - cardsPerView + 1;

  const headingRef = useRef(null);
  const inView = useInView(headingRef, { once: true, amount: 0.4 });

  const headingText = "EXPERIENCE";

  return (
    <div className="pb-20 px-4 sm:px-6 md:px-10 pt-10 bg-[#FEFCF6] relative">
      <h1 className="text-center text-black uppercase inter">Professional</h1>

      {/* Animated Heading */}
      <h1
        ref={headingRef}
        className="uppercase mor-n font-bold pt-6 flex justify-center text-[#25211D] text-center text-[120px] sm:text-[150px] md:text-[200px] leading-none"
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

      {/* Slider */}
      <div className="relative flex items-center justify-center pt-10">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          disabled={index === 0}
          className={`absolute cursor-pointer -left-4 sm:-left-6 z-10 rounded-full shadow-lg p-2 sm:p-3 top-1/2 -translate-y-1/2 
            ${index === 0 ? "bg-white cursor-not-allowed" : "bg-white"}`}
        >
          <ChevronLeft size={24} />
        </button>

        {/* Cards */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * (100 / cardsPerView)}%)` }}
          >
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="flex-none w-full sm:w-1/2 lg:w-1/2 border border-[#D2D1CB] px-6 sm:px-8 py-8 sm:py-10 flex flex-col gap-4 sm:gap-6"
              >
                <p className="text-sm text-gray-500">{item.monthYear}</p>
                <h2 className="text-lg sm:text-xl font-bold text-[#25211D]">{item.title}</h2>
                <ul className="text-[#34302B] text-base sm:text-lg space-y-3">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          disabled={index >= testimonials.length - cardsPerView}
          className={`absolute cursor-pointer -right-4 sm:-right-6 z-10 rounded-full shadow-lg p-2 sm:p-3 top-1/2 -translate-y-1/2 
            ${index >= testimonials.length - cardsPerView ? "bg-white cursor-not-allowed" : "bg-white"}`}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalSteps }).map((_, stepIndex) => (
          <span
            key={stepIndex}
            className={`w-3 h-3 rounded-full cursor-pointer ${index === stepIndex ? "bg-[#25211D]" : "bg-gray-400"}`}
            onClick={() => setIndex(stepIndex)}
          ></span>
        ))}
      </div>

      {/* Bottom Border */}
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
