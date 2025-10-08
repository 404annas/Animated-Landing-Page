import Marquee from "react-fast-marquee";

const Banner = () => {
    return (
        <div className="bg-gradient-to-r from-[#25211D] to-[#654237] py-10 overflow-hidden">
            <Marquee
                gradient={false}
                speed={60}
                direction="right"
            >
                {Array(5)
                    .fill(
                        "Planning | Construction | Interior Design & Joinery"
                    )
                    .map((text, index) => (
                        <span key={index} className="text-white text-base font-medium mx-10">
                            {text}
                        </span>
                    ))}
            </Marquee>
        </div>
    )
}

export default Banner