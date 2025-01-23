import { h1 } from "framer-motion/client";
import React, { useEffect } from "react";

const Instagramegrid = () => {
  useEffect(() => {
    // Load the Instagram embed script
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="sm:mt-24 mt-10">
      <h1
        className="text-4xl sm:text-5xl lg:text-6xl text-center font-serif text-navy-800 mb-2 sm:mb-8"
        style={{ fontFamily: "Quintessential, cursive" }}
      >
        Instagram
      </h1>
      <div className="flex justify-center py-8 lg:px-0 px-2">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/baratblinks/?igsh=MTlmY2QxcW1naHNkNg%3D%3D"
          data-instgrm-version="12"
          style={{
            background: "#FFF",
            border: "0",
            borderRadius: "3px",
            boxShadow:
              "0 0 10px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
            margin: "1px",
            maxWidth: "1140px",
            minWidth: "326px",
            padding: "10px", // Added 'px' unit
            width: "99.375%",
            maxHeight: "100%",
          }}
        >
          <div style={{ padding: "16px" }}>
            <a
              id="main_link"
              href="https://www.instagram.com/baratblinks/?igsh=MTlmY2QxcW1naHNkNg%3D%3D"
              style={{
                background: "#FFFFFF",
                lineHeight: "0",
                padding: "0",
                textAlign: "center",
                textDecoration: "none",
                width: "100%",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#F4F4F4",
                    borderRadius: "50%",
                    height: "40px",
                    marginRight: "14px",
                    width: "40px",
                  }}
                ></div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#F4F4F4",
                      borderRadius: "4px",
                      height: "14px",
                      marginBottom: "6px",
                      width: "100px",
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "#F4F4F4",
                      borderRadius: "4px",
                      height: "14px",
                      width: "60px",
                    }}
                  ></div>
                </div>
              </div>
              <div style={{ padding: "19% 0" }}></div>
              <div
                style={{
                  display: "block",
                  height: "50px",
                  margin: "0 auto 12px",
                  width: "50px",
                }}
              >
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 60 60"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#000000">
                    <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.831,32.258 511.324,34.438 511.179,37.631 C511.034,41.458 511,42.434 511,50 C511,57.565 511.034,58.539 511.179,62.368 C511.324,65.558 511.831,67.738 512.574,69.647 C513.342,71.616 514.368,73.291 516.035,74.958 C517.703,76.625 519.376,77.651 521.349,78.407 C523.257,79.147 525.438,79.656 528.631,79.802 C531.831,79.947 532.853,79.981 541,79.981 C549.148,79.981 550.169,79.947 553.369,79.802 C556.562,79.656 558.743,79.147 560.652,78.407 C562.623,77.651 564.297,76.625 565.965,74.958 C567.633,73.291 568.659,71.616 569.425,69.647 C570.167,67.738 570.674,65.558 570.82,62.368 C570.963,58.539 570.999,57.565 570.999,50 C570.999,42.434 570.963,41.458 570.82,37.631 Z" />
                  </g>
                </svg>
              </div>
              <div style={{ padding: "8px 0" }}></div>
            </a>
          </div>
        </blockquote>
      </div>
    </div>
  );
};

export default Instagramegrid;
