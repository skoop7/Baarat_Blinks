import React from "react";
import Hero from "../components/Header/Hero";
import Section2 from "../components/ServicePageComponents/Section2";

export default function ServicePage() {
  return (
    <div>
      <Hero
        imageUrl="/ServicesBG2.JPG"
        title="Services"
        className="text-6xl md:text-8xl  lg:text-[10rem] mt-10 "
        containerClassName={"max-h-[600px]"}
        bgPosition={"center center"}
      />

      {/* Sections with IDs for scrolling */}
      <Section2
        id="pre-wedding"
        title="PRE-WEDDING FILMS"
        para="Our pre-wedding shoots are tailored to your unique love story, capturing intimate and memorable moments. Whether it’s a scenic outdoor shoot or a cozy indoor session, we ensure the images reflect your personal style and connection as a couple."
        imageURL="/Image3.webp"
        buttonText="BOOK YOUR SHOOT"
      />
      <Section2
        id="photograph"
        title="PHOTOGRAPHY"
        para="Our photography captures every precious moment of your wedding, from the first look to the last dance. We combine artistic vision and storytelling to create beautiful, timeless photos that preserve the emotions and essence of your special day."
        imageURL="/Image4.webp"
        buttonText="BOOK YOUR SHOOT"
        isReversed={true}
      />
      <Section2
        id="drone"
        title="VIDEOGRAPHY"
        para="Our cinematic videography services bring your wedding day to life, capturing every emotional moment in motion. From vows to dances, we craft a story that allows you to relive your wedding day with all its beauty and emotion."
        imageURL="/Image2.webp"
        buttonText="BOOK YOUR SHOOT"
      />

      <Section2
        id="album"
        title="CUSTOM WEDDING ALBUMS"
        para="Our custom wedding albums preserve your special moments with timeless designs. Crafted with high-quality materials, each album tells the story of your day with a blend of elegance and personal style, ensuring your memories are beautifully kept."
        imageURL="/Image1.webp"
        buttonText="BOOK YOUR SHOOT"
        isReversed={true}
      />

      <Section2
        id="pre-wedding"
        title="DRONE SHOOTING"
        para=" Experience your wedding from a breathtaking aerial view with our drone services. We capture stunning aerial shots that add a unique perspective to your celebration, making your memories even more extraordinary."
        imageURL="/Image5.webp"
        buttonText="BOOK YOUR SHOOT"
      />
    </div>
  );
}
