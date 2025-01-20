import React from "react";
import Gallery from "../components/GalleryPageComponents/Gallery";
import Hero from "../components/Header/Hero";

export default function GalleryPage() {
  return (
    <div>
      <Hero
        imageUrl="/GalleryBG.png"
        title="Gallery"
        className="text-6xl md:text-8xl lg:text-[10rem] mt-10 "
        containerClassName={"max-h-[600px]"}
        bgPosition={"center center"}
      />
      <Gallery />
    </div>
  );
}
