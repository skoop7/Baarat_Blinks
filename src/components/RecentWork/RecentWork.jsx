import { useNavigate } from "react-router-dom";
import { EnhancedGalleryItem } from "./EnhancedGalleryItem";
import { ArrowRight } from "lucide-react";

function RecentWork() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-8 pr-[30px] pl-[10px] lg:py-16 px-4 lg:px-8 mb-10 lg:mb-5">
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-4xl lg:text-6xl text-center font-serif text-navy-800 mb-12 sm:mb-16 text-[#102c57]"
          style={{ fontFamily: "Quintessential, cursive" }}
        >
          Our Recent Work
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 gap-y-16">
          <EnhancedGalleryItem
            position={1}
            initialImage="/Work1.webp"
            title="Love before vows"
            className="h-[300px] sm:h-[350px] lg:h-[400px]"
          />

          <EnhancedGalleryItem
            position={2}
            initialImage="/Work2.webp"
            title="Bridal Glow"
            className="h-[200px] sm:h-[175px] lg:h-[200px]"
          />

          <EnhancedGalleryItem
            position={3}
            initialImage="/Work5.webp"
            title="Romantic Chapter"
            className="h-[300px] sm:h-[350px] lg:h-[400px]"
          />

          <EnhancedGalleryItem
            position={4}
            initialImage="/Work4.webp"
            title="Engagement Elegance"
            className="h-[300px] sm:h-[350px] lg:h-[400px]"
          />

          <EnhancedGalleryItem
            position={5}
            initialImage="/Work3.webp"
            title="The love Journey"
            className="h-[400px] sm:h-[525px] lg:h-[600px] sm:-mt-[175px] lg:-mt-[200px] sm:row-span-2"
          />

          <EnhancedGalleryItem
            position={6}
            initialImage="/Work6.webp"
            title="Delight Bride"
            className="h-[300px] sm:h-[350px] lg:h-[400px]"
          />
        </div>

        <div className="flex items-center justify-center sm:mt-20 my-10">
          <button
            className="inline-flex items-center gap-2 px-6 sm:px-24 py-3 text-navy-800 font-medium text-lg border-2 border-black rounded-full hover:bg-navy-50  shadow-sm shadow-black hover:scale-105 transition-transform duration-300"
            onClick={() => navigate("/gallery")}
          >
            See More
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecentWork;
