import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

import hamsabImg from "../assets/hamsab.jpg";
import khaleejImg from "../assets/khaleej.svg";
import mmImg from "../assets/mm.jpg";
import nationImg from "../assets/nation.png";
import potato2Img from "../assets/potato2.png";
import reutersImg from "../assets/reuters.webp";
import rferlImg from "../assets/rferl.svg";
import unwomenImg from "../assets/unwomen.avif";
import reuters2Img from "../assets/reuters2.png";

const Partners = () => {
  return (
    <div className="bg-[#FEFCF6] pt-20">
      <h1 className="text-center text-black inter uppercase pb-10">
        Featured At:
      </h1>

      <div className="flex items-center justify-center mt-6">
        {/* Left logos (move left) */}
        <div className="w-1/2 overflow-hidden">
          <Marquee
            gradient={false}
            speed={50}
            direction="left"
          // pauseOnHover={true}
          >
            <img
              loading="lazy"
              className="w-28 sm:w-60 mx-10"
              src={reuters2Img}
              alt=""
            />
            <img
              loading="lazy"
              className="w-28 sm:w-56 mx-10"
              src={khaleejImg}
              alt=""
            />
            <img
              loading="lazy"
              className="w-16 h-16 sm:w-24 sm:h-24 mx-10 rounded-full"
              src={mmImg}
              alt=""
            />
            <img
              loading="lazy"
              className="w-28 sm:w-40 mx-10"
              src={nationImg}
              alt=""
            />
          </Marquee>
        </div>

        {/* Divider */}
        <div className="border-l border-gray-200 h-28"></div>

        {/* Right logos (move right) */}
        <div className="w-1/2 overflow-hidden">
          <Marquee
            gradient={false}
            speed={50}
            direction="right"
          // pauseOnHover={true}
          >
            <img
              loading="lazy"
              className="w-28 sm:w-56 mx-10"
              src={potato2Img}
              alt=""
            />
            <img
              loading="lazy"
              className="w-28 sm:w-56 mx-10"
              src={reutersImg}
              alt=""
            />
            <img
              loading="lazy"
              className="w-28 sm:w-56 mx-10"
              src={rferlImg}
              alt=""
            />
            <img
              loading="lazy"
              className="w-28 sm:w-52 mx-10"
              src={unwomenImg}
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
