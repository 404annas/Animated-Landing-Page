import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [hoverState, setHoverState] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // reset on unmount
    };
  }, [sidebarOpen]);

  const menuItemsLeft = ["Home", "About", "Projects"];
  const menuItemsRight = ["Services", "Blog", "Contact"];

  const renderMenu = (items) =>
    items.map((item) => (
      <div key={item} className="nav-item">
        <span className="px-5 py-[6px]">{item}</span>
        <span className="px-5 py-[6px]">{item}</span>
      </div>
    ));

  return (
    <>
      {/* Desktop Navbar (unchanged) */}
      <nav className="hidden lg:flex bg-[#25211D] border-b border-[#4D4944] text-white px-10 py-6 items-center justify-between">
        <div className="flex gap-6 items-center uppercase inter text-[15px] font-medium">
          {renderMenu(menuItemsLeft)}
        </div>

        <img
          loading="lazy"
          className={`logo cursor-pointer ${hoverState}`}
          src="https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/684f806d593d5a0b9c7e201c_R3.svg"
          alt="Logo"
          onMouseEnter={() => setHoverState("hover-in")}
          onMouseLeave={() => setHoverState("hover-out")}
        />

        <div className="flex gap-6 items-center uppercase inter text-[15px] font-medium">
          {renderMenu(menuItemsRight)}
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="lg:hidden bg-[#25211D] border-b border-[#4D4944] text-white px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <img
          className={`logo cursor-pointer w-24 ${hoverState}`}
          src="https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/684f806d593d5a0b9c7e201c_R3.svg"
          alt="Logo"
          onMouseEnter={() => setHoverState("hover-in")}
          onMouseLeave={() => setHoverState("hover-out")}
        />

        {/* Menu Icon */}
        <Menu
          size={28}
          className="cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        />
      </nav>

      {/* Sidebar with smoother circular expand */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Expanding Circle */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 20 }}
              exit={{ scale: 0 }}
              transition={{ duration: 2, ease: [0.25, 1, 0.5, 1] }}
              className="fixed top-1/2 left-1/2 w-20 h-20 bg-[#25211D] rounded-full z-40 -translate-x-1/2 -translate-y-1/2"
            />

            {/* Sidebar Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="fixed inset-0 flex flex-col bg-transparent text-white z-50"
            >
              {/* Top Section */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-[#4D4944]">
                <img
                  loading="lazy"
                  className="w-7"
                  src="https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/684f806d593d5a0b9c7e201c_R3.svg"
                  alt="Logo"
                />
                <X
                  size={20}
                  className="cursor-pointer"
                  onClick={() => setSidebarOpen(false)}
                />
              </div>

              {/* Menu Items */}
              <div className="flex flex-col items-center gap-6 mt-10 text-base md:text-lg uppercase font-medium inter">
                {[...menuItemsLeft, ...menuItemsRight].map((item) => (
                  <span
                    key={item}
                    className="cursor-pointer hover:text-gray-400 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
