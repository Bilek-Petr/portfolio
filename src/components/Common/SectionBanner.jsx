import React, { useState } from "react";

export default function SectionBanner({
  bannerTitle,
  children,
  isHighlighted,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`hover:bg- group relative overflow-hidden border-b-[1px] border-mainAccent duration-300 ${
        isHighlighted && "bg-mainAccent text-white"
      }`}
    >
      <div
        onClick={toggleExpand}
        className="m-auto flex h-[9rem] max-w-[2400px] cursor-pointer items-center justify-between px-3 sm:px-6 lg:pt-7 xl:pt-12"
      >
        <h2
          className={`w-full font-heading text-sectionText font-bold uppercase tracking-tighter transition-none sm:translate-y-0 ${
            isExpanded && "overflow-hidden"
          }`}
        >
          {bannerTitle[0].id} {bannerTitle[0].title}
        </h2>

        <button
          className={`relative flex size-8 items-center justify-center rounded-full border border-mainAccent group-hover:bg-mainAccent sm:size-10 xl:size-14 ${isHighlighted && "border-white"} `}
          aria-expanded={isExpanded}
        >
          {/* Plus-minus icon */}
          <div
            className={`relative flex items-center justify-center transition-transform duration-300 ease-in-out ${
              isExpanded ? "group-hover:rotate-180" : "group-hover:rotate-90"
            }`}
          >
            {/* Horizontal Line */}
            <span
              className={`absolute h-[1px] w-3 bg-mainAccent group-hover:bg-white lg:w-4 xl:w-6 ${isHighlighted && "bg-white"} `}
            ></span>
            {/* Vertical Line */}
            <span
              className={`absolute h-[1px] w-3 bg-mainAccent transition-transform duration-300 ease-in-out group-hover:bg-white lg:w-4 xl:w-6 ${
                isExpanded ? "rotate-0" : "rotate-90"
              } ${isHighlighted && "bg-white group-hover:bg-mainAccent"}`}
            ></span>
          </div>
        </button>
      </div>

      <div
        className={`banner-content relative z-10 transition-all duration-700 ease-in-out ${
          isExpanded ? "max-h-[100rem]" : "max-h-0"
        } overflow-hidden`}
      >
        {children}
      </div>
    </div>
  );
}
