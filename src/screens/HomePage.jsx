import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Header/Hero";
import RecentWork from "../components/RecentWork/RecentWork";
import HelpCouple from "../components/HelpCouple/HelpCouple";
import AboutUs from "../components/AboutUs";
import ServiceSection from "../components/Our Services/ServiceSection";
// import { PhotoGrid } from "../components/Instagram/PhotoGrid";
import CarouselSection from "../components/CustomerSay/CarouselSection";
import ContactSection from "../components/Contact/ContactSection";
import Instagramegrid from "../components/Instagram/Instagramegrid";
import LazyImage from "../components/LazyImage";
// import InstagramGrid from "../components/Instagram/PhotoGrid";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}

      <Hero
        imageUrl="/Hero2.webp"
        className={"text-2xl md:text-6xl lg:text-6xl text-yellow-500  "}
        containerClassName={"min-h-[256px]"}
        bgPosition={"center center"}
      />

      {/* Recent Work Section */}
      <div className="px-4 sm:px-8">
        <RecentWork />
      </div>

      {/* HelpCouple Section */}
      <div className="px-4 sm:px-8">
        <HelpCouple />
      </div>
      <div>
        <ServiceSection />
      </div>

      <div>
        <AboutUs />
      </div>
      <CarouselSection />

      <div>
        <ContactSection />
      </div>

      <div>
        {/* <PhotoGrid /> */}
        <Instagramegrid />
      </div>
    </div>
  );
}
