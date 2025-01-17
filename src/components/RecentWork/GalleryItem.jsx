export function GalleryItem({
  imageUrl,
  title,
  className = "",
  isTransitioning,
}) {
  return (
    <div className="flex flex-col">
      <div className={`relative group ${className}`}>
        <div className="relative h-full border-2 border-black shadow-lg transition-all duration-300 group-hover:shadow-xl">
          <img
            key={imageUrl}
            src={imageUrl}
            alt={title}
            className={`absolute top-5 left-5 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 motion-preset-fade-md ${
              isTransitioning ? "motion-out" : "motion-in"
            }`}
          />
        </div>
      </div>
      <div className="mt-6 ml-4 px-2">
        <h3 className="text-black font-medium text-lg md:text-xl">{title}</h3>
      </div>
    </div>
  );
}
