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
import { Link } from "react-router-dom";

const umbrella = "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/685161a5822b1ce22b5d1ce5_Umbrella.svg";
const monaco = "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/685161920fd24a7acdfd6334_Monaco.svg";
const amsterdam = "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/6851618899fe0f81f09d8dc6_Amsterdam.svg";
const delaware = "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/68516188ef1e08a08cb7adc8_Delaware.svg";

const Partners = () => {
  return (
    <div className="bg-[#FEFCF6] pt-20">
      {/* <h1 className="text-center text-black inter uppercase pb-10">
        Featured At
      </h1> */}

      <div className="flex items-center justify-center mt-6">
        {/* Left logos (move left) */}
        <div className="w-1/2 overflow-hidden">
          <Marquee
            gradient={false}
            speed={50}
            direction="left"
          // pauseOnHover={true}
          >
            <Link target="_blank" to={"https://reuters.screenocean.com/record/1398742?utm_source=chatgpt.com"}>
              <img
                loading="lazy"
                className="w-28 sm:w-30 mx-10"
                src={umbrella}
                alt=""
              />
            </Link>
            <Link target="_blank" to={"https://www.khaleejtimes.com/supplements/empowerment-in-pakistan-women-reclaim-work-worth-and-voice?fbclid=IwQ0xDSwMY4GVjbGNrAxjgX2V4dG4DYWVtAjExAAEeqLaW7Gwyo6i_VSh4hwzPgVCImylpqUyIWRSHqb4or8POAWM9jyoG4gefuBk_aem__WcMWBShtcZm_qqmdY7xRA"}>
              <img
                loading="lazy"
                className="w-28 sm:w-30 mx-10"
                src={monaco}
                alt=""
              />
            </Link>
            <Link target="_blank" to={"https://youtu.be/xdg3uyxLqEE?si=-Gyraq-9tEk-ipV0"}>
              <img
                loading="lazy"
                className="w-16 h-16 sm:w-32 mx-10 rounded-full"
                src={amsterdam}
                alt=""
              />
            </Link>
            <Link target="_blank" to={"https://www.nation.com.pk/26-Apr-2018/cropping-out-taboos?utm_source=chatgpt.com"}>
              <img
                loading="lazy"
                className="w-28 sm:w-30 mx-10"
                src={delaware}
                alt=""
              />
            </Link>
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
            <Link target="_blank" to={"https://www.potatonewstoday.com/2019/03/08/orders-from-a-lady-an-unusual-pakistani-potato-farm-run-by-a-woman/?utm_source=chatgpt.com"}>
              <img
                loading="lazy"
                className="w-28 sm:w-30 mx-10"
                src={delaware}
                alt=""
              />
            </Link>
            <Link target="_blank" to={"https://reuters.screenocean.com/record/1398742?utm_source=chatgpt.com"}>
              <img
                loading="lazy"
                className="w-28 sm:w-32 mx-10"
                src={amsterdam}
                alt=""
              />
            </Link>
            <Link target="_blank" to={"https://www.rferl.org/a/paksitan-woman-farmer/29808949.html?utm_source=chatgpt.com"}>
              <img
                loading="lazy"
                className="w-28 sm:w-30 mx-10"
                src={monaco}
                alt=""
              />
            </Link>
            <Link target="_blank" to={"https://pakistan.unwomen.org/en/news-and-events/stories/2020/06/i-am-generation-equality---female-leadership-during-covid-19?utm_source=chatgpt.com"}>
              <img
                loading="lazy"
                className="w-28 sm:w-30 mx-10"
                src={umbrella}
                alt=""
              />
            </Link>
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
