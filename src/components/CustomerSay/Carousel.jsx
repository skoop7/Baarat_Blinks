import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CarouselSlide } from "./CarouselSlide";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Carousel({ videos }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredVideoId, setHoveredVideoId] = useState(null);
  const [expandedVideoId, setExpandedVideoId] = useState(null);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRefs = useRef([]);
  const carouselRef = useRef(null);

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-movement effect
  useEffect(() => {
    if (
      hoveredVideoId !== null ||
      expandedVideoId !== null ||
      isAutoPlayPaused ||
      isVideoPlaying
    )
      return;

    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [hoveredVideoId, expandedVideoId, isAutoPlayPaused, isVideoPlaying]);

  // Pause video when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        expandedVideoId &&
        carouselRef.current &&
        !carouselRef.current.contains(event.target)
      ) {
        pauseVideo(expandedVideoId);
        setExpandedVideoId(null);
      }

      // Handle mobile-specific behavior to pause videos
      if (isMobile && videoRefs.current) {
        const isClickInsideCarousel = carouselRef.current?.contains(
          event.target
        );
        if (!isClickInsideCarousel) {
          Object.values(videoRefs.current).forEach((videoElement) => {
            if (videoElement) {
              videoElement.pause();
              setIsVideoPlaying(false);
            }
          });
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [expandedVideoId, isMobile]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setIsAutoPlayPaused(true);
    setTimeout(() => setIsAutoPlayPaused(false), 5000);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % videos.length);
    setIsAutoPlayPaused(true);
    setTimeout(() => setIsAutoPlayPaused(false), 5000);
  };

  const handleVideoHover = (videoId, isEntering) => {
    if (!isMobile) {
      setHoveredVideoId(isEntering ? videoId : null);
    }
  };

  const handleVideoClick = (videoId) => {
    if (isMobile) {
      const videoElement = videoRefs.current[videoId];
      if (videoElement) {
        if (videoElement.paused) {
          // Pause all other videos first
          Object.entries(videoRefs.current).forEach(([id, element]) => {
            if (id !== videoId && element) {
              element.pause();
            }
          });
          playVideo(videoId);
        } else {
          pauseVideo(videoId);
        }
      }
    } else {
      if (expandedVideoId === videoId) {
        pauseVideo(videoId);
        setExpandedVideoId(null);
      } else {
        if (expandedVideoId) pauseVideo(expandedVideoId);
        playVideo(videoId);
        setExpandedVideoId(videoId);
      }
    }
  };

  const playVideo = (videoId) => {
    const videoElement = videoRefs.current[videoId];
    if (videoElement) {
      videoElement.muted = false;
      videoElement
        .play()
        .then(() => {
          setIsVideoPlaying(true);
        })
        .catch((error) => {
          console.error("Error playing video:", error);
          setIsVideoPlaying(false);
        });

      videoElement.addEventListener("ended", () => handleVideoEnd(videoId));
      videoElement.addEventListener("pause", () => handleVideoPause(videoId));
    }
  };

  const pauseVideo = (videoId) => {
    const videoElement = videoRefs.current[videoId];
    if (videoElement) {
      videoElement.pause();
      handleVideoPause(videoId);
    }
  };

  const handleVideoEnd = (videoId) => {
    if (isMobile) {
      setIsVideoPlaying(false);
    }
  };

  const handleVideoPause = (videoId) => {
    if (isMobile) {
      setIsVideoPlaying(false);
    }
  };

  // Determine visible videos based on screen size
  const getVisibleVideos = () => {
    if (isMobile) {
      const video = videos[currentIndex];
      return [
        {
          ...video,
          position: 0,
          isPlaying: isVideoPlaying,
          isExpanded: false,
        },
      ];
    } else {
      const result = [];
      for (let i = -1; i <= 1; i++) {
        const index = (currentIndex + i + videos.length) % videos.length;
        result.push({
          ...videos[index],
          position: i,
          isPlaying:
            videos[index].id === hoveredVideoId ||
            videos[index].id === expandedVideoId,
          isExpanded: videos[index].id === expandedVideoId,
        });
      }
      return result;
    }
  };

  return (
    <motion.div
      ref={carouselRef}
      className="w-full max-w-7xl mx-auto"
      initial={false}
    >
      <motion.div
        className={`flex items-center justify-center gap-10 ${
          isMobile ? "flex-col" : ""
        }`}
        initial={false}
      >
        <AnimatePresence initial={false} mode="wait">
          {getVisibleVideos().map((video) => (
            <CarouselSlide
              key={video.id}
              video={video}
              videoRef={(el) => {
                if (el) {
                  el.dataset.videoId = video.id;
                  videoRefs.current[video.id] = el;
                }
              }}
              onHover={(isEntering) => handleVideoHover(video.id, isEntering)}
              onClick={() => handleVideoClick(video.id)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="pointer-events-auto absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm shadow-lg hover:bg-white transition-colors duration-200 z-50 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800 group-hover:scale-110 transition-transform duration-200" />
      </button>
      <button
        onClick={handleNext}
        className="pointer-events-auto p-2 absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full bg-white/20 backdrop-blur-sm shadow-lg hover:bg-white transition-colors duration-200 z-50 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-800 group-hover:scale-110 transition-transform duration-200" />
      </button>
    </motion.div>
  );
}
