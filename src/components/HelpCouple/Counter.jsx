import React, { useState, useEffect, useRef } from "react";

export default function Counter({ limit, timerLimit }) {
  const [counter, setCounter] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // Track hover state
  const counterRef = useRef(null); // Reference to the counter element

  // Intersection Observer to detect when the element is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCounter(0); // Reset the counter every time the element becomes visible
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.5, // Trigger when at least 50% of the element is visible
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  // Effect to handle the counter increment
  useEffect(() => {
    if ((isVisible || isHovered) && counter < limit) {
      const timer = setTimeout(() => {
        setCounter(counter + 1);
      }, timerLimit);

      return () => clearTimeout(timer);
    }
  }, [isVisible, isHovered, counter, limit]);

  return (
    <div
      ref={counterRef}
      onMouseEnter={() => {
        setCounter(0); // Reset the counter on hover
        setIsHovered(true); // Trigger hover state
      }}
      onMouseLeave={() => setIsHovered(false)} // Stop hover trigger
    >
      <h1
        className="text-4xl text-[#102c57]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {counter}+
      </h1>
    </div>
  );
}
