import { Carousel } from "./Carousel";

const videos = [
  {
    id: 1,
    // url: "https://res.cloudinary.com/dpohktoqt/video/upload/v1736001922/akmxvnb9wivtfmrp0dee.mp4",
    url: "https://res.cloudinary.com/dbg4rrelv/video/upload/v1740140880/aghrogrhxgbmtbaj6pja.mp4",
    thumbnailUrl: "/Test2.webp",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/dbg4rrelv/video/upload/v1740140869/syrkwjtec4cu8of7obvg.mp4",
    thumbnailUrl: "/Test1.webp",
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/dbg4rrelv/video/upload/v1740140869/syrkwjtec4cu8of7obvg.mp4",
    thumbnailUrl: "/Test1.webp",
  },
];

function CarouselSection() {
  return (
    <div className=" lg:-mt-20">
      <h1
        className="text-4xl sm:text-5xl lg:text-6xl text-center font-serif text-navy-800 mb-4 sm:mb-14 text-[#102c57]"
        style={{ fontFamily: "Quintessential, cursive" }}
      >
        What People Say About Us
      </h1>
      <div className=" flex items-center justify-center py-8 overflow-hidden w-full relative">
        <Carousel videos={videos} />
      </div>
      <div className="flex items-center justify-center mt-12 mb-20">
        {/* <button
          className={`inline-flex items-center gap-2 px-16 py-3 text-navy-800  text-lg border-2 border-black rounded-full hover:bg-navy-50  shadow-sm shadow-black hover:scale-105 transition-transform duration-300 font-semibold`}
        >
          See all reviews
        </button> */}
      </div>
    </div>
  );
}

export default CarouselSection;
