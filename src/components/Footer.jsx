import React from "react";
import { Twitter, Instagram, Linkedin, Facebook } from "lucide-react";
import "./Footer.css";
import FooterItems from "./FooterItems";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#25211D] text-white px-10 pt-20 pb-10">
        <div className="flex items-center flex-col gap-6">
          <img
            className="w-8 cursor-pointer hover:opacity-80 transition-all duration-300"
            loading="lazy"
            src="https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/684f806d593d5a0b9c7e201c_R3.svg"
            alt="Logo"
          />
          <p className="inter uppercase text-center text-sm">
            Architecture that elevates everyday living.
          </p>
          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="footer-item bg-[#25211D] border border-[#4D4944] hover:border-[#67635E] text-white p-3 rounded-full cursor-pointer">
              <span>
                <Instagram size={20} />
              </span>
              <span>
                <Instagram size={20} />
              </span>
            </div>
            <div className="footer-item bg-[#25211D] border border-[#4D4944] hover:border-[#67635E] text-white p-3 rounded-full cursor-pointer">
              <span>
                <Twitter size={20} />
              </span>
              <span>
                <Twitter size={20} />
              </span>
            </div>
            <div className="footer-item bg-[#25211D] border border-[#4D4944] hover:border-[#67635E] text-white p-3 rounded-full cursor-pointer">
              <span>
                <Linkedin size={20} />
              </span>
              <span>
                <Linkedin size={20} />
              </span>
            </div>
            <div className="footer-item bg-[#25211D] border border-[#4D4944] hover:border-[#67635E] transition-all duration-300 text-white p-3 rounded-full cursor-pointer">
              <span>
                <Facebook size={20} />
              </span>
              <span>
                <Facebook size={20} />
              </span>
            </div>
          </div>
        </div>

        <FooterItems />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <p className="uppercase text-[#67635E] inter">Powered By</p>
              <p className="uppercase inter text-white">Webflow</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="uppercase text-[#67635E] inter">Created By</p>
              <p className="uppercase inter text-white">Flowaze</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <p className="uppercase inter text-white">Style Guide</p>
            <p className="uppercase inter text-white">Licenses</p>
            <p className="uppercase inter text-white">Changelog</p>
          </div>
        </div>
      </footer>

      <div className="relative bg-[#25211D] overflow-hidden h-105">
        <h1 className="mor text-[#2C2824] leading-none text-[820px] font-extrabold px-0 uppercase py-0">
          Arcoria
        </h1>
      </div>
    </>
  );
};

export default Footer;
