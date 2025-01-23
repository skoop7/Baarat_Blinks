import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const phoneNumber = "9456221688";
  const preMsg = "Hello! I have a question about your services.";
  const WhatsAppURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    preMsg
  )}`;

  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap justify-between p-6 border-t-2 border-black  bg-[#ffc482]/40">
        <div className="w-full md:w-1/4 mb-6 md:mb-0 md:mr-40 ">
          <div className="flex items-center justify-center mb-1">
            <img
              src="/logo.webp"
              alt="Picasa Logo"
              className="w-52 h-36 mr-3"
            />
            {/* <h1
              className="text-3xl"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Baarat Blinks
            </h1> */}
          </div>
          <p className="text-sm mb-2 font-semibold flex flex-wrap justify-center sm:ml-0 ml-0">
            A Snapshot of Your Dream Day.
          </p>
          <div className="flex gap-6 mt-5 lg:ml-4 justify-center">
            <a
              href="https://www.facebook.com/vedant.sharma.9469"
              target="_blank"
            >
              <img src="/facebook.png" alt="" />
            </a>

            <a
              href="https://www.instagram.com/baratblinks/?igsh=cTEwOHM3ZXQ4NWJu"
              target="_blank"
            >
              <img src="/instagram.png" alt="" />
            </a>
            <img src="/linkedin.png" alt="" />
            {/* <img src="/x.png" alt="" /> */}
            <a href={WhatsAppURL} target="_blank" rel="noopener noreferrer">
              <img src="/whatsapp.png" alt="" />
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/4 mb-6   flex justify-center">
          <div className="lg:text-start text-center">
            <h3
              className="text-lg font-semibold mb-4 "
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Quick Links
            </h3>
            <ul className="text-lg flex flex-col gap-2">
              <li
                className=" hover:underline hover:decoration-[#5e2325]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <Link to="/home">Home</Link>
              </li>
              <li
                className="hover:underline hover:decoration-[#5e2325]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <Link to="/about-us">About Us</Link>
              </li>
              <li
                className="hover:underline hover:decoration-[#5e2325]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <Link to="/services">Services</Link>
              </li>
              <li
                className="hover:underline hover:decoration-[#5e2325]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <Link to="/gallery">Gallery</Link>
              </li>
              <li
                className="hover:underline hover:decoration-[#5e2325]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-1/4 mb-6 md:mb-0   justify-center hidden lg:flex">
          <div className="text-start">
            <h3
              className="text-lg font-semibold mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Services
            </h3>
            <ul className="text-lg flex flex-col gap-2">
              <li
                className=" hover:underline hover:decoration-[#5e2325]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <Link to="/services">Photography</Link>
              </li>
              <li
                className="hover:underline hover:decoration-[#5e2325]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <Link to="/services">Videography</Link>
              </li>
              <li
                className="hover:underline hover:decoration-[#5e2325]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <Link to="/services">Albums</Link>
              </li>
              <li
                className="hover:underline hover:decoration-[#5e2325]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <Link to="/services">Pre Wedding</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-1/4 flex justify-center sm:ml-0 ">
          <div className="lg:text-start text-center">
            <h3
              className="text-lg font-semibold mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Company
            </h3>
            <ul className="text-lg flex flex-col gap-2">
              <li
                className="hover:underline hover:decoration-[#5e2325]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <Link to="/terms-condition">Terms & Conditions</Link>
              </li>
              <li
                className="hover:underline hover:decoration-[#5e2325]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full bg-black text-white py-2">
        <div className="flex flex-col items-center justify-center text-sm">
          <p>Designed by Synthetico.ai</p>
          <p>Copyright © 2024. All rights reserved by Baarat Blinks.</p>
        </div>
      </div>
    </>
  );
}
