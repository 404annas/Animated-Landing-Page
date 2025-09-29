import React, { useState, useEffect } from "react";
const heroImages = [
    {
        url: "https://images.pexels.com/photos/6566976/pexels-photo-6566976.jpeg?_gl=1*zykpcy*_ga*MTMxMzQwNjA1Ni4xNzU0ODkwNzk1*_ga_8JE65Q40S6*czE3NTgzOTc1OTMkbzQkZzEkdDE3NTgzOTc2MTkkajM0JGwwJGgw",
        title: "PRECISION & POWER",
        subtitle: "Premium Tactical Equipment",
        description:
            "Engineered for accuracy, built for reliability. Discover our professional-grade tactical collection.",
    },
    {
        url: "https://images.pexels.com/photos/5202444/pexels-photo-5202444.jpeg?_gl=1*1i2hmu*_ga*MTMxMzQwNjA1Ni4xNzU0ODkwNzk1*_ga_8JE65Q40S6*czE3NTgzOTc1OTMkbzQkZzEkdDE3NTgzOTc2OTQkajIyJGwwJGgw",
        title: "TACTICAL EXCELLENCE",
        subtitle: "Military Grade Quality",
        description:
            "From handguns to rifles, find the perfect weapon system for your tactical needs.",
    },
    {
        url: "https://images.pexels.com/photos/864987/pexels-photo-864987.jpeg?_gl=1*14hyna5*_ga*MTMxMzQwNjA1Ni4xNzU0ODkwNzk1*_ga_8JE65Q40S6*czE3NTgzOTc1OTMkbzQkZzEkdDE3NTgzOTc2NjIkajU0JGwwJGgw",
        title: "PROFESSIONAL GEAR",
        subtitle: "Complete Tactical Solutions",
        description:
            "Comprehensive selection of tactical equipment, optics, and accessories for professionals.",
    },
];

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        setIsLoaded(true);
        return () => clearInterval(timer);
    }, []);

    const currentImage = heroImages[currentImageIndex];

    return (
        <div className="relative h-screen overflow-hidden">
            {/* Animated Background Images */}
            <div className="absolute inset-0">
                {heroImages.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <img
                            src={image.url}
                            alt={`Hero ${index + 1}`}
                            loading="lazy"
                            fetchPriority="high"
                            className="w-full h-full object-cover"
                        />
                        {/* Dark overlay with gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
                        {/* Fire overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 via-transparent to-transparent"></div>
                    </div>
                ))}
            </div>

            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden"></div>

            {/* Main Content */}
            <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-4 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Text Content */}
                        <div
                            className={`text-left transform transition-all duration-1000 ${isLoaded
                                    ? "translate-x-0 opacity-100"
                                    : "-translate-x-20 opacity-0"
                                }`}
                        >
                            {/* Badge */}
                            <div className="inline-flex items-center bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
                                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse mr-2"></div>
                                <span className="text-orange-300 text-sm font-semibold tracking-wide">
                                    {currentImage.subtitle}
                                </span>
                            </div>

                            {/* Main Title */}
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-6">
                                <span className="bg-gradient-to-r from-white via-yellow-200 to-orange-300 bg-clip-text text-transparent">
                                    {currentImage.title}
                                </span>
                            </h1>

                            {/* Description */}
                            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
                                {currentImage.description}
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="group bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 hover:from-yellow-500 hover:via-orange-500 hover:to-red-500 text-white font-bold py-2 px-8 cursor-pointer rounded-full text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg">
                                    <span className="flex items-center justify-center">
                                        Shop Now
                                        <svg
                                            className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </span>
                                </button>

                                <button className="group border-2 border-orange-500 hover:bg-orange-500/10 text-white font-bold py-2 cursor-pointer px-8 rounded-full text-lg transform transition-all duration-300 hover:scale-105">
                                    <span className="flex items-center justify-center">
                                        Learn More
                                        <svg
                                            className="w-5 h-5 ml-2 transform group-hover:rotate-45 transition-transform duration-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            />
                                        </svg>
                                    </span>
                                </button>
                            </div>

                            {/* Stats */}
                            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-gray-700/50">
                                <div>
                                    <div className="text-3xl font-bold text-yellow-400">500+</div>
                                    <div className="text-sm text-gray-400">Products</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-orange-400">50K+</div>
                                    <div className="text-sm text-gray-400">Customers</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-red-400">15+</div>
                                    <div className="text-sm text-gray-400">Years</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Interactive Elements */}
                        <div
                            className={`hidden lg:block transform transition-all duration-1000 delay-300 ${isLoaded
                                    ? "translate-x-0 opacity-100"
                                    : "translate-x-20 opacity-0"
                                }`}
                        >
                            <div className="relative">{/* Floating Cards */}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Indicators */}

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 right-8 z-20">
                <div className="flex flex-col items-center text-white/70 animate-bounce">
                    <span className="text-sm mb-2 rotate-90 whitespace-nowrap origin-center">
                        Scroll
                    </span>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </div>

            <style jsx>{`
        @keyframes slow-zoom {
          0% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1.2);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite alternate;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite 3s;
        }

        .duration-2000 {
          transition-duration: 2000ms;
        }
      `}</style>
        </div>
    );
};

export default Hero;