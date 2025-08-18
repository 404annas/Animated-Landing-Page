import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    logo: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/68516188ef1e08a08cb7adc8_Delaware.svg",
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."`,
    img: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/68555f938e7a3d5099ea301a_client-03.jpg",
    name: "Liam Cole",
    role: "CEO",
  },
  {
    logo: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/6851618899fe0f81f09d8dc6_Amsterdam.svg",
    text: `"Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."`,
    img: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/68555f94cf01c11437c2fd63_client-06.jpg",
    name: "Emma Gray",
    role: "CEO",
  },
  {
    logo: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/6851619fb9d10aebcce79c0d_Sweden.svg",
    text: `"Praesent commodo cursus magna, vel scelerisque nisl consectetur et."`,
    img: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/68555f93df486cfbc577c5bf_client-02.jpg",
    name: "Emily Hill",
    role: "CEO",
  },
  {
    logo: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/685161920fd24a7acdfd6334_Monaco.svg",
    text: `"Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna."`,
    img: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/68555f93492bd334a12ef84b_client-04.jpg",
    name: "Mia Lane",
    role: "CEO",
  },
  {
    logo: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/685161998c35f2dd232c0474_Springfield.svg",
    text: `"Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna."`,
    img: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/68555f9380ce974d0b84adc6_client-05.jpg",
    name: "Michael Ford",
    role: "CEO",
  },
  {
    logo: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/685161a5822b1ce22b5d1ce5_Umbrella.svg",
    text: `"Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna."`,
    img: "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/68555f930b1cf5a2b9462b77_client-01.jpg",
    name: "Noah West",
    role: "CEO",
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollTo = (index) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.children[0].offsetWidth + 40; // +gap
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setCurrentIndex(index);
  };

  const next = () => {
    if (currentIndex < testimonials.length - 1) {
      scrollTo(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      scrollTo(currentIndex - 1);
    }
  };

  return (
    <div className="pb-20 px-10 bg-[#FEFCF6]">
      <h1 className="text-center text-black uppercase inter">Happy Clients</h1>
      <h1 className="text-center leading-none text-[#25211D] text-[240px] uppercase mor-n pt-10">
        TESTIMONIALS
      </h1>

      <div className="relative flex items-center">
        {/* Left Arrow */}
        {currentIndex > 0 && (
          <button
            onClick={prev}
            className="absolute -left-6 z-10 bg-[#25211D] text-white p-3 rounded-full shadow-lg hover:bg-black transition"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-10 pt-10 px-10 overflow-x-hidden scroll-smooth"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[350px] flex items-start flex-col gap-10 leading-none border border-[#D2D1CB] px-8 py-10"
            >
              <img loading="lazy" className="w-36" src={t.logo} alt="Logo" />
              <p className="inter text-[#34302B] text-lg leading-none">{t.text}</p>
              <div className="flex items-center gap-3 mt-2">
                <img
                  loading="lazy"
                  className="w-14 h-14 rounded-full border border-gray-400 p-1 object-cover"
                  src={t.img}
                  alt={t.name}
                />
                <div className="flex flex-col gap-3">
                  <h1 className="text-[#25211D] inter font-bold">{t.name}</h1>
                  <p className="text-[#6F6B61] inter">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {currentIndex < testimonials.length - 1 && (
          <button
            onClick={next}
            className="absolute -right-6 z-10 bg-[#25211D] text-white p-3 rounded-full shadow-lg hover:bg-black transition"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`w-3 h-3 rounded-full ${currentIndex === i ? "bg-[#25211D]" : "bg-gray-400"
              }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
