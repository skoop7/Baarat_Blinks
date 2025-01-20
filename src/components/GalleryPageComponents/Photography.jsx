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
    url: photos[10]?.url || "",
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

export default PhotoGrid;
