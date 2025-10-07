import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Banner from "./Banner";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    const linkClass =
        "px-3 py-2 rounded-lg hover:bg-white/20 transition cursor-pointer text-sm";

    return (
        <>
            <Banner />
            <nav className="flex items-center justify-between bg-[#25211D] px-10 py-4 text-white">
                {/* Left Side */}
                <div className="flex items-center gap-8">
                    <h1 className="text-xl font-semibold tracking-wide">LOGO</h1>

                    <div className="relative">
                        <button
                            onClick={() => setOpen(!open)}
                            className="flex items-center gap-2 bg-white/10 hover:bg-white/15 transition-colors duration-300 rounded-2xl px-4 py-2 cursor-pointer text-sm"
                        >
                            <span>Navigate</span>
                            <ChevronDown
                                size={16}
                                className={`transition-transform duration-300 ${open ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {open && (
                            <div className="absolute mt-2 w-52 bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-2 flex flex-col gap-1 z-50 text-sm">
                                {menuItems.map((item) => (
                                    <Link key={item.name} to={item.path} className={linkClass}>
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-6">
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
            </nav>
        </>
    );
};

export default Navbar;
