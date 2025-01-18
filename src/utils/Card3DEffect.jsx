import { useEffect, useRef } from "react";

const Card3DEffect = ({ children }) => {
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
    <div ref={cardRef} className="card-3d">
      <div className="glow"></div>
      {children}
    </div>
  );
};

export default Card3DEffect;
