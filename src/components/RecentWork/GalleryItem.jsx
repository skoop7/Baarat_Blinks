import React, { useEffect, useRef } from "react";

const GalleryCard = ({ imageUrl, title, className = "", isTransitioning }) => {
  const cardRef = useRef(null);
  const boundsRef = useRef(null);

  const rotateToMouse = (e) => {
    if (!cardRef.current || !boundsRef.current) return;

    const bounds = boundsRef.current;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    cardRef.current.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `;

    const glowElement = cardRef.current.querySelector(".glow");
    if (glowElement) {
      glowElement.style.backgroundImage = `
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width / 2}px
          ${center.y * 2 + bounds.height / 2}px,
          #ffffff55,
          #0000000f
        )
      `;
    }
  };

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      boundsRef.current = card.getBoundingClientRect();
      document.addEventListener("mousemove", rotateToMouse);
    };

    const handleMouseLeave = () => {
      document.removeEventListener("mousemove", rotateToMouse);
      if (card) {
        card.style.transform = "";
        const glowElement = card.querySelector(".glow");
        if (glowElement) {
          glowElement.style.backgroundImage = "";
        }
      }
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousemove", rotateToMouse);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <div className={`relative group ${className}`}>
        <div className="relative h-full border-2 border-black shadow-lg transition-all duration-300 group-hover:shadow-xl">
          <div
            ref={cardRef}
            className="absolute top-5 left-5 w-full h-full"
            style={{
              transformStyle: "preserve-3d",
              transition: "transform 300ms ease-out",
            }}
          >
            <img
              key={imageUrl}
              src={imageUrl}
              alt={title}
              className={`w-full h-full object-cover transition-transform duration-500 motion-preset-fade-md ${
                isTransitioning ? "motion-out" : "motion-in"
              }`}
            />
            <div className="glow absolute inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="mt-6 ml-4 px-2">
        <h3 className="text-black font-medium text-lg md:text-xl">{title}</h3>
      </div>
    </div>
  );
};

export default GalleryCard;
