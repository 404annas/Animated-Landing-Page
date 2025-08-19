import { motion } from "framer-motion";

const HoverItem = ({ label }) => {
  return (
    <motion.div
      className="relative overflow-hidden cursor-pointer border border-[#4D4944] rounded-full px-6 py-2"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Original text */}
      <motion.p
        className="uppercase inter text-white"
        variants={{
          rest: { y: 0, opacity: 1, color: "#ffffff" },
          hover: { y: "-100%", opacity: 0, color: "#67635E" },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {label}
      </motion.p>

      {/* Duplicate text coming from bottom */}
      <motion.p
        className="uppercase inter absolute left-1/2 -translate-x-1/2 text-[#67635E] border-[#67635E]"
        variants={{
          rest: { y: "100%", opacity: 0 },
          hover: { y: "-100%", opacity: 1 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
};

const FooterItems = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 items-center justify-between py-20 gap-10">
      <div className="flex flex-col items-center gap-4">
        <HoverItem label="Home" />
        <HoverItem label="Home" />
        <HoverItem label="Home" />
      </div>

      <div className="flex flex-col items-center gap-4">
        <HoverItem label="Projects" />
        <HoverItem label="Projects" />
        <HoverItem label="Projects" />
      </div>

      <div className="flex flex-col items-center gap-4">
        <HoverItem label="Contact" />
        <HoverItem label="Contact" />
        <HoverItem label="Contact" />
      </div>

      <div className="flex flex-col items-center gap-4">
        <HoverItem label="Services" />
        <HoverItem label="About" />
        <HoverItem label="Blog" />
      </div>
    </div>
  );
};

export default FooterItems;
