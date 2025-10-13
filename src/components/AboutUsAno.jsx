import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Twitter, Instagram, Linkedin, Facebook } from "lucide-react";
import "./About.css";

// Scroll counter with animation when in view
const ScrollCounter = ({ number, height = 120, duration = 2000, inView }) => {
    const digits = String(number).split("");
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (inView) setAnimate(true);
    }, [inView]);

    return (
        <div className="flex">
            {digits.map((digit, idx) => (
                <div
                    key={idx}
                    className="overflow-hidden relative"
                    style={{ height: `${height}px`, width: "30px" }}
                >
                    <div
                        style={{
                            transform: animate
                                ? `translateY(-${digit * height}px)`
                                : `translateY(0)`,
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
                                    lineHeight: 1,
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

// Animation variants for staggered characters
const charVariants = {
    hidden: { y: 50, rotateX: 90, opacity: 0 },
    visible: { y: 0, rotateX: 0, opacity: 1 },
};

const AboutUsAno = () => {
    const [hovered, setHovered] = useState(false);

    const modernText = "South-London";
    const architectureText = "Surey";

    // Ref for section
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef, { once: true, amount: 0.4 });

    return (
        <div id="services" ref={sectionRef} className="bg-[#FEFCF6] py-20 px-4 sm:px-6 md:px-10">
            <h1 className="text-center text-black uppercase inter">Design & Build</h1>

            {/* <h1 className='uppercase mor-n text-[#25211D] text-center text-[120px] sm:text-[150px] md:text-[200px] pt-10 leading-none'>Modern</h1> */}
            <h1 className='uppercase mor-n text-[#25211D] text-center text-[120px] sm:text-[150px] md:text-[200px] pt-10 leading-none'>
                {modernText.split("").map((char, index) => (
                    <motion.span
                        key={index}
                        variants={charVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
                    >
                        {char}
                    </motion.span>
                ))}
            </h1>
            {/* <h1 className='uppercase mor-n text-[#25211D] text-center text-[120px] sm:text-[150px] md:text-[200px] -mt-4 leading-none'>Architecture</h1> */}
            <h1 className='uppercase mor-n text-[#25211D] text-center text-[120px] sm:text-[150px] md:text-[200px] -mt-4 leading-none'>
                {architectureText.split("").map((char, index) => (
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

            <div className='flex items-center justify-between pt-10'>
                <div className="flex items-start flex-col leading-none">
                    <div className="flex items-center mor-n text-[#25211D] text-[100px] sm:text-[130px] md:text-[170px] leading-none">
                        <ScrollCounter number={15} duration={2500} inView={inView} />
                        <p className="text-[#6F6B61] text-8xl">+</p>
                        {/* <p className='text-[#25211D] text-[100px] sm:text-[130px] md:text-[170px] leading-none'>15</p> */}
                    </div>
                    <p className="inter font-normal text-[#25211D]">Years Of Experience</p>
                </div>

                <div className="flex items-end flex-col leading-none">
                    <div className="flex items-center mor-n text-[#25211D] text-[100px] sm:text-[130px] md:text-[170px] leading-none">
                        <ScrollCounter number={98} duration={2500} inView={inView} />
                        {/* <p className='text-[#25211D] text-[100px] sm:text-[130px] md:text-[170px] leading-none'>98</p> */}
                        <p className="text-[#6F6B61] text-8xl">+</p>
                    </div>
                    <p className="inter font-normal text-right text-[#25211D]">Successful Projects</p>
                </div>
            </div>

            <div className="flex sm:flex-row flex-col gap-4 sm:items-center justify-between pt-10">
                {/* <p className="max-w-md flex flex-col items-start inter text-[#34302B]">
                    <p>• Communication Strategy</p>
                    <p>• Stakeholder</p>
                    <p>• Public Relations Media Relations</p>
                </p> */}
                <p className="text-sm text-center">From luxury home renovations to specialist commercial builds, we bring visison, detail and craftmanship together to create spaces that last.</p>
                {/* <p className="max-w-md flex flex-col text-start justify-end inter text-[#34302B]">
                    <p>• Social Media Management</p>
                    <p>• Digital Marketing</p>
                    <p>• Engagement Advocacy</p>
                </p> */}
                <p className="text-sm text-center">Every project is an opportunity to connect design with meaning. Through timeless forms and details, we create environments that inspire and serve those who live, work and gather there.</p>
            </div>

            {/* <div className="flex justify-center mt-10 mb-4">
                <div
                    className="rounded-full border border-slate-500"
                    style={{
                        width: "170px",
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
                                    ABOUT US
                                </motion.span>
                            ) : (
                                <motion.span
                                    key="learn"
                                    initial={{ rotate: 12, y: -40, opacity: 0 }}
                                    animate={{ rotate: 0, y: 0, opacity: 1 }}
                                    exit={{ rotate: -12, y: -10, opacity: 0 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                >
                                    ABOUT US
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div> */}

            {/* SOCIAL ICONS */}
            {/* <div className="flex items-center justify-center gap-4 sm:gap-6 mt-10 pb-20"> <div className="about-item bg-[#25211D] text-white p-3 rounded-full cursor-pointer"> <span> <Instagram size={20} /> </span> <span> <Instagram size={20} /> </span> </div> <div className="about-item bg-[#25211D] text-white p-3 rounded-full cursor-pointer"> <span> <Twitter size={20} /> </span> <span> <Twitter size={20} /> </span> </div> <div className="about-item bg-[#25211D] text-white p-3 rounded-full cursor-pointer"> <span> <Linkedin size={20} /> </span> <span> <Linkedin size={20} /> </span> </div> <div className="about-item bg-[#25211D] text-white p-3 rounded-full cursor-pointer"> <span> <Facebook size={20} /> </span> <span> <Facebook size={20} /> </span> </div> </div> */}

            <div className="flex justify-center pt-20">
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
    )
}

export default AboutUsAno