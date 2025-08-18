import { useEffect, useState } from "react";

const CountUp = ({ target, duration = 2000, direction = "up" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    const increment = end / (duration / 16); // ~60fps
    let current = 0;

    const step = () => {
      current += increment;
      if (current < end) {
        setCount(Math.floor(current));
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  }, [target, duration]);

  return (
    <span
      className={`inline-block transition-transform duration-700 ${
        direction === "up" ? "translate-y-4 opacity-0 animate-slideUp" : "translate-y-[-1rem] opacity-0 animate-slideDown"
      }`}
    >
      {count}
    </span>
  );
};

export default CountUp;
