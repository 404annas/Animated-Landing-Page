import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
// import sadPersonNew from "../../assets/sadPersonNeww.png";
import { FaRegCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
// import image from "../assets/nesha-query.png";
import { motion } from "framer-motion";
import logo from "../assets/logo.png"
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";

const Card = ({ text, className }) => {
    return (
        <div
            className={`${className} bg-white relative  shadow-lg  rounded-lg  w-[300px] md:w-[400px] text-lg md:text-xl border-gray-800 border-2 `}
        >
            <h2 className=" font-bold bg-gradient-to-r from-[#532514] to-black text-white p-4 border-b-2 border-gray-800 rounded-t-lg flex gap-2 text-base">
                <FaRegCircle />
                <FaRegCircle />
                <FaRegCircle />
            </h2>
            <p className="px-8 py-6 anonymous font-semibold text-base text-[#25211D]">{text}</p>
        </div>
    );
};

const QuerySection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
    }, []);

    return (
        <section className="py-10 px-2 bg-white inter">
            <div className="text-center mb-8">
                {/* <h1 id="tour-query" className="text-2xl sm:text-4xl md:text-6xl font-extrabold mor-n text-[#25211D]">
                    Get In Touch With DR Designz
                </h1> */}
                <h1 id="tour-query-head" className="text-6xl md:text-7xl font-bold mor mb-8">
                    <span className="bg-gradient-to-r from-[#25211D] to-[#3B180C] bg-clip-text text-transparent">
                        Starting a project
                    </span>
                    <br />
                    <span className="text-[#3B180C]">raises questions, right?</span>
                </h1>
            </div>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center px-4 md:px-20">
                {/* Left Cards */}
                <div className="flex flex-col gap-20 lg:-mr-20 relative z-10 max-lg:order-3 max-lg:py-16">
                    <div data-aos="zoom-out">
                        <Card
                            className={"-rotate-3"}
                            text={
                                "What's a realistic budget and timeline for my London development or renovation?"
                            }
                        />
                    </div>
                    <div data-aos="zoom-out">
                        <Card
                            className={"rotate-6"}
                            text={
                                "How do we navigate London's complex planning permissions and building regulations?"
                            }
                        />
                    </div>
                </div>

                {/* Center Image */}
                <div className=" max-lg:order-1 ">
                    <img
                        src={avatar4}
                        loading="lazy"
                        alt="Center"
                        className="md:translate-x-12 w-[500px] bg-transparent"
                    />
                </div>

                {/* Right Cards */}
                <div className="flex flex-col gap-20  relative z-10  max-lg:pb-16">
                    <div data-aos="zoom-out">
                        <Card
                            className={"rotate-3"}
                            text={
                                "How can a professional design actually increase my property's end value (ROI)?"
                            }
                        />
                    </div>
                    <div data-aos="zoom-out">
                        <Card
                            className={"-rotate-6"}
                            text={"What are the first steps to actually get my project started?"}
                        />
                    </div>
                </div>
            </div>
            <p
                id="tour-query-para"
                className="text-center w-full px-7 lg:w-2/3 mx-auto my-9 text-xl font-semibold inter text-[#25211D]"
                data-aos="fade-up"
            >
                These are the questions we answer every day. Let's replace uncertainty with a clear, actionable plan for your project.
            </p>
            <Link
                to={"/contact"}
                className="bg-[#25211D] w-fit text-white px-8 py-2 rounded-xl  shadow-primary transition-all duration-300 transform hover:-translate-y-1 hover:scale-103 flex items-center text-sm justify-center mx-auto inter"
            >
                <span className="mr-3">📅</span>
                Don't Wait - Secure Your Project Slot
            </Link>

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
        </section>
    );
};

export default QuerySection;