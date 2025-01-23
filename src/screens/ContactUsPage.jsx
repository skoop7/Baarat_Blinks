import React from "react";
import ContactForm from "../components/ContactUsPageComponents/ContactForm";
import Hero from "../components/Header/Hero";
import ContactLabel from "../components/ContactUsPageComponents/ContactLabel";

export default function ContactUsPage() {
  return (
    <div>
      <Hero
        imageUrl="/ContactUsBG.webp"
        title="Contact Us"
        className="text-6xl md:text-8xl lg:text-[10rem] mt-10 "
        containerClassName={"max-h-[600px]"}
        // style={{ backgroundPosition: "50px 100px" }}
        bgPosition={"center center"}
      />
      <ContactForm />
      <ContactLabel />
    </div>
  );
}
