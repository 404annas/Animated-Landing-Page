import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import Banner from "./Banner";

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
            <Banner />

            <nav className="flex items-center justify-between bg-[#25211D] px-6 lg:px-10 py-4 text-white relative z-50">
                {/* Left Side */}
                <div className="flex items-center gap-8">
                    {/* Logo visible on all screens */}
                    <h1 className="text-xl font-semibold tracking-wide">LOGO</h1>

                    {/* Desktop Dropdown */}
                    <div className="hidden lg:block relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center gap-2 bg-white/10 hover:bg-white/15 transition-colors duration-300 rounded-2xl px-4 py-2 cursor-pointer text-sm"
                        >
                            <span>Navigate</span>
                            <ChevronDown
                                size={16}
                                className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {dropdownOpen && (
                            <div className="absolute mt-2 w-52 bg-white/10 backdrop-blur-md rounded-xl p-2 flex flex-col gap-1 z-50 text-sm">
                                {menuItems.map((item) => (
                                    <Link key={item.name} to={item.path} className={linkClass}>
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Side (Desktop Only) */}
                <div className="hidden lg:flex items-center gap-6">
                    <a
                        href="mailto:abc@gmail.com"
                        className="hover:text-white/80 transition-all duration-300 text-sm"
                    >
                        abc@gmail.com
                    </a>
                    <a
                        href="tel:+920000000000"
                        className="hover:text-white/80 transition-all duration-300 text-sm"
                    >
                        +92 000 0000000
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
                        className="text-white focus:outline-none"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </nav>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-[#25211D] z-50 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center p-4">
                    {/* Mobile Logo inside sidebar */}
                    <h1 className="text-xl font-semibold tracking-wide text-white">
                        LOGO
                    </h1>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="text-white"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="flex flex-col gap-2 mt-4 px-6">
                    {/* Sidebar Dropdown */}
                    <button
                        onClick={() => setSidebarDropdownOpen(!sidebarDropdownOpen)}
                        className="flex items-center justify-between w-full text-white text-lg px-2 py-2 rounded-lg hover:bg-white/10 transition"
                    >
                        <span>Navigate</span>
                        <ChevronDown
                            size={16}
                            className={`transition-transform duration-300 ${sidebarDropdownOpen ? "rotate-180" : ""
                                }`}
                        />
                    </button>

                    {sidebarDropdownOpen && (
                        <div className="flex flex-col gap-2 ml-2 mt-1">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className="text-white text-base px-2 py-1 rounded hover:bg-white/10 transition"
                                    onClick={() => setSidebarOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    )}

                    <a
                        href="mailto:abc@gmail.com"
                        className="text-white text-sm hover:text-white/80 mt-4"
                    >
                        abc@gmail.com
                    </a>
                    <a
                        href="tel:+920000000000"
                        className="text-white text-sm hover:text-white/80"
                    >
                        +92 000 0000000
                    </a>
                    <Link to="/contact">
                        <button className="bg-white/10 hover:bg-white/15 transition-colors duration-300 rounded-2xl px-4 py-2 mt-4 text-sm w-full">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>

            {/* Overlay when sidebar is open */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}
        </>
    );
};

export default Navbar;
