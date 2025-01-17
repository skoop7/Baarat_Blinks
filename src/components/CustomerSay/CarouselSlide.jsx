import React from "react";
import { motion } from "framer-motion";
import { VideoOverlay } from "./VideoOverlay";

export const CarouselSlide = ({ video, videoRef, onHover, onClick }) => {
  const isCenter = video.position === 0;
  const isExpanded = video.isExpanded;

  return (
    <motion.div
      className={`relative group cursor-pointer
        ${
          isExpanded
            ? "w-[800px] aspect-video"
            : isCenter
            ? "w-[600px] aspect-video"
            : "w-[300px] aspect-square"
        }
        ${isExpanded ? "z-30" : isCenter ? "z-20" : "z-10"}
      `}
      initial={false}
      animate={{
        scale: isExpanded ? 1.1 : isCenter ? 1 : 0.95,
        x:
          !isExpanded &&
          (video.position === -1 ? 16 : video.position === 1 ? -16 : 0),
        marginLeft: !isExpanded && video.position === 1 ? "-16px" : "0px",
        marginRight: !isExpanded && video.position === -1 ? "-16px" : "0px",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 50,
      }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      onClick={() => onClick()}
    >
      <motion.div
        className={`w-full h-full rounded-2xl overflow-hidden ${
          isExpanded ? "shadow-2xl" : ""
        }`}
        animate={{
          opacity: isExpanded ? 1 : isCenter ? 1 : 0.7,
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.video
          ref={videoRef}
          className="w-full h-full object-cover"
          animate={{
            scale: isExpanded ? 1 : isCenter ? 1 : 1.1,
          }}
          whileHover={{ scale: isExpanded ? 1 : 1 }}
          transition={{ duration: 0.3 }}
          src={video.url}
          loop
          muted
          playsInline
          preload="auto"
        />
        <VideoOverlay
          title={video.title}
          subtitle={video.subtitle}
          isExpanded={isExpanded}
        />
      </motion.div>
    </motion.div>
  );
};
