import { Link } from "react-router-dom";

const Hire = () => {
    // Content updated for DR Designz - Interior Design & Architecture
    const data = {
        subtitle:
            "We follow a meticulous process to bring your vision to life, ensuring clarity, quality, and peace of mind from start to finish. Together, we'll move through:",
        items: [
            {
                id: 1,
                title: "1. Consultation & Concept:",
                description:
                    "We start by understanding your vision, requirements, and budget in a free consultation. Then, we develop initial concepts, mood boards, and layouts tailored to your London property's unique potential.",
            },
            {
                id: 2,
                title: "2. Design & 3D Visualisation:",
                description:
                    "Once the concept is approved, we create detailed architectural designs and stunning 3D visualisations. This allows you to see and feel your space before any construction begins, ensuring complete satisfaction.",
            },
            {
                id: 3,
                title: "3. Planning & Project Management:",
                description:
                    "We handle all the complexities, from securing planning permissions to coordinating with trusted suppliers and contractors. Our expert project management ensures your project runs smoothly, on time, and within budget.",
            },
            {
                id: 4,
                title: "4. Construction & Handover:",
                description:
                    "Our skilled team brings the design to life with meticulous attention to detail. We oversee the entire construction process and conclude with a final handover, leaving you with a perfectly finished space, ready to enjoy.",
            },
        ],
    };

    return (
        <div className="px-4 sm:px-6 md:px-10 pt-50 pb-10 sm:py-14 md:py-20 bg-white max-w-7xl mx-auto">
            {/* Top Center Heading */}
            <h2 className="text-3xl sm:text-6xl text-center uppercase text-[#25211D] max-w-4xl mx-auto mor mb-6 sm:mb-8 tracking-wide">
                Our Design & Build Process
            </h2>

            <div className="flex flex-col md:flex-row items-start justify-between gap-10 pt-5">
                {/* NEW LEFT DIV */}
                <div className="flex-1 max-w-xl space-y-4">
                    <h3 id="tour-hire" className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl uppercase text-[#25211D] mor-n tracking-wide">
                        Why Choose DR Designz?
                    </h3>
                    <p className="text-gray-600 text-sm inter font-medium">
                        At DR Designz, we are more than just designers; we are your dedicated partners in creating exceptional spaces. We specialise in navigating the unique challenges of London properties, from maximising compact layouts to handling complex planning regulations.
                    </p>
                    <p className="text-gray-600 text-sm inter font-medium">
                        Our approach is rooted in a deep understanding of our clients' needs, whether you're a property developer seeking to maximise ROI or a homeowner wanting to create your dream space. We are committed to delivering functional, beautiful, and valuable properties with a seamless, stress-free experience.
                    </p>
                    <Link
                        to={"/contact"}
                        className="bg-[#25211D] w-fit text-white inter px-4 sm:px-8 py-2 rounded-xl shadow-primary transition-all duration-300 transform hover:-translate-y-1 hover:scale-103 flex items-center text-sm"
                    >
                        <span className="mr-3">📅</span>
                        Transform Your Space
                    </Link>
                </div>

                {/* EXISTING RIGHT DIV */}
                <div className="relative flex-1 space-y-8 pl-4 sm:pl-6 md:pl-8">
                    {/* Timeline Vertical Line */}
                    <div className="absolute top-4 sm:top-10 md:top-10 lg:top-6 left-1 sm:left-3 md:left-[19px] lg:left-5 w-[2px] h-[490px] sm:h-[470px] md:h-[670px] lg:h-[480px] bg-[#25211D]" />

                    {data.items.map((item, index) => (
                        <div key={index} className="relative flex items-start space-x-4">
                            {/* Timeline Dot */}
                            <div className="absolute top-2 sm:top-2 left-[-20px] sm:left-[-22px] w-4 sm:w-5 h-4 sm:h-5 rounded-full border-2 border-[#25211D] bg-[#25211D]" />

                            {/* Service Content */}
                            <div className="pl-2">
                                <h2 id={`tour-hire-${item.id}`} className="text-lg sm:text-xl md:text-5xl text-[#25211D] mor-n uppercase tracking-wide">
                                    {item.title}
                                </h2>
                                <p className="text-gray-600 text-sm sm:text-base mt-1 inter font-medium">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hire;