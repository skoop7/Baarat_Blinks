import React from "react";

const AboutIs = () => {
  return (
    <div
      className="container mx-auto px-4 py-12 relative bg-cover bg-center bg-no-repeat mb-10 mt-20 "
      // style={{
      //   backgroundImage: "url('https://i.imghippo.com/files/Cynm4298WaQ.png')",
      // }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-0 w-8 h-8 bg-pink-100 rounded-full opacity-30"
          style={{ transform: "translate(-50%, -50%)" }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-12 h-12 bg-green-100 rounded-full opacity-30"
          style={{ transform: "translate(50%, 50%)" }}
        ></div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 items-center md:pl-20">
        {/* Image Gallery */}
        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-3 sm:gap-4 gap-2">
            <div className="col-span-1">
              <img
                src="/AboutUs1.webp"
                alt="Wedding moment"
                className="w-full h-auto sm:h-56 md:h-96 object-cover shadow-lg transform hover:scale-105 transition-transform duration-300 border-[#CEAC53] border-4"
              />
            </div>
            <div className="col-span-1 mt-10 sm:mt-16">
              {" "}
              {/* Applied margin here */}
              <img
                src="/AboutUs2.jpg"
                alt="Wedding celebration"
                className="w-full h-auto sm:h-56 md:h-96 object-cover shadow-lg transform hover:scale-105 transition-transform duration-300 border-[#CEAC53] border-4"
              />
            </div>
            <div className="col-span-1">
              <img
                src="/AboutUs3.webp"
                alt="Wedding portrait"
                className="w-full h-auto sm:h-56 md:h-96 object-cover shadow-lg transform hover:scale-105 transition-transform duration-300 border-[#CEAC53] border-4"
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left md:ml-5 md:pr-20">
          <h2
            className="text-3xl sm:text-4xl md:text-7xl font-serif mb-4 text-black"
            style={{ fontFamily: "Quintessential, cursive" }}
          >
            About Us
          </h2>
          <p
            className="text-black leading-relaxed text-sm sm:text-base md:text-lg"
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
        </div>
      </div>
    </div>
  );
};

export default AboutIs;
