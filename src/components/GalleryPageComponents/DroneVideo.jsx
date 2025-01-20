import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import { getYouTubeVideoId } from "../../utils/youtube"; // Make sure this utility exists

const DroneGallery = ({ photos, featuredPhotoId, onPhotoClick }) => {
  const [playingVideoId, setPlayingVideoId] = useState(null);

  // Use the first photo as default featured if none selected
  const featuredPhoto = featuredPhotoId
    ? photos.find((p) => p.id === featuredPhotoId)
    : photos[0];

  const remainingPhotos = photos.filter((p) => p.id !== featuredPhoto.id);

  // Autoplay featured video on mount
  useEffect(() => {
    if (featuredPhoto) {
      setPlayingVideoId(featuredPhoto.id);
    }
  }, [featuredPhoto]);

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

export default DroneGallery;
