import React from "react";
import Hero from "../components/Header/Hero";
import AboutIs from "../components/AboutUsPageComponents/AboutIs";
import WhyChooseUs from "../components/AboutUsPageComponents/WhyChooseUs";
import ProgressBars from "../components/AboutUsPageComponents/ProgressBars";
import TeamSection from "../components/AboutUsPageComponents/TeamSection";

export default function AboutUsPage() {
  return (
    <div>
      <Hero
        imageUrl="/AboutUs.webp"
        title="About Us"
        className="text-6xl md:text-8xl lg:text-[10rem] mt-10 "
        containerClassName={"max-h-[600px]"}
        bgPosition={"center center"}
      />
      <AboutIs />
      <WhyChooseUs />
      <ProgressBars />
      <TeamSection />
    </div>
  );
}
