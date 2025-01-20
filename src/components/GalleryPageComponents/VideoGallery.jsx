import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { getYouTubeVideoId } from "../../utils/youtube";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

export default VideoGallery;
