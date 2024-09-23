import React from "react";

export default function PlusMinusButton({ isHighlighted, isExpanded }) {
  return (
    <button
      className={`border-primaryTone group-hover:bg-primaryTone relative flex size-8 items-center justify-center rounded-full border sm:size-10 xl:size-14 ${isHighlighted && "border-white"} `}
      aria-expanded={isExpanded}
    >
      <div
        className={`relative flex items-center justify-center transition-transform duration-300 ease-in-out ${
          isExpanded ? "group-hover:rotate-180" : "group-hover:rotate-90"
        }`}
      >
        {/* Horizontal Line */}
        <span
          className={`bg-primaryTone absolute h-[1px] w-3 group-hover:bg-white lg:w-4 xl:w-6 ${isHighlighted && "bg-white"} `}
        ></span>
        {/* Vertical Line */}
        <span
          className={`bg-primaryTone absolute h-[1px] w-3 transition-transform duration-300 ease-in-out group-hover:bg-white lg:w-4 xl:w-6 ${
            isExpanded ? "rotate-0" : "rotate-90"
          } ${isHighlighted && "bg-white"}`}
        ></span>
      </div>
    </button>
  );
}
