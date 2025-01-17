import React from "react";
import Counter from "./Counter";

export default function HelpCouple() {
  return (
    <div className="flex flex-col items-center justify-center mt-5 px-4 mb-5 w-full">
      {/* Title Section */}
      <div className="flex flex-col items-center text-center gap-9 mb-16 w-full">
        <h1
          className="text-4xl lg:text-6xl text-[#102c57]"
          style={{
            fontFamily: "'Quintessential', cursive",
            wordSpacing: "10px",
          }}
        >
          Helping Couples Bring To
        </h1>
        <h1
          className="lg:text-6xl text-4xl text-[#102c57]"
          style={{
            fontFamily: "'Quintessential', cursive",
            wordSpacing: "10px",
          }}
        >
          Life Their Wedding Dreams
        </h1>
      </div>

      {/* Counters Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-16  mt-8 w-full mb-16 ">
        {/* Happy Couples Counter */}
        <div className="flex flex-col items-center gap-2">
          <img
            src="https://i.imghippo.com/files/DmaA1501qVw.png"
            alt="Happy Couples Icon"
            className="h-16 w-16"
          />
          <Counter limit={200} timerLimit={10} />
          <h2
            className="text-2xl text-[#102c57]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Happy Couples
          </h2>
        </div>

        {/* Placeholder for other counters */}
        <div className="flex flex-col items-center gap-2">
          <img
            src="https://i.imghippo.com/files/FflQ3987GyY.png"
            alt="Weddings Icon"
            className="h-16 w-16"
          />
          <Counter limit={5} timerLimit={100} />
          <h2
            className="text-2xl text-[#102c57]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Expertise
          </h2>
        </div>

        <div className="flex flex-col items-center gap-2">
          <img
            src="https://i.imghippo.com/files/qAc3990IPo.png"
            alt="Dreams Realized Icon"
            className="h-16 w-16"
          />
          <Counter limit={20} timerLimit={100} />
          <h2
            className="text-2xl text-[#102c57]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Cities Covered
          </h2>
        </div>
      </div>
    </div>
  );
}
