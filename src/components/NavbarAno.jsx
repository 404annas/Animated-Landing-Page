import { motion } from "framer-motion";
import { Facebook, Instagram, Mail, Menu, Play, X, Youtube } from "lucide-react";
import { useEffect, useState } from "react";
import { FaMusic } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const NavbarAno = () => {
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsNavVisible(currentScrollY < lastScrollY || currentScrollY < 100);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <>
            <motion.nav className="sticky top-0 left-0 right-0 z-50 bg-[#25211D] backdrop-blur-sm border-b border-gray-500/20 h-14">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                        {/* <motion.button
                            className="text-white font-semibold flex items-center group relative text-sm xl:text-base inter"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() =>
                                window.open(
                                    "https://youtu.be/I-sTFaSwoX0?si=RDnciIQT6RXDG4zG",
                                    "_blank",
                                    "noopener,noreferrer"
                                )
                            }
                        >
                            <FaMusic className="w-3 h-3 xl:w-4 xl:h-4 mr-2 group-hover:fill-current transition-all duration-300" />
                            New Release
                            <motion.div
                                className="absolute bottom-0 left-0 h-0.5"
                                initial={{ width: 0 }}
                                whileHover={{ width: "100%" }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.button> */}

                        {/* <motion.button
                            className="text-white hover:text-gray-300 font-semibold flex items-center group relative text-sm xl:text-base inter"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() =>
                                window.open(
                                    "https://www.youtube.com/watch?v=5Eqb_-j3FDA",
                                    "_blank",
                                    "noopener,noreferrer"
                                )
                            }
                        >
                            <Play className="w-3 h-3 xl:w-4 xl:h-4 mr-2 transition-colors duration-300" />
                            Top hit
                            <motion.div
                                className="absolute bottom-0 left-0 h-0.5 bg-white"
                                initial={{ width: 0 }}
                                whileHover={{ width: "100%" }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.button> */}

                        {/* Add this new "Contact Now" button */}
                        {/* <p>Sydney, Australia</p> */}

                        {/* <motion.a
                            href="mailto:sahr.eqbal8@gmail.com"
                            className="text-white hover:text-gray-300 font-medium flex items-center group relative text-sm xl:text-base inter"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Mail className="w-3 h-3 xl:w-4 xl:h-4 mr-2 transition-colors duration-300" />
                            Contact Now
                            <motion.div
                                className="absolute bottom-0 left-0 h-0.5"
                                initial={{ width: 0 }}
                                whileHover={{ width: "100%" }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.a> */}
                    </div>

                    {/* Mobile Menu Button */}
                    {/* <motion.button
                        className="lg:hidden text-white cursor-pointer"
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </motion.button> */}

                    {/* Logo - Centered */}
                    <motion.div
                        className="absolute left-1/2 transform -translate-x-1/2 mt-7 sm:mt-5 w-full"
                    // whileHover={{ scale: 1.1 }}
                    // animate={{
                    //     textShadow: [
                    //         "0 0 5px #ef4444",
                    //         "0 0 10px #ef4444",
                    //         "0 0 15px #ef4444",
                    //         "0 0 10px #ef4444",
                    //         "0 0 5px #ef4444",
                    //     ],
                    // }}
                    // transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                        <div className="text-white font-bold text-lg sm:text-xl cursor-pointer text-center inter">
                            Sahar Iqbal
                            <div className="text-xs text-gray-200 inter">SENIOR MARKETING STRATEGIST</div>
                        </div>
                    </motion.div>

                    {/* Social Icons - Desktop */}
                    {/* <div className="hidden sm:flex items-center space-x-3 lg:space-x-4">
                        <motion.a
                            href="https://www.instagram.com/shahrukhkazimmusic?igsh=cjJlcTNid2RlMDg%3D&utm_source=qr"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Instagram className="w-4 h-4 lg:w-5 lg:h-5 text-white hover:text-pink-400 cursor-pointer transition-colors duration-300" />
                        </motion.a>
                        <motion.a
                            href="https://open.spotify.com/artist/02yAoSmsqYASF4Wb45bRlJ?si=FUpZE2KuTTORctKhIxoStg"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <div className="w-4 h-4 lg:w-6 lg:h-6 text-white hover:text-green-400 cursor-pointer transition-colors duration-300">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.28 2 11.6c0 1.85.56 3.58 1.62 5.08L2 22l5.56-1.62c1.42.78 3.01 1.18 4.64 1.18 5.52 0 10-4.28 10-9.6S17.52 2 12 2zm0 17.45c-1.41 0-2.78-.37-3.98-1.08l-.28-.17-3.29.96.95-3.16-.18-.29C4.63 14.45 4.2 13.04 4.2 11.6c0-4.19 3.49-7.6 7.8-7.6 4.31 0 7.8 3.41 7.8 7.6s-3.49 7.6-7.8 7.6zm4.21-5.53c-.23-.11-1.36-.67-1.57-.74-.21-.08-.36-.11-.52.11-.15.23-.6.74-.73.89-.13.15-.27.17-.5.06-.23-.11-.97-.35-1.84-1.1-.68-.6-1.15-1.34-1.28-1.56-.13-.23-.01-.35.1-.46.1-.1.23-.27.34-.4.11-.13.15-.23.23-.39.08-.15.04-.29-.02-.4-.06-.11-.52-1.24-.71-1.7-.18-.43-.36-.37-.52-.38h-.45c-.15 0-.4.06-.61.29-.21.23-.8.78-.8 1.91s.82 2.22.93 2.37c.11.15 1.61 2.53 3.9 3.55.55.24.97.39 1.3.5.55.18 1.04.15 1.43.09.44-.07 1.36-.55 1.55-1.08.19-.53.19-.98.13-1.08-.06-.1-.21-.16-.44-.27z" />
                                </svg>

                            </div>
                        </motion.a>
                        <motion.a
                            href="https://youtube.com/@shahrukhkazimmusic?si=F-7AdhOpat7R0szv"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaFacebook className="w-4 h-4 lg:w-5 lg:h-5 text-white hover:text-blue-500 cursor-pointer transition-colors duration-300" />
                        </motion.a>
                    </div> */}
                </div>

                {/* Mobile Menu */}
                {/* <motion.div
                    className="lg:hidden bg-black/95 backdrop-blur-sm border-t border-gray-500/20"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                        height: isMobileMenuOpen ? "auto" : 0,
                        opacity: isMobileMenuOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: "hidden" }}
                > */}
                    {/* <div className="px-4 py-4 space-y-4"> */}
                        {/* <motion.button
                            className="text-white font-semibold flex items-center group w-full"
                            whileTap={{ scale: 0.95 }}
                            onClick={() =>
                                window.open(
                                    "https://youtu.be/I-sTFaSwoX0?si=RDnciIQT6RXDG4zG",
                                    "_blank",
                                    "noopener,noreferrer"
                                )
                            }
                        >
                            <FaMusic className="w-4 h-4 mr-2 group-hover:fill-current transition-all duration-300" />
                            New Release
                        </motion.button> */}
                        {/* <motion.button
                            className="text-white hover:text-gray-300 font-semibold flex items-center group w-full"
                            whileTap={{ scale: 0.95 }}
                            onClick={() =>
                                window.open(
                                    "https://www.youtube.com/watch?v=5Eqb_-j3FDA",
                                    "_blank",
                                    "noopener,noreferrer"
                                )
                            }
                        >
                            <Play className="w-4 h-4 mr-2 transition-colors duration-300" />
                            Top hit
                        </motion.button> */}
                        {/* <motion.a
                            href="mailto:Shahrukhfepo@gmail.com"
                            className="text-white hover:text-gray-300 font-semibold flex items-center group w-full"
                            whileTap={{ scale: 0.95 }}
                        >
                            <Mail className="w-4 h-4 mr-2 transition-colors duration-300" />
                            Contact Now
                        </motion.a> */}

                        {/* Mobile Social Icons */}
                        {/* <div className="flex items-center space-x-4 pt-4 border-t border-gray-700">
                            <a
                                href="https://www.instagram.com/shahrukhkazimmusic?igsh=cjJlcTNid2RlMDg%3D&utm_source=qr"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Instagram className="w-5 h-5 text-white hover:text-pink-400 cursor-pointer transition-colors duration-300" />
                            </a>
                            <a
                                href="https://open.spotify.com/artist/02yAoSmsqYASF4Wb45bRlJ?si=FUpZE2KuTTORctKhIxoStg"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="w-5 h-5 text-white hover:text-green-400 cursor-pointer transition-colors duration-300">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.28 2 11.6c0 1.85.56 3.58 1.62 5.08L2 22l5.56-1.62c1.42.78 3.01 1.18 4.64 1.18 5.52 0 10-4.28 10-9.6S17.52 2 12 2zm0 17.45c-1.41 0-2.78-.37-3.98-1.08l-.28-.17-3.29.96.95-3.16-.18-.29C4.63 14.45 4.2 13.04 4.2 11.6c0-4.19 3.49-7.6 7.8-7.6 4.31 0 7.8 3.41 7.8 7.6s-3.49 7.6-7.8 7.6zm4.21-5.53c-.23-.11-1.36-.67-1.57-.74-.21-.08-.36-.11-.52.11-.15.23-.6.74-.73.89-.13.15-.27.17-.5.06-.23-.11-.97-.35-1.84-1.1-.68-.6-1.15-1.34-1.28-1.56-.13-.23-.01-.35.1-.46.1-.1.23-.27.34-.4.11-.13.15-.23.23-.39.08-.15.04-.29-.02-.4-.06-.11-.52-1.24-.71-1.7-.18-.43-.36-.37-.52-.38h-.45c-.15 0-.4.06-.61.29-.21.23-.8.78-.8 1.91s.82 2.22.93 2.37c.11.15 1.61 2.53 3.9 3.55.55.24.97.39 1.3.5.55.18 1.04.15 1.43.09.44-.07 1.36-.55 1.55-1.08.19-.53.19-.98.13-1.08-.06-.1-.21-.16-.44-.27z" />
                                    </svg>
                                </div>
                            </a>
                            <a
                                href="https://youtube.com/@shahrukhkazimmusic?si=F-7AdhOpat7R0szv"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook className="w-5 h-5 text-white hover:text-blue-500 cursor-pointer transition-colors duration-300" />
                            </a>
                        </div> */}
                    {/* </div> */}
                {/* </motion.div> */}
            </motion.nav>
        </>
    );
};

export default NavbarAno;
