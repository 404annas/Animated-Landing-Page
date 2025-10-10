import { FaMobileAlt, FaCode, FaPenNib, FaStar } from 'react-icons/fa';
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiAwardLine } from "react-icons/ri";
import { Palette, Pickaxe, CloudDownload } from 'lucide-react';
import logo from "../assets/logo.png"

// A small component for the service cards to avoid repetition
const ServiceCard = ({ icon, title, reviews, stars, containerClass }) => {
    return (
        <div className={`absolute ${containerClass}`}>
            <div className="bg-white rounded-lg p-2 sm:px-4 py-2 shadow-md border border-gray-100 flex items-center space-x-3 sm:space-x-4 min-w-max">
                <div className="text-2xl sm:text-3xl text-[#25211D] bg-gray-300 p-2 rounded-md">
                    {icon}
                </div>
                <div>
                    <h3 className="font-semibold text-sm sm:text-base text-gray-800">{title}</h3>
                    <div className="flex items-center">
                        {Array.from({ length: stars }).map((_, i) => (
                            <FaStar key={i} className="text-yellow-400 text-xs sm:text-sm" />
                        ))}
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm">{reviews}</p>
                </div>
            </div>
        </div>
    );
};

const HeroNew = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-0">

                    {/* Left Side: Text Content */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-2xl sm:text-5xl text-left font-bold mor text-[#25211D] tracking-wide">Elevate Your</h2>
                        <h1 className="text-3xl sm:text-[45px] leading-none font-extrabold uppercase inter text-[#532514] my-2 text-left">
                            Interior Design & Architecture in London
                        </h1>
                        <p className="text-5xl sm:text-7xl leading-none text-right -translate-x-40 sm:-translate-x-5 -translate-y-8 text-[#25211D] lady">with us</p>

                        <p className="-mt-4 sm:-mt-10 text-left text-base sm:text-lg md:text-xl text-[#25211D] max-w-lg mx-auto lg:mx-0">
                            We create elegant, functional spaces for property developers and homeowners across London.
                        </p>
                        <div className='flex flex-col sm:flex-row sm:items-center gap-2'>
                            <button className="mt-8 bg-gradient-to-r from-[#532514] to-[#25211D] text-white py-3 px-4 sm:px-8 rounded-lg transition-all cursor-pointer duration-300 hover:scale-97 flex items-center gap-2 text-sm w-fit">
                                <p><CloudDownload size={20}/></p>Download Profile
                            </button>
                            <button className="sm:mt-8 bg-gradient-to-r from-[#25211D] to-[#532514] text-white py-3 px-4 sm:px-8 rounded-lg hover:bg-[#161412] transition-all cursor-pointer duration-300 hover:scale-98 text-sm w-fit">
                                📅 Let's Design Your Dream Home
                            </button>
                        </div>
                    </div>

                    {/* Right Side: "D" Graphic and Services */}
                    <div className="flex justify-center items-center h-96 sm:h-[500px]">
                        <div className="relative w-80 h-80 sm:w-[450px] sm:h-[450px]">
                            {/* The "D" shape */}
                            {/* <div className="absolute w-full h-full flex">
                                <div className="h-full w-16 bg-black rounded-l-2xl"></div>
                                <div className="relative h-full flex-grow">
                                    <div className="absolute w-full h-full border-[45px] sm:border-[55px] border-[#25211D] rounded-r-full border-l-0"></div>
                                    <div className="absolute w-full h-full scale-[0.68] border-[40px] sm:border-[50px] border-[#532514] rounded-r-full border-l-0"></div>
                                    <div className="absolute w-1/2 h-full right-0 top-0 bg-[#25211D] rounded-r-full"></div>
                                </div>
                            </div> */}
                            <img loading='lazy' className='w-full object-cover object-center h-auto' src={logo} alt="Designz Logo" />

                            {/* Service Cards positioned around the D */}
                            <ServiceCard
                                icon={<Palette />}
                                title="INTERIOR DESIGNING"
                                reviews="(25 Reviews)"
                                stars={5}
                                containerClass="top-[-10%] left-[25%]"
                            />
                            <ServiceCard
                                icon={<IoDocumentTextOutline />}
                                title="PLANNING"
                                reviews="(100+ Reviews)"
                                stars={5}
                                containerClass="top-[30%] right-[-5%] sm:right-[-15%]"
                            />
                            <ServiceCard
                                icon={<RiAwardLine />}
                                title="BRAND IDENTITY"
                                reviews="(30 Reviews)"
                                stars={5}
                                containerClass="left-[-2%] sm:left-[-15%] top-1/2 -translate-y-1/2"
                            />
                            <ServiceCard
                                icon={<Pickaxe />}
                                title="CONSTRUCTION"
                                reviews="(50 Reviews)"
                                stars={5}
                                containerClass="bottom-[0%] sm:left-[10%]"
                            />
                            <ServiceCard
                                icon={<FaPenNib />}
                                title="DESIGNING"
                                reviews="(100+ Reviews)"
                                stars={5}
                                containerClass="bottom-[5%] right-[-5%] sm:right-[-20%]"
                            />
                            {/* Dotted line SVG */}
                            {/* <svg className="absolute w-24 h-24 -bottom-16 right-0 text-gray-800" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 80 Q 20 20, 50 50 T 90 20" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
                            </svg> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroNew;