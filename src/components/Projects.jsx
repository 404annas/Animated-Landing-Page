import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import port1 from "../assets/port1.jpg"
import port2 from "../assets/port2.jpg"
import port3 from "../assets/port3.jpg"
import port4 from "../assets/port4.jpg"

const charVariants = {
    hidden: { y: 50, rotateX: 90, opacity: 0 },
    visible: { y: 0, rotateX: 0, opacity: 1 },
};

const Projects = () => {
    const [hovered, setHovered] = useState(false);
    const projectsText = "Projects";

    // Ref and inView hook
    const headingRef = useRef(null);
    const inView = useInView(headingRef, { once: true, amount: 0.4 });

    return (
        <div className="pb-20 relative bg-[#FEFCF6]">
            <div className="px-4 sm:px-6 md:px-10">
                <h1 className="text-center text-black inter uppercase">Featured</h1>

                {/* PROJECTS HEADING WITH STAGGERED ANIMATION */}
                <h1
                    ref={headingRef}
                    className="uppercase mor-n font-bold pt-6 flex justify-center mor-n text-[#25211D] text-center text-[120px] sm:text-[150px] md:text-[200px] leading-none"
                >
                    {projectsText.split("").map((char, index) => (
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
            </div>

            <div className='flex flex-col md:flex-row md:items-center md:justify-between md:sticky md:top-0 md:h-screen bg-[#FEFCF6] mt-6'>
                <div className='w-full md:w-1/2 h-full'>
                    <img
                        loading="lazy"
                        className="w-full h-full object-cover object-bottom"
                        src={port1}
                        alt="Project 1"
                    />
                </div>
                <div className='w-full md:w-1/2 flex flex-col h-full justify-center items-center text-center mt-4 md:mt-0'>
                    <h1 className='mor-n uppercase leading-none text-7xl md:text-[100px] lg:text-[220px] text-[#25211D]'>Sanctuary</h1>
                    <p className='uppercase text-sm sm:text-base text-[#25211D]'>Bespoke Calm</p>
                    <div className="flex justify-center mt-4 mb-0 sm:mb-4">
                        {/* Outer fixed border */}
                        <div
                            className="rounded-full border border-slate-500"
                            style={{
                                width: "230px",
                                height: "60px",
                                padding: "2px", // space for scaling content
                            }}
                        >
                            {/* Inner scaling content */}
                            <motion.div
                                className="bg-[#25211D] w-full h-full rounded-full flex items-center justify-center uppercase text-white text-sm sm:text-md overflow-hidden cursor-pointer"
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
                                            BOOK 1:1 CALL NOW
                                        </motion.span>
                                    ) : (
                                        <motion.span
                                            key="learn"
                                            initial={{ rotate: 12, y: -40, opacity: 0 }}
                                            animate={{ rotate: 0, y: 0, opacity: 1 }}
                                            exit={{ rotate: -12, y: -10, opacity: 0 }}
                                            transition={{ duration: 0.2, ease: "easeInOut" }}
                                        >
                                            BOOK 1:1 CALL NOW
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row-reverse md:items-center text-center md:justify-between md:sticky md:top-0 md:h-screen bg-[#FEFCF6] mt-6'>
                <div className='w-full md:w-1/2 h-full'>
                    <img loading='lazy' className='w-full h-full object-cover object-center' src={port2} alt="Project 2" />
                </div>
                <div className='w-full md:w-1/2 flex flex-col mt-14 md:mt-0'>
                    <h1 className='mor-n uppercase leading-none text-7xl md:text-[100px] lg:text-[220px] text-[#25211D]'>Masterpiece</h1>
                    <p className='uppercase text-sm sm:text-base text-[#25211D]'>Artisanal Living</p>
                    <div className="flex justify-center mt-4 mb-0 sm:mb-4">
                        {/* Outer fixed border */}
                        <div
                            className="rounded-full border border-slate-500"
                            style={{
                                width: "230px",
                                height: "60px",
                                padding: "2px", // space for scaling content
                            }}
                        >
                            {/* Inner scaling content */}
                            <motion.div
                                className="bg-[#25211D] w-full h-full rounded-full flex items-center justify-center uppercase text-white text-sm sm:text-md overflow-hidden cursor-pointer"
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
                                            BOOK 1:1 CALL NOW
                                        </motion.span>
                                    ) : (
                                        <motion.span
                                            key="learn"
                                            initial={{ rotate: 12, y: -40, opacity: 0 }}
                                            animate={{ rotate: 0, y: 0, opacity: 1 }}
                                            exit={{ rotate: -12, y: -10, opacity: 0 }}
                                            transition={{ duration: 0.2, ease: "easeInOut" }}
                                        >
                                            BOOK 1:1 CALL NOW
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row md:items-center text-center md:justify-between md:sticky md:top-0 md:h-screen bg-[#FEFCF6] mt-6'>
                <div className='w-full md:w-1/2 h-full'>
                    <img loading='lazy' className='w-full h-full object-cover object-center' src={port3} alt="Project 3" />
                </div>
                <div className='w-full md:w-1/2 flex flex-col mt-4 md:mt-0'>
                    <h1 className='mor-n uppercase leading-none text-[130px] md:text-[220px] text-[#25211D]'>Flow</h1>
                    <p className='uppercase text-[#25211D]'>Seamless Integration</p>
                    <div className="flex justify-center mt-4 mb-0 sm:mb-4">
                        <div
                            className="rounded-full border border-slate-500"
                            style={{
                                width: "230px",
                                height: "60px",
                                padding: "2px",
                            }}
                        >
                            <motion.div
                                className="bg-[#25211D] w-full h-full rounded-full flex items-center justify-center uppercase text-white text-sm sm:text-md overflow-hidden cursor-pointer"
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
                                            BOOK 1:1 CALL NOW
                                        </motion.span>
                                    ) : (
                                        <motion.span
                                            key="learn"
                                            initial={{ rotate: 12, y: -40, opacity: 0 }}
                                            animate={{ rotate: 0, y: 0, opacity: 1 }}
                                            exit={{ rotate: -12, y: -10, opacity: 0 }}
                                            transition={{ duration: 0.2, ease: "easeInOut" }}
                                        >
                                            BOOK 1:1 CALL NOW
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='flex flex-col md:flex-row-reverse md:items-center text-center md:justify-between md:sticky md:top-0 md:h-screen bg-[#FEFCF6] mt-6'>
                <div className='w-full md:w-1/2 h-full'>
                    <img loading='lazy' className='w-full h-full object-cover object-center' src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=2000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SW50ZXJpb3J8ZW58MHx8MHx8fDA%3D" alt="Project 3" />
                </div>
                <div className='w-full md:w-1/2 flex flex-col mt-4 md:mt-0'>
                    <p className='text-[#25211D]'>2023</p>
                    <h1 className='mor-n uppercase leading-none text-[130px] md:text-[220px] text-[#25211D]'>Interior</h1>
                    <p className='uppercase text-[#25211D]'>Designing</p>
                    <div className="flex justify-center mt-4 mb-0 sm:mb-4">
                        <div
                            className="rounded-full border border-slate-500"
                            style={{
                                width: "230px",
                                height: "60px",
                                padding: "2px",
                            }}
                        >
                            <motion.div
                                className="bg-[#25211D] w-full h-full rounded-full flex items-center justify-center uppercase text-white text-md overflow-hidden cursor-pointer"
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
                                            BOOK 1:1 CALL NOW
                                        </motion.span>
                                    ) : (
                                        <motion.span
                                            key="learn"
                                            initial={{ rotate: 12, y: -40, opacity: 0 }}
                                            animate={{ rotate: 0, y: 0, opacity: 1 }}
                                            exit={{ rotate: -12, y: -10, opacity: 0 }}
                                            transition={{ duration: 0.2, ease: "easeInOut" }}
                                        >
                                            BOOK 1:1 CALL NOW
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className='flex flex-col md:flex-row md:items-center text-center md:justify-between md:sticky md:top-0 md:h-screen bg-[#FEFCF6] mt-6'>
                <div className='w-full md:w-1/2 h-full'>
                    <img loading='lazy' className='w-full h-full object-cover object-bottom' src="https://plus.unsplash.com/premium_photo-1694558413194-0cb84cf8be4b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEpvaW5lcnl8ZW58MHx8MHx8fDA%3D" alt="Project 3" />
                </div>
                <div className='w-full md:w-1/2 flex flex-col mt-4 md:mt-0'>
                    <p className='text-[#25211D]'>2023</p>
                    <h1 className='mor-n uppercase leading-none text-[130px] md:text-[220px] text-[#25211D]'>Joinery</h1>
                    <p className='uppercase text-[#25211D]'>Joining</p>
                    <div className="flex justify-center mt-4 mb-0 sm:mb-4">
                        <div
                            className="rounded-full border border-slate-500"
                            style={{
                                width: "230px",
                                height: "60px",
                                padding: "2px",
                            }}
                        >
                            <motion.div
                                className="bg-[#25211D] w-full h-full rounded-full flex items-center justify-center uppercase text-white text-md overflow-hidden cursor-pointer"
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
                                            BOOK 1:1 CALL NOW
                                        </motion.span>
                                    ) : (
                                        <motion.span
                                            key="learn"
                                            initial={{ rotate: 12, y: -40, opacity: 0 }}
                                            animate={{ rotate: 0, y: 0, opacity: 1 }}
                                            exit={{ rotate: -12, y: -10, opacity: 0 }}
                                            transition={{ duration: 0.2, ease: "easeInOut" }}
                                        >
                                            BOOK 1:1 CALL NOW
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className='flex flex-col md:flex-row-reverse items-center text-center justify-between relative top-[100px] sm:top-[81px] h-screen bg-[#FEFCF6] pb-10'>
                <div className='w-full md:w-1/2 h-full'>
                    <img loading='lazy' className='w-full h-full object-cover object-center pb-10' src={port4} alt="Project 4" />
                </div>
                <div className='w-full md:w-1/2 flex flex-col'>
                    <h1 className='mor-n uppercase leading-none text-7xl md:text-[100px] lg:text-[220px] text-[#25211D]'>Heritage</h1>
                    <p className='uppercase text-sm sm:text-base text-[#25211D]'>Timeless Craft</p>
                    <div className="flex justify-center mt-4 mb-4">
                        <div
                            className="rounded-full border border-slate-500"
                            style={{
                                width: "230px",
                                height: "60px",
                                padding: "2px",
                            }}
                        >
                            <motion.div
                                className="bg-[#25211D] w-full h-full rounded-full flex items-center justify-center uppercase text-white text-sm sm:text-md overflow-hidden cursor-pointer"
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
                                            BOOK 1:1 CALL NOW
                                        </motion.span>
                                    ) : (
                                        <motion.span
                                            key="learn"
                                            initial={{ rotate: 12, y: -40, opacity: 0 }}
                                            animate={{ rotate: 0, y: 0, opacity: 1 }}
                                            exit={{ rotate: -12, y: -10, opacity: 0 }}
                                            transition={{ duration: 0.2, ease: "easeInOut" }}
                                        >
                                            BOOK 1:1 CALL NOW
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;