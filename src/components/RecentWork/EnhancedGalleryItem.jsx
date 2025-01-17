import React, { useState, useEffect } from "react";
import { GalleryItem } from "./GalleryItem";

const imageOptions = {
  1: ["/Work1.webp", "/Work2.jpg", "/Work3.jpg"],
  2: ["/Work2.jpg", "/Work4.webp", "/Work5.webp"],
  3: ["/Work5.webp", "/Work3.jpg", "/Work6.webp"],
  4: ["/Work4.webp", "/Work1.webp", "/Work6.webp"],
  5: ["/Work3.jpg", "/Work2.jpg", "/Work5.webp"],
  6: ["/Work6.webp", "/Work4.webp", "/Work1.webp"],
};

// Stagger the initial delays to ensure only one image changes at a time
const getInitialDelay = (position) => (position - 1) * 3000;

export const EnhancedGalleryItem = ({ position, className, title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const images = imageOptions[position];

  const changeImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsTransitioning(false);
    }, 500); // Half of the transition duration
  };

  useEffect(() => {
    // Initial delay based on position to stagger the animations
    const initialDelay = getInitialDelay(position);

    // Wait for initial delay before starting the interval
    const startTimeout = setTimeout(() => {
      // Start the regular interval after the initial delay
      const interval = setInterval(changeImage, 18000); // 18 seconds total cycle (6 items × 3 seconds)

      return () => {
        clearInterval(interval);
      };
    }, initialDelay);

    return () => {
      clearTimeout(startTimeout);
    };
  }, [position]);

  return (
    <div onClick={changeImage} style={{ cursor: "pointer" }}>
      <GalleryItem
        imageUrl={images[currentImageIndex]}
        title={title}
        className={`${className} motion-preset-fade-lg`}
        isTransitioning={isTransitioning}
      />
    </div>
  );
};
