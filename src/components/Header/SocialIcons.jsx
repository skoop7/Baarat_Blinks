import React from "react";

export const SocialIcons = () => {
  const phoneNumber = "9456221688";
  const preMsg = "Hello! I have a question about your services.";
  const WhatsAppURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    preMsg
  )}`;
  return (
    <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-4">
      <a href="https://www.facebook.com/vedant.sharma.9469" target="_blank">
        <SocialIcon
          src="/facebook.png"
          alt="Logo 1"
          className="sm:block hidden"
        />
      </a>

      <a
        href="https://www.instagram.com/baratblinks/?igsh=cTEwOHM3ZXQ4NWJu"
        target="_blank"
      >
        <SocialIcon
          src="/instagram.png"
          alt="Logo 2"
          className="sm:block hidden"
        />
      </a>
      <a href={WhatsAppURL} target="_blank" rel="noopener noreferrer">
        <SocialIcon
          src="/whatsapp.png"
          alt="Logo 3"
          className="sm:block hidden"
        />
      </a>
    </div>
  );
};

const SocialIcon = ({ src, alt, className = "" }) => (
  <img
    src={src}
    alt={alt}
    className={`h-5 w-auto sm:h-6 md:h-8 lg:h-10 transition-all duration-300 ${className}`}
  />
);
