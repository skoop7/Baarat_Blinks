import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

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
    url: "https://images.unsplash.com/photo-1519741497674-611481863552",
    title: "Wedding Ceremony",
    subtitle: "Indoor ceremony",
  },
  {
    id: 2,
    category: "photography",
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
    title: "Ring Exchange",
  },
  {
    id: 3,
    category: "photography",
    url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
    title: "Bridal Portrait",
  },
  {
    id: 4,
    category: "photography",
    url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a",
    title: "Wedding Party",
  },
  {
    id: 5,
    category: "photography",
    url: "https://images.unsplash.com/photo-1519741497674-611481863552",
    title: "Wedding Ceremony",
    subtitle: "Indoor ceremony",
  },
  {
    id: 6,
    category: "photography",
    url: "https://images.unsplash.com/photo-1519741497674-611481863552",
    title: "Wedding Ceremony",
    subtitle: "Indoor ceremony",
  },
  {
    id: 7,
    category: "photography",
    url: "https://images.unsplash.com/photo-1519741497674-611481863552",
    title: "Wedding Ceremony",
    subtitle: "Indoor ceremony",
  },
  {
    id: 8,
    category: "photography",
    url: "https://images.unsplash.com/photo-1519741497674-611481863552",
    title: "Wedding Ceremony",
    subtitle: "Indoor ceremony",
  },
  {
    id: 9,
    category: "photography",
    url: "https://images.unsplash.com/photo-1519741497674-611481863552",
    title: "Wedding Ceremony",
    subtitle: "Indoor ceremony",
  },
  {
    id: 10,
    category: "photography",
    url: "https://images.unsplash.com/photo-1519741497674-611481863552",
    title: "Wedding Ceremony",
    subtitle: "Indoor ceremony",
  },
  {
    id: 11,
    category: "photography",
    url: "https://images.unsplash.com/photo-1519741497674-611481863552",
    title: "Wedding Ceremony",
    subtitle: "Indoor ceremony",
  },
  {
    id: 12,
    category: "photography",
    url: "https://images.unsplash.com/photo-1519741497674-611481863552",
    title: "Wedding Ceremony",
    subtitle: "Indoor ceremony",
  },

  // Drone
  {
    id: 5,
    category: "drone",
    url: "https://images.unsplash.com/photo-1566139884330-44862b3e6226",
    title: "Aerial Venue Shot",
  },
  {
    id: 6,
    category: "drone",
    url: "https://images.unsplash.com/photo-1467377791767-c929b5dc9a23",
    title: "Landscape View",
  },
  {
    id: 7,
    category: "drone",
    url: "https://images.unsplash.com/photo-1467377791767-c929b5dc9a23",
    title: "Landscape View",
  },
  {
    id: 8,
    category: "drone",
    url: "https://images.unsplash.com/photo-1467377791767-c929b5dc9a23",
    title: "Landscape View",
  },
  {
    id: 9,
    category: "drone",
    url: "https://images.unsplash.com/photo-1467377791767-c929b5dc9a23",
    title: "Landscape View",
  },
  {
    id: 10,
    category: "drone",
    url: "https://images.unsplash.com/photo-1467377791767-c929b5dc9a23",
    title: "Landscape View",
  },
  {
    id: 11,
    category: "drone",
    url: "https://images.unsplash.com/photo-1467377791767-c929b5dc9a23",
    title: "Landscape View",
  },
  {
    id: 12,
    category: "drone",
    url: "https://images.unsplash.com/photo-1467377791767-c929b5dc9a23",
    title: "Landscape View",
  },
  {
    id: 13,
    category: "drone",
    url: "https://images.unsplash.com/photo-1467377791767-c929b5dc9a23",
    title: "Landscape View",
  },

  // Album
  {
    id: 7,
    category: "album",
    url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
    title: "Wedding Album",
  },
  {
    id: 8,
    category: "album",
    url: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0",
    title: "Candid Moments",
  },
  {
    id: 9,
    category: "album",
    url: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0",
    title: "Candid Moments",
  },
  {
    id: 10,
    category: "album",
    url: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0",
    title: "Candid Moments",
  },
  {
    id: 11,
    category: "album",
    url: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0",
    title: "Candid Moments",
  },
  {
    id: 12,
    category: "album",
    url: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0",
    title: "Candid Moments",
  },
  {
    id: 13,
    category: "album",
    url: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0",
    title: "Candid Moments",
  },
  {
    id: 14,
    category: "album",
    url: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0",
    title: "Candid Moments",
  },

  // Pre Wedding
  {
    id: 9,
    category: "pre-wedding",
    url: "https://images.unsplash.com/photo-1591604466107-ec97de577aff",
    title: "Engagement Session",
  },
  {
    id: 22,
    category: "pre-wedding",
    url: "https://images.unsplash.com/photo-1583939411023-14783179e581",
    title: "Pre-Wedding Shoot",
  },
  {
    id: 21,
    category: "pre-wedding",
    url: "https://images.unsplash.com/photo-1591604466107-ec97de577aff",
    title: "Engagement Session",
  },
  {
    id: 20,
    category: "pre-wedding",
    url: "https://images.unsplash.com/photo-1591604466107-ec97de577aff",
    title: "Engagement Session",
  },
  {
    id: 19,
    category: "pre-wedding",
    url: "https://images.unsplash.com/photo-1591604466107-ec97de577aff",
    title: "Engagement Session",
  },
  {
    id: 19,
    category: "pre-wedding",
    url: "https://images.unsplash.com/photo-1591604466107-ec97de577aff",
    title: "Engagement Session",
  },
  {
    id: 19,
    category: "pre-wedding",
    url: "https://images.unsplash.com/photo-1591604466107-ec97de577aff",
    title: "Engagement Session",
  },
  {
    id: 19,
    category: "pre-wedding",
    url: "https://images.unsplash.com/photo-1591604466107-ec97de577aff",
    title: "Engagement Session",
  },
  {
    id: 19,
    category: "pre-wedding",
    url: "https://images.unsplash.com/photo-1591604466107-ec97de577aff",
    title: "Engagement Session",
  },
  {
    id: 19,
    category: "pre-wedding",
    url: "https://images.unsplash.com/photo-1591604466107-ec97de577aff",
    title: "Engagement Session",
  },

  // Wedding Films
  {
    id: 11,
    category: "wedding-films",
    url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Cinematic Moments",
  },
  {
    id: 12,
    category: "wedding-films",
    url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b",
    videoUrl: "https://youtu.be/BRP8pg3leOw",
    title: "Wedding Highlights",
  },
  {
    id: 13,
    category: "wedding-films",
    url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b",
    videoUrl: "https://youtu.be/BRP8pg3leOw",
    title: "Wedding Highlights",
  },
  {
    id: 14,
    category: "wedding-films",
    url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b",
    videoUrl: "https://youtu.be/BRP8pg3leOw",
    title: "Wedding Highlights",
  },
  {
    id: 15,
    category: "wedding-films",
    url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b",
    videoUrl: "https://youtu.be/BRP8pg3leOw",
    title: "Wedding Highlights",
  },
  {
    id: 16,
    category: "wedding-films",
    url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b",
    videoUrl: "https://youtu.be/BRP8pg3leOw",
    title: "Wedding Highlights",
  },
  {
    id: 11,
    category: "wedding-films",
    url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Cinematic Moments",
  },
];

const PreWeddingGallery = ({ photos }) => {
  const preWeddingItems = photos.filter(
    (item) => item.category === "pre-wedding"
  );
  const weddingFilms = photos.filter(
    (item) => item.category === "wedding-films"
  );

  // Combine pre-wedding photos with some wedding films for demonstration
  const combinedItems = [...preWeddingItems, ...weddingFilms.slice(0, 3)];

  return (
    <div className="max-w-[2000px] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {combinedItems.map((item) => (
          <MediaCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const MediaCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isVideo = Boolean(item.videoUrl);

  const handleMouseEnter = (videoElement) => {
    setIsHovered(true);
    if (videoElement) {
      videoElement
        .play()
        .catch((error) => console.log("Autoplay failed:", error));
    }
  };

  const handleMouseLeave = (videoElement) => {
    setIsHovered(false);
    if (videoElement) {
      videoElement.pause();
      videoElement.currentTime = 0;
    }
  };

  return (
    <div
      className="relative aspect-[3/4] rounded-xl overflow-hidden group"
      onMouseEnter={(e) =>
        handleMouseEnter(e.currentTarget.querySelector("video"))
      }
      onMouseLeave={(e) =>
        handleMouseLeave(e.currentTarget.querySelector("video"))
      }
    >
      {isVideo ? (
        <>
          <video
            src={item.videoUrl}
            className="absolute inset-0 w-full h-full object-cover"
            loop
            muted
            playsInline
          />
          {!isHovered && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <Play className="w-12 h-12 text-white" />
            </div>
          )}
        </>
      ) : (
        <img
          src={item.url}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-white text-xl font-semibold mb-2">
            {item.title}
          </h3>
          {item.subtitle && (
            <p className="text-white/80 text-sm">{item.subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const DroneGallery = ({ photos, featuredPhotoId, onPhotoClick }) => {
  const [playingVideoId, setPlayingVideoId] = useState(null);

  // Use the first photo as default featured if none selected
  const featuredPhoto = featuredPhotoId
    ? photos.find((p) => p.id === featuredPhotoId)
    : photos[0];

  const remainingPhotos = photos.filter((p) => p.id !== featuredPhoto.id);

  const handleVideoClick = (photo, e) => {
    e.stopPropagation(); // Prevent triggering parent click handlers
    setPlayingVideoId(playingVideoId === photo.id ? null : photo.id);
    onPhotoClick(photo);
  };

  // Click handler for the container to stop video when clicking outside
  const handleContainerClick = () => {
    setPlayingVideoId(null);
  };

  return (
    <div className="space-y-8" onClick={handleContainerClick}>
      {/* Featured Image/Video Section */}
      <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl">
        {playingVideoId === featuredPhoto.id ? (
          <video
            src={
              featuredPhoto.videoUrl ||
              "https://www.w3schools.com/html/mov_bbb.mp4"
            }
            className="w-full h-full object-cover"
            autoPlay
            controls
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <img
            src={featuredPhoto.url}
            alt={featuredPhoto.title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            onClick={(e) => handleVideoClick(featuredPhoto, e)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h2 className="text-3xl font-bold mb-2 hidden lg:block">
              {featuredPhoto.title}
            </h2>
            {featuredPhoto.subtitle && (
              <p className="text-lg text-gray-200">{featuredPhoto.subtitle}</p>
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
            onClick={(e) => handleVideoClick(photo, e)}
          >
            {playingVideoId === photo.id ? (
              <video
                src={
                  photo.videoUrl || "https://www.w3schools.com/html/mov_bbb.mp4"
                }
                className="w-full h-full object-cover"
                autoPlay
                controls
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            )}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-lg font-semibold">{photo.title}</h3>
                {photo.subtitle && (
                  <p className="text-sm text-gray-200">{photo.subtitle}</p>
                )}
              </div>
            </div>
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

const VideoGallery = ({ videos, activeVideoId, onVideoSelect }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const videosPerPage = 4;
  const totalPages = Math.ceil(videos.length / videosPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleVideos = videos.slice(
    currentPage * videosPerPage,
    (currentPage + 1) * videosPerPage
  );

  return (
    <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto">
      {/* Featured Video Player */}
      <div className="w-full aspect-video bg-black rounded-lg overflow-hidden">
        <video
          key={activeVideoId}
          className="w-full h-full object-cover"
          controls
          autoPlay
          src={videos.find((v) => v.id === activeVideoId)?.videoUrl}
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Video Thumbnails Carousel */}
      <div className="relative">
        <div className="flex items-center">
          {/* Previous Button */}
          <button
            onClick={prevPage}
            className="absolute left-0 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transform -translate-x-1/2"
            aria-label="Previous videos"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Video Thumbnails */}
          <div className="flex gap-4 w-full px-8">
            {visibleVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => onVideoSelect(video.id)}
                className={`w-1/4 cursor-pointer group relative ${
                  video.id === activeVideoId ? "ring-4 ring-[#D2CAB1]" : ""
                }`}
              >
                <div className="aspect-video relative overflow-hidden rounded-lg">
                  <img
                    src={video.url}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-4">
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
            className="absolute right-0 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transform translate-x-1/2"
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
            onClick={() => onPhotoClick(photo)}
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

  const handlePhotoClick = (photo) => {
    if (photo.id !== "first-cell" && photo.id !== "corner-cell") {
      setFeaturedPhotoId(photo.id);
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
        <PreWeddingGallery photos={filteredItems} />
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
