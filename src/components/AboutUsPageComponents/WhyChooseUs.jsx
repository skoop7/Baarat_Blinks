import React from "react";
import { Camera, Video, Heart } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#F3E9E0] py-16 my-10 rounded-2xl">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl lg:text-6xl text-center mb-12 font-serif"
          style={{ fontFamily: "Quintessential, cursive" }}
        >
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Professional Photography */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 mb-4 text-[#4A90E2]">
              <img src="/Choose1.webp" alt="Camera" />
            </div>
            <h3 className="text-3xl font-semibold mb-2">Artistic Vision</h3>
            <p className="text-gray-600">
              We capture your day’s essence, creating timeless stories with
              elegance and emotion.
            </p>
          </div>

          {/* Video Graphy */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 mb-4 text-[#4A90E2]">
              <img src="/Choose2.webp" alt="" />
            </div>
            <h3 className="text-3xl font-semibold mb-2">Storytelling</h3>
            <p className="text-gray-600">
              Every photo tells a unique story, capturing the emotions and joy
              of your big day.
            </p>
          </div>

          {/* Pre Wedding Shoot */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 mb-4 text-[#4A90E2]">
              <img src="/Choose3.webp" alt="" className="h-20 w-20" />
            </div>
            <h3 className="text-3xl font-semibold mb-2">Timelessness</h3>
            <p className="text-gray-600">
              Our work ensures your wedding memories remain fresh and cherished
              forever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
