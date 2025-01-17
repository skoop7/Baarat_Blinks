import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { cn } from "../../utils/cn";

export default function Hero({
  imageUrl,
  className,
  containerClassName,
  bgPosition,
  title = "",
}) {
  return (
    <div
      className={cn(
        "relative flex justify-center items-center w-full h-screen overflow-hidden bg-cover",
        containerClassName
      )}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: bgPosition,
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <Navbar /> */}
      <h1 className={`text-black font-quintessential  ${className}`}>
        {title}
      </h1>
    </div>
  );
}
