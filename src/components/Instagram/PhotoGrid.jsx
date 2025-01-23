export function PhotoGrid({ photos }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1
        className="text-4xl sm:text-5xl lg:text-6xl text-center font-serif text-navy-800 mb-2 sm:mb-8"
        style={{ fontFamily: "Quintessential, cursive" }}
      >
        Instagram
      </h1>
      <div className="grid grid-cols-4 gap-4 mt-20">
        {/* First column - spans 2 rows */}
        <div className="row-span-2 mr-5">
          <a href="https://www.instagram.com/baratblinks?igsh=cTEwOHM3ZXQ4NWJu">
            <img
              src="/Pic4.jpg"
              alt=""
              className="w-full h-full object-cover rounded-sm"
            />
          </a>
        </div>

        {/* Second column */}
        <div>
          <a href="https://www.instagram.com/baratblinks?igsh=cTEwOHM3ZXQ4NWJu">
            <img
              src="/Pic3.jpg"
              alt=""
              className="w-full aspect-square object-cover rounded-sm"
            />
          </a>
        </div>

        {/* Third column - spans 2 rows */}
        <div className="row-span-2 mx-5">
          <a href="https://www.instagram.com/baratblinks?igsh=cTEwOHM3ZXQ4NWJu">
            <img
              src="/Pic1.jpg"
              alt=""
              className="w-full h-full object-cover rounded-sm"
            />
          </a>
        </div>

        {/* Fourth column */}
        <div>
          <a href="https://www.instagram.com/baratblinks?igsh=cTEwOHM3ZXQ4NWJu">
            <img
              src="/Pic2.jpg"
              alt=""
              className="w-full aspect-square object-cover rounded-sm"
            />
          </a>
        </div>
        {/* Fourth column (previously third) */}
        <div>
          <a href="https://www.instagram.com/baratblinks?igsh=cTEwOHM3ZXQ4NWJu">
            <img
              src="/Pic5.jpg"
              alt=""
              srcset=""
              className="w-full aspect-square object-cover rounded-sm"
            />
          </a>
        </div>
        {/* Second column - second row */}
        <div>
          <a href="https://www.instagram.com/baratblinks?igsh=cTEwOHM3ZXQ4NWJu">
            <img
              src="/Pic6.jpg"
              alt=""
              srcset=""
              className="w-full aspect-square object-cover rounded-sm"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
