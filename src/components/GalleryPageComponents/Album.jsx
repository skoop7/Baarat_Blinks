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

export default AlbumCollage;
