import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

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

                <div className="flex items-center justify-between pt-10">
                    <p className="inter text-[#25211D] text-sm">2020/25</p>
                    <p className="inter text-[#25211D] text-sm">(04)</p>
                </div>
            </div>


            <div className='flex flex-col md:flex-row md:items-center md:justify-between md:sticky md:top-0 md:h-screen bg-[#FEFCF6] mt-6'>
                <div className='w-full md:w-1/2 h-full'>
                    <img className='' src="https://cdn.prod.website-files.com/684f6af04ca7b75961204bd9/6853f763c47b2af585134ee3_Minimalist%20Interior%20Design.jpg" alt="Project 1" />
                </div>
                <div className='w-full md:w-1/2 flex flex-col h-full justify-end items-center text-center mt-4 md:mt-0'>
                    <p className='text-[#25211D]'>2025</p>
                    <h1 className='mor-n uppercase leading-none text-[130px] md:text-[150px] lg:text-[192px] text-[#25211D]'>Ridge</h1>
                    <p className='uppercase text-[#25211D]'>Architectural Design</p>
                    <div className="flex justify-center mt-4 mb-0 sm:mb-4">
                        {/* Outer fixed border */}
                        <div
                            className="rounded-full border border-slate-500"
                            style={{
                                width: "190px",
                                height: "60px",
                                padding: "2px", // space for scaling content
                            }}
                        >
                            {/* Inner scaling content */}
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
                                            VIEW PROJECT
                                        </motion.span>
                                    ) : (
                                        <motion.span
                                            key="learn"
                                            initial={{ rotate: 12, y: -40, opacity: 0 }}
                                            animate={{ rotate: 0, y: 0, opacity: 1 }}
                                            exit={{ rotate: -12, y: -10, opacity: 0 }}
                                            transition={{ duration: 0.2, ease: "easeInOut" }}
                                        >
                                            VIEW PROJECT
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row-reverse md:items-end text-center md:justify-between md:sticky md:top-0 md:h-screen bg-[#FEFCF6] mt-6'>
                <div className='w-full md:w-1/2 h-full'>
                    <img className='' src="https://cdn.prod.website-files.com/684f6af04ca7b75961204bd9/6853f742a5b34983fecb4671_Scandinavian%20Living%20Room.jpg" alt="Project 2" />
                </div>
                <div className='w-full md:w-1/2 flex flex-col mt-4 md:mt-0'>
                    <p className='text-[#25211D]'>2024</p>
                    <h1 className='mor-n uppercase leading-none text-[130px] md:text-[150px] lg:text-[192px] text-[#25211D]'>North</h1>
                    <p className='uppercase text-[#25211D]'>Interior Architecture</p>
                    <div className="flex justify-center mt-4 mb-0 sm:mb-4">
                        {/* Outer fixed border */}
                        <div
                            className="rounded-full border border-slate-500"
                            style={{
                                width: "190px",
                                height: "60px",
                                padding: "2px", // space for scaling content
                            }}
                        >
                            {/* Inner scaling content */}
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
                                            VIEW PROJECT
                                        </motion.span>
                                    ) : (
                                        <motion.span
                                            key="learn"
                                            initial={{ rotate: 12, y: -40, opacity: 0 }}
                                            animate={{ rotate: 0, y: 0, opacity: 1 }}
                                            exit={{ rotate: -12, y: -10, opacity: 0 }}
                                            transition={{ duration: 0.2, ease: "easeInOut" }}
                                        >
                                            VIEW PROJECT
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row md:items-end text-center md:justify-between md:sticky md:top-0 md:h-screen bg-[#FEFCF6] mt-6'>
                <div className='w-full md:w-1/2 h-full'>
                    <img className='' src="https://cdn.prod.website-files.com/684f6af04ca7b75961204bd9/6853f72c8a5fdbd86d9b8322_Serene%20Minimalist%20Interior.jpg" alt="Project 3" />
                </div>
                <div className='w-full md:w-1/2 flex flex-col mt-4 md:mt-0'>
                    <p className='text-[#25211D]'>2023</p>
                    <h1 className='mor-n uppercase leading-none text-[130px] md:text-[150px] lg:text-[192px] text-[#25211D]'>Aspect</h1>
                    <p className='uppercase text-[#25211D]'>Master Planning</p>
                    <div className="flex justify-center mt-4 mb-0 sm:mb-4">
                        {/* Outer fixed border */}
                        <div
                            className="rounded-full border border-slate-500"
                            style={{
                                width: "190px",
                                height: "60px",
                                padding: "2px", // space for scaling content
                            }}
                        >
                            {/* Inner scaling content */}
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
                                            VIEW PROJECT
                                        </motion.span>
                                    ) : (
                                        <motion.span
                                            key="learn"
                                            initial={{ rotate: 12, y: -40, opacity: 0 }}
                                            animate={{ rotate: 0, y: 0, opacity: 1 }}
                                            exit={{ rotate: -12, y: -10, opacity: 0 }}
                                            transition={{ duration: 0.2, ease: "easeInOut" }}
                                        >
                                            VIEW PROJECT
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row-reverse items-center text-center justify-between relative top-[90px] sm:top-[81px] h-screen bg-[#FEFCF6]'>
                <div className='w-full md:w-1/2 h-full'>
                    <img className='' src="https://cdn.prod.website-files.com/684f6af04ca7b75961204bd9/6853f708b423f659977ac630_Stylish%20and%20Serene%20Living%20Room.jpg" alt="Project 4" />
                </div>
                <div className='w-full md:w-1/2 flex flex-col'>
                    <p className='text-[#25211D]'>2022</p>
                    <h1 className='mor-n uppercase leading-none text-[130px] md:text-[150px] lg:text-[192px] text-[#25211D]'>Frame</h1>
                    <p className='uppercase text-[#25211D]'>Project Management</p>
                    <div className="flex justify-center mt-4 mb-4">
                        {/* Outer fixed border */}
                        <div
                            className="rounded-full border border-slate-500"
                            style={{
                                width: "190px",
                                height: "60px",
                                padding: "2px", // space for scaling content
                            }}
                        >
                            {/* Inner scaling content */}
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
                                            VIEW PROJECT
                                        </motion.span>
                                    ) : (
                                        <motion.span
                                            key="learn"
                                            initial={{ rotate: 12, y: -40, opacity: 0 }}
                                            animate={{ rotate: 0, y: 0, opacity: 1 }}
                                            exit={{ rotate: -12, y: -10, opacity: 0 }}
                                            transition={{ duration: 0.2, ease: "easeInOut" }}
                                        >
                                            VIEW PROJECT
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