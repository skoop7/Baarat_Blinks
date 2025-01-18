import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Frame({
  title,
  imageURL,
  itemPosition = "items-center",
}) {
  const navigate = useNavigate();
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Remove the class first to reset the animation
            entry.target.classList.remove("animate-flip");
            // Force a reflow to ensure the class removal takes effect
            void entry.target.offsetWidth;
            // Add the class again to trigger the animation
            entry.target.classList.add("animate-flip");
            // observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    const routeName = title.toLowerCase().replace(/\s+/g, "-");
    navigate(`/services/${routeName}`);
  };

  return (
    <div
      className={`flex flex-col justify-center ${itemPosition}`}
      // onClick={handleClick}
    >
      <div className="border border-black h-[350px] w-[270px] lg:m-5 mr-[5px] ml-[10px] rounded-t-full relative card-container">
        <div ref={cardRef} className="card h-full w-full">
          <img
            src={imageURL}
            alt=""
            className="front h-full w-full object-cover rounded-t-full"
          />
          <img
            src={imageURL}
            alt=""
            className="back h-full w-full object-cover rounded-t-full"
          />
        </div>
      </div>
      <div className="mt-1 mr-4 px-2">
        <h3
          className="text-black font-medium text-lg md:text-xl"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}
