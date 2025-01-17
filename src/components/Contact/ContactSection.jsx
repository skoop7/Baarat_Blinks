import React from "react";
import { ContactForm } from "./ContactForm";
import { ContactTitle } from "./ContactTitle";

export const ContactSection = () => {
  return (
    <div className="w-full flex justify-between items-center max-w-7xl mx-auto gap-12 mt-[-4.75rem] sm:mt-10  max-h-[80dvh] px-4 ">
      {/* Contact Form Side */}
      <div className="w-full p-8 max-w-[655px] sm:p-12">
        <ContactTitle />
        <ContactForm />
      </div>

      {/* Image Side */}
      <img
        src="/ContactSection.webp"
        alt="Decorated hands with roses"
        className=" h-full object-cover max-h-[600px] hidden sm:block aspect-auto overflow-hidden rounded-2xl"
      />
    </div>
  );
};

export default ContactSection;
