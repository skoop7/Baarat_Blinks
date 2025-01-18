import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Mobile hamburger button */}
      <div className="md:hidden fixed top-10 right-0 z-30">
        <button
          onClick={toggleMenu}
          className="text-black font-ubuntu p-2 rounded-lg focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="  shadow-md border-t-0 border-b-0 border-yellow-500  w-full hidden md:block">
        <div className="container mx-auto px-4">
          <ul className="flex flex-col md:flex-row gap-12 justify-center items-center md:space-x-8 py-4 space-y-4 md:space-y-0">
            {["Home", "About Us", "Services", "Gallery", "Contact Us"].map(
              (item, index) => (
                <li key={index}>
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-black font-roboto font-semibold text-lg sm:text-xl border-b-4 border-transparent hover:border-[#5e2325] transition duration-300"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu (Full screen overlay) */}
      {isMenuOpen && (
        <div className="fixed  top-0 left-0 w-full h-dvh bg-white z-20 md:hidden">
          <div className="flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col items-center space-y-8">
              {["Home", "About Us", "Services", "Gallery", "Contact Us"].map(
                (item, index) => (
                  <li key={index}>
                    <Link
                      to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-black font-roboto font-bold text-2xl border-b-4 border-transparent hover:border-[#5e2325] transition duration-300"
                      onClick={toggleMenu}
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
