import React, { useEffect, useRef, useState } from "react";

const strengths = [
  { name: "Photography", percentage: 70 },
  { name: "Videography", percentage: 45 },
  { name: "Album", percentage: 60 },
  { name: "Pre-Wedding Shoot", percentage: 90 },
];

const Content = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <h1
        className="text-4xl sm:text-6xl font-serif text-center md:text-left"
        style={{ fontFamily: "quintessential, cursive" }}
      >
        Our Key Strengths
      </h1>
      <div className="space-y-4 sm:space-y-6 text-center md:text-left text-lg font-poppins ">
        <p className="text-black  leading-6 sm:leading-7 text-justify">
          We take pride in offering exceptional photography and videography
          services, ensuring that each moment of your wedding is captured with
          the utmost care and creativity. Our approach guarantees timeless
          memories that reflect the true essence of your special day.
        </p>
        <p className="text-black  leading-6 sm:leading-7 text-lg font-poppins text-justify">
          One of our fortes is pre-wedding shoots, where we create beautiful,
          candid moments that you can cherish forever. Whether it’s an intimate
          session or an adventurous one, we tailor the experience to reflect
          your unique bond. Besides, our custom wedding albums beautifully
          capture and preserve your special moments for years to come
        </p>
      </div>
    </div>
  );
};

const ProgressBar = ({ strength, count, onHover, onLeave }) => {
  return (
    <div
      className="space-y-2 sm:space-y-3"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="flex justify-between text-sm sm:text-base">
        <span className="font-medium">{strength.name}</span>
        <span className="font-medium">{Math.round(count)}%</span>
      </div>
      <div className="h-3 sm:h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-black transition-all duration-1000 ease-out"
          style={{
            width: `${count}%`,
            transition: "width 1s ease-out",
          }}
        />
      </div>
    </div>
  );
};

const useInView = (ref) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return isInView;
};

const ProgressBars = () => {
  const [counts, setCounts] = useState(strengths.map(() => 0));
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const animateValue = (start, end, duration, index) => {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    const updateCount = () => {
      current += increment;
      if (
        (increment > 0 && current >= end) ||
        (increment < 0 && current <= end)
      ) {
        setCounts((prev) => prev.map((c, i) => (i === index ? end : c)));
        return;
      }
      setCounts((prev) => prev.map((c, i) => (i === index ? current : c)));
      requestAnimationFrame(updateCount);
    };
    requestAnimationFrame(updateCount);
  };

  useEffect(() => {
    if (isInView && !hasAnimated) {
      strengths.forEach((strength, index) => {
        animateValue(0, strength.percentage, 1500, index);
      });
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const handleHover = (index) => {
    setHoveredIndex(index);
    animateValue(counts[index], strengths[index].percentage, 500, index);
  };

  return (
    <div
      ref={containerRef}
      className="max-w-7xl mx-auto px-4 mb-10 sm:mb-20 mt-10 sm:mt-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="pr-0 md:pr-6">
          <Content />
        </div>
        <div className="space-y-6 sm:space-y-16 w-full">
          {strengths.map((strength, index) => (
            <ProgressBar
              key={strength.name}
              strength={strength}
              count={counts[index]}
              onHover={() => handleHover(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBars;
