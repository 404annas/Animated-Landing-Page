import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const Partners = () => {
  return (
    <div className="bg-[#FEFCF6] pt-20">
      <h1 className="text-center text-black inter uppercase pb-10">
        Clients & Partners:
      </h1>

      <div className="flex items-center justify-center mt-6">
        {/* Left logos (move left) */}
        <div className="w-1/2 overflow-hidden">
          <Marquee
            gradient={false}
            speed={40}
            direction="left"
            pauseOnHover={true}
          >
            <img
              className="w-28 sm:w-32 mx-10"
              src="https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/685161a5822b1ce22b5d1ce5_Umbrella.svg"
              alt=""
            />
            <img
              className="w-28 sm:w-32 mx-10"
              src="https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/6851618899fe0f81f09d8dc6_Amsterdam.svg"
              alt=""
            />
            <img
              className="w-28 sm:w-32 mx-10"
              src="https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/68516188ef1e08a08cb7adc8_Delaware.svg"
              alt=""
            />
            <img
              className="w-28 sm:w-32 mx-10"
              src="https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/685161920fd24a7acdfd6334_Monaco.svg"
              alt=""
            />
          </Marquee>
        </div>

        {/* Divider */}
        <div className="border-l border-gray-200 h-20"></div>

        {/* Right logos (move right) */}
        <div className="w-1/2 overflow-hidden">
          <Marquee
            gradient={false}
            speed={40}
            direction="right"
            pauseOnHover={true}
          >
            <img
              className="w-28 sm:w-32 mx-10"
              src="https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/685161920fd24a7acdfd6334_Monaco.svg"
              alt=""
            />
            <img
              className="w-28 sm:w-32 mx-10"
              src="https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/68516188ef1e08a08cb7adc8_Delaware.svg"
              alt=""
            />
            <img
              className="w-28 sm:w-32 mx-10"
              src="https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/6851618899fe0f81f09d8dc6_Amsterdam.svg"
              alt=""
            />
            <img
              className="w-28 sm:w-32 mx-10"
              src="https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/685161a5822b1ce22b5d1ce5_Umbrella.svg"
              alt=""
            />
          </Marquee>
        </div>
      </div>

      {/* Short centered border at bottom */}
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
    </div>
  );
};

export default Partners;
