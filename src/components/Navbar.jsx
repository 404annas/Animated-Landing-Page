import React, { useState } from "react";
import "./Navbar.css"; // we’ll keep animations here

const Navbar = () => {
  const [hoverState, setHoverState] = useState("");

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
    <nav className="bg-[#25211D] border-b border-[#4D4944] text-white px-10 py-6 flex items-center justify-between">
      <div className="flex gap-6 items-center uppercase inter text-[15px] font-medium">
        {renderMenu(menuItemsLeft)}
      </div>

      <img
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
  );
};

export default Navbar;
