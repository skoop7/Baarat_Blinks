import React from "react";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <div
      className="absolute lg:left-1/2 left-20 transform -translate-x-1/2 
      -translate-y-8 sm:-translate-y-9 md:-translate-y-10 lg:-translate-y-12
      mt-16 sm:mt-18 md:mt-20 lg:mt-24"
    >
      <Link to="/">
        <img
          src="/logo.webp"
          alt="Baarat Blinks Logo"
          className="h-24 w-auto lg:h-36 transition-all duration-300"
        />
      </Link>
    </div>
  );
};
