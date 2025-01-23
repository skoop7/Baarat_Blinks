import React from "react";
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-center p-4 md:p-6 lg:p-8 mt-6 mb-5 lg:mb-10">
      <div className="flex flex-col-reverse md:flex-row gap-6 w-full max-w-7xl">
        {/* Image section */}
        <div className="relative flex justify-center md:min-h-[400px] lg:min-h-[500px] md:w-1/2 lg:gap-0 gap-10">
          <div className="absolute top-1/4 left-[-40%] lg:left-[-23%] md:top-20 md:-left-20 w-4 md:w-auto ml-40">
            <img
              src="https://i.imghippo.com/files/qkks7849vCw.png"
              alt="Camera"
              className="lg:w-16 lg:h-16 hidden sm:block"
            />
          </div>

          <img
            src="/AboutUsHome.webp"
            alt="Studio"
            className="w-5/6 h-4/5 object-cover rounded-[40px] hidden sm:block"
          />
        </div>

        {/* Content section */}
        <div className="p-4 md:p-6 lg:p-8 md:w-1/2 flex flex-col justify-center items-center lg:justify-start lg:items-start ">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl text-[#102c57] text-center lg:text-left"
            style={{ fontFamily: "Quintessential, cursive" }}
          >
            About us
          </h1>
          <p
            className="my-6 md:my-10 text-base md:text-lg text-justify"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Every wedding is a unique celebration, and we believe in capturing
            each one with care, creativity, and passion. Led by Mr. Vedant
            Sharma, whose expertise spans over 5 years, we have traveled across
            North India, capturing the beauty and emotions of weddings in
            diverse cities. Our photography is a blend of vivid colors and
            powerful storytelling, making sure every moment is immortalized in
            its most authentic form. Trust us to transform your precious
            memories into timeless treasures that will last a lifetime.
          </p>
          <img
            src="/AboutUsHome.webp"
            alt="Studio"
            className="w-5/6 h-auto rounded-[40px] flex  items-center sm:hidden sm:mb-0 mb-10"
          />

          <button
            className="flex items-center gap-2 px-6 md:px-10 py-2.5 md:py-3 
                     text-navy-800 font-semibold text-base md:text-lg border-2 
                     border-black rounded-full hover:bg-navy-50 transition-colors 
                     shadow-sm shadow-black mt-6 md:mt-12 lg:mt-12 hover:scale-105 trasition-transform duration-300 justify-center sm:ml-0 "
            style={{ fontFamily: "Poppins, sans-serif" }}
            onClick={() => navigate("/about-us")}
          >
            Know More
          </button>
        </div>
      </div>
    </div>
  );
}
