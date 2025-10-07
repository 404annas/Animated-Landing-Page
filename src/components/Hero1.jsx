import React, { useState, useEffect } from "react";
const heroImages = [
    {
        url: "https://images.unsplash.com/photo-1615406020658-6c4b805f1f30?w=2000&auto=format&fit=crop&q=120&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZXJuJTIwYXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww",
        title: "ARCHITECTURAL",
        subtitle: "Shaping Your Signature Style",
        description:
            "Modern architecture embraces innovation, blending creativity with functionality. It transforms spaces into experiences that inspire and engage.",
    },
    {
        url: "https://images.unsplash.com/photo-1531591022136-eb8b0da1e6d0?w=2000&auto=format&fit=crop&q=120&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVybiUyMGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
        title: "STRUCTURAL",
        subtitle: "Shaping Your Signature Style",
        description:
            "Eco-friendly materials and energy-efficient designs are central to modern architecture. Buildings aim to reduce environmental impact while enhancing comfort.",
    },
    {
        url: "https://images.unsplash.com/photo-1543071293-d91175a68672?w=2000&auto=format&fit=crop&q=120&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVybiUyMGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
        title: "CONSTRUCTION",
        subtitle: "Shaping Your Signature Style",
        description:
            "Clean lines and uncluttered spaces define minimalistic modern designs. Simplicity in form creates elegance and timeless appeal. Simplicity in form creates elegance and timeless appeal.",
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
            <div className="relative z-10 h-full flex items-center -mt-10">
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
                            <div className="inline-flex items-center bg-gradient-to-r from-gray-600/20 to-[#25211D] border border-[#24272A] rounded-full px-4 py-2 mb-6">
                                <div className="w-2 h-2 bg-gray-800 rounded-full animate-pulse mr-2"></div>
                                <span className="text-gray-400 text-sm font-semibold tracking-wide">
                                    {currentImage.subtitle}
                                </span>
                            </div>

                            {/* Main Title */}
                            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-6">
                                <span className="bg-gradient-to-r from-gray-400 via-[#562B1B] to-[#25211D] bg-clip-text text-transparent">
                                    {currentImage.title}
                                </span>
                            </h1>

                            {/* Description */}
                            <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-8 max-w-2xl">
                                {currentImage.description}
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="group bg-gradient-to-r from-gray-700 to-[#25211D] hover:from-[#25211D] hover:to-gray-700 text-white font-bold py-2 px-8 cursor-pointer rounded-full text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg">
                                    <span className="flex items-center justify-center">
                                        Download Profile
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

                                <button className="group border-2 border-gray-500 hover:bg-gray-500/20 text-white font-bold py-2 cursor-pointer px-8 rounded-full text-base sm:text-lg transform transition-all duration-300 hover:scale-105">
                                    <span className="flex items-center justify-center">
                                        Book 1 to 1 call now
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