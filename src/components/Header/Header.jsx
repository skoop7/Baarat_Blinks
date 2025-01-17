import React from "react";
import { SocialIcons } from "./SocialIcons";
import { Logo } from "./Logo";
import Navbar from "./Navbar";

export const Header = ({ className }) => {
  return (
    <header
      className={`absolute top-0 backdrop-blur-sm bg-[#ffc482]/40 left-0 w-full  z-30 h-28 sm:h-fit ${className}`}
    >
      <div className="container mx-auto p-4 sm:py-8 h-full relative">
        <div className="flex items-center h-full">
          {/* Social Icons - Left Side */}
          <div className="z-20">
            <SocialIcons />
          </div>

          {/* Centered Logo */}
          <Logo />
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
