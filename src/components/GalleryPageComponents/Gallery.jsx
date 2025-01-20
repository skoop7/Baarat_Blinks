import React, { useState } from "react";
import { categories, photos } from "./data";
import PreWeddingGallery from "./PreweddingGallery";
import DroneGallery from "./DroneVideo";
import PhotoGrid from "./Photography";
import VideoGallery from "./VideoGallery";
import AlbumCollage from "./Album";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("drone");
  const [featuredPhotoId, setFeaturedPhotoId] = useState(null);
  const [activeVideoId, setActiveVideoId] = useState("film-1");

  const filteredItems = photos.filter(
    (item) => item.category === activeCategory
  );

  const handlePhotoClick = (photoId) => {
    if (photoId !== "corner-cell" && photoId !== "first-cell") {
      setFeaturedPhotoId(photoId);
    }
  };

  // Fallback if no items exist for the active category
  if (filteredItems.length === 0) {
    return <div>No content available for the selected category.</div>;
  }

  return (
    <div className="container mx-auto px-4 md:px-20 py-8 mb-5">
      {/* Category Buttons */}
      <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-10 my-8 md:my-12 lg:mb-16 justify-center">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setActiveCategory(category.id);
              setFeaturedPhotoId(null);
              if (category.id === "wedding-films") {
                setActiveVideoId("film-1");
              }
            }}
            className={`px-4 md:px-6 lg:px-10 py-2 md:py-3 lg:py-4 rounded-full text-sm md:text-base lg:text-lg font-medium transition-colors
              ${
                activeCategory === category.id
                  ? "bg-[#D2CAB1] text-black text-xl"
                  : "bg-white text-gray-700"
              }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Content Area */}
      {activeCategory === "wedding-films" ? (
        <VideoGallery
          videos={filteredItems}
          activeVideoId={activeVideoId}
          onVideoSelect={setActiveVideoId}
        />
      ) : activeCategory === "album" ? (
        <AlbumCollage
          photos={filteredItems}
          featuredPhotoId={featuredPhotoId}
          onPhotoClick={handlePhotoClick}
        />
      ) : activeCategory === "drone" ? (
        <DroneGallery
          photos={filteredItems}
          featuredPhotoId={featuredPhotoId}
          onPhotoClick={handlePhotoClick}
        />
      ) : activeCategory === "pre-wedding" ? (
        <PreWeddingGallery
          photos={filteredItems}
          featuredPhotoId={featuredPhotoId}
          onPhotoClick={handlePhotoClick}
        />
      ) : (
        <PhotoGrid
          photos={filteredItems}
          featuredPhotoId={featuredPhotoId}
          onPhotoClick={handlePhotoClick}
        />
      )}
    </div>
  );
}
