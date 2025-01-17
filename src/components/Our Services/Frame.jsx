import React from "react";
import { useNavigate } from "react-router-dom";

export default function Frame({
  title,
  imageURL,
  itemPosition = "items-center",
}) {
  const navigate = useNavigate();
  const handleClick = () => {
    const routeName = title.toLowerCase().replace(/\s+/g, "-"); // Converts title to a URL-friendly format
    navigate(`/services/${routeName}`);
  };

  return (
    <div
      className={`flex flex-col justify-center  ${itemPosition}`}
      // onClick={handleClick}
    >
      <div className="border border-black h-[350px] w-[270px]  lg:m-5 mr-[5px] ml-[10px] rounded-t-full relative hover:shadow-xl">
        <img
          src={imageURL}
          alt=""
          className="h-full w-full object-cover rounded-t-full absolute right-4 hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="mt-1 mr-4 px-2">
        <h3
          className="text-black font-medium text-lg md:text-xl"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}
