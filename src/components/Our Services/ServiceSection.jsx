import React from "react";
import Frame from "./Frame";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ServiceSection() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center lg:mb-10 mb-5">
      <h1
        className="text-4xl sm:text-5xl lg:text-6xl text-center font-serif text-navy-800 mb-12 sm:mb-8 text-[#102c57]"
        style={{ fontFamily: "Quintessential, cursive" }}
      >
        Our Services
      </h1>
      <div className="flex flex-wrap w-[80%]  gap-20 items-center justify-center p-5">
        <Frame title="PHOTOGRAPHY" imageURL="/Image4.webp" />
        <Frame title="VIDEOGRAPHY" imageURL="/Image2.webp" />
        <Frame title="CUSTOM WEDDING ALBUMS" imageURL="/Image3.webp" />
        <Frame title="PRE WEDDING SHOOT" imageURL="/Image1.webp" />
        <Frame title="DRONE" imageURL="/Image5.webp" />
      </div>
      <div className="flex items-center justify-center mt-10">
        <button
          className={`inline-flex items-center gap-2 px-6 sm:px-24 py-3 text-navy-800 font-medium text-lg border-2 border-black rounded-full hover:bg-navy-50  shadow-sm shadow-black hover:scale-105 transition-transform duration-300`}
          onClick={() => {
            navigate("/services");
            console.log("Button Clicked");
          }}
        >
          Know More
        </button>
      </div>
    </div>
  );
}
