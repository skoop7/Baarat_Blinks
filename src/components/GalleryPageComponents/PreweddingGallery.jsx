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

export default PreWeddingGallery;
