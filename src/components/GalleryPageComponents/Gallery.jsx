import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";

const categories = [
  { id: "drone", name: "Drone" },
  { id: "album", name: "Album" },
  { id: "pre-wedding", name: "Pre Wedding" },
  { id: "photography", name: "Photography" },
  { id: "wedding-films", name: "Wedding Films" },
];

const photos = [
  // Photography
  {
    id: 1,
    category: "photography",
    url: "/WebpPics/img1.webp",
  },
  {
    id: 2,
    category: "photography",
    url: "/WebpPics/img2.webp",
  },
  {
    id: 3,
    category: "photography",
    url: "/WebpPics/img3.webp",
  },
  {
    id: 4,
    category: "photography",
    url: "/WebpPics/img4.webp",
  },
  {
    id: 5,
    category: "photography",
    url: "/WebpPics/img5.webp",
  },
  {
    id: 6,
    category: "photography",
    url: "/WebpPics/img6.webp",
  },
  {
    id: 7,
    category: "photography",
    url: "/WebpPics/img7.webp",
  },
  {
    id: 8,
    category: "photography",
    url: "/WebpPics/img8.webp",
  },
  {
    id: 9,
    category: "photography",
    url: "/WebpPics/img9.webp",
  },
  {
    id: 10,
    category: "photography",
    url: "/WebpPics/img10.webp",
  },
  {
    id: 11,
    category: "photography",
    url: "/WebpPics/img11.webp",
  },
  {
    id: 12,
    category: "photography",
    url: "/WebpPics/img12.webp",
  },

  // Drone
  {
    id: 1,
    url: "/WebpPics/img13.webp",
    category: "drone",

    videoUrl: "https://youtu.be/zQqef-gaGMg",
  },

  {
    id: 7,
    category: "drone",
    url: "/WebpPics/img14.webp",

    videoUrl: "https://youtu.be/RvBqSHqYBNI",
  },
  {
    id: 8,
    category: "drone",
    url: "/WebpPics/img15.webp",

    videoUrl: "https://youtu.be/T53MUN2xKxU",
  },
  {
    id: 9,
    category: "drone",
    url: "/WebpPics/img16.webp",

    videoUrl: "https://youtu.be/XDde99GzwMs",
  },
  {
    id: 10,
    category: "drone",
    url: "/WebpPics/img17.webp",

    videoUrl: "https://youtu.be/e851AeYv6D4",
  },
  {
    id: 11,
    category: "drone",
    url: "/WebpPics/img18.webp",

    videoUrl: "https://youtu.be/zexTofjYWkw",
  },
  {
    id: 12,
    category: "drone",
    url: "/WebpPics/img19.webp",

    videoUrl: "https://youtu.be/oxwi_7AtwMs",
  },
  {
    id: 13,
    category: "drone",
    url: "/WebpPics/img20.webp",

    videoUrl: "https://youtu.be/_XH8jsnpSZk",
  },
  {
    id: 14,
    category: "drone",
    url: "/WebpPics/img21.webp",

    videoUrl: "https://youtu.be/vUNgSruKxZ0",
  },
  // Album
  {
    id: 7,
    category: "album",
    url: "/WebpPics/img14.webp",
  },
  {
    id: 8,
    category: "album",
    url: "/WebpPics/img15.webp",
  },
  {
    id: 9,
    category: "album",
    url: "/WebpPics/img16.webp",
  },
  {
    id: 10,
    category: "album",
    url: "/WebpPics/img17.webp",
  },
  {
    id: 11,
    category: "album",
    url: "/WebpPics/img18.webp",
  },
  {
    id: 12,
    category: "album",
    url: "/WebpPics/img19.webp",
  },
  {
    id: 13,
    category: "album",
    url: "/WebpPics/img20.webp",
  },
  {
    id: 14,
    category: "album",
    url: "/WebpPics/img21.webp",
  },

  // Pre Wedding
  {
    id: 9,
    category: "pre-wedding",
    url: "/WebpPics/img22.webp",
  },
  {
    id: 22,
    category: "pre-wedding",
    url: "/WebpPics/img23.webp",
  },
  {
    id: 21,
    category: "pre-wedding",
    url: "/WebpPics/img24.webp",
  },
  {
    id: 20,
    category: "pre-wedding",
    url: "/WebpPics/img25.webp",
  },
  {
    id: 23,
    category: "pre-wedding",
    url: "/WebpPics/img26.webp",
  },
  {
    id: 24,
    category: "pre-wedding",
    url: "/WebpPics/img27.webp",
  },
  {
    id: 25,
    category: "pre-wedding",
    url: "/WebpPics/img28.webp",
  },
  {
    id: 26,
    category: "pre-wedding",
    url: "/WebpPics/img29.webp",
  },
  {
    id: 27,
    category: "pre-wedding",
    url: "/WebpPics/img30.webp",
  },
  {
    id: 28,
    category: "pre-wedding",
    url: "/WebpPics/img31.webp",
  },
  {
    id: 29,
    category: "pre-wedding",
    url: "/WebpPics/img32.webp",
  },
  {
    id: 30,
    category: "pre-wedding",
    url: "/WebpPics/img33.webp",
  },
  {
    id: 31,
    category: "pre-wedding",
    url: "/WebpPics/img34.webp",
  },
  {
    id: 32,
    category: "pre-wedding",
    url: "/WebpPics/img35.webp",
  },
  {
    id: 33,
    category: "pre-wedding",
    url: "/WebpPics/img36.webp",
  },

  // Wedding Films
  {
    id: 11,
    category: "wedding-films",
    url: "/WebpPics/img20.webp",
    videoUrl: "https://youtu.be/zQqef-gaGMg",
  },
  {
    id: 12,
    category: "wedding-films",
    url: "/WebpPics/img21.webp",
    videoUrl: "https://youtu.be/RvBqSHqYBNI",
  },
  {
    id: 13,
    category: "wedding-films",
    url: "/WebpPics/img30.webp",
    videoUrl: "https://youtu.be/RjRI5iuCGHk",
  },
  {
    id: 14,
    category: "wedding-films",
    url: "/WebpPics/img23.webp",
    videoUrl: "https://youtu.be/Gv661zH6rlI",
  },
  {
    id: 15,
    category: "wedding-films",
    url: "/WebpPics/img24.webp",
    videoUrl: "https://youtu.be/bCGPy4-9FMY",
  },
  {
    id: 16,
    category: "wedding-films",
    url: "/WebpPics/img25.webp",
    videoUrl: "https://youtu.be/Hqh3tRl_2GM",
  },
];

const PreWeddingGallery = ({ photos, featuredPhotoId, onPhotoClick }) => {
  const displayPhotos = [];
  const featuredPhoto = featuredPhotoId
    ? photos.find((p) => p.id === featuredPhotoId)
    : photos[0];

  // Get non-featured photos
  const nonFeaturedPhotos = photos.filter((p) => p.id !== featuredPhoto.id);

  // Calculate how many photos we need (4 rows x 4 cols = 16 photos)
  const totalPhotosNeeded = 16;

  // First 4 photos before the featured spot
  for (let i = 0; i < 4 && i < nonFeaturedPhotos.length; i++) {
    displayPhotos.push(nonFeaturedPhotos[i]);
  }

  // Add the featured photo at index 4
  displayPhotos.push(featuredPhoto);

  // Add remaining photos without repetition
  let currentIndex = 4; // Start after the photos we've already added
  while (
    displayPhotos.length < totalPhotosNeeded - 1 &&
    currentIndex < nonFeaturedPhotos.length
  ) {
    displayPhotos.push(nonFeaturedPhotos[currentIndex]);
    currentIndex++;
  }

  // If we still need more photos and have run out of unique ones,
  // fill with placeholder objects
  while (displayPhotos.length < totalPhotosNeeded - 1) {
    displayPhotos.push({
      id: `placeholder-${displayPhotos.length}`,
      url: featuredPhoto.url,
      title: "Gallery Image",
    });
  }

  const featuredPhotoIndex = 4;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
      {displayPhotos.map((photo, index) => {
        const isFeatured = index === featuredPhotoIndex;

        const gridClass = isFeatured
          ? `md:col-span-2 md:row-span-3 lg:col-span-2 lg:row-span-3 lg:col-start-2 lg:row-start-1`
          : "";

        return (
          <div
            key={photo.id}
            onClick={() => onPhotoClick(photo.id)}
            className={`relative overflow-hidden rounded-lg group cursor-pointer ${gridClass}`}
          >
            <img
              src={photo.url || ""}
              alt={photo.title || "No Image Available"}
              className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-110
                ${isFeatured ? "object-center" : ""}`}
            />
            {photo.title && (
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <h3
                    className={`font-semibold ${
                      isFeatured
                        ? "text-lg md:text-xl lg:text-2xl"
                        : "text-base md:text-lg"
                    }`}
                  >
                    {photo.title}
                  </h3>
                  {photo.subtitle && (
                    <p
                      className={`mt-1 ${
                        isFeatured
                          ? "text-sm md:text-base"
                          : "text-xs md:text-sm"
                      }`}
                    >
                      {photo.subtitle}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

import YouTube from "react-youtube";
import { getYouTubeVideoId } from "../../utils/youtube";

const DroneGallery = ({ photos, featuredPhotoId, onPhotoClick }) => {
  const [playingVideoId, setPlayingVideoId] = useState(null);

  // Use the first photo as default featured if none selected
  const featuredPhoto = featuredPhotoId
    ? photos.find((p) => p.id === featuredPhotoId)
    : photos[0];

  const remainingPhotos = photos.filter((p) => p.id !== featuredPhoto.id);

  const handleVideoClick = (photo) => {
    setPlayingVideoId(photo.id);
    onPhotoClick(photo.id);
  };

  const renderVideo = (photo) => {
    const videoId = getYouTubeVideoId(photo.videoUrl);

    if (!videoId) return null;

    return (
      <YouTube
        videoId={videoId}
        className="w-full h-full"
        opts={{
          width: "100%",
          height: "100%",
          playerVars: {
            autoplay: 1,
            modestbranding: 1,
            rel: 0,
            controls: 1,
          },
        }}
        onEnd={() => setPlayingVideoId(null)}
      />
    );
  };

  return (
    <div className="space-y-8">
      {/* Featured Image/Video Section */}
      <div className="relative w-full overflow-hidden rounded-2xl bg-black">
        <div className="aspect-square lg:aspect-[21/9]">
          {playingVideoId === featuredPhoto.id ? (
            renderVideo(featuredPhoto)
          ) : (
            <div
              className="relative w-full h-full cursor-pointer group"
              onClick={() => handleVideoClick(featuredPhoto)}
            >
              <img
                src={featuredPhoto.url}
                alt={featuredPhoto.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-24 h-24 lg:w-20 lg:h-20 bg-white/30 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[20px] lg:border-t-[15px] border-t-transparent border-l-[32px] lg:border-l-[25px] border-l-white border-b-[20px] lg:border-b-[15px] border-b-transparent ml-2" />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none">
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {featuredPhoto.title}
            </h2>
            {featuredPhoto.subtitle && (
              <p className="text-base md:text-lg text-gray-200">
                {featuredPhoto.subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {remainingPhotos.map((photo) => (
          <div
            key={photo.id}
            className="group cursor-pointer relative aspect-video overflow-hidden rounded-lg"
            onClick={() => handleVideoClick(photo)}
          >
            {playingVideoId === photo.id ? (
              renderVideo(photo)
            ) : (
              <>
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                  </div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-lg font-semibold">{photo.title}</h3>
                    {photo.subtitle && (
                      <p className="text-sm text-gray-200">{photo.subtitle}</p>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const AlbumCollage = ({ photos }) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-4 max-w-7xl mx-auto">
      {/* Large featured image */}
      <div className="col-span-2 row-span-2 aspect-square relative group">
        <img
          src={photos[0]?.url}
          alt={photos[0]?.title}
          className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
          <div className="text-white text-center p-4">
            <h3 className="font-semibold text-xl">{photos[0]?.title}</h3>
          </div>
        </div>
      </div>

      {/* Vertical image */}
      {/* Vertical image */}
      <div
        className="col-span-1 row-span-2 relative group"
        style={{ height: "auto" }}
      >
        <img
          src={photos[1]?.url}
          alt={photos[1]?.title}
          className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
          <div className="text-white text-center p-4">
            <h3 className="font-semibold text-lg">{photos[1]?.title}</h3>
          </div>
        </div>
      </div>

      {/* Small square images */}
      {photos.slice(2).map((photo, index) => (
        <div
          key={photo.id}
          className={`aspect-square relative group ${
            index === 0 ? "md:col-span-1" : ""
          }`}
        >
          <img
            src={photo.url}
            alt={photo.title}
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
            <div className="text-white text-center p-4">
              <h3 className="font-semibold text-base">{photo.title}</h3>
            </div>
          </div>
        </div>
      ))}

      {/* Fill remaining grid spaces with placeholder images if needed */}
      {Array.from({ length: Math.max(0, 8 - photos.length) }).map(
        (_, index) => (
          <div
            key={`placeholder-${index}`}
            className="aspect-square bg-gray-100 rounded-lg"
          />
        )
      )}
    </div>
  );
};

// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import YouTube from 'react-youtube';

const VideoGallery = ({
  videos,
  activeVideoId: propActiveVideoId,
  onVideoSelect,
}) => {
  // Use the provided activeVideoId or default to the first video's ID
  const activeVideoId =
    propActiveVideoId || (videos.length > 0 ? videos[0].id : null);
  const [currentPage, setCurrentPage] = useState(0);
  const videosPerPage = 4;
  const mobileVideosPerPage = 1;
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const effectiveVideosPerPage = isMobile ? mobileVideosPerPage : videosPerPage;
  const totalPages = Math.ceil(videos.length / effectiveVideosPerPage);

  // Select first video when component mounts if no video is selected
  useEffect(() => {
    if (!propActiveVideoId && videos.length > 0) {
      onVideoSelect(videos[0].id);
    }
  }, []);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleVideos = videos.slice(
    currentPage * effectiveVideosPerPage,
    (currentPage + 1) * effectiveVideosPerPage
  );

  const activeVideo = videos.find((v) => v.id === activeVideoId) || videos[0];
  const activeVideoYouTubeId = activeVideo
    ? getYouTubeVideoId(activeVideo.videoUrl)
    : getYouTubeVideoId(videos[0]?.videoUrl);

  return (
    <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto">
      {/* Featured Video Player */}
      <div className="w-full aspect-video bg-black rounded-lg overflow-hidden">
        <YouTube
          videoId={activeVideoYouTubeId}
          className="w-full h-full"
          opts={{
            width: "100%",
            height: "100%",
            playerVars: {
              autoplay: 1,
              modestbranding: 1,
              rel: 0,
              controls: 1,
            },
          }}
        />
      </div>

      {/* Video Thumbnails Carousel */}
      <div className="relative">
        <div className="flex items-center">
          {/* Previous Button */}
          <button
            onClick={prevPage}
            className="absolute left-2 md:left-0 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transform md:-translate-x-1/2"
            aria-label="Previous videos"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Video Thumbnails */}
          <div className="flex gap-4 w-full px-4 md:px-8 overflow-hidden">
            {visibleVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => onVideoSelect(video.id)}
                className={`w-full md:w-1/4 min-w-full md:min-w-0 cursor-pointer group relative ${
                  video.id === activeVideoId ? "ring-4 ring-[#D2CAB1]" : ""
                }`}
              >
                <div className="aspect-video relative overflow-hidden rounded-lg">
                  <img
                    src={video.url}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                    </div>
                    <div className="absolute bottom-0 left-0 text-white text-center p-4">
                      <h3 className="font-semibold text-lg">{video.title}</h3>
                      {video.subtitle && (
                        <p className="mt-1 text-sm">{video.subtitle}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextPage}
            className="absolute right-2 md:right-0 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transform md:translate-x-1/2"
            aria-label="Next videos"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Page Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentPage === index
                  ? "bg-[#D2CAB1] w-4"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const PhotoGrid = ({ photos, featuredPhotoId, onPhotoClick }) => {
  const displayPhotos = [];
  const featuredPhoto = featuredPhotoId
    ? photos.find((p) => p.id === featuredPhotoId)
    : photos[0];

  displayPhotos.push({ ...photos[0], id: "first-cell" });
  const remainingPhotos = photos.filter((p) => p.id !== featuredPhoto.id);
  displayPhotos.push(...remainingPhotos);

  while (displayPhotos.length < 12) {
    displayPhotos.push({
      ...photos[0],
      id: `placeholder-${displayPhotos.length}`,
    });
  }

  displayPhotos.push({
    id: "corner-cell",
    url: photos[0]?.url || "",
    title: "Corner Highlight",
  });

  const featuredPhotoIndex = 6;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
      {displayPhotos.map((photo, index) => {
        const isFeatured = index === featuredPhotoIndex;
        const isFirstCell = index === 0;
        const isLastCell = index === displayPhotos.length - 1;

        const displayPhoto = isFeatured ? featuredPhoto : photo;

        const gridClass = isFeatured
          ? `md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 lg:col-start-2 lg:row-start-2`
          : "";

        const lastCellClass = isLastCell ? "hidden lg:block" : "";

        return (
          <div
            key={photo.id}
            onClick={() => onPhotoClick(photo.id)}
            className={`relative overflow-hidden rounded-lg group cursor-pointer ${gridClass} ${lastCellClass}`}
          >
            <img
              src={displayPhoto.url || ""}
              alt={displayPhoto.title || "No Image Available"}
              className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-110
                ${isFeatured ? "object-center" : ""}`}
            />
            {displayPhoto.title && (
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <h3
                    className={`font-semibold ${
                      isFeatured
                        ? "text-lg md:text-xl lg:text-2xl"
                        : "text-base md:text-lg"
                    }`}
                  >
                    {displayPhoto.title}
                  </h3>
                  {displayPhoto.subtitle && (
                    <p
                      className={`mt-1 ${
                        isFeatured
                          ? "text-sm md:text-base"
                          : "text-xs md:text-sm"
                      }`}
                    >
                      {displayPhoto.subtitle}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

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
