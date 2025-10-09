import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
// import sadPersonNew from "../../assets/sadPersonNeww.png";
import { FaRegCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
// import image from "../assets/nesha-query.png";
import { motion } from "framer-motion";
import logo from "../assets/logo.png"

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
            <p className="px-8 py-6 anonymous font-semibold">{text}</p>
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
                <h1 id="tour-query" className="text-2xl sand md:text-5xl font-extrabold mor-n">
                    Get In Touch With Designz
                </h1>
                <h1 id="tour-query-head" className="text-6xl md:text-7xl font-bold mb-8">
                    <span className="bg-gradient-to-r from-[#2d5865] to-[#c45259] bg-clip-text text-transparent">
                        All this sounds
                    </span>
                    <br />
                    <span className="text-[#2d5865]">so familiar, right?</span>
                </h1>
            </div>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center px-4 md:px-20">
                {/* Left Cards */}
                <div className="flex flex-col gap-20 lg:-mr-20 relative z-10 max-lg:order-3 max-lg:py-16">
                    <div data-aos="zoom-out">
                        <Card
                            className={"-rotate-3"}
                            text={
                                "How can I get started with personalized consulting for my organization?"
                            }
                        />
                    </div>
                    <div data-aos="zoom-out">
                        <Card
                            className={"rotate-6"}
                            text={
                                "Is there expert guidance available to help with strategic planning or operational challenges?"
                            }
                        />
                    </div>
                </div>

                {/* Center Image */}
                <div className=" max-lg:order-1 ">
                    <img
                        src={logo}
                        loading="lazy"
                        alt="Center"
                        className="md:translate-x-12 w-[400px]"
                    />
                </div>

                {/* Right Cards */}
                <div className="flex flex-col gap-20  relative z-10  max-lg:pb-16">
                    <div data-aos="zoom-out">
                        <Card
                            className={"rotate-3"}
                            text={
                                "Can I get consulting services that align with my values and business goals?"
                            }
                        />
                    </div>
                    <div data-aos="zoom-out">
                        <Card
                            className={"-rotate-6"}
                            text={"How soon can we begin working together on my project?"}
                        />
                    </div>
                </div>
            </div>
            <p
                id="tour-query-para"
                className="text-center w-full px-7 lg:w-2/3 mx-auto my-9 text-xl font-semibold "
                data-aos="fade-up"
            >
                Reach out to our team and let’s make things easier together.
            </p>
            <Link
                to={"/enroll"}
                className="bg-[#D88569] w-fit text-white font-semibold px-8 py-2 rounded-xl  shadow-primary transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center text-sm justify-center mx-auto "
            >
                <span className="mr-3">📅</span>
                Book One to One Discovery Call Now
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
