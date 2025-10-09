import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/logo.png"

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [sidebarDropdownOpen, setSidebarDropdownOpen] = useState(false);

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    const linkClass =
        "px-3 py-2 rounded-lg hover:bg-white/20 transition cursor-pointer text-sm";

    // Disable body scroll when sidebar is open
    useEffect(() => {
        document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
    }, [sidebarOpen]);

    return (
        <>
            {/* Navbar */}
            <nav className="flex items-center justify-between bg-[#25211D] px-6 lg:px-10 py-2 text-white relative z-50">
                {/* Left Side */}
                <div className="flex items-center gap-8">
                    {/* <h1 className="text-xl font-semibold tracking-wide">LOGO</h1> */}
                    <img className="w-20" src={logo} loading="lazy" alt="Logo" />

                    {/* Desktop Dropdown */}
                    <div className="hidden lg:block relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center gap-2 outline-none bg-white/10 hover:bg-white/15 transition-colors duration-300 rounded-2xl px-4 py-2 cursor-pointer text-sm"
                        >
                            <span>Navigate</span>
                            <ChevronDown
                                size={16}
                                className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        <div
                            className={`absolute mt-2 w-52 bg-[#25211D] backdrop-blur-md rounded-xl p-2 flex flex-col gap-1 z-50 text-sm transition-all duration-300 ease-in-out ${dropdownOpen
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 -translate-y-2 pointer-events-none"
                                }`}
                        >
                            {menuItems.map((item) => (
                                <Link key={item.name} to={item.path} className={linkClass}>
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side (Desktop Only) */}
                <div className="hidden lg:flex items-center gap-6">
                    <a
                        href="mailto:hello@designz.dwell-rich.com"
                        className="hover:text-white/80 transition-all duration-300 text-sm"
                    >
                        hello@designz.dwell-rich.com
                    </a>
                    <a
                        href="tel:07803 326 891"
                        className="hover:text-white/80 transition-all duration-300 text-sm"
                    >
                        07803 326 891
                    </a>
                    <Link to="/contact">
                        <button className="bg-white/10 hover:bg-white/15 transition-colors duration-300 rounded-2xl px-4 py-2 cursor-pointer text-sm">
                            Contact Us
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center gap-4">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="text-white focus:outline-none cursor-pointer"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </nav>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-[70%] bg-[#25211D] z-50 transform transition-transform duration-500 ease-in-out ${sidebarOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center p-4">
                    <h1 className="text-xl font-semibold tracking-wide text-white">
                        LOGO
                    </h1>
                    <button onClick={() => setSidebarOpen(false)} className="text-white cursor-pointer">
                        <X size={24} />
                    </button>
                </div>

                <div className="flex flex-col gap-3 mt-4 px-6">
                    {/* Sidebar Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setSidebarDropdownOpen(!sidebarDropdownOpen)}
                            className="flex items-center outline-none justify-between w-full bg-white/10 hover:bg-white/15 transition-colors duration-300 rounded-2xl px-4 py-2 cursor-pointer text-sm text-white"
                        >
                            <span>Navigate</span>
                            <ChevronDown
                                size={16}
                                className={`transition-transform duration-300 ${sidebarDropdownOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        <div
                            className={`mt-2 bg-white/10 backdrop-blur-md rounded-xl p-2 flex flex-col gap-1 text-sm transition-all duration-300 ease-in-out text-white ${sidebarDropdownOpen
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 -translate-y-2 pointer-events-none"
                                }`}
                        >
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={linkClass}
                                    onClick={() => setSidebarOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <a
                        href="mailto:hello@designz.dwell-rich.com"
                        className="text-white text-sm hover:text-white/80 transition-all duration-300 mt-2"
                    >
                        hello@designz.dwell-rich.com
                    </a>
                    <a
                        href="tel:07803 326 891"
                        className="text-white text-sm hover:text-white/80 transition-all duration-300"
                    >

                        07803 326 891
                    </a>
                    <Link to="/contact">
                        <button className="bg-white/10 hover:bg-white/15 transition-colors duration-300 rounded-2xl px-4 py-2 mt-4 text-sm w-full cursor-pointer text-white">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>

            {/* Overlay when sidebar is open */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}
        </>
    );
};

export default Navbar;
