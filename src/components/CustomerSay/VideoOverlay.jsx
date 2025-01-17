import React from "react";
import { motion } from "framer-motion";

export const VideoOverlay = ({ title, subtitle, isExpanded }) => {
  return (
    <div
      className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
      flex flex-col justify-end p-6 ${
        isExpanded ? "opacity-100" : "opacity-0 group-hover:opacity-100"
      } transition-all duration-500`}
    >
      <motion.h3
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: isExpanded ? 0 : 20, opacity: isExpanded ? 1 : 0 }}
        whileHover={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-white text-lg font-medium"
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: isExpanded ? 0 : 20, opacity: isExpanded ? 1 : 0 }}
        whileHover={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="text-white/80 text-sm mt-1"
      >
        {subtitle}
      </motion.p>
    </div>
  );
};
