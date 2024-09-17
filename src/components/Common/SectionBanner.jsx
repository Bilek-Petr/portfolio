import React, { useState } from "react";

export default function SectionBanner({ bannerTitle, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="group relative cursor-pointer overflow-hidden">
      <div
        onClick={toggleExpand}
        className="flex h-[9rem] items-center justify-between border-t-[1px] border-mainAccent px-3 sm:px-6 lg:pt-7 xl:pt-12"
      >
        <h2
          className={`text-sectionText w-full font-heading font-bold uppercase tracking-tighter transition-none sm:translate-y-0 ${
            isExpanded && "overflow-hidden"
          }`}
        >
          {bannerTitle[0].id} {bannerTitle[0].title}
        </h2>

        <button
          className="relative flex size-8 items-center justify-center rounded-full border border-mainAccent group-hover:bg-mainAccent sm:size-10 xl:size-14"
          aria-expanded={isExpanded}
        >
          {/* Plus-minus icon */}
          <div
            className={`relative flex items-center justify-center transition-transform duration-300 ease-in-out ${
              isExpanded ? "group-hover:rotate-180" : "group-hover:rotate-90"
            }`}
          >
            {/* Horizontal Line */}
            <span className="absolute h-[1px] w-3 bg-mainAccent group-hover:bg-white lg:w-4 xl:w-6"></span>
            {/* Vertical Line */}
            <span
              className={`absolute h-[1px] w-3 bg-mainAccent transition-transform duration-300 ease-in-out group-hover:bg-white lg:w-4 xl:w-6 ${
                isExpanded ? "rotate-0" : "rotate-90"
              }`}
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
