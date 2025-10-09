const Text = () => {
    return (
        <section className="relative bg-[#532514] overflow-hidden min-h-[40vh] md:min-h-[50vh] lg:min-h-[50vh] flex items-center justify-center px-4 sm:px-6 md:px-10">
            {/* Background Image */}
            <img
                src="https://gracefulpixels.com/mindly/wp-content/uploads/2021/07/left-quotes-sign.png"
                alt="quote background"
                className="absolute top-1/2 left-1/2 w-52 sm:w-80 lg:w-[300px] opacity-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
            />

            {/* Text Content */}
            <p id="tour-text" className="frank text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-white leading-tight sm:leading-snug md:leading-snug max-w-5xl z-10">
                <span className="bg-gradient-to-r from-[#d88367] to-[#EACCC2] bg-clip-text text-transparent">
                    Transforming
                </span>{" "}
                <span className="text-[#EACCC2]">Vision into </span>{" "}
                <span className="bg-gradient-to-r from-[#d88367] to-[#EACCC2] bg-clip-text text-transparent">
                    Actionable Outcomes
                </span>{" "}
                <span className="bg-gradient-to-r from-[#EACCC2] to-[#d88367] bg-clip-text text-transparent">
                    Through Planning, Designing, and Construction.
                </span>
            </p>
        </section>
    );
};

export default Text;
