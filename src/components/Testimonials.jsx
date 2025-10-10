import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    image: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/68516188ef1e08a08cb7adc8_Delaware.svg",
    title: "As an architect i worked with saleha on one of the interior design  project. The outcome was brilliant. Client was very pleased  with the results. she is very professional!!",
    person: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/68555f93492bd334a12ef84b_client-04.jpg",
    name: "Sameera Dalvi",
  },
  {
    image: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/6851618899fe0f81f09d8dc6_Amsterdam.svg",
    title: "Saleha has been brilliant all along. She designed our living room and changed it to something extraordinary and special. Saleha is approachable and wonderful.",
    person: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/68555f9380ce974d0b84adc6_client-05.jpg",
    name: "HU-584350361",
  },
  {
    image: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/6851619fb9d10aebcce79c0d_Sweden.svg",
    title: "I would like to express my appreciation for the exceptional interior design services provided by Saleha. Her expertise and attention to detail ensured everything.",
    person: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/68555f930b1cf5a2b9462b77_client-01.jpg",
    name: "Talib",
  },
  {
    image: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/685161920fd24a7acdfd6334_Monaco.svg",
    title: "We would highly recommend Saleha and team that worked with us to help design and decorate our new home. Start to finish, took the time to understand what we wanted.",
    person: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/68555f93df486cfbc577c5bf_client-02.jpg",
    name: "Ashley Newman",
  },
  {
    image: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/685161998c35f2dd232c0474_Springfield.svg",
    title: "Thanks to Saliha and team for understanding our requirements and providing useful insights into what will work and what wanted.",
    person: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/68555f938e7a3d5099ea301a_client-03.jpg",
    name: "Moiz Siawala",
  },
  {
    image: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/685161a5822b1ce22b5d1ce5_Umbrella.svg",
    title: "I wanted to post a review of the decoration project with Dwell Rich( SK). The execution was smooth and timely. I am happy with the final look of the room and corridor.",
    person: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/68555f94cf01c11437c2fd63_client-06.jpg",
    name: "HU-901874817",
  },
];

const charVariants = {
  hidden: { y: 50, rotateX: 90, opacity: 0 },
  visible: { y: 0, rotateX: 0, opacity: 1 },
};

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // Tablet
      } else {
        setCardsPerView(3); // Desktop
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

  const headingRef = useRef(null);
  const inView = useInView(headingRef, { once: true, amount: 0.4 });

  const headingText = "TESTIMONIALS";

  return (
    <div className="pb-20 px-4 sm:px-6 md:px-10 pt-10 bg-[#FEFCF6] relative">
      <h1 className="text-center text-black uppercase inter">Happy Clients</h1>

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
                className="flex-none w-full sm:w-1/2 lg:w-1/3 border border-[#D2D1CB] px-6 sm:px-8 py-8 sm:py-10 flex flex-col gap-4 sm:gap-6"
              >
                {/* <img className="w-30" loading="lazy" src={item.image} alt="Image" /> */}
                <h2 className="text-base text-[#25211D]">{'"'}{item.title}{'"'}</h2>
                {/* <ul className="text-[#34302B] text-base sm:text-lg space-y-3">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul> */}
                <div className="flex items-center gap-4">
                  <img className="rounded-full w-14 border border-gray-300 p-0.5" loading="lazy" src={item.person} alt="Person Image" />
                  <div className="flex flex-col items-start">
                    <h3 className="text-[#25211D] font-semibold">{item.name}</h3>
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
          className={`absolute cursor-pointer -right-4 sm:-right-6 z-10 rounded-full shadow-lg p-2 sm:p-3 top-1/2 -translate-y-1/2 
            ${index >= testimonials.length - cardsPerView ? "bg-white cursor-not-allowed" : "bg-white"}`}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: testimonials.length - cardsPerView + 1 }).map((_, stepIndex) => (
          <span
            key={stepIndex}
            className={`w-3 h-3 rounded-full cursor-pointer ${index === stepIndex ? "bg-[#25211D]" : "bg-gray-400"
              }`}
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
