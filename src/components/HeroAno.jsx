import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import bg1 from "../assets/herobg1.svg";
import bg2 from "../assets/herobg2.svg";
import arrowdown from "../assets/arrowdown.svg";
import scrolldown from "../assets/scrolldown.svg";
import heromain from "../assets/heroimage.png";

const HeroAno = () => {
    const flowerRef = useRef(null);
    const flowerInView = useInView(flowerRef, { once: true, amount: 0.2 });

    const contentRef = useRef(null);
    const contentInView = useInView(contentRef, { once: true, amount: 0.2 });

    const handleScrollToServices = () => {
        const servicesSection = document.getElementById("services");
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="md:px-4 relative min-h-screen overflow-hidden">
            <div className="">
                {/* Gradient background */}
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-600 to-white" />

                {/* Main background image */}
                <div
                    className="lg:absolute custom-hide-375 md:hidden lg:flex absolute md:mx-0 mx-4 inset-0 md:translate-y-0 translate-y-7 z-10 md:bg-center bg-bottom bg-no-repeat bg-contain opacity-85"
                    style={{ backgroundImage: `url(${heromain})` }}
                />

                {/* Decorative Layer 2 (Flower on top right) */}
                <motion.img
                    ref={flowerRef}
                    src={bg1}
                    alt="Decorative Layer 2"
                    initial={{ y: -100, opacity: 0 }}
                    animate={
                        flowerInView
                            ? {
                                y: 0,
                                opacity: 0.3,
                                transition: { type: "spring", bounce: 0.5, duration: 1 },
                            }
                            : {}
                    }
                    className="absolute md:-top-8 -top-10 md:right-28 right-0 z-20 md:w-70 w-40 opacity-80"
                />

                {/* Decorative Layer 3 */}
                <img
                    src={bg2}
                    alt="Decorative Layer 3"
                    className="md:inline hidden absolute top-0 left-6 z-20 w-52 opacity-30"
                />

                {/* Actual Hero Content */}
                <motion.div
                    ref={contentRef}
                    initial={{ y: 80, opacity: 0 }}
                    animate={
                        contentInView
                            ? {
                                y: 0,
                                opacity: 1,
                                transition: { duration: 0.8, ease: "easeOut" },
                            }
                            : {}
                    }
                    className="relative z-30 flex md:flex-row flex-col md:items-center md:gap-5 md:justify-between  h-full"
                >
                    <div className="flex flex-col justify-between px-2 md:py-6 py-2 md:gap-0">
                        <h1 className="md:text-4xl text-4xl leading-none frank max-w-lg text-[#25211D]">
                            Dedicated and seasoned Communication Specialist{" "}
                            {/* <h1 className="md:hidden inline text-[1rem] text-secondary leading-none -mt-4 lady-text">
                transformation
              </h1> */}
                        </h1>
                        <h1 className="text-[2rem] md:text-[5rem] text-[#DFD18F] leading-none lady">
                            shaping brands
                        </h1>
                        {/* <h1 className="text-gray-700 inter mt-2">Internal work for External benefits.</h1> */}

                        <div className="md:flex hidden flex-col pt-10 pl-4">
                            <img
                                src={arrowdown}
                                onClick={handleScrollToServices}
                                className="w-7 ml-14 cursor-pointer group hover:translate-y-8 z-40 transform transition-all duration-800 ease-in-out h-auto object-contain"
                                alt="Arrow Down"
                            />
                            <img
                                src={scrolldown}
                                className="w-34 -rotate-40 -translate-y-16 cursor-pointer group-hover:translate-y-0 h-auto object-contain"
                                alt="Scroll Down"
                            />
                        </div>
                        <div className="md:max-w-md max-w-[350px] uppercase tracking-tight mt-0">
                            <h1 className="md:text-primary text-gray-800 md:text-lg text-md leading-6 inter max-w-md">
                                Proven expertise in shaping brand narratives, managing impactful campaigns, and driving strategic communication initiatives.
                            </h1>
                        </div>
                    </div>

                    <div className="flex flex-col md:items-center">
                        <div className="flex flex-col md:text-end md:px-4 px-2 gap-5 md:pt-40">
                            <h1 className="md:text-7xl text-4xl frank tracking-tighter text-[#25211D]">10</h1>
                            <h1 className="md:text-lg -mt-4 text-sm text-gray-800 md:text-end uppercase md:max-w-[160px]">
                                Years of Expierience
                            </h1>
                        </div>

                        <div className="md:absolute md:mt-0 flex flex-col px-2 bottom-6  right-0 max-w-[300px] tracking-tight">
                            <a href="tel: 0490 893 961" className="text-gray-800 md:text-xl text-sm md:text-end hover:text-secondary transition-colors duration-300 ease-in-out">
                                0490 893 961
                            </a>
                            <a href="mailto:sahr.eqbal8@gmail.com" className="text-gray-800 md:text-md text-sm text-right hover:text-secondary transition-colors duration-300 ease-in-out inter">
                                sahr.eqbal8@gmail.com
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroAno;