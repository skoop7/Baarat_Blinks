import React, { useState } from "react";
import Frame from "../Our Services/Frame";
import BookingModal from "./BookingModal";
import ThankYouModal from "./ThankYouModal";

const Section2 = ({
  title,
  para,
  imageURL,
  buttonText,
  isReversed = false,
}) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);

  const backgroundImage = isReversed ? "url('/ServiceBG.webp')" : "bg-white";

  const handleBookingSubmit = (formData) => {
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setIsBookingModalOpen(false);
    setIsThankYouModalOpen(true);
  };

  return (
    <>
      <div
        className={`flex flex-col w-full min-h-[500px] py-8 sm:py-12 md:py-16 
          ${isReversed ? "md:flex-row-reverse" : "md:flex-row"}
          px-4 sm:px-6 md:px-8 lg:px-12`}
        style={{
          backgroundImage: backgroundImage,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Image Section */}
        <div className="w-full md:w-2/5 flex justify-center md:justify-start mb-8 md:mb-0">
          <div className="relative w-4/5 sm:w-3/4 md:w-full">
            {isReversed ? (
              <Frame imageURL={imageURL} itemPosition="items-center" />
            ) : (
              <Frame
                imageURL={imageURL}
                itemPosition="md:ml-52 flex justify-center"
              />
            )}
          </div>
        </div>

        {/* Content Section */}
        <div
          className={`w-full md:w-3/5 flex flex-col items-center md:items-start
            space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12
            ${
              isReversed
                ? "md:pl-8 lg:pl-16 xl:pl-24"
                : "md:pr-8 lg:pr-16 xl:pr-24"
            }
            px-4 sm:px-8 md:px-0
            mt-8 sm:mt-12 md:mt-16`} // Added margin-top here for spacing
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-quintessential text-center md:text-left">
            {title}
          </h2>
          <p
            className="text-black font-poppins leading-relaxed text-sm sm:text-base md:text-lg 
            max-w-2xl md:max-w-none text-justify md:text-left"
          >
            {para}
          </p>
          <button
            className={`mt-6 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold
              ${isReversed ? "bg-black text-white" : "text-black bg-[#eadbc8]"}
              text-sm sm:text-base md:text-lg
              hover:scale-105 transition-transform duration-300
              shadow-md hover:shadow-lg`}
            onClick={() => setIsBookingModalOpen(true)}
          >
            {buttonText}
          </button>
        </div>
      </div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        onSubmit={handleBookingSubmit}
      />

      <ThankYouModal
        isOpen={isThankYouModalOpen}
        onClose={() => setIsThankYouModalOpen(false)}
      />
    </>
  );
};

export default Section2;
