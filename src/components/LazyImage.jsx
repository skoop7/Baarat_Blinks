import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyImage = ({ src, alt, style, className }) => (
  <LazyLoadImage
    src={src}
    alt={alt}
    effect="blur" // You can change the effect to fade or others
    style={style}
    className={className}
  />
);

const Hero = ({ imageUrl, className, containerClassName }) => (
  <div className={containerClassName}>
    <LazyImage src={imageUrl} alt="Hero Image" className={className} />
  </div>
);

export default Hero;
